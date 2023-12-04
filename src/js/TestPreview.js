/**
 * set Test Condition page
 * @param {Node} parent - parent should be object
 */
function setTestPreview(parent) {
    //display header
    Header.style.display = 'None';

    let PrevBtn = document.createElement('button');
    PrevBtn.className = 'progressButton mx-auto';
    PrevBtn.textContent = 'Previous';
    PrevBtn.setAttribute('onclick', 'setTestCondition(PresentPage)');

    parent.appendChild(PrevBtn);

}