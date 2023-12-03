import React from "react";
import Control from "./Control";
import Paragraph from "./Paragraph";


function From(){
    return ( 
        <div>
            <form>
                <Control type='text' label='Email'/> <br/>
                <Control type='password' label='Password' /> <br/>
                <Control type="checkbox" label='Hobby' /> 
                <Paragraph type='danger'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus non saepe quae!</Paragraph>
                <Button type='button'>Register</Button>
                <Button href='https://www.google.com.vn/'>Go to google</Button>
            </form>
        </div>
    )
}


function Button(props){
    const handleClick = () => { console.log('Click')}
    if(props.type =='button'){
        return (
            <button type="button" className="btn btn-dark" 
                onClick={handleClick}
            >{props.children}</button>
        )
    }
    if(props.href)
    {
        return (
            <a className="btn btn-link" href={props.href}>{props.children}</a>
        )
    }
}
export default From;