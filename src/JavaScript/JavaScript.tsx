import { useState } from "react";

const JavaScript = () => {
    const [title, setTitle] = useState('Title');

    const handleClick = () => {
        if (title == "Title"){
             setTitle("cool")
        }
       else {
            setTitle("Title")
       }
        
    }
    return ( 
    <>
    <h1>JavaScript</h1>
    <button onClick={handleClick}>Change Name</button>
    <p>{title}</p>
    </> );
}
 
export default JavaScript;