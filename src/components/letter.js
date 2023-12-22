const Letter = (props)=>{
    //세부 설정에서 스티커/배경 선택하면 스타일(bg, color) 변경 -> props로 값 받기
    //useState 사용해야함
    let fontColour;
    if(props.bg === '#3d3d3d'){
        fontColour = '#366EFF';
    }
    else{
        fontColour = '#F9F9F9';
    }

    const styles = {
        box : {
            width : '600px',
            height : '400px',
            color : fontColour,
            backgroundColor : props.bg,
            borderRadius : '35px'
        },
        letterBox : {
            width : '500px',
            height : '250px',
            opacity : '0.2',
            backgroundColor : '#e5e5e5',
            borderRadius : '35px'
        }
    }
    console.log(styles.box);

    return(
        <div style={styles.box}>
            Test
            <header></header> {/**stiker section */}
            <section>
                <label for="name">From.</label>
                <input name="name"></input>
                <div style={styles.letterBox}>
                    <textarea></textarea>
                </div>
            </section>
        </div>
    );
}
export default Letter;