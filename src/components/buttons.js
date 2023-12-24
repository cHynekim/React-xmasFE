const Buttons = (props) => { 
    let btn;
    if(props.mode === 'laptop' || props.mode === 'letter'){
        btn = <div>
            <button 
                style={{color : props.colour}}
                onClick={() => {
                    props.onShowOptions(true);
                }}>변경하기</button>
            <button 
                style={{backgroundColor : props.colour}}
                onClick={
                    (e)=>{
                        props.onChangeMode('main');
                    }
                }>이걸로 하기</button>
        </div>
    }
    else if(props.mode === 'main'){
        btn = <div>

        </div>
    }

    return(
        <div>
            {btn}
        </div>
    );
}
export default Buttons;