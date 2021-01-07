import React, { Component } from 'react'
import {  Menu } from "semantic-ui-react"
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Profile from "../Profile/Profile";
class Header extends Component {
    state = {
        navlinks: [{ value: "Home", path: "/" }],
        url: "home"
    }
 
   componentDidUpdate() {
        if ((this.props.user !== null && this.state.url !== "user") || (this.props.enterprise !== null && this.state.url !== "enterprise")||(this.props.user === null && this.props.enterprise === null&&this.state.url !== "home"))
        {   
             var navlinks = [{ value: "Home", path: "/" }]
            var url="home";
        if (this.props.user !== null) {
            navlinks = [
                { value: "Log out", path: "" },
                { value: "My cards", path: "/users/cards" },
                { value: "New card", path: "/users/new" },
                { value: "Update profile", path: "/users/ProfileUpdate" },
              
            ]
            url ="user";
        }
        if (this.props.enterprise !== null) {
            navlinks = [
                { value: "Log out", path: "" },
                { value: "My cards", path: "/enterprises/enterpCards" },
                { value: "Update profile", path: "/enterprises/ProfileUpdate" },
                { value: "New card", path: "/enterprises/newCard" },
                { value: "Agreement", path: "/agreement" }
                ]
                url="enterprise"
        }
        this.setState({ navlinks: navlinks,url:url })
    }}
    render() {
        return (
            <div style={{ position: "fixed",top:"0px", width: "100vw", zIndex: "300", boxShadow: " 5px 10px 18px #888888", backgroundColor: "#191a19" }}>
                {this.props.user !== null?<Profile name={this.props.user.Name}></Profile>:this.props.enterprise !== null?
                <Profile name={this.props.enterprise.Name}></Profile>:""}
                <Menu inverted>
                    {this.state.navlinks.map((x, i) => {
                        return <NavLink to={x.path} style={{ textAlign: "center",padding:"0.6%" ,fontSize: "17px" }} key={i}>
                            <Menu.Item 
                            icon={x.value==="Home"?"home":x.value==="Log out"?"sign out":""}
                            link
                            name={x.value}
                        >
                        </Menu.Item>
                        </NavLink>
                    })}
                </Menu>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        user: state.user.user,
        enterprise: state.enterprise.enterprise,
    }
}
export default connect(mapStateToProps, null)(Header);
