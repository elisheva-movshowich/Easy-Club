import React from 'react';
import { connect } from 'react-redux'
import Login from '../../Components/Login/Login';
import { Redirect, Route, Switch } from 'react-router-dom';
import UsersSignUp from '../Users/SignUp/SignUp';
import Report from '../Users/Report/Report';
import UserNewCard from '../Users/NewCard/NewCard';
import NewCard from '../Enterprise/NewCard/NewCard';
import Cards from '../Users/Cards/Cards';
import { withRouter } from 'react-router-dom'
import Agreement from '../Enterprise/Agreement/Agreement';
import Clearing from '../Clearing/Clearing';
import ContactUs from '../ContactUs/ContactUs';
import Home from "../Home/Home"
import MySidebar from "../Sidebar/Sidebar"
import SignUp from '../Enterprise/SignUp/SignUp';
import Main from '../Enterprise/Main/Main'
import NewPassword from "../NewPassword/NewPassword"
import EnterpCards from '../Enterprise/EnterpCards/EnterpCards';
import PriceList from '../Enterprise/PriceList/PriceList';
import Header from "../Header/Header"
const Routes = (props) => {
   console.log(props)
    //home
    let routers = (<Switch>
        <Route path="/users/login" component={Login}></Route>
        <Route path="/users/signup" component={UsersSignUp}></Route>
        <Route path="/enterprises/login" component={Login}></Route>
        <Route path="/enterprises/signup" component={SignUp}></Route>
        <Route path="/enterprises/newpassword" component={NewPassword}></Route>
        <Route path="/enterprises/main" component={Main}></Route>
        <Route path="/users/newpassword" component={NewPassword}></Route>
        <Route path="/new" component={NewCard}></Route>
        <Route path="/agreement" component={Agreement}></Route>
        <Route path="/c" component={Cards}></Route>
        <Route path="/" component={Home}></Route>
    </Switch>);
    //user
    if (props.user !== null) {
        console.log("fdgsdfghsf")
        routers = (<Switch>
            <Route path="contact" component={ContactUs}></Route>
            <Route path="/users/cards" component={Cards}></Route>
            <Route path="/users/new" component={UserNewCard} exact />
            <Route path="/users/clearing" component={Clearing} exact />
            <Route path="/users/report" component={Report} />
            <Route path="/users/ProfileUpdate" component={UsersSignUp}></Route>
            <Route path="/" exact component={Home}></Route>
            <Redirect  to="/users/cards"/>
        </Switch>)
    }
    //enterprise
    else
        if (props.enterprise !== null) {
            routers = (<Switch>
                <Route path="/enterprises/newCard" component={NewCard}></Route>
                <Route path="/enterprises/enterpCards" component={EnterpCards}></Route>
                <Route path="/enetrprises/UpdateEnterpCard" component={NewCard}></Route>
                <Route path="/enterprises/clearing" component={Clearing}></Route>
                <Route path="/enterprises/ProfileUpdate" component={SignUp}></Route>
                <Route path="/agreement" component={Agreement}></Route>
                <Route path="/" component={Home}></Route>
            </Switch>)
        }
    return (
        <div>
            {/* <Chat></Chat> */} 
            {props.location.pathname === "/" ? <MySidebar></MySidebar> :<Header></Header>}
            {props.enterprise !== null ?
                <div>
                    <PriceList></PriceList>
                  </div> : ""}
            {/* {props.user !== null ? <Profile Name={props.user.Name}></Profile> : ""} */}
            {routers}
            <img src="/Images/Logo.jpg" alt="Logo" style={{ width: "220px", height: "150px", position: "fixed", zIndex: "200", top: "85%", left: "88%" }} />
        </div>
    );
}
const mapStateToProps = state => {
    return {
        user: state.user.user,
        enterprise: state.enterprise.enterprise,

    }
}
export default withRouter(connect(mapStateToProps)(Routes));