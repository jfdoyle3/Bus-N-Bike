// Basic React Component
// inline: css h3 tag  normally it's background-color. React it's camelCase backgroundColor
import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import '../css/test.css';

export default class MatUI extends Component {
   
    render() {
        const pStyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        
        this.handleClick=(e)=> {
          e.preventDefault();
          alert('The link was clicked.');
        };
        
        return (
            <div>
                <h3>This is from a CSS file</h3>
                <br />
                <p style={{backgroundColor: "lightblue"}}>camelCase inline CSS styling</p>
                <br />
                <p style={{color: 'red'}}>This line will display on page.</p>
                <br />
                <p style={pStyle}>This is a style object, similar to a style sheet in a html file.</p>
                <br />
                <Button variant="contained" color="default" onClick={this.handleClick}>Hello World</Button>
            </div>
        )
    }
}