/* main script, 
  populates div.container */

function setup() {

  // read from index.json
  // call showspan for each key

  if (typeof done === 'undefined' || !done) _fallback();
}

function _fallback() {
  // display the noscript html within div.container

  const container = document.getElementsByClassName('container')[0]
  const noscript = document.getElementsByTagName('noscript')[0]

  container.innerHTML = noscript.innerHTML
  noscript.parentNode.parentNode.removeChild(noscript.parentNode)

  delete container, noscript
}