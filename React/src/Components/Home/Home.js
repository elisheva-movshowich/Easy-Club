import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import Customers from "../MyStores/MyStores";
import Contact from "../ContactUs/ContactUs";
import About from "../About/About";
import { connect } from 'react-redux'
import "./Home.css"
class Home extends Component {
    componentDidMount(){
       this.props.cleanUserState();
       this.props.cleanEnterpriseState();
    }
    render() {
        return (
            <div id="wrapper">
                <div id="img">
                    <h2 className="title">VIRTUAL CLUB CARD<p>MANAGEMENT</p></h2>
                    <NavLink className="navLink userLogin" to="users/login">Customer login</NavLink>
                    <NavLink className="navLink" to="enterprises/login">Enterprise login</NavLink>
                </div>
                <div id="about"><About></About> </div>
                <div id="stores"><Customers></Customers></div>
               <div id="contact"><Contact></Contact></div>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
    cleanUserState:()=>dispatch({type:"CLEAN_USER_STATE", payload: ""}),
    cleanEnterpriseState:()=>dispatch({type:"CLEAN_ENTERPRISE_STATE", payload: ""}),
    }
  }
export default connect(null,mapDispatchToProps)(Home);
