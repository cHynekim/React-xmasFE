const OptSlide = (props) => {
    // console.log(props);
    let opt1, opt2;
    opt1 = props.opt.opt1;
    opt2 = props.opt.opt2;
    //set some variables to put contents of options
    //아오 김채현 제발 커밋 전에 다음 번에 어떻게 해야하는지 적고 커밋하라고 시발 다 다시 읽어야하잖알어ㅏㄹ아ㅓㅣㄴㄹ

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
        items1 = <div>

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

export default OptSlide;