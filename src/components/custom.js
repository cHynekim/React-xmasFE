import { useState } from "react";
import Laptop from "./laptop";
import Letter from "./letter";
import Buttons from "./buttons";
import { useEffect } from "react";
import { OptSlide } from "./optionSlide";

const Custom = (props) => {
    let sub, title, options;
    // console.log(props);
    sub = props.sub;
    title = props.title;
    options = props.option;

    //default value
    const [laptopColour, setLaptopColour] = useState('white');
    const [laptopBrand, setLaptopBrand] = useState('samsung');
    const [letterStk, setLetterStk] = useState('react');
    const [letterBg, setletterBg] = useState('#3d3d3d');

    let article;
    if(props.mode === 'laptop'){
        article = <Laptop 
                    colour={laptopColour}
                    brand={laptopBrand}/>
    }
    else if(props.mode === 'letter'){
        article = <Letter 
                    sticker={letterStk}
                    bg={letterBg}/>
    } 

    const [btnColour, setBtnColour] = useState();
    useEffect(() => {
        if(props.mode === 'laptop'){
            setBtnColour('#f66');
        }
        else if(props.mode === 'letter'){
            setBtnColour('#1fb4a2');
        }
    }, [props.mode]);

    //implement logic when a user click the change btn.
    //state, (buttons) onClick func ~ setState, useEffect? or just conditional?
    const [show, setShow] = useState(false);

    //if I insert the console line in onShow~ func, it doesn't show changing 'show' state immediately. This is solution
    useEffect(()=>{
        console.log(letterStk);
    }, [letterStk]);
    let optionView;
    if(show === true){
        optionView = <OptSlide
                        mode={props.mode}
                        opt={options}
                        onChangeLapCol={(colour)=>{
                            setLaptopColour(colour);
                        }}
                        onChangeLapBrd={(brd)=>{
                            setLaptopBrand(brd);
                        }}
                        onChangeStk={(stk)=>{
                            setLetterStk(stk);
                        }}
                        onChangeBg={(bg)=>{
                            setletterBg(bg);
                        }}/>
    }

    return(
        <div>
            <header>
                <span>if&#40;</span>
                <span>{sub}</span>
                <span>&nbsp;==&nbsp;true&#41;&#123;&nbsp;printf&#40;&#34;</span>
                <span>{title}</span>
                <span>&#34;&#41;&#59;&nbsp;&#125;</span>
            </header>
            <main>
                {article}   {/*laptop or letter*/}
                {optionView}    {/*option box*/}
            </main>  
            <Buttons
                colour={btnColour}
                onShowOptions={(bool) => {
                    setShow(bool);
                }}
                //sending laptop, letter, main mode changer func & currunt mode state
                mode={props.mode}
                onChangeMode={props.onChangeMode}/>
        </div>
    );
}
export default Custom;