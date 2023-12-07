import { useState, useRef } from "react";
import '../res/style/loginBtn.css';
import kakao from '../res/img/kakao.png';
import naver from '../res/img/naver.png';
import google from '../res/img/google.png';

const LogBtn = (props) => {
    const [clickedIdx, setClickedIdx] = useState(null);
    const [readySocial, setReadySocial] = useState(null);
    const [showSocial, setShowSocial] = useState('mount');

    const doBtn = props.data.map((data) => {
        return(
            <div className="btn-cover" key={data.idx}>
                <button 
                    className="btn"
                    style={{ backgroundColor: data.idx === clickedIdx ? data.clickBg : data.bg }}
                    key={data.idx}
                    type="submit"
                    onClick={(e) => {
                        if(e.target.innerHTML == '새 노트북 만들기'){
                            props.onChangeMode('laptop');
                        }
                        props.onChangeToggle();
                        if(!props.toggle){
                            console.log(props.toggle);
                            setShowSocial('mount');
                        }
                        // else{
                        //     setShowSocial('unmount');
                        // }
                        setReadySocial(data.idx);
                        setClickedIdx(data.idx);
                        setTimeout(() => setClickedIdx(null), 100);}}>
                    {data.txt}
                </button>
                {readySocial === data.idx && (
                    <div className={`social-cover ${showSocial}`}>
                        <a key={"kakao"} className="social-option" onClick={(e)=>{e.preventDefault();}}><img className="social-img" src={kakao}></img></a>
                        <a key={"naver"} className="social-option" onClick={(e)=>{e.preventDefault();}}><img className="social-img" src={naver}></img></a>
                        <a key={"google"} className="social-option" onClick={(e)=>{e.preventDefault();}}><img className="social-img" src={google}/></a>
                    </div>
                )}
            </div>
        );
    });

    return(
        <div className="btn-section">
            {doBtn}
        </div>
    );
}
export default LogBtn;