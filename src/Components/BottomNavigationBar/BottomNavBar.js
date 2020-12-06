import React, { Component } from 'react';
import './BottomNavBarStyle.css'
import getURL from '../url';
import axios from 'axios';

class BottomNavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            long_url: "",
            short_url: ""
        }
    }


    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    createShortLink = (e) => {
        e.preventDefault();
        console.log(this.state.long_url);
        const data = {
            longUrlData: this.state.long_url
        }

        axios.post(getURL("create"), null, { params: {
            url: this.state.long_url
          }})
        .then( response => {
                console.log("response data : ", response.data);
                this.setState ( {
                    short_url: response.data.short_url
                })
            }
        ) 
    }

    render() {
        return (
            <nav class="navbar fixed-sticky navbar-expand-lg navbar-light bg-dark" style={{ top: '650px', paddingTop: '30px' }}>
                <div className="col-md-1 my-4"></div>
                <a class="navbar-brand" href="#"> </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="col-sm-1"></div>
                <div class="collapse navbar-collapse" id="navbarText">
                    <div class="input-group" style={{width:'1100px', position:'absolute', left: '270px', top:'20px'}} >
                        <input className="textBox" name = "long_url" onChange={this.onChangeHandler} class="form-control" placeholder="Shorten your link" />
                            <span className="submitButton" class="input-group-btn" style={{paddingLeft: "45px"}}>
                                <button class="btn btn-primary" onClick={this.createShortLink}>Shorten</button>
                            </span>
                    </div>

                        {/* <p>By clicking SHORTEN, you are agreeing to Bitly’s Terms of Service and Privacy Policy</p> */}
                    </div>
                    <div className="col-sm-1"></div>
            </nav>
        )
    }

}

export default BottomNavBar;