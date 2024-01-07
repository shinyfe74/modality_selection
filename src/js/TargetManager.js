
/**
 * set Test Preview page
 * @param {string} userLanguage - user's language
 * @param {int} num_syllables - number of syllables 
 * 
 * @returns {Text} 발화해야하는 음절을 반환함
 */
function SelectSpeechTarget(userLanguage,num_syllables){
    var total_target_list;

    if (userLanguage == 'Kor') {
        total_target_list = movie_list_kor;
    } else if (userLanguage == 'Eng'){
        total_target_list = movie_list_eng;
    }

    var target_list = [];
    
    var rest_length = num_syllables;
    var min_syllable = 5;
    var max_syllable = 20;
    var gen_target;
    
    while (rest_length > 0){
        var temp_target;
        var temp_list;
        // if rest_length more than 20, sperate various length.
        if (rest_length > max_syllable){
            var random_num = Math.floor(Math.random() * 15) + min_syllable;
            temp_list = total_target_list.filter(v => v.Syllable == random_num);
            rest_length -= random_num;
        } else {
            temp_list = total_target_list.filter(v => v.Syllable == rest_length); 
        }

        temp_target = temp_list[Math.floor(Math.random() * temp_list.length)];
        
    }


}


