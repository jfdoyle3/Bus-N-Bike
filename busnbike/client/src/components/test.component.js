// Basic React Component
// inline: css h3 tag  normally it's background-color. React it's camelCase backgroundColor
import React, {Component} from 'react';

export default class Test extends Component {
    render() {
        const pStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            <div>
                <h3 style={{backgroundColor: "lightblue"}}>Test Component</h3>
                <br />
                <p style={{color: 'red'}}>This line will display on page.</p>
                <br />
                <p style={pStyle}>This is a style object, simular to a style sheet in a html file.</p>
            </div>
        )
    }
}