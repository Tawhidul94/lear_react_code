
import React,{Component} from "react";

class Message extends Component{

    constructor() {
        super();
        this.state = {
            wellCome : 'Well come to your site'
        }
    }

    changeMessage() {
        this.setState({
            wellCome : 'Thank,s for visiting'
        })
    }



    render() {
        return(
            <div style={{textAlign :"center"}}>
                <h1> {this.state.wellCome}</h1>
                <button onClick={ () => this.changeMessage()}>subscribe</button>
            </div>
        )
    }
}

export default Message