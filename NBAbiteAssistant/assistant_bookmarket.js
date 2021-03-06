// Get link element that has href starting with 'skip-btn'
// Bookmarklet can be used as a bookmark in browser to skip straight to the stream
// Must open bookmarklet on the correct page as defined in the README
javascript:
var link = getElementsStartsWithId("skip-btn")[0].href;

function getElementsStartsWithId( id ) {
    var children = document.body.getElementsByTagName('*');
    var elements = [], child;
    for (var i = 0, length = children.length; i < length; i++) {
      child = children[i];
      if (child.id.substr(0, id.length) == id)
        elements.push(child);
    }
    return elements;
  }

  window.open(link, '_blank');
