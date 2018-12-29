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
		el.innerHTML = '<span style="font-family: \'Font-Bayu-Media-Busana-Light\'">' + entity + '</span>' + html;
	}
	var icons = {
		'bml-baju-anak-laki-laki': '&#xe900;',
		'bml-baju-anak-perempuan': '&#xe901;',
		'bml-baju-laki-laki': '&#xe902;',
		'bml-baju-muslim-anak-laki-laki': '&#xe903;',
		'bml-baju-muslim-anak-perempuan': '&#xe904;',
		'bml-baju-muslim-laki-laki': '&#xe905;',
		'bml-baju-muslim-wanita': '&#xe906;',
		'bml-baju-wanita': '&#xe907;',
		'bml-batik-laki-laki': '&#xe908;',
		'bml-batik-wanita': '&#xe909;',
		'bml-alarm-cepat': '&#xe90a;',
		'bml-arah-atas': '&#xe90b;',
		'bml-bantuan1': '&#xe90c;',
		'bml-bendera': '&#xe90d;',
		'bml-bintang': '&#xe90e;',
		'bml-blibli': '&#xe90f;',
		'bml-blogger-b': '&#xe910;',
		'bml-blogger-bulat': '&#xe911;',
		'bml-box': '&#xe912;',
		'bml-bukalapak': '&#xe914;',
		'bml-cari': '&#xe915;',
		'bml-cart': '&#xe916;',
		'bml-ceklis': '&#xe917;',
		'bml-deskripsi-produk': '&#xe918;',
		'bml-diskusi-produk': '&#xe919;',
		'bml-elevenia': '&#xe91a;',
		'bml-ember': '&#xe91b;',
		'bml-facebook-bulat': '&#xe91c;',
		'bml-facebook-f': '&#xe91d;',
		'bml-facebook-marketplace': '&#xe91e;',
		'bml-facebook-messenger': '&#xe91f;',
		'bml-google-plus': '&#xe920;',
		'bml-google-plus-bulat': '&#xe921;',
		'bml-info-bulat1': '&#xe922;',
		'bml-info-bulat2': '&#xe923;',
		'bml-kategori': '&#xe924;',
		'bml-komentar': '&#xe925;',
		'bml-lazada': '&#xe926;',
		'bml-logo-blibli': '&#xe927;',
		'bml-logo-bukalapak': '&#xe928;',
		'bml-logo-elevenia': '&#xe929;',
		'bml-logo-facebook-marketplace1': '&#xe92a;',
		'bml-logo-facebook-marketplace2': '&#xe92b;',
		'bml-logo-lazada': '&#xe92c;',
		'bml-logo-shopee': '&#xe92d;',
		'bml-logo-tokopedia': '&#xe92e;',
		'bml-lokasi': '&#xe92f;',
		'bml-love': '&#xe930;',
		'bml-mahkota': '&#xe931;',
		'bml-mata': '&#xe932;',
		'bml-menu': '&#xe933;',
		'bml-minus': '&#xe934;',
		'bml-minus-bulat': '&#xe935;',
		'bml-mobil-box': '&#xe936;',
		'bml-notifikasi': '&#xe937;',
		'bml-ok-jempol': '&#xe938;',
		'bml-os-ceklis': '&#xe939;',
		'bml-pelindung-ceklis': '&#xe93a;',
		'bml-pelindung-re': '&#xe93b;',
		'bml-plus': '&#xe93c;',
		'bml-plus-bulat': '&#xe93d;',
		'bml-promo': '&#xe93e;',
		'bml-share': '&#xe93f;',
		'bml-shopee': '&#xe940;',
		'bml-spesifikasi-produk': '&#xe941;',
		'bml-tag': '&#xe942;',
		'bml-text-blibli': '&#xe943;',
		'bml-text-bukalapak': '&#xe944;',
		'bml-text-elevenia': '&#xe945;',
		'bml-text-facebook-marketplace': '&#xe946;',
		'bml-text-lazada': '&#xe947;',
		'bml-text-shopee': '&#xe948;',
		'bml-text-tokopedia': '&#xe949;',
		'bml-toko': '&#xe94a;',
		'bml-tutup': '&#xe94b;',
		'bml-twitter': '&#xe94c;',
		'bml-twitter-bulat': '&#xe94d;',
		'bml-ulasan-produk': '&#xe94e;',
		'bml-waktu': '&#xe94f;',
		'bml-waktu-pasir': '&#xe950;',
		'bml-whatsapp': '&#xe951;',
		'bml-x-bulat': '&#xe952;',
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
		c = c.match(/bml-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
