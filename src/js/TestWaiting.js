/**
 * set Test Condition page
 * @param {Node} parent - parent should be object
 */
function setTestWaiting(parent) {
    //display header
    Header.style.display = 'None';

    //draw page
    let PreviewContainer = document.createElement('div');
    PreviewContainer.className='container d-flex flex-column justify-content-center';
    PreviewContainer.style.height = '100vh';

    //Tell This context and level
    let PresentContext = document.createElement('span');
    PresentContext.className = 'text-center fs-1';
    PresentContext.innerHTML = "Context Level";

    //Test Start Button
    let TestStartButton = document.createElement('button');
    TestStartButton.className ='progressButton mx-auto';
    TestStartButton.textContent ='Start Test';
    TestStartButton.setAttribute('onclick', 'TestWaitingToPreview(PresentPage)');

    //Test Setting Check and Go Previous Button
    let CheckContainer = document.createElement('div');
    CheckContainer.className = 'position-absolute top-100 start-100 translate-middle';

    let ThisTestCond = document.createElement('span');
    let tempTestData = userData.testData.at(-1);   //last attribute
    ThisTestCond.innerHTML = tempTestData.Language + tempTestData.Type + tempTestData.Context + tempTestData.NumberofTouch + tempTestData.List + tempTestData.Order + tempTestData.Preview;

    let PreviousButton = document.createElement('button');
    PreviousButton.className = 'progressButton';
    PreviousButton.textContent = 'Back To Setting';
    PreviousButton.setAttribute('onclick', 'TestWaitingToCond(PresentPage)');

    CheckContainer.appendChild(ThisTestCond);
    CheckContainer.appendChild(PreviousButton);

    PreviewContainer.appendChild(PresentContext);
    PreviewContainer.appendChild(TestStartButton);
    PreviewContainer.appendChild(CheckContainer);

    parent.appendChild(PreviewContainer);

}

function TestWaitingToPreview(parent){

    removeChildren(parent);
    
    setTestPreview(parent);

}

function TestWaitingToCond(parent){

    userData.testData.pop();

    removeChildren(parent);
    
    setTestCondition(parent);

}