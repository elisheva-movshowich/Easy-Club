import React from 'react'
import {Icon} from "semantic-ui-react"
const Profile = (props) => {
    return (
        <div style={{  right: "3vw",fontSize:"x-large",top:"3vh",position:"absolute" }}>
                <Icon circular inverted color="teal" size="small" name="user"></Icon>
                <span style={{color:"white"}}>{props.name}</span>
        </div>

    )
}

export default Profile
