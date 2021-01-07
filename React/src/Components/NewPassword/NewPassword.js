import React, { Component } from 'react'
import { Button, Form, Grid, Header, Loader, Dimmer, Segment,Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { connect } from 'react-redux'
import onSubmit from "../Service/onSubmit";
import onChangeInput from "../Service/onChangeInput";
import "../Form.css"
class NewPassword extends Component {
    state = {
        form: {
            password: {
                value: "",
                text: "Password",
                validation: {
                    pattern: /^[0-9a-zA-Z]+$/,
                    required: true,
                    password: true,
                }
            },
            confirm_password: {
                value: "",
                text: "Confirm Password",
                validation: {
                    pattern: /^[0-9a-zA-Z]+$/,
                    required: true,
                    confirm_password: true,
                }
            }
        },
        trySend: "",
        loading: "",
        errorMessage: "",
        permission: true,
        timeIsHoverError: "",
    }
    search = this.props.location.search;
    params = new URLSearchParams(this.search);
    key = this.params.get('key');
    componentDidMount() {
        axios.get(`http://localhost:64430/api/SendMail?key=${this.key}`).then(x => {
            this.setState({ permission: true });
        }).catch(x => this.setState({ timeIsHoverError: x.response.data.Message, permission: false }));
    }
    onChangeHendler = (e, id) => {
        this.setState({ trySend: false })
        const form = { ...this.state.form };
        const inputChanged = { ...form[id] };
        onChangeInput(e, inputChanged, form, id);
        this.setState({ form: form })
    }
    changePassword = () => {
        const form = { ...this.state.form };
        const obj = onSubmit(form)
        if (obj !== null) {
            this.setState({ form: form, trySend: true, errorMessage: obj.error });
        }
        else {
            var location = "users";
            this.setState({ loading: true });
            if (this.props.location.pathname !== '/users/newpassword')
                location = "enterprises";
            axios.post(`http://localhost:64430/api/${location}?key=${this.key}&password=${this.state.form.password.value}`).then(x => {
                alert("Password was changed successfully");
                this.props.history.replace("/" + location + "/login");
            }).catch(x => this.setState({ errorMessage: x.response.data.Message, loading: false }));
        }
    }
    render() {
        const array = [];
        for (let x in this.state.form) {
            array.push({ id: x, config: this.state.form[x] })
        }
        return (<div>
            {this.state.permission ? <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
                <Grid.Column className="columnForm" style={{ maxWidth: 450, height: '52%', width: '37vw' }}>
                    <Header as='h2'  className="title">New password
                    <br></br>
                        <Icon.Group size='huge'>
                            <Icon name='lock' size='large' color='black' />
                        </Icon.Group>
                    </Header>
                    <Form size='large' onSubmit={this.changePassword}>
                        <Segment stacked>
                            {array.map((x, i) => {
                                return <Form.Input
                                    key={i} iconPosition="left"
                                    type="password"
                                    onChange={event => this.onChangeHendler(event, x.id)}
                                    className={this.state.trySend && !this.state.form[x.id].valid ? "error" : x.id}
                                    placeholder={x.config.text + "*"}
                                    icon="lock">
                                </Form.Input>
                            })}
                            <div id="message">{this.state.errorMessage}</div>
                            <Button type="submit" color='teal' fluid size='large'>
                                 submit
                        </Button>
                        </Segment>
                    </Form>
                </Grid.Column>

            </Grid> : <div className="msg">{this.state.timeIsHoverError}</div>}
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
        enterprise: state.enterprise.enterprise,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectUser: (user) => dispatch({ type: "SELECT_USER", payload: user }),
        selectEnterprise: (enterprise) => dispatch({ type: "SELECT_ENTERPRISE", payload: enterprise }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword);