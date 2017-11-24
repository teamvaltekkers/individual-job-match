import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div>
                <h1 className="heading-large">Travel</h1>
                
                <div className="form-group">
                    <label className="form-label" htmlFor="location">
                        <span className="form-label-bold">What is your location?</span>
                        <span className="form-hint">Enter your home post code in the field below <br />
                        for example M1 6HH
                        </span>
                    </label>
                    <input className="form-control" id="location" type="text" name="location" />
                </div>

                <div className="form-group">
                <fieldset>
                    <legend className="form-label-bold">How far are you willing to travel to work?</legend>
                    <div className="form-group multiple-choice">
                        <input className="form-control" id="distance1" type="radio" name="distance" />
                        <label className="form-label" htmlFor="distance1">
                            0 to 5 miles
                        </label>
                    </div>
                    <div className="form-group multiple-choice">
                        <input className="form-control" id="distance2" type="radio" name="distance" />
                        <label className="form-label" htmlFor="distance2">
                            6 to 10 miles
                        </label>
                    </div>
                    <div className="form-group multiple-choice">
                        <input className="form-control" id="distance3" type="radio" name="distance" />
                        <label className="form-label" htmlFor="distance3">
                            11 to 15 miles
                        </label>
                    </div>
                    <div className="form-group multiple-choice">
                        <input className="form-control" id="distance4" type="radio" name="distance" />
                        <label className="form-label" htmlFor="distance4">
                            16 to 20 miles
                        </label>
                    </div>
                </fieldset>
</div>
<div className="form-group">
                <fieldset>
                    <legend className="form-label-bold">How would you travel to work?</legend>
                    <div className="form-group multiple-choice">
                        <input className="form-control" id="distance1" type="radio" name="distance" />
                        <label className="form-label" htmlFor="distance1">
                            Public Transport
                        </label>
                    </div>
                    <div className="form-group multiple-choice">
                        <input className="form-control" id="distance2" type="radio" name="distance" />
                        <label className="form-label" htmlFor="distance2">
                            Private Transport
                        </label>
                    </div>
                </fieldset>
                </div>

                <div>
                    <Link to="/jobswipe" className="button">
                        Next
                    </Link>
                </div>
            </div>
        );
    }
}

export default Profile;
