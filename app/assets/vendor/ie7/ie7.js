/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'hod-font\'">' + entity + '</span>' + html;
	}
	var icons = {
		'hod-fast-forward-button': '&#xe903;',
		'hod-pause': '&#xe904;',
		'hod-play': '&#xe905;',
		'hod-rewind-button': '&#xe906;',
		'hod-skip-back': '&#xe907;',
		'hod-skip-forward': '&#xe908;',
		'hod-spinner': '&#xe909;',
		'hod-stop': '&#xe90a;',
		'hod-circle': '&#xe90b;',
		'hod-info-blue': '&#xe90e;',
		'hod-warning': '&#xe911;',
		'hod-download-button': '&#xe901;',
		'hod-close-envelope': '&#xe902;',
		'hod-home': '&#xe900;',
		'hod-search': '&#xf002;',
		'hod-search-plus': '&#xf00e;',
		'hod-search-minus': '&#xf010;',
		'hod-cog': '&#xf013;',
		'hod-gear': '&#xf013;',
		'hod-map-marker': '&#xf041;',
		'hod-chevron-left': '&#xf053;',
		'hod-chevron-right': '&#xf054;',
		'hod-chevron-up': '&#xf077;',
		'hod-chevron-down': '&#xf078;',
		'hod-phone': '&#xf095;',
		'hod-file-empty': '&#xe924;',
		'hod-clock': '&#xe94e;',
		'hod-calendar': '&#xe953;',
		'hod-printer': '&#xe954;',
		'hod-key': '&#xe98d;',
		'hod-plus': '&#xea0a;',
		'hod-minus': '&#xea0b;',
		'hod-cross': '&#xea0f;',
		'hod-checkmark': '&#xea10;',
		'hod-arrow-up': '&#xea32;',
		'hod-arrow-right': '&#xea34;',
		'hod-arrow-down': '&#xea36;',
		'hod-arrow-left': '&#xea38;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/hod-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
