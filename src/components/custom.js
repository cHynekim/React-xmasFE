import { useState } from "react";
import Laptop from "./laptop";
import Letter from "./letter";

const Custom = (props) => {
    let sub, title;
    console.log(props);
    sub = props.sub;
    title = props.title;
    console.log(sub, title);

    const [laptopColour, setLaptopColour] = useState(
        //onClick func은 설정슬라이드 컴포넌트에 설정할 것
        'white'
    );
    const [laptopBrand, setLaptopBrand] = useState('samsung');


    let article;
    if(props.mode === 'laptop'){
        article = <Laptop 
                    colour={laptopColour}
                    brand={laptopBrand}/>
    }
    else if(props.mode === 'letter'){
        article = <Letter />
    } 

    return(
        <div>
            <div>
                <span>if&#40;</span>
                <span>{sub}</span>
                <span>&nbsp;==&nbsp;true&#41;&#123;&nbsp;printf&#40;&#34;</span>
                <span>{title}</span>
                <span>&#34;&#41;&#59;&nbsp;&#125;</span>
            </div>
            {article}
        </div>
    );
}
export default Custom;