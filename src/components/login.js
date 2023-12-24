import React, {useState} from 'react';
import LogBtn from './loginBtn.js';
import '../res/style/login.css'

const Login = (props) => {
    const [cont, setCont] = useState([
        {idx : 0, txt : "내 노트북 찾기", bg : '#1FB4A2', clickBg : '#218E80'},
        {idx : 1, txt : "새 노트북 만들기", bg : '#f66', clickBg : '#D25C5C'}
    ]);
    const [toggle, setToggle] = useState(false);

    return(
        <div className='body'>
            <div className='modal'>
                <div className='subtitle'>
                    <p className='sub-default'>
                        크리스마스에도 애인, 아니?<br/>
                        <span className='sub-hl'>노트북</span>
                        과 함께할 그대들을 위한
                        <span className='sub-hl'> 편지 서비스💝</span>
                    </p>
                </div>
                <div className='maintitle'>
                    <span className='title'>엥? 노트북을 꾸미라고?</span>
                </div>
                <LogBtn
                    data={cont}
                    toggle={toggle}
                    onChangeToggle={()=>{
                        setToggle(!toggle);
                    }}
                    //sending the mode changer func
                    onChangeMode={props.onChangeMode}>
                </LogBtn>
            </div>
        </div>
    );
}
export default Login;