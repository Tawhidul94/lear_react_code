import React, {useState} from 'react';
import Header from "./Header";

const Hook = () => {

    const [state, setState] = useState(0);

    const count = () => {

        setState(
            state+1
        )


    }
    return (
        <div>
            <Header/>
            <div style={{textAlign:'center'}}>
                <button onClick={count}>Count = {state}</button>
            </div>
        </div>
    );
};

export default Hook;
