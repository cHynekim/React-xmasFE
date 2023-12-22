import { useState } from 'react';
import samsungwhite from '../res/img/samsungwhite.png'
import samsungblack from '../res/img/samsungblack.png'
import samsungnavy from '../res/img/samsungnavy.png'
import applewhite from '../res/img/applewhite.png'
import applenavy from '../res/img/applenavy.png'
import appleblack from '../res/img/appleblack.png'
import hpwhite from '../res/img/hpwhite.png'
import hpnavy from '../res/img/hpnavy.png'
import hpblack from '../res/img/hpblack.png'
import lgwhite from '../res/img/lgwhite.png'
import lgnavy from '../res/img/lgnavy.png'
import lgblack from '../res/img/lgblack.png'

const Laptop = (props)=>{
    //세부 설정에서 기종/색상 선택하면 img 경로 변경 => props로 값 받기
    //useState 사용해야함
    // console.log(props);
    let colour, brand, src;
    colour = props.colour;
    brand = props.brand;
    
    if(brand === 'samsung'){
        colour === 'white' ? src=samsungwhite : colour === 'navy' ? src=samsungnavy : src=samsungblack;
    }
    else if(brand === 'apple'){
        colour === 'white' ? src=applewhite : colour === 'navy' ? src=applenavy : src=appleblack;
    }
    else if(brand === 'lg'){
        colour === 'white' ? src=lgwhite : colour === 'navy' ? src=lgnavy : src=lgblack;
    }
    else if(brand === 'hp'){
        colour === 'white' ? src=hpwhite : colour === 'navy' ? src=hpnavy : src=hpblack;
    }
    
    return(
        <div>
            <img src={`${src}`} />
        </div>
    );
}
export default Laptop;