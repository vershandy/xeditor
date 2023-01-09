// summernote script
$('#code-editor').summernote({
  height: 300
});
// summernote codemirror variable ----> cmEditor

// tidy function
var tidy_options = {
  "indent":"auto",
  "indent-spaces":3,
  "wrap": 80,
  "markup": true,
  "output-xml": false,
  "numeric-entities": true,
  "quote-marks": true,
  "quote-nbsp": false,
  "show-body-only": true,
  "quote-ampersand": true,
  "break-before-br": true,
  "uppercase-tags": false,
  "uppercase-attributes": false,
  "drop-font-tags": true,
  "tidy-mark": false
}

function codeTidy() {
  var codeMirror = $('#code-editor').code();
  var tidy = tidy_html5(codeMirror, tidy_options);
  return tidy;
};

$('#btn-export').on('click', function(){
  $('#code-result').text(codeTidy());
});
