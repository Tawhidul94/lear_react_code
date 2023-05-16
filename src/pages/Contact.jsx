import React from "react";
import './Contact.css'
import Header from "./Header";
import PersonalInfo from "./personalInfo";

function Contact(){

    return(
        <div className='contact'>
        <Header/>
           <h1>This is contact page</h1>
            <PersonalInfo name = 'Md.Tawhidul islam'/>
        </div>
    )
}

export default Contact