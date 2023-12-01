/**
 * set Test Condition page
 * @param {Node} parent - parent should be object
 */
function setTestCondition(parent) {
        //draw page
        let DemoContainer = document.createElement('div')
        DemoContainer.className='container mt-3 d-flex flex-column justify-content-center';
    
        DemoContainer.innerHTML = 'Hello';

        parent.appendChild(DemoContainer);

}