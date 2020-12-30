// import fonts from node modules
import fontawesomeBrands from '@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2'

// import styles from node modules
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/hopscotch.css'

// import javascript from node modules
import 'unpoly'
import CodeMirror from 'codemirror'
import 'codemirror/mode/ruby/ruby'


document.addEventListener("DOMContentLoaded", () => {

  let textarea = document.querySelector('[code-editor]')
  let editor = CodeMirror.fromTextArea(textarea, {
    mode: "ruby",
    tabMode: "indent",
    matchBrackets: true,
    indentUnit: 2,
    lineNumbers: true,
    value: "#code-editor",
    theme: 'hopscotch',
  })

  editor.on('blur', function(){
  	editor.save() // write contents to textarea
  })

  async function postData(data) {
    const response = await fetch('http://klingklangflut.de:2342/', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify(data)
    });
    return response
  }

  let button = document.querySelector('[submit-code]')
  button.addEventListener('click', function(event, editor) {
    event.preventDefault()

    let textarea = document.querySelector('[code-editor]')
    let payload = {
      'code-editor': textarea.value
    }

    postData(payload).then(function(result) {
      console.log(result) 
    });
  })

})