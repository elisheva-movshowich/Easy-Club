import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Form, Grid, Header, Segment, Dimmer, Loader,Icon } from 'semantic-ui-react';
import axios from 'axios';
import onChangeInput from "../../Service/onChangeInput";
import onSignUp from "../../Service/onSubmit";
import { connect } from 'react-redux'
import "../../Form.css"
class UsersSignUp extends Component {
    state = {
        form: {
            Name: {
                type: "text",
                icon: "user",
                text: "Name",
                value: "",
                maxLength: 40,
                validation: {
                    required: true,
                    pattern: /^[a-zA-Z&.@ ]*$/,
                },
                valid: false,
            },
            Tz: {
                type: "text",
                icon: "tag",
                text: "Identity",
                value: "",
                maxLength: 9,
                validation: {
                    required: true,
                    pattern: /^[0-9]*$/,
                    tz: true
                },
                valid: false,
            },
            Email: {
                type: "text",
                icon: "envelope",
                text: "E-mail address",
                value: "",
                maxLength: 50,
                validation: {
                    required: true,
                    pattern: /^[0-9a-zA-Z.+*%#!@]+$/,
                    mail: true
                },
                valid: false,
            },
            Password: {
                type: "password",
                icon: "lock",
                text: "Password",
                value: "",
                maxLength: 15,
                validation: {
                    required: true,
                    pattern: /^[0-9a-zA-Z]+$/,
                    password: true
                },
                valid: false,
            },
            Phone: {
                type: "text",
                icon: "phone",
                text: "Phone",
                value: "",
                maxLength: 10,
                validation: {
                    required: true,
                    pattern: /^[0-9]*$/,
                    phone: true
                },
                valid: false,
            },
            BirthDate: {
                birthdate: true,
                type: "text",
                icon: "birthday cake",
                text: "BirthDate",
                value: "",
                maxLength: 10,
                validation: {
                    required: true,
                    pattern: /^/
                },
                valid: false,
            },
        },
        trySend: false,
        loading: false,
        errorMessage:"",
    }
    componentDidMount() {
        if (this.props.location.pathname === '/users/ProfileUpdate') {
            const form = { ...this.state.form };
            for(let x in form){
                form[x].value=this.props.user[x];
            }
            this.setState({ form: form })
        }
    }
    onChangeHendler = (e, id) => {
        this.setState({ trySend: false,errorMessage:"" })
        const form = { ...this.state.form };
        const inputChanged = { ...form[id] };
        onChangeInput(e,inputChanged,form,id);
        this.setState({ form: form })
    }
    Update=()=>{
        const form = { ...this.state.form };
        var obj = onSignUp(form)
            if (obj !== null) {
                this.setState({ form: form, trySend: true, errorMessage: obj.error });
            }
            else {
                this.setState({ loading: true });
                const data = {};
                for (let x in this.state.form) {
                    data[x] = this.state.form[x].value;
                }
                data['Level']=this.props.user.Level;
                data['C_id']=this.props.user.C_id;
                axios.put(`http://localhost:64430/api/Users?`,data).then(x => {
                    this.setState({ loading: false });
                    alert("update")
                    this.props.history.replace("/users/cards")
                }).catch(x => {
                    this.setState({ loading: false, errorMessage: x.response.data.Message });
                });
            }
    }
    SignUp = () => {
        const form = { ...this.state.form };
        const obj=onSignUp(form)
        if(obj!=null){
             this.setState({ form: form, trySend: true,errorMessage:obj.error });
        }
        else {
            this.setState({ loading: true });
            const data = {};
            for (let x in this.state.form) {
                data[x] = this.state.form[x].value;
            }
            axios.post(`http://localhost:64430/api/Users`, data
            ).then(x => {
                alert("You have successfully registered");
                this.props.history.replace('/users/login')
            }
            ).catch(x => {
                this.setState({ loading:false,errorMessage:x.response.data.Message });
            });
        }
    }
    render() {
        const array = [];
        for (let x in this.state.form) {
            array.push({ id: x, config: this.state.form[x] })
        }
        return (<div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column className="columnForm"  style={{ maxWidth: 450 ,height: '67%',width:'37vw'}}>
                    <Header as='h2' className="title">
                    {this.props.location.pathname === '/users/ProfileUpdate' ? " Update profile" : "Sign up"}
                    <br></br>
                        <Icon.Group size='huge'>
                            <Icon name='user circle' size='large' color='black' />
                        </Icon.Group>
                  </Header>
                  <Form size='large' onSubmit={this.props.location.pathname === '/users/ProfileUpdate' ? this.Update : this.SignUp}>
                        <Segment stacked>
                            {array.map((x, i) => {
                                return <Form.Input
                                    key={i} iconPosition="left"
                                    maxLength={x.config.maxLength}
                                    type={x.config.type}
                                    onChange={event => this.onChangeHendler(event, x.id)}
                                    className={this.state.trySend && !this.state.form[x.id].valid ? "error" : x.id}
                                    placeholder={x.config.text + "*"}
                                    icon={x.config.icon}
                                    value={this.state.form[x.id].value}
                                    onFocus={(e) => x.config.birthdate === true ? e.target.type = 'date' : "text"}
                                    onKeyPress={x.id === "BirthDate" ? (e) => { e.preventDefault() } : null}
                                    max={(new Date(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDay()).toISOString().split('T')[0])}
                                    min={(new Date(new Date().getFullYear() - 100, new Date().getMonth(), new Date().getDay()).toISOString().split('T')[0])}
                                >
                                </Form.Input>
                            })}
                            <div id="message">{this.state.errorMessage}</div>
                            <Button type="submit" color='teal' fluid size='large'>
                            {this.props.location.pathname === '/users/ProfileUpdate' ? " Update" : "Sign up"}
 </Button>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
            <Dimmer active={this.state.loading} inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
        </div >
        )

    }
}
const mapStateToProps = state => {
    return {
        user: state.user.user,
    }
}
export default connect(mapStateToProps)(UsersSignUp);
