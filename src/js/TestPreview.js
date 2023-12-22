let PreviewCount;

/**
 * set Test Preview page
 * @param {Node} parent - parent should be object
 */
function setTestPreview(parent) {
    let timer; 
    PreviewCount = 3; //3초 카운트다운

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
    if (userData.testData.at(-1).Preview == 1){
        PresentAttribute.innerHTML = 'What to Say'; 
    }
    

    let TimerText = document.createElement('span');
    TimerText.setAttribute('id', 'Timer');


    PreviewContainer.appendChild(PresentModality);
    PreviewContainer.appendChild(PresentAttribute);
    PreviewContainer.appendChild(TimerText);

    StartTimer(timer, TimerText);

    parent.appendChild(PreviewContainer);

}


function StartTimer(timer, TimerText){
    TimerText.innerHTML = PreviewCount;
    timer = setInterval(function() {countTimer(timer, TimerText);}, 1000);
}

function countTimer(timer, TimerText) {
    if (PreviewCount != 1){
        PreviewCount--;
        TimerText.innerHTML = PreviewCount;
    } else { //다음페이지로 넘어가기
        // clearTimer(timer, TimerText, "타이머 종료");
        clearInterval(timer);
        TestPreviewToTest(PresentPage);
    }
}

// function clearTimer(timer, TimerText, text){
//     clearInterval(timer);
//     TimerText.innerHTML = text;
// }



function TestPreviewToTest(parent){

    removeChildren(parent);
    
    //과업의 종류에 따른 페이지 선택
    if (userData.testData.at(-1).Type == 1){
        setNonhitest(parent);
    } else if (userData.testData.at(-1).Type == 2){
        setHitest(parent);
    }
    
}
