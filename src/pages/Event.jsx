import React from 'react';
import './Event.css'

const Event= () => {

    const focusEvent = ()=>{
        console.log('on focus')
    }

    const blurEvent =()=>{
        console.log('on blur')
    }

    return (
        <div className='event'>
            <h1>Focus Event</h1>
            <input type= 'text' onFocus={focusEvent}/>
            <br/>
            <h1>Blur Event</h1>
            <input type= 'text' onBlur={blurEvent}/>
        </div>
    );
};

export default Event

