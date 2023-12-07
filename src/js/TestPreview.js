/**
 * set Test Condition page
 * @param {Node} parent - parent should be object
 */
function setTestPreview(parent) {
    //display header
    Header.style.display = 'None';

    //draw page
    let PreviewContainer = document.createElement('div');
    PreviewContainer.className='container d-flex flex-column justify-content-center';
    PreviewContainer.style.height = '100vh';

    PreviewContainer.innerHTML = 'Hello';

    //Tell Modality
    let PresentModality = document.createElement('span');
    PresentModality.innerHTML = "Voice/Touch";

    //if Preview is 'yes', show the voice modality text
    let PresentAttribute = document.createElement('span');
    PresentAttribute = 'What to Say';








    

    
    // let PrevBtn = document.createElement('button');
    // PrevBtn.className = 'progressButton mx-auto';
    // PrevBtn.textContent = 'Previous';
    // PrevBtn.setAttribute('onclick', 'setTestCondition(PresentPage)');

    parent.appendChild(PreviewContainer);

}