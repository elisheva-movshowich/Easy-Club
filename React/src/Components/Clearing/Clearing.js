import React, { Component } from 'react'
import { Image } from "semantic-ui-react";
import "semantic-ui-css"
class Clearing extends Component {
  render() {
    return (
      <div className="r">
        <p style={{ fontSize: '150%', zIndex: 100, marginTop: '20vh', position: 'absolute', marginLeft: '40vw' }}>The payment was succesful</p>
        <p style={{ fontSize: '110%', zIndex: 100, marginTop: '25vh', position: 'absolute', marginLeft: '40vw' }}>A confirmation of payment will send you the existing word in the system</p>

        <Image src='/Images/clearing2.PNG' style={{ height: '100%', width: '100%', }} />
      </div>
    )
  }
}


export default Clearing
