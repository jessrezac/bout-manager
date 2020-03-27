import React, { Component } from 'react'
import ProfileForm from './ProfileForm.js'

class Welcome extends Component {
    render() {
        return (
            <section className="section">
                <h1 className="is-size-1">Complete Your Profile</h1>
                <ProfileForm />
            </section>
        )
    }
}

export default Welcome