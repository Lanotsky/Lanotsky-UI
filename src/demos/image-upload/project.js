import React, { Component } from 'react'
import PropTypes from 'prop-types'


/* 
 * * * Takes an image file locally and set it as a state
 * * * Notes: React handles states simillarly as the natural DOM
*/
class Image_Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            fileUrl: '',
        }
    }

    handleSelect(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            this.setState({
                fileUrl: reader.result,
            })
        }
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        // do something with the state
    }
    
    render() {
        return (
            <form>
                <input type="file" onChange={(e) => this.handleSelect(e)} />
                <button onClick={(e)=>{this.handleSubmit(e)}}>Upload</button>
            </form>
        )
    }
}

export default Image_Upload;