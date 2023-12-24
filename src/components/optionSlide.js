import reactStk from "../res/img/stickers/react.png";
import cplusStk from "../res/img/stickers/cplus.png";
import javaStk from "../res/img/stickers/java.png";
import pythonStk from "../res/img/stickers/python.png";


const OptSlide = (props) => {
    // console.log(props);
    let opt1, opt2;
    opt1 = props.opt.opt1;
    opt2 = props.opt.opt2;

    //임시 이미지 스타일 (원본겁나큼이슈!)
    const imgSizeStyle = {
        width : '50px'
    }

    //options slide context ~> evt listener
    //나중에 스타일 바꿀 때 Laptop-colour 버튼 말고 컬러박스로 변경
    let items1, items2;
    if(props.mode === 'laptop'){
        items1 = <div>
            <button onClick={
                (e)=>{
                    props.onChangeLapBrd('samsung');
                }
            }>semsong</button>
            <button onClick={
                (e)=>{
                    props.onChangeLapBrd('apple');
                }
            }>abble</button>
            <button onClick={
                (e)=>{
                    props.onChangeLapBrd('hp');
                }
            }>mp</button>
            <button onClick={
                (e)=>{
                    props.onChangeLapBrd('lg');
                }
            }>grab</button>
        </div>
        items2 = <div>
            <button onClick={
                (e)=>{
                    props.onChangeLapCol('white');
                }
            }>흰</button>
            <button onClick={
                (e)=>{
                    props.onChangeLapCol('black');
                }
            }>검</button>
            <button onClick={
                (e)=>{
                    props.onChangeLapCol('navy');
                }
            }>파</button>
        </div>
    }else if(props.mode === 'letter'){
        //scrollView, style of the outermost div contain overflow prop
        items1 = <div>
            <div>
                <a onClick={
                    (e)=>{
                        props.onChangeStk('react');
                    }
                }><img src={reactStk} alt="react sticker" style={imgSizeStyle}/></a>
                <a onClick={
                    (e)=>{
                        props.onChangeStk('java');
                    }
                }><img src={javaStk} alt="java sticker" style={imgSizeStyle}/></a>
                <a onClick={
                    (e)=>{
                        props.onChangeStk('python');
                    }
                }><img src={pythonStk} alt="python sticker" style={imgSizeStyle}/></a>
                <a onClick={
                    (e)=>{
                        props.onChangeStk('cplus');
                    }
                }><img src={cplusStk} alt="cplus sticker" style={imgSizeStyle}/></a>
            </div>
        </div>
        items2 = <div>
            <button
            onClick={
                (e)=>{
                    props.onChangeBg('#3d3d3d');
                }
            }
            >bk</button>
            <button
                onClick={
                    (e)=>{
                        props.onChangeBg('#42B4E6');
                    }
                }
            >bl</button>
            <button
            onClick={
                (e)=>{
                    props.onChangeBg('#AFE191');
                }
            }
            >gr</button>
            <button
                onClick={
                    (e)=>{
                        props.onChangeBg('#FFCA66');
                    }
                }
            >yw</button>
            <button
                onClick={
                    (e)=>{
                        props.onChangeBg('#984B3A');
                    }
                }
            >br</button>
        </div>
    }
    //23 Dec, letter부 배경선택까지 구현 완료
    //다음 번에 스티커 삽입 후 스티커 핸들링까지 하면 됨
    //마치고 ~> 메인화면 구현하기 ~> 메인화면 btn에 setCustomMode 삽입 후 letter mode로 변경 algor 짜야함ㅁ함함
    
    //24 Dec, letter/optSld 구현 완료
    //다음 번에 메인 컴포넌트 짜고 메인화면 btn에 setCustomMode 삽입 작업까지 완료하기
    //main comp 구상
    //laptop comp 재사용, btn comp 수정
    //App 내, mode state <- 'main' 추가, main mode가 default로 (완)
    //custom 내, 이걸로 하기 btn 누르면 setCustomMode('main')되게 onClick 설정
    //btn 내, props로 mode 받아서 조건문으로 button 태그 담긴 변수 지정
    
    return(
        <nav style={{width:'300px', height:'500px', backgroundColor:'palegreen'}}>
            <div>
                <span>{opt1}</span>
                {items1}
            </div>
            <div>
                <span>{opt2}</span>
                {items2}
            </div>
        </nav>
    );
}

export {OptSlide, reactStk, pythonStk, javaStk, cplusStk};