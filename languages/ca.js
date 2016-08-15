// Keyboard Language
// please update this section to match this language and email me with corrections!
// ca = ISO 639-1 code for Catalan
// ***********************

ca = {
	language: 'Catalan (Catalan)',
	display : {
		'a'      : '\u2714:Acceptar (Maj + Retorn)', // check mark - same action as accept
		'accept' : 'Acceptar:Acceptar (Maj + Retorn)',
		'alt'    : 'AltGr:Grafismes alternatius',
		'b'      : '\u2190:Retrocés',    // Left arrow (same as &larr;)
		'bksp'   : 'Bksp:Retrocés',
		'c'      : '\u2716:Cancel·lar (Esc)', // big X, close - same action as cancel
		'cancel' : 'Cancel·la:Cancel·lar (Esc)',
		'clear'  : 'C:Clar',             // clear num pad
		'combo'  : '\u00f6:Combo de commutació de tecles',
		'dec'    : '.:Decimal',           // decimal point for num pad (optional), change '.' to ',' for European format
		'e'      : '\u21b5:Entrar',        // down, then left arrow - enter symbol
		'enter'  : 'Entrar:Entrar',
		'lock'   : '\u21ea Lock:Majúscules', // caps lock
		's'      : '\u21e7:Canvi',        // thick hollow up arrow
		'shift'  : 'Canvi:Canvi',
		'sign'   : '\u00b1:Canvi de signe',  // +/- sign for num pad
		'space'  : '&nbsp;:Espai',
		't'      : '\u21e5:Pestanya',          // right arrow to bar (used since this virtual keyboard works with one directional tabs)
		'tab'    : '\u21e5 Tab:Pestanya'       // \u21b9 is the true tab symbol (left & right arrows)
	},
	// Message added to the key title while hovering, if the mousewheel plugin exists
	wheelMessage : 'Use mousewheel to see other keys',
};

module.exports.ca = ca;
