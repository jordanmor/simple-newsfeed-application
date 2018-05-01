const $odd = $('a:odd');
const $secureLinks = $('a[href^="https://"]');
const $pdfs = $('a[href$=".pdf"]');

$secureLinks
	.attr('target', '_blank')
	.addClass('secure');

$pdfs
	.attr('download', true)
	.addClass('pdf');