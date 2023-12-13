import { useState } from 'react';
import samsungwhite from '../res/img/samsungwhite.png'
import samsungblack from '../res/img/samsungblack.png'
import samsungnavy from '../res/img/samsungnavy.png'

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
    
    return(
        <img src={`${src}`} />
    );
}
export default Laptop;