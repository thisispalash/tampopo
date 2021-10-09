/* 
 * First script to be loaded, does essential website work
 * 
 * - fetches and appends components
 * - checks for personas stored locally
 * - sets up trotter links and syncs trees
 * - 
 * 
 */

function setup() {

  console.log('in setup')
  if (typeof done === 'undefined' || !done) __fallback();
  else {
    // setup floaters
    // set up skeleton
    // fetch persona and fill
    // offline notifications
    
  }
}


function skeleton() {
  persona = _cookies()
  roots = _getroots(persona)
  if (!__verify(persona, roots[domain])) return null;
  
  /*
   * DOM Structure
   * <div class="container" id="<merkle-hash>">
   *  <p class="mind" id="<mind-hash"> .. </p>
   *  <p class="body" id="<body-hash"> .. </p>
   *  <p class="soul" id="<soul-hash"> .. </p>
   * </div>
   *  
   */
  

}

function avatar() {
  // check for saved personas
  
  
  // saved personas [read: cookies] are found

}



/** internal fns, read at your own peril **/

function _cookies(set) {

  if (typeof set === 'undefined' || !set) {
    console.log('getting persona')
  }



}

function _getroots(persona) {
  // fetch latest root(s) for the persona from chain
  // fallback, get last loaded one from cookies
  // ultra fallback. get from /dat

  return {
    'main': mainchain,
    'test': draftchain,
    'hide': goerlichain
  }

}

function _trishul(persona, root) {
  var mindroot, bodyroot, soulroot;

  // fetch latest root(s) for the persona from chain
  // fallback, get last loaded one from cookies
  // ultra fallback. get from /dat







  // finishing up \\
  latest = __verify(persona, mindroot, root)? mindroot :
    __verify(persona, bodyroot, root)? bodyroot : soulroot;
  next = __verify(persona, mindroot, latest)? mindroot :
    __verify(persona, bodyroot, latest)? bodyroot : soulroot;
  last = __verify(persona, mindroot, next)? mindroot :
    __verify(persona, bodyroot, next)? bodyroot : soulroot;
  
  return {
    'mind': mindroot,
    'body': bodyroot,
    'soul': soulroot,
    'order': (last, next, latest)
  }
}


/** ultra internal fns, definitely do not alter **/


function __fallback() {
  // display the noscript html within div.container

  console.log('in __fallback')
  const container = document.getElementsByClassName('container')[0]
  const noscript = document.getElementsByTagName('noscript')[0]

  container.innerHTML = noscript.innerText // innerHTML doesn't work on Safari
  noscript.parentNode.parentNode.removeChild(noscript.parentNode)

  delete container, noscript
}

function __verify(left, right, root) {
  // sha3 = new jsSHA("SHA3-256", "")
  // sha3.update(md5(left))
  // sha3.update(md5(right))
  // return (sha3.getHash("HEX") == root)?
    // true : false;

  return false;
}

function __lookup(md5hash) {
  // Check the local trie in rainbow.cookie
  // else, store if not link

}