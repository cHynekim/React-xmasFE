const Buttons = (props) => { 
    return(
        <div>
            <button style={{color : props.colour}}>변경하기</button>
            <button style={{backgroundColor : props.colour}}>이걸로 하기</button>
        </div>
    );
}
export default Buttons;