const HierarchyItem_kor = ["라디오", "에어컨", "볼륨","밝기","주문","전화","날짜","노래","주소검색"];
const HierarchyItem_eng = ["Radio", "A/C", "Volum","Brigtness","Order","Call","Weather","Music","Navi"];

/**
 * set Hierarchy test page
 * @param {Node} parent - parent should be object
 */
function setHitest(parent) {
        //display header
        Header.style.display = 'None';

        //draw page
        let TaskContainer = document.createElement('div');
        TaskContainer.className='container d-flex flex-column justify-content-center';
        TaskContainer.style.height = '100vh';
        
        let ModalityBox = document.createElement('div');
        ModalityBox.className = 'container d-flex flex-column';
        ModalityBox.style.width = '80vw';

        //draw touch modal
        let TouchModalBox = document.createElement('div');
        TouchModalBox.className = 'container d-flex flex-column mt-3';
        
        //
        let TouchModalTarget = document.createElement('span');
        TouchModalTarget.setAttribute('id','touchTarget');
        TouchModalTarget.className = 'text-center';
        TouchModalTarget.style.fontSize = '2rem';
        TouchModalTarget.innerHTML = 'Target => hello';

        TouchModalBox.appendChild(TouchModalTarget);

        //Draw grid box
        for (let i=0; i<3; i++){
                let GridLine = document.createElement('div');
                GridLine.className = 'container d-flex justify-content-center';

                for (let j=0; j<3;j++){
                        let TouchBox = document.createElement('button');
                        TouchBox.setAttribute('id', String('higrid'+(i*3+j+1)));
                        TouchBox.setAttribute('onclick', 'beep(); replacementGrid();');
                        TouchBox.className = 'menuhikey key';
                        TouchBox.style.fontSize = '1.5rem';
                        GridLine.appendChild(TouchBox);
                }

                TouchModalBox.appendChild(GridLine);

        }
        //draw line
        let horizonLine = document.createElement('hr');
        horizonLine.className = 'border-dark border-3 mx-auto my-1';
        horizonLine.style.width = '500px';
        horizonLine.style.opacity = '1';

        //Voice Modality Buttons
        let srButton = document.createElement('button');
        srButton.setAttribute('onclick', 'beep();');   //after developed speech recognition fuction
        srButton.className = 'nonhikey key mx-auto mt-1';
        srButton.innerHTML = 'S/R';

        //Voice Target
        let voiceTargetText = document.createElement('span');
        voiceTargetText.className = 'mx-auto mt-1';
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

        ModalityBox.appendChild(TouchModalBox);
        ModalityBox.appendChild(horizonLine);
        ModalityBox.appendChild(srButton);
        ModalityBox.appendChild(voiceTargetText);

        TaskContainer.appendChild(ModalityBox);
        TaskContainer.appendChild(CheckContainer);

        parent.appendChild(TaskContainer);
        replacementGrid();
        
}

function replacementGrid() {

        if (userLanguage == 'Kor') {
                shuffleArray(HierarchyItem_kor);
                for (let i=1; i<10; i++){
                        let grid = document.getElementById('higrid'+i);
                        grid.innerHTML = HierarchyItem_kor[i-1];
                }


        } else if (userLanguage == 'Eng'){
                shuffleArray(HierarchyItem_eng);
                for (let i=1; i<10; i++){
                        let grid = document.getElementById('higrid'+i);
                        grid.innerHTML = HierarchyItem_eng[i-1];
                }
        }


}

