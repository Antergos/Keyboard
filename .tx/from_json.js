/*
 * Copyright © 2015-2016 Antergos
 *
 * from_json.js
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

// Run from includes/keyboard directory: node .tx/from_json.js ${PWD}

let fs = require( "fs" ),
	path = require( 'path' ),
	parse = require('loose-json'),
	lang_dir = `${process.argv[2]}/languages`,
	json_dir = `${lang_dir}/json`,
	translation_files = fs.readdirSync( lang_dir ),
	translations = {};


function process_translations() {
	for ( let file of translation_files ) {
		let trans_file, json_file, lang, out, excluded, trans_lines, new_trans_lines, json_data, key_re, val_re, end;
		excluded = ['README.md', 'json'];

		if ( excluded.findIndex( e => file === e ) > -1 ) {
			continue;
		}

		trans_file = `${lang_dir}/${file}`;
		lang = file.replace( '.js', '' );
		json_file = `${json_dir}/${lang}.json`;

		if ( '_language_template.js' === file ) {
			lang = 'all';
			json_file = `${json_dir}/_${lang}.json`;
		}

		json_data = fs.readFileSync(json_file).toString();
		trans_lines = fs.readFileSync(trans_file).toString().split('\n');
		new_trans_lines = [];
		json_data = parse(json_data);
		key_re = /^\t\t'(\w+)' +:/;
		val_re = /^(\t\t'\w+' +: +')([\w\\\d. &;]+)(:)([\w\d\\ (+)]+)(')/;
		end = false;

		for ( let line of trans_lines ) {
			if ( true === end || line.indexOf('combos :') > -1 ) {
				end = true;
				new_trans_lines.push(line);
				continue;
			}

			let key_matches = key_re.exec(line),
				val_matches = val_re.exec(line),
				key, val_action_key, val_tooltip, replace_with;

			if ( null === key_matches || null === val_matches ) {
				continue;
			}

			key = key_matches[1];
			console.log([key]);
			val_action_key = json_data.display[key].hasOwnProperty('action_key') ? json_data.display[key].action_key : val_matches[2];
			val_tooltip = json_data.display[key].tooltip;
			replace_with = `$1${val_action_key}$3${val_tooltip}$5`;

			new_trans_lines.push( line.replace(val_re, replace_with) );
		}

		write_lines(new_trans_lines, trans_file);

	}

	console.log( 'Done!' );
}


function write_lines(lines, out) {
	fs.writeFile(out, lines.join('\n'), function( error ) {
		if ( error ) {
			console.error("write error:  " + error.message);
		} else {
			console.log("Successful Write to " + out);
		}
	});
}

process_translations();
