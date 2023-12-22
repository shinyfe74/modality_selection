/**
 * set Non hierarchy test page
 * @param {Node} parent - parent should be object
 */
function setNonhitest(parent) {
        //display header
        Header.style.display = 'None';

        //draw page
        let PreviewContainer = document.createElement('div');
        PreviewContainer.className='container d-flex flex-column justify-content-center';
        PreviewContainer.style.height = '100vh';
    
        PreviewContainer.innerHTML = '비계층형';

        parent.appendChild(PreviewContainer);


}
