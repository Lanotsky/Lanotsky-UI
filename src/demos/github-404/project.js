import React, { Component } from 'react'
import Banner from './components/Banner'
import PropTypes from 'prop-types'

class Github_404 extends React.Component {
    render(){
        return(
            <div className="github-404">
                <Banner />
                <section className="_404-desc">
                    <p className="title">GitHub's 404 page</p>
                    <p className="desc">One of the most common errors you can come across while browsing the Internet is a 404 or Page Not Found error. This error often occurs when you follow a broken link or if you type in a website address that doesn’t exist.</p>
                    <p className="desc">A 404 page error appears when a website is active, but the specific page within it doesn’t exist. A different error appears if the whole website you’re visiting is unavailable.</p>
                </section>
            </div>
        )
    }
}

export default Github_404;