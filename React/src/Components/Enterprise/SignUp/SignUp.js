import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Icon, Form, Grid, Header, Segment, Dimmer, Loader, Checkbox } from 'semantic-ui-react';
import axios from 'axios';
import onChangeInput from "../../Service/onChangeInput";
import onSignUp from "../../Service/onSubmit";
import validCheckbox from "../../Service/validCheckbox";
import { connect } from 'react-redux';
import "../../Form.css"
class EnterpriseSignUp extends Component {
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
                type: "Password",
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
            Url: {
                type: "text",
                icon: "share",
                text: "Url",
                value: "",
                maxLength: 100,
                validation: {
                    required: true,
                    pattern: /^/,
                    url: true
                },
                valid: false,
            },
        },
        checkbox: false,
        trySend: false,
        loading: false,
        errorMessage: "",
        update: false
    }
    componentDidMount() {
        if (this.props.location.pathname === '/enterprises/ProfileUpdate') {
            const form = { ...this.state.form };
            this.setState({ checkbox: true })
            for (let x in form) {
                form[x].value = this.props.enterprise[x]
                form[x].valid = true
            }
            this.setState({ form: form })
        }

    }
    onChangeHendler = (e, id) => {
        this.setState({ trySend: false })
        const form = { ...this.state.form };
        const inputChanged = { ...form[id] };
        onChangeInput(e, inputChanged, form, id);
        this.setState({ form: form })
    }

    SignUp = () => {
        const form = { ...this.state.form };
        var obj = onSignUp(form)
        if (obj === null)
            obj = validCheckbox(this.state.checkbox)
        if (obj !== null) {
            this.setState({ form: form, trySend: true, errorMessage: obj.error });
        }
        else {
            this.setState({ loading: true });
            const data = {};
            for (let x in this.state.form) {
                data[x] = this.state.form[x].value;
            }
            const path = `http://localhost:64430/api/Enterprises`;
            if (this.props.location.pathname === '/enterprises/ProfileUpdate') {
                data["C_id"] = this.props.enterprise.C_id;
                axios.put(path, data).then(x => {
                    alert("updated")
                    this.props.history.replace('/enterprises/enterpCards');
                }).catch(x => {
                    this.setState({ loading: false, errorMessage: x.response.data.Message });
                });
            }
            else {
                axios.post(path, data).then(x => {
                    alert("Registered successfully")
                    this.props.history.replace('/enterprises/login');
                }).catch(x => {
                    this.setState({ loading: false, errorMessage: x.response.data.Message });
                });
            }
        }
    }
    render() {
        const array = [];
        for (let x in this.state.form) {
            array.push({ id: x, config: this.state.form[x] })
        }
        return (<div>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column className="columnForm" style={{ maxWidth: 450, height: '67%', width: '37vw' }}>
                    <Header as='h2' className="title">
                        {this.props.location.pathname === '/enterprises/ProfileUpdate' ? " Update profile" : "Sign up"}
                        <br></br>
                        <Icon.Group size='huge'>
                            <Icon name='user circle' size='large' color='black' />
                        </Icon.Group>
                    </Header>
                    <Form size='large' onSubmit={this.SignUp}>
                        <Segment stacked>
                            {array.map((x, i) => {
                                return <Form.Input
                                    key={i} iconPosition="left"
                                    maxLength={x.config.maxLength}
                                    type={x.config.type}
                                    onChange={event => this.onChangeHendler(event, x.id)}
                                    className={this.state.trySend && !this.state.form[x.id].valid ? "error" : x.id}
                                    placeholder={x.config.text + "*"}
                                    value={this.state.form[x.id].value}
                                    icon={x.config.icon}>
                                </Form.Input>
                            })}
                            <Checkbox
                                style={{ display: this.props.location.pathname === '/enterprises/ProfileUpdate' ? 'none' : 'block', marginBottom: "2vh" }}
                                checked={this.state.checkbox} onChange={e => this.setState({ checkbox: !this.state.checkbox })} label={<label>I accept the <a href="/agreement" target="_blank" style={{ color: "teal" }}>Terms of Service</a></label>} />
                            <div id="message">{this.state.errorMessage}</div>
                            <Button type="submit" color='teal' fluid size='large'>
                                {this.props.location.pathname === '/enterprises/ProfileUpdate' ? "Update" : "Sign up"}
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
        enterprise: state.enterprise.enterprise
    }
}
export default connect(mapStateToProps, null)(EnterpriseSignUp);
