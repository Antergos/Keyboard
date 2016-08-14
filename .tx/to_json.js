/*
 * Copyright © 2015-2016 Antergos
 *
 * to_json.js
 *
 * This file is part of jQuery Keyboard
 *
 * jQuery Keyboard is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License,
 * or any later version.
 *
 * jQuery Keyboard is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * The following additional terms are in effect as per Section 7 of the license:
 *
 * The preservation of all legal notices and author attributions in
 * the material or in the Appropriate Legal Notices displayed
 * by works containing it is required.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Run from includes/keyboard directory: node .tx/to_json.js ${PWD}

let fs = require( "fs" ),
	path = require( 'path' ),
	lang_dir = process.argv[2] + '/languages/templates',
	translation_files = fs.readdirSync( lang_dir ),
	json_dir = process.argv[2] + '/json/';


function process_translations() {
	for ( let file of translation_files ) {
		let abs_path, lang, out, _, _trans, trans;

		abs_path = lang_dir + file;
		lang = file.replace( '.js', '' );
		out = json_dir + lang + '.json';

		if ( '_language_template.js' === file ) {
			lang = 'all';
			out = json_dir + '_' + lang + '.json';
		}

		_ = require('../languages/' + file);

		_trans = _[lang];
		trans = {language: '', display: {}, wheelMessage: ''};

		trans.language = _trans.language;
		trans.wheelMessage = _trans.wheelMessage;

		for (let item in _trans.display) {
			let excluded = ['.', 'nbsp;'],
				ascii = /^[ -~]+$/;

			if (_trans.display.hasOwnProperty(item)) {
				trans.display[item] = {};
				trans.display[item]['action_key'] = _trans.display[item].split(':')[0];
				trans.display[item]['tooltip'] = _trans.display[item].split(':')[1];

				for ( let str of excluded ) {
					if ( trans.display[item]['action_key'].indexOf(str) > -1 || ! ascii.test(trans.display[item]['action_key']) ) {
						delete trans.display[item]['action_key'];
						break;
					}
				}
			}
		}

		write_json(trans, out);

	}

	console.log( 'Done!' );
}


function JSON_stringify( s, emit_unicode ) {
	var json = JSON.stringify(s);
	return emit_unicode ? json : json.replace(/[\u007f-\uffff]/g,
		function( c ) {
			return '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice(-4);
		}
	);
}

function write_json(obj, out) {
	fs.writeFile(out, JSON_stringify(obj, false), function( error ) {
		if ( error ) {
			console.error("write error:  " + error.message);
		} else {
			console.log("Successful Write to " + out);
		}
	});
}

process_translations();
