/* Provide an environment that Google's AJAX APIs are happy to run in.
   Copyright 2008 Ian McKellar, under the MIT License */


/* include John Resig's env.js */
load('env.js');

/* debug function */
function debug(msg) { }
//function debug(msg) { print(msg); }

/* Implement enough of the W3C Document DOM Object. Not very much. */
var document = {};
document.write = function document_write(html) {
  debug('document.write("'+html+'")');
  m = html.match(/^<script src="(.*)" type="text\/javascript"/);
  if (m) {
    debug('loading: '+m[1]);
    load(m[1]);
  }
}
document.createElement = function document_createElement(tagName) {
  debug('document.createElement("'+tagName+'")');
  if (tagName == 'script') {
    var script = {};
    script.__defineSetter__('type', 
        function(type) { debug('script.type="'+type+'"'); });
    script.__defineSetter__('src', 
        function(src) { debug('script.src="'+src+'"'); 
        load(src);
        });
    return script;
  } else {
    // minimal DOM Element
    var element = {};
    element.appendChild = function(child) { }
    return element;
  }
}
document.getElementsByTagName = function document_getElementsByTagName(tagName) {
  var head = {};
  head.appendChild = function head_appendChild(child) {
    debug('head.appendChild('+child+')');
  }
  debug('document.getElementsByTagName("'+tagName+'")');
  return [head];
}

/* just enough timeout support... */
function clearTimeout(arg) {
  debug('window.clearTimeout('+arg+')');
}
