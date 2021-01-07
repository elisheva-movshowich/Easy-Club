import React, { Component } from 'react';
import { getEnterprise } from '../../Store/actions/EnterpriseAction'
import { getUser } from "../../Store/actions/UserAction"
import { Button, Icon, Form, Grid, Header, Message, Segment, Loader, Dimmer } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux'
import onChangeInput from "../Service/onChangeInput";
import onSubmit from "../Service/onSubmit";
import newPassword from "../Service/newPassword";
import "../Form.css"
class Login extends Component {
  state = {
    form: {
      mail: {
        icon: "envelope",
        type: "text",
        value: "",
        text: "Email",
        validation: {
          pattern: /^[0-9a-zA-Z.+*%#!@]+$/,
          required: true,
          mail: true,
        }
      },
      password: {
        icon: "lock",
        type: "password",
        value: "",
        text: "Password",
        validation: {
          pattern: /^[0-9a-zA-Z]+$/,
          required: true,
          password: true,
        }
      }
    },
    trySend: "",
    loading: false,
    errorMessage: "",
    newPasswordMessage: "",
  }
  location = this.props.location.pathname;
  newPassword = () => {
    const form = { ...this.state.form };
    const obj = newPassword(form);
    if (obj !== null) {
      this.setState({ form: form, trySend: true, errorMessage: obj.error });
    }
    else {
      var route = "users";
      if (this.location !== '/users/login')
        route = "enterprises";
      this.setState({ loading: true })
      axios.get(`http://localhost:64430/api/${route}?email=${this.state.form.mail.value}`).then(x => {
        this.setState({ loading: false, newPasswordMessage: "sending email to:  " + this.state.form.mail.value });
      }).catch(x => {
        this.setState({ loading: false, newPasswordMessage: x.response.data.Message })
      });
    }
  }
//   componentDidUpdate()
//  {
//     console.log(this.props.user)
//     if(this.props.user!==null){
//       this.props.history.replace('/cards');
//     }
//   }
  handleSubmit = (e) => {
    e.preventDefault();
    const form = { ...this.state.form };
    const obj = onSubmit(form)
    if (obj !== null) {
      this.setState({ form: form, trySend: true, errorMessage: obj.error });
    }
    else {
      if (this.location === '/users/login') {
        this.props.selectUser(this.state.form.mail.value, this.state.form.password.value);
        // this.props.history.replace('cards');
      }
      else
        this.props.selectEnterprise(this.state.form.mail.value, this.state.form.password.value);
    }
  }
  onChangeHendler = (e, id) => {
    // this.state.changeUserError();
    // this.state.changeEnterpError();
    this.setState({ trySend: false, errorMessage: "" })
    const form = { ...this.state.form };
    const inputChanged = { ...form[id] };
    onChangeInput(e, inputChanged, form, id);
    this.setState({ form: form })
  }
  render() {
    const array = [];
    for (let x in this.state.form) {
      array.push({ id: x, config: this.state.form[x] })
    }
    console.log(this.props.enterp_loading , this.props.user_loading)
    return (
      <div>
        {this.props.message === null ? <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column className="columnForm"  style={{ maxWidth: 450, height: '64%' }}>
            <Header as='h2'  className="title">
              Log in
            <br></br>
              <Icon.Group size='huge' >
                <Icon name='user circle' size='large' color='black' />
              </Icon.Group>
            </Header>
            <Form size='tiny' onSubmit={this.handleSubmit}>
              <Segment stacked>
                {array.map((x, i) => {
                  return <Form.Input
                    key={i} iconPosition="left"
                    type={x.config.type}
                    onChange={event => this.onChangeHendler(event, x.id)}
                    className={this.state.trySend && !this.state.form[x.id].valid ? "error" : x.id}
                    placeholder={x.config.text + "*"}
                    icon={x.config.icon}>
                  </Form.Input>
                })}
                <div id="message">{this.state.errorMessage}</div>
                <Button type="submit" color='teal' fluid size='large'>
                  Log in
            </Button>
                <div id="email_message">{this.props.location.pathname==="/users/login"?this.props.userError : this.props.enterpError}</div>
              </Segment>
            </Form>
            <Message>
              New to us ?<NavLink to={this.location === '/users/login' ? '/users/signUp' : '/enterprises/signUp'} className="singUp"> Sign up</NavLink>
            </Message>
            <Message>
              <label >Forget your password ? <label onClick={this.newPassword} className="newPassword"> New password</label></label>
              <div id="newPassword">{this.state.newPasswordMessage}</div>
            </Message>
            <Dimmer id='dimmer' active={this.props.enterp_loading  || this.props.user_loading} inverted={true}>
              <Loader size='large'>Loading</Loader>
            </Dimmer>
          </Grid.Column>
        </Grid> :
          <Message size='massive' className="emailMessage" >
            <Message.Header>Your request has been received successfully</Message.Header>
            <p>Sending link for your account to your email ,the link will be valid for the next 15 minutes</p>
          </Message>}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.user.user,
    enterprise: state.enterprise.enterprise,
    userError: state.user.error,
    enterpError: state.enterprise.error,
    user_loading: state.user.loadingU,
    enterp_loading: state.enterprise.loadingE,
    message: state.enterprise.message
  }
}
const mapDispatchToProps = dispatch => {
  return {
    selectEnterprise: (mail, password) => dispatch(getEnterprise(mail, password)),
    selectUser: (mail, password) => dispatch(getUser(mail, password)),
    setLoading: (status) => dispatch({ type: "LOADING", payload: status }),
    changeUserError: (error) => dispatch({ type: "ERROR", payload: error }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);