import React, { useState } from "react";

function App() {

    const [headingText, setHeadingText] = useState("Hello");
    const [isMousedOver, setMouseOver] = useState(false);
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: ""
    })

    function handleClick(){
        setContact({firstName : '', lastName : '', email : ''});
        const name = `${contact["firstName"]} ${contact["lastName"]}`;
        setHeadingText(`${headingText} ${name}  `);
    }
    
    function handleMouseOver(){
        setMouseOver(true);
    }
    
    function handleMouseOut(){
        setMouseOver(false);
    }

    function handleChange(event){

        const {value, name} = event.target;

        switch (name){
            case 'firstName':
                setContact({
                    firstName: value,
                    lastName: contact["lastName"],
                    email: contact["email"]
                });
                break;
            case 'lastName':
                setContact({
                    firstName: contact["firstName"],
                    lastName: value,
                    email: contact["email"],
                });
                break;
            case 'email':
                setContact({
                    firstName: contact["firstName"],
                    lastName: contact["lastName"],
                    email: value
                });
                break;
            default:
                break;
        }

        console.log(event.target.value)        
        setHeadingText("Hello")
    }
   
    return (
        <div className="container">
        <h1>{headingText}</h1>
        <input 
            type="text" 
            name="firstName"
            placeholder="First Name?" 
            value = {contact["firstName"]}
            onChange={handleChange}
        />
        <input 
            type="text" 
            name="lastName"
            placeholder="Last Name?" 
            value = {contact["lastName"]}
            onChange={handleChange}
        />
          <input 
            type="text" 
            name="email"
            placeholder="email?" 
            value = {contact["email"]}
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
