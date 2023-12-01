
/**
 * remove all children
 * @param {Node} parent - parent should be object
 */
function removeChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}