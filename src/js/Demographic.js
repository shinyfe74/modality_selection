/**
 * set Demographic survay
 * @param {Node} parent - parent should be object
 */
function setDemo(parent) {
    //draw page
    let DemoContainer = document.createElement('div')
    DemoContainer.className='container mt-3 d-flex flex-column justify-content-center';
    DemoContainer.style.paddingTop = '200px';

    let DemoList_kor = {'Participant Number': ['input', ''], '이름': ['input' ,'이름을 입력해주세요.'],'출생년도': ['list'],'성별': ['radio', '남', '여'],'사용해본 음성시스템': ['input', '콤마(,)를 사용해서 입력해주세요.'], '음성시스템 사용 빈도': ['radio', '일 1회 이상','주 1회 이상', '월 1회 이상','거의 안함']}
    let DemoLIst_eng = {'Participant Number': ['input', ''], 'Name': ['input', 'Input Your Name'],'Year': ['list'],'Gender': ['radio', 'Male', 'Female'],'Used Voice Assistant': ['input', 'Seperate with Comma(,)'], 'Voice Assistant Usage': ['radio', 'Daily','Weekly', 'Monthly','Rarely']}

    let DemoList = DemoList_kor;

    if (userLanguage == 'Kor'){
        DemoList = DemoList_kor;
    } else if (userLanguage == 'Eng'){
        DemoList = DemoLIst_eng;
    }

    for (var key in DemoList){
        let DemoLine = document.createElement('div');
        DemoLine.className = 'd-flex w-100 mb-3';

        let Spacer = document.createElement('div');
        Spacer.style.width = '150px'
        DemoLine.appendChild(Spacer);

        //
        let Surtext = document.createElement('span');
        Surtext.className = 'text-end me-2 fs-5 fw-bold';
        Surtext.style.width = '300px';
        Surtext.innerText = key+": ";
        DemoLine.appendChild(Surtext);

        //set questionair type
        if (DemoList[key][0] == 'input'){

            let SurInput = document.createElement('input');
            SurInput.setAttribute('id',key);
            SurInput.setAttribute('placeholder', DemoList[key][1]);
            SurInput.setAttribute('type','text');
            SurInput.style.width = '400px';
            DemoLine.appendChild(SurInput);

        } else if (DemoList[key][0] == 'list'){
            // set age selectlist 
            let SurList = document.createElement('select');
            SurList.setAttribute('id',key);
            var com_year = new Date().getFullYear(0);
            for (var i = 10; i < 100; i++){
                var option = document.createElement("option");
                option.value = (com_year - i);
                if (userLanguage == 'Kor'){
                    option.text = String(com_year - i) + "년";
                } else if (userLanguage == 'Eng'){
                    option.text = String(com_year - i) + "year";
                }    
                SurList.appendChild(option);
            }
            DemoLine.appendChild(SurList);

        } else if (DemoList[key][0] == 'radio'){
            for (var i = 1; i < DemoList[key].length; i++){
                let radioLabel = document.createElement('label');
                let radioButton = document.createElement('input');
                radioButton.setAttribute('type','radio');
                radioButton.setAttribute('name', key);
                radioButton.setAttribute('id',key);
                radioButton.value = i;
                radioLabel.className = 'fs-5 me-3';
                radioLabel.innerHTML = DemoList[key][i];


                radioLabel.appendChild(radioButton);
                DemoLine.appendChild(radioLabel);
            }
        }

        // DemoLine.appendChild(document);
        DemoContainer.appendChild(DemoLine);
    }

    let NextButton = document.createElement('button');
    NextButton.className = 'progressButton mx-auto';
    NextButton.textContent = 'Next';
    NextButton.setAttribute('onclick', 'DemoToTestCond(PresentPage)');
    DemoContainer.appendChild(NextButton);
    parent.appendChild(DemoContainer);

}

/**
 * save Demographic survay value
 * to move TestCondition
 * @param {Node} parent - parent should be object
 */
function DemoToTestCond(parent){
    let DemoList_kor = {'Participant Number': ['input', ''], '이름': ['input' ,'이름을 입력해주세요.'],'출생년도': ['list'],'성별': ['radio', '남', '여'],'사용해본 음성시스템': ['input', '콤마(,)를 사용해서 입력해주세요.'], '음성시스템 사용 빈도': ['radio', '일 1회 이상','주 1회 이상', '월 1회 이상','거의 안함']}
    let DemoLIst_eng = {'Participant Number': ['input', ''], 'Name': ['input', 'Input Your Name'],'Year': ['list'],'Gender': ['radio', 'Male', 'Female'],'Used Voice Assistant': ['input', 'Seperate with Comma(,)'], 'Voice Assistant Usage': ['radio', 'Daily','Weekly', 'Monthly','Rarely']}

    let DemoList = DemoList_kor;

    if (userLanguage == 'Kor'){
        DemoList = DemoList_kor;
    } else if (userLanguage == 'Eng'){
        DemoList = DemoLIst_eng;
    }
    let DemoKeys = Object.keys(DemoList);
    userData.language = userLanguage;
    userData.partnum = document.getElementById(DemoKeys[0]).value;
    userData.name = document.getElementById(DemoKeys[1]).value;
    userData.age = document.getElementById(DemoKeys[2]).value;
    userData.gender = document.querySelector('input[name="'+DemoKeys[3]+'"]:checked').value;
    userData.usedSystem = document.getElementById(DemoKeys[4]).value;
    userData.vuiUsage = document.querySelector('input[name="'+DemoKeys[5]+'"]:checked').value;

    removeChildren(parent);
    
    setTestCondition(parent);
}
