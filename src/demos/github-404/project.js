import React, { Component } from 'react'
import Banner from './components/Banner'
import PropTypes from 'prop-types'

class Github_404 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: '',
            imagePreviewUrl: ''
        }
    }

    _handleSubmit(e) {
        e.preventDefault();        
        console.log('handle uploading-', this.state.file);
        // TODO: do something with -> this.state.file
        // some axios post to server
        
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    removeImage(){
        this.setState({
            file: '',
            imagePreviewUrl: ''
        })
    }



    render(){
        let {imagePreviewUrl} = this.state;
        let imagePreview = null;
        let imgLink = (imagePreviewUrl) ? <div className="img-wrapper"><img src={imagePreviewUrl} /></div> : <div className="img-wrapper"><p>Please select image to upload</p></div>
        return(
            <div className="github-404">
                <Banner>
                    {imgLink}
                </Banner>
                <section className="_404-desc">
                    <form onSubmit={(e) => this._handleSubmit(e)}>
                        <input type="file" onChange={(e) => this._handleImageChange(e)} />
                        <button type="submit" onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                        <button type="button" onClick={(e => this.removeImage())}>Remove Image</button>
                    </form>
                    <p className="title">GitHub's 404 page</p>
                    <p className="desc">One of the most common errors you can come across while browsing the Internet is a 404 or Page Not Found error. This error often occurs when you follow a broken link or if you type in a website address that doesn’t exist.</p>
                    <p className="desc">A 404 page error appears when a website is active, but the specific page within it doesn’t exist. A different error appears if the whole website you’re visiting is unavailable.</p>
                </section>
            </div>
        )
    }
}

export default Github_404;