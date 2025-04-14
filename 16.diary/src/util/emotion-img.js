import icon1 from '../resources/img/icon1.png';
import icon2 from '../resources/img/icon2.png';
import icon3 from '../resources/img/icon3.png';
import icon4 from '../resources/img/icon4.png';
import icon5 from '../resources/img/icon5.png';
import icon6 from '../resources/img/icon6.png';

function getEomtionImg(emotionId) {
    switch(emotionId) {
        case 1 :
            return icon1;
        case 2 :
            return icon2;
        case 3 :
            return icon3;
        case 4 : 
            return icon4;
        case 5 :
            return icon5;
        case 6 :
            return icon6;
        default :
            return null;
    }
}

export default getEomtionImg;