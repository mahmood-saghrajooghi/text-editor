import '../styles/styles.scss';
import TextEditor from './containers/textEditor'

const template = `<div contenteditable="true"></div>`
var doc = new DOMParser().parseFromString(template, "text/xml");
console.log(doc.firstChild);
const textEditor = new TextEditor();