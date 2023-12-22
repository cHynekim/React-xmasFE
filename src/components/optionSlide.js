const OptSlide = (props) => {
    // console.log(props);
    let opt1, opt2;
    opt1 = props.opt.opt1;
    opt2 = props.opt.opt2;
    //set some variables to put contents of options
    //아오 김채현 제발 커밋 전에 다음 번에 어떻게 해야하는지 적고 커밋하라고 시발 다 다시 읽어야하잖알어ㅏㄹ아ㅓㅣㄴㄹ

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
//12 Dec, 졸려서 여기까지만 laptop mode 시에 나오는 속성들만 구현
//다음 번엔 laptop.js에 이미지 import 열결

export default OptSlide;