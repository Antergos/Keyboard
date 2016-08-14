// Keyboard Language
// please update this section to match this language and email me with corrections!
// fa = ISO 639-1 code for Farsi
// ***********************

fa = {
	language: '\u0641\u0627\u0631\u0633\u06cc (Farsi)',
	display: {
		'a'      : '\u2714:تأیید (Shift+Enter)',
		'accept' : 'Accept:تأیید (Shift+Enter)',
		'alt'    : 'Lng:Alternate Graphemes',
		'b'      : '\u2190:⬅ Backspace',
		'bksp'   : 'Bksp:⬅ Backspace',
		'c'      : '\u2716:انصراف (Esc)',
		'cancel' : 'Cancel:انصراف (Esc)',
		'clear'  : 'C:Clear',
		'combo'  : '\u00f6:Toggle Combo Keys',
		'dec'    : '.:Decimal',
		'e'      : '\u21b5:Enter',
		'enter'  : 'Enter:Enter',
		'lock'   : '\u21ea Lock:Caps Lock',
		's'      : '\u21e7:Shift',
		'shift'  : 'Shift:Shift',
		'sign'   : '\u00b1:Change Sign',
		'space'  : '&nbsp;:Space',
		't'      : '\u21e5:Tab',
		'tab'    : '\u21e5 Tab:Tab'
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage: 'Use mousewheel to see other keys',
	rtl: true

	// uncomment, then include changes to the comboRegex here
	//, comboRegex: /([`\'~\^\"ao])([a-z])/mig,
	// uncomment, then include any changes to the combos option here
	/*
	, combos : {
	// grave
	'`' : { a:"\u00e0", A:"\u00c0", e:"\u00e8", E:"\u00c8", i:"\u00ec", I:"\u00cc", o:"\u00f2", O:"\u00d2",
	u:"\u00f9", U:"\u00d9", y:"\u1ef3", Y:"\u1ef2" },
	// acute & cedilla
	"'" : { a:"\u00e1", A:"\u00c1", e:"\u00e9", E:"\u00c9", i:"\u00ed", I:"\u00cd", o:"\u00f3", O:"\u00d3",
	u:"\u00fa", U:"\u00da", y:"\u00fd", Y:"\u00dd" },
	// umlaut/trema
	'"' : { a:"\u00e4", A:"\u00c4", e:"\u00eb", E:"\u00cb", i:"\u00ef", I:"\u00cf", o:"\u00f6", O:"\u00d6",
	u:"\u00fc", U:"\u00dc", y:"\u00ff", Y:"\u0178" },
	// circumflex
	'^' : { a:"\u00e2", A:"\u00c2", e:"\u00ea", E:"\u00ca", i:"\u00ee", I:"\u00ce", o:"\u00f4", O:"\u00d4",
	u:"\u00fb", U:"\u00db", y:"\u0177", Y:"\u0176" },
	// tilde
	'~' : { a:"\u00e3", A:"\u00c3", e:"\u1ebd", E:"\u1ebc", i:"\u0129", I:"\u0128", o:"\u00f5", O:"\u00d5",
	u:"\u0169", U:"\u0168", y:"\u1ef9", Y:"\u1ef8", n:"\u00f1", N:"\u00d1" }
	}
	*/
};

module.exports.fa = fa;
