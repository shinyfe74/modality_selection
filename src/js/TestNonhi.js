/**
 * set Non hierarchy test page
 * @param {Node} parent - parent should be object
 */
function setNonhitest(parent) {
        //display header
        Header.style.display = 'None';

        //draw page
        let TaskContainer = document.createElement('div');
        TaskContainer.className='container d-flex flex-column justify-content-center';
        TaskContainer.style.height = '100vh';
    
        let set_Number = createTouchNumber();
        let target_number = set_Number[0];
        let present_number = set_Number[1];

        let ModalityBox = document.createElement('div');
        ModalityBox.className = 'container d-flex flex-column';
        ModalityBox.style.width = '80vw';

        //Draw Touch Modal text
        let targetNumbertext = document.createElement('span');
        targetNumbertext.setAttribute('id', 'targetNum');
        targetNumbertext.style.fontSize = '2rem';
        targetNumbertext.style.textAlign = 'right';
        targetNumbertext.value = target_number;

        let presentNumbertext = document.createElement('span');
        presentNumbertext.setAttribute('id', 'presentNum');
        presentNumbertext.style.fontSize = '2rem';
        presentNumbertext.style.textAlign = 'right';
        presentNumbertext.value = present_number;

        if (userLanguage == 'Kor'){    
                targetNumbertext.innerHTML = "목표 숫자:" + "　　　" + target_number;
                presentNumbertext.innerHTML = "현재 숫자:" + "　　　" + present_number;
        } else if (userLanguage == 'Eng'){                      
                targetNumbertext.innerHTML = "Target Number:" + "　　　　" + target_number;
                presentNumbertext.innerHTML = "Present Number:" + "　　　　" + present_number;
        }

        //Draw Touch Buttons
        let touchButtons = document.createElement('div');
        touchButtons.className = 'd-flex mx-auto mt-3 pb-4 border-bottom border-dark border-3';

        let plusButton = document.createElement('button');
        plusButton.setAttribute('onclick', 'calculateNum(1); beep();');
        plusButton.className = 'nonhikey key';
        plusButton.innerHTML = "+";

        let minusButton = document.createElement('botton');
        minusButton.setAttribute('onclick', 'calculateNum(-1); beep();');
        minusButton.className = 'nonhikey key';
        minusButton.innerHTML = "-";

        touchButtons.appendChild(plusButton);
        touchButtons.appendChild(minusButton);


        //Voice Modality Buttons
        let srButton = document.createElement('button');
        srButton.setAttribute('onclick', 'beep();');   //after developed speech recognition fuction
        srButton.className = 'nonhikey key mx-auto mt-4';
        srButton.innerHTML = 'S/R';

        //Voice Target
        let voiceTargetText = document.createElement('span');
        voiceTargetText.className = 'mx-auto mt-5';
        voiceTargetText.style.fontSize = '1.5rem';
        voiceTargetText.innerHTML = "What to say";


        //Go back Button;
        let CheckContainer = document.createElement('div');
        CheckContainer.className = 'position-absolute top-100 start-100 translate-middle';
        
        let PreviousButton = document.createElement('button');
        PreviousButton.className = 'progressButton';
        PreviousButton.textContent = 'Back To Setting';
        PreviousButton.setAttribute('onclick', 'TestToCond(PresentPage)');

        CheckContainer.appendChild(PreviousButton);

        ModalityBox.appendChild(targetNumbertext);
        ModalityBox.appendChild(presentNumbertext);
        ModalityBox.appendChild(touchButtons);
        ModalityBox.appendChild(srButton);
        ModalityBox.appendChild(voiceTargetText);

        TaskContainer.append(ModalityBox);
        TaskContainer.appendChild(CheckContainer);

        parent.appendChild(TaskContainer);


}

/** 
 * nonhi test present number에 덧샘 뺄샘해서 결과 다시 표시
* @param {int} pm - int for adding
*/
function calculateNum(pm){
        let present_number = document.getElementById('presentNum').value;
        present_number = present_number + pm;

        let presentNumbertext = document.getElementById('presentNum');
        presentNumbertext.value = present_number;
        if (userLanguage == 'Kor'){    
                presentNumbertext.innerHTML = "현재 숫자:" + "　　　" + present_number;
        } else if (userLanguage == 'Eng'){                      ;
                presentNumbertext.innerHTML = "Present Number:" + "　　　　" + present_number;
        }

}


function createTouchNumber(){
        let plus_minus = Math.floor(Math.random() * 2); //1 = +, 0 = -

        let touch_target_number = Math.floor(Math.random() * 81 + 10);  //number in 10~90
        let touch_present_number;

        // if (plus_minus == 1){
        //         touch_present_number = touch_target_number + userData.testData.at(-1).NumberofTouch;
        // } else {
        //         touch_present_number = touch_target_number - userData.testData.at(-1).NumberofTouch;
        // }

        touch_target_number = 20;
        touch_present_number = 15;

        return [touch_target_number, touch_present_number];
}

/**
 *
 * move to Cond
 * @param {Node} parent - parent should be object
 */
function TestToCond(parent){

        userData.testData.pop();
    
        removeChildren(parent);
        
        setTestCondition(parent);
    
}