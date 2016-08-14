// Keyboard Language
// please update this section to match this language and email me with corrections!
// de = ISO 639-1 code for German
// ***********************

de = {
	language: 'Deutsch (German)',
	display : {
		'a'      : '\u2714:Übernehmen (Umschalt+Eingabetaste)', // check mark - same action as accept
		'accept' : 'Übernehmen:Übernehmen (Umschalt+Eingabetaste)',
		'alt'    : 'AltGr:Alt Graph',
		'b'      : '\u2190:Rücktaste', // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Rücktaste',
		'c'      : '\u2716:Abbrechen (Esc)', // big X, close - same action as cancel
		'cancel' : 'Abbrechen:Abbrechen (Esc)',
		'clear'  : 'C:Löschen', // clear num pad
		'combo'  : '\u00f6:Tottasten umschalten',
		'dec'    : ',:Dezimal', // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Eingabetaste', // down, then left arrow - enter symbol
		'enter'  : 'Eingabetaste:Eingabetaste',
		'lock'   : '\u21E9:Feststelltaste', // caps lock
		's'      : '\u21e7:Umschalttaste', // thick hollow up arrow
		'shift'  : 'Umschalttaste:Umschalttaste',
		'sign'   : '\u00b1:Vorzeichen ändern', // +/- sign for num pad
		'space'  : '&nbsp;:Leertaste',
		't'      : '\u21e5:Tabulatortaste', // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Tabulatortaste' // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Mausrad benutzen, um weitere Tasten zu sehen',
};

modules.exports.de = de;
