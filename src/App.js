import logo from './logo.svg';
import './App.css';
import Login from './components/login.js';
import Custom from './components/custom.js';
import { useState } from 'react';

function App() {
  //laptop, letter 각각 두 state 이용 : default, laptop
  const [customMode, setCustomMode] = useState();
  //위의 setCustomMode는 각각 트리거 버튼이 있는 컴포넌트로 함수에 싸서 보내기 (후에 해당 component에서 onClick 구현)
  const [contents, setContents] = useState([
    {sub : 'logIn', title : '노트북을 고르시오.'},
    {sub : 'writing', title : '편지를 만드시오.'}
  ]);
  const [options, setOptions] = useState([
    {opt1 : '기종', opt2 : '색상'},
    {opt1 : '스티커', opt2 : '배경 색상'}
  ])

  //노트북/편지 component 만들어지면 그것도 조건문 내에 추가해두기 (obj에 넣으셈)
  let sub, title, option, custom;
  if(customMode === 'laptop'){
    sub = contents[0].sub;
    title = contents[0].title;
    option = options[0];
  }
  else if(customMode === 'letter'){
    sub = contents[1].sub;
    title = contents[1].title;
    option = options[1];
  }
  custom = <Custom sub={sub} title={title} option={option} />
  //console.log(customMode); => 새노트북만들기btn 클릭 시 laptop 출력 잘 됨!
  // console.log(sub, title, option); => 이것도 굿
  //08 dec, 여기까지 작업 / 후에 custom 개발하기
  return (
    <div className='App'>
      <Login
        onChangeMode={(mode)=>{
          setCustomMode(mode);
        }}>
      </Login>
      {custom}
    </div>
  );
}

export default App;
