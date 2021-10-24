var elements = getElementsStartsWithId("skip-btn");
if(elements.length == 0)
{
alert("Error: no stream link found.\nAre you on the 'Your Link is Ready' Page?")
}
else
{
    var link = elements[0].href;
    window.open(link, '_blank');
}


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


