import React, { useState } from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");
    const [isMousedOver, setMouseOver] = useState(false);
    const [name, setName] = useState("");

    function handleClick(){
        setHeadingText(`${headingText} ${name} `);
    }
    
    function handleMouseOver(){
        setMouseOver(true);
    }
    
    function handleMouseOut(){
        setMouseOver(false);
    }

    function handleChange(event){
        console.log(event.target.value);
        setName(event.target.value)
        setHeadingText("Hello")
    }
   
    return (
        <div className="container">
        <h1>{headingText}</h1>
        <input 
            type="text" 
            placeholder="What's your name?" 
            value = {name}
            onChange={handleChange}
        />
        <button 
            onClick={handleClick} 
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style = {{ backgroundColor : isMousedOver ? "black" : "white"}}>
            Submit
        </button>
        </div>
    );
}

export default App;
