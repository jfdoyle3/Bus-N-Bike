// Basic React Component
// inline: css h3 tag  normally it's background-color. React it's camelCase backgroundColor
import React, {Component} from 'react';
import '../css/test.css';

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
                <h3>This is from a CSS file</h3>
                <br />
                <p style={{backgroundColor: "lightblue"}}>camelCase inline CSS styling</p>
                <br />
                <p style={{color: 'red'}}>This line will display on page.</p>
                <br />
                <p style={pStyle}>This is a style object, simular to a style sheet in a html file.</p>
                <br />
                
            </div>
        )
    }
}