import React from "react"
import { connect } from "react-redux";
import { register } from "../actions"


export default class Content extends React.Component {


    render(){
        return (
            <div>
                <h2>Ride: Alice in Wonderland</h2>
                <h4>Location: Disneyland Park, Tomorrowland</h4>
                <h4>Time: {Date.now()}</h4>
                <input
                    placeholder="Comment" />
                <button>Post</button>

                <h2>Ride: Indiana Jones</h2>
                <h4>Location: Disneyland Park, Adventureland</h4>
                <h4>Time: </h4>
                <input
                    placeholder="Comment" />
                <button>Post</button>

                <h2>Ride: Pirates of the Caribbean</h2>
                <h4>Location: Disneyland Park, New Orleans Square</h4>
                <h4>Time: </h4>
                <input
                    placeholder="Comment" />
                <button>Post</button>




            </div>
        )
    }
}