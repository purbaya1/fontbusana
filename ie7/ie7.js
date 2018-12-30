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
		'bml-text-blibli': '&#xe900;',
		'bml-text-bukalapak': '&#xe901;',
		'bml-text-elevenia': '&#xe902;',
		'bml-text-facebook-marketplace': '&#xe903;',
		'bml-text-lazada': '&#xe904;',
		'bml-text-shopee': '&#xe905;',
		'bml-text-tokopedia': '&#xe906;',
		'bml-logo-blibli': '&#xe907;',
		'bml-logo-bukalapak': '&#xe908;',
		'bml-logo-elevenia': '&#xe909;',
		'bml-logo-facebook-marketplace1': '&#xe90a;',
		'bml-logo-facebook-marketplace2': '&#xe90b;',
		'bml-logo-lazada': '&#xe90c;',
		'bml-logo-shopee': '&#xe90d;',
		'bml-logo-tokopedia': '&#xe90e;',
		'bml-blibli': '&#xe90f;',
		'bml-bukalapak': '&#xe910;',
		'bml-elevenia': '&#xe911;',
		'bml-facebook-marketplace': '&#xe912;',
		'bml-lazada': '&#xe913;',
		'bml-shopee': '&#xe914;',
		'bml-tokopedia': '&#xe915;',
		'bml-baju-anak-laki-laki': '&#xe916;',
		'bml-baju-anak-perempuan': '&#xe917;',
		'bml-baju-laki-laki': '&#xe918;',
		'bml-baju-muslim-anak-laki-laki': '&#xe919;',
		'bml-baju-muslim-anak-perempuan': '&#xe91a;',
		'bml-baju-muslim-laki-laki': '&#xe91b;',
		'bml-baju-muslim-wanita': '&#xe91c;',
		'bml-baju-wanita': '&#xe91d;',
		'bml-batik-laki-laki': '&#xe91e;',
		'bml-batik-wanita': '&#xe91f;',
		'bml-alarm-cepat': '&#xe920;',
		'bml-arah-atas': '&#xe921;',
		'bml-bantuan1': '&#xe922;',
		'bml-barcode': '&#xe96b;',
		'bml-bendera': '&#xe923;',
		'bml-bintang': '&#xe924;',
		'bml-blog': '&#xe953;',
		'bml-blogger-b': '&#xe925;',
		'bml-blogger-bulat': '&#xe926;',
		'bml-box': '&#xe927;',
		'bml-cara-order': '&#xe957;',
		'bml-cari': '&#xe928;',
		'bml-cart': '&#xe929;',
		'bml-ceklis': '&#xe92a;',
		'bml-deskripsi-produk': '&#xe92b;',
		'bml-diskusi-produk': '&#xe92c;',
		'bml-ember': '&#xe92d;',
		'bml-facebook-bulat': '&#xe92e;',
		'bml-facebook-f': '&#xe92f;',
		'bml-facebook-messenger': '&#xe930;',
		'bml-file-ceklis': '&#xe958;',
		'bml-google-plus': '&#xe931;',
		'bml-google-plus-bulat': '&#xe932;',
		'bml-id-card': '&#xe954;',
		'bml-info-bulat1': '&#xe933;',
		'bml-info-bulat2': '&#xe934;',
		'bml-kategori': '&#xe935;',
		'bml-kg': '&#xe959;',
		'bml-komentar': '&#xe936;',
		'bml-lokasi': '&#xe937;',
		'bml-love': '&#xe938;',
		'bml-mahkota': '&#xe939;',
		'bml-mata': '&#xe93a;',
		'bml-menu': '&#xe93b;',
		'bml-minus': '&#xe93c;',
		'bml-minus-bulat': '&#xe93d;',
		'bml-mobil-box': '&#xe93e;',
		'bml-notifikasi': '&#xe93f;',
		'bml-ok-jempol': '&#xe940;',
		'bml-palette': '&#xe95a;',
		'bml-os-ceklis': '&#xe941;',
		'bml-pelindung-ceklis': '&#xe942;',
		'bml-pelindung-re': '&#xe943;',
		'bml-plus': '&#xe944;',
		'bml-plus-bulat': '&#xe945;',
		'bml-promo': '&#xe946;',
		'bml-tap': '&#xe955;',
		'bml-timbangan-digital': '&#xe956;',
		'bml-share': '&#xe947;',
		'bml-spesifikasi-produk': '&#xe948;',
		'bml-tag': '&#xe949;',
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
