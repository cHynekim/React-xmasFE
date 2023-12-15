const OptSlide = (props) => {
    console.log(props);
    let opt1, opt2;
    opt1 = props.opt.opt1;
    opt2 = props.opt.opt2;

    //set some variables to put contents of options

    return(
        <nav style={{width:'300px', height:'500px', backgroundColor:'palegreen'}}>
            <div>
                <span>{opt1}</span>
                {/*insert one of the vars*/}
            </div>
            <div>
                <span>{opt2}</span>
                {/*insert one of the vars*/}
            </div>
        </nav>
    );
}
export default OptSlide;