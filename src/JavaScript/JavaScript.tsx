import { useState } from "react";

const JavaScript = () => {
    const [title, setTitle] = useState('Title');
    const [events, setEvents] = useState([
        {title:'Title 1', id:1 },
        {title:'Title 2', id:2 },
        {title:'Title 3', id:3 },
        {title:'Title 4', id:4 },
    ])

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
        <p>{title}</p>
        <button onClick={handleClick}>Change Name</button>
        {events.map((event) => (
            <section key={event.id}>
                <h2>{event.title}</h2>
            </section>
        ))}
    </> );
}
 
export default JavaScript;