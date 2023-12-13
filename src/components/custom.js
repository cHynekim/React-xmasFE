import Laptop from "./laptop";
import Letter from "./letter";

const Custom = (props) => {
    let sub, title;
    console.log(props);
    sub = props.sub;
    title = props.title;
    console.log(sub, title);

    let article;
    if(props.mode === 'laptop'){
        article = <Laptop />
    }
    else if(props.mode === 'letter'){
        article = <Letter />
    } 

    return(
        <div>
            <div>
                <span>if&#40;</span>
                <span>{sub}</span>
                <span>&nbsp;==&nbsp;true&#41;&#123;&nbsp;printf&#40;&#34;</span>
                <span>{title}</span>
                <span>&#34;&#41;&#59;&nbsp;&#125;</span>
            </div>
            {article}
        </div>
    );
}
export default Custom;