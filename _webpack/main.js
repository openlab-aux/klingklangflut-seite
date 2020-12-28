import fontawesomeBrands from '@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2'

import 'unpoly'
import CodeMirror from 'codemirror'
import 'codemirror/mode/ruby/ruby'


up.compiler('[code-editor]', function(element) {

  var editor = CodeMirror.fromTextArea(element, {
    mode: "ruby",
    tabMode: "indent",
    matchBrackets: true,
    indentUnit: 2,
    lineNumbers: true,
    value: "#code-editor",
    theme: 'hopscotch'
  });

})