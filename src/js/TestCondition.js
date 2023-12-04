/**
 * set Test Condition page
 * @param {Node} parent - parent should be object
 */
function setTestCondition(parent) {
        //display header
        Header.style.display = 'block';
        //draw page
        let TestConditionContainer = document.createElement('div')
        TestConditionContainer.className='container mt-3 d-flex flex-column justify-content-center pt-5';

        let CondList ={'Participant Number': ['input', ''], 'Test Language': ['radio', 'Kor', 'Eng'], 'Test Type': ['radio', 'Non-hi','Hi'], 'Context Modality': ['radio', 'Baseline', 'Driving', 'Reading', 'Video'], 'Number of Touch': ['list'], 'Test List': ['radio', 'Movie', 'Restaurant', 'Word'], 'Test Order': ['radio', 'Sequential', 'Random'], 'Test Preview':['radio', 'Yes', 'No']}
        
        for (var key in CondList){
                let CondLine = document.createElement('div');
                CondLine.className = 'd-flex w-100 mb-3';

                let Spacer = document.createElement('div');
                Spacer.style.width = '150px'
                CondLine.appendChild(Spacer);

                //
                let Surtext = document.createElement('span');
                Surtext.className = 'text-end me-2 fs-5 fw-bold border-bottom border-black border-2';
                Surtext.style.width = '300px';
                Surtext.innerText = key+": ";
                CondLine.appendChild(Surtext);
                
                //set questionair type
                if (CondList[key][0] == 'input'){

                        let CondInput = document.createElement('input');
                        CondInput.setAttribute('id',key);
                        CondInput.setAttribute('placeholder', CondList[key][1]);
                        CondInput.setAttribute('type','text');
                        CondInput.style.width = '400px';
                        CondLine.appendChild(CondInput);
        
                } else if (CondList[key][0] == 'list'){
                        
                        let CondList = document.createElement('select');
                        CondList.setAttribute('id',key);

                        // set Number of Touch selectlist 
                        if (key == 'Number of Touch'){
                                for (var i = 1; i < 6; i++){
                                        var option = document.createElement("option");
                                        option.value = i;
                                        option.text = i + "개";
                                        CondList.appendChild(option);
                                }
                        }

                        CondLine.appendChild(CondList);
        
                } else if (CondList[key][0] == 'radio'){
                        for (var i = 1; i < CondList[key].length; i++){
                        let radioLabel = document.createElement('label');
                        let radioButton = document.createElement('input');
                        radioButton.setAttribute('type','radio');
                        radioButton.setAttribute('name', key);
                        radioButton.setAttribute('id', key +" "+ CondList[key][i]);
                        radioButton.value = i;
                        radioLabel.className = 'fs-5 me-3';
                        radioLabel.innerHTML = CondList[key][i]+" ";
        
                        radioLabel.appendChild(radioButton);
                        CondLine.appendChild(radioLabel);
                        }
                }
                
                // DemoLine.appendChild(document);
                TestConditionContainer.appendChild(CondLine);

        }
        //draw next previous Button
        let BtnContainer = document.createElement('div');
        BtnContainer.className='container d-flex align-content-between';

        let PrevBtn = document.createElement('button');
        PrevBtn.className = 'progressButton mx-auto';
        PrevBtn.textContent = 'Previous';
        PrevBtn.setAttribute('onclick', 'TestCondToDemo(PresentPage)');

        let NextBtn = document.createElement('button');
        NextBtn.className = 'progressButton mx-auto';
        NextBtn.textContent = 'Next';
        NextBtn.setAttribute('onclick', 'TestCondToPreview(PresentPage)');
        
        BtnContainer.appendChild(PrevBtn);
        BtnContainer.appendChild(NextBtn);
        TestConditionContainer.appendChild(BtnContainer);

        //draw all Nodes
        parent.appendChild(TestConditionContainer);

        //set default value
        if (userData.partnum) {
                document.getElementById(Object.keys(CondList)[0]).value = userData.partnum;
                if (userData.language == 'Kor'){
                        document.getElementById("Test Language Kor").checked = true;
                } else if (userData.language == 'Eng'){
                        document.getElementById("Test Language Eng").checked = true;
                }
        }
        document.getElementById("Test List Movie").checked = true;
        document.getElementById("Test Order Sequential").checked = true;
        document.getElementById("Test Preview Yes").checked = true;


}

/**
 * save Test Condition value
 * to move Preview
 * @param {Node} parent - parent should be object
 */
function TestCondToPreview(parent){
        let CondList ={'Participant Number': ['input', ''], 'Test Language': ['radio', 'Kor', 'Eng'], 'Test Type': ['radio', 'Non-hi','Hi'], 'Context Modality': ['radio', 'Baseline', 'Driving', 'Reading', 'Video'], 'Number of Touch': ['list'], 'Test List': ['radio', 'Movie', 'Restaurant', 'Word'], 'Test Order': ['radio', 'Sequential', 'Random'], 'Test Preview':['radio', 'Yes', 'No']}
    

        let CondKeys = Object.keys(CondList);
        userData.partnum = document.getElementById(CondKeys[0]).value;
        let ThisTestData = new Array();
        ThisTestData = {
                Language: document.querySelector('input[name="'+CondKeys[1]+'"]:checked').value,
                Type: document.querySelector('input[name="'+CondKeys[2]+'"]:checked').value,
                Context: document.querySelector('input[name="'+CondKeys[3]+'"]:checked').value,
                NumberofTouch: document.getElementById(CondKeys[4]).value,
                List: document.querySelector('input[name="'+CondKeys[5]+'"]:checked').value,
                Order: document.querySelector('input[name="'+CondKeys[6]+'"]:checked').value,
                Preview: document.querySelector('input[name="'+CondKeys[7]+'"]:checked').value
        }

        userData.testData.push(ThisTestData);

        removeChildren(parent);
        
        setTestPreview(parent);
}

/**
 *
 * move to Demo
 * @param {Node} parent - parent should be object
 */
function TestCondToDemo(parent){

        removeChildren(parent);
        
        setDemo(parent);
}