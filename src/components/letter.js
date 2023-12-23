import { reactStk, pythonStk, javaStk, cplusStk } from "./optionSlide";

const Letter = (props)=>{
    //change font colour according to bg colour
    let fontColour;
    if(props.bg === '#3d3d3d'){
        fontColour = '#366EFF';
    }
    else if(props.bg === '#AFE191' || props.bg === '#FFCA66'){
        fontColour = '#333';
    }
    else{
        fontColour = '#F9F9F9';
    }

    //letters' main sticker is decided by clicking stikers in optSlide comp.
    let stk;
    if(props.sticker === 'react'){
        stk = <img src={reactStk} alt="chosen sticker" style={{width : '50px'}}/>
    }
    else if(props.sticker === 'java'){
        stk = <img src={javaStk} alt="chosen sticker" style={{width : '50px'}}/>
    }
    else if(props.sticker === 'python'){
        stk = <img src={pythonStk} alt="chosen sticker" style={{width : '50px'}}/>
    }
    else if(props.sticker === 'cplus'){
        stk = <img src={cplusStk} alt="chosen sticker" style={{width : '50px'}}/>
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
    // console.log(styles.box);

    return(
        <div style={styles.box}>
            color test {/**style test text */}
            <header>    
                {stk}
            </header>
            <section>
                <label htmlFor="name">From.</label>
                <input name="name" placeholder="이름/별명을 입력해주세요..."></input>
                <div style={styles.letterBox}>
                    <textarea></textarea>
                </div>
            </section>
        </div>
    );
}
export default Letter;