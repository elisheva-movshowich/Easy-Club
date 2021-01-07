import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import onChangeInput from "../Service/onChangeInput";
import onSubmit from "../Service/onSubmit";
import { Form, Grid, Icon, Label, Dimmer, Loader } from 'semantic-ui-react';
import axios from 'axios';
import "./ContactUs.css"
class ContactUs extends Component {
    state = {
        form: {
            Name: {
                text: "Name",
                value: "",
                maxLength: 40,
                validation: {
                    required: true,
                    pattern: /^/
                },
                error: "The name is incorrect",
                valid: false,
            },
            Email: {
                text: "E-mail address",
                value: "",
                maxLength: 50,
                validation: {
                    required: true,
                    pattern: /^/,
                    mail: true,
                },
                error: "The email is incorrect",
                valid: false,
            },
            Phone: {
                text: "Phone",
                value: "",
                maxLength: 10,
                validation: {
                    required: true,
                    pattern: /^[0-9]*$/,
                    phone: true,
                },
                error: "The phone is incorrect",
                valid: false,
            },
        },
        Description: "",
        trySend: false,
        loading: false,
        errorMessage: "",
        IsAdded: false,
    }
    onChangeHendler = (e, id) => {
        this.setState({ trySend: false, errorMessage: "" })
        const form = { ...this.state.form };
        const inputChanged = { ...form[id] };
        onChangeInput(e, inputChanged, form, id);
        this.setState({ form: form })
    }
    handleSubmit = (e) => {
        const form = { ...this.state.form };
        const obj = onSubmit(form)
        if (obj !== null) {
            this.setState({ form: form, trySend: true, errorMessage: obj.error });
        }
        else {
            this.setState({ loading: true });
            const data = {};
            for (let x in this.state.form) {
                data[x] = this.state.form[x].value;
            }
            data["Description"] = this.state.Description;
            axios.post(`http://localhost:64430/api/Contact`, data).then(x => {
                this.setState({ loading: false, IsAdded: true });
            }).catch(x => {
                this.setState({ loading: false, errorMessage: x.response.data.Message });
            });
        }
    }
    render() {
        const array = [];
        for (let x in this.state.form) {
            array.push({ id: x, config: this.state.form[x] })
        }
        return (<div>
            <h1>| Contact Us |</h1>
            <div className="wrapper">
                <Grid textAlign='center' celled='internally' verticalAlign='middle'>
                    <Grid.Column width={11}>
                        {!this.state.IsAdded ? <Form size='large' onSubmit={this.handleSubmit}>
                            <Form.Group>
                                {array.map((x, i) => {
                                    return <Form.Input
                                        width={5}
                                        key={i}
                                        placeholder={x.config.text}
                                        maxLength={x.config.maxLength}
                                        type="text"
                                        onChange={event => this.onChangeHendler(event, x.id)}
                                        className={this.state.trySend && !this.state.form[x.id].valid ? "error" : x.id}
                                        value={this.state.form[x.id].value}>
                                    </Form.Input>
                                })};
                        </Form.Group>
                            <Form.Group>
                                <Form.TextArea maxLength={500} value={this.state.Description} onChange={event => this.setState({ Description: event.target.value, errorMessage: "" })} placeholder="Description" width={15}></Form.TextArea>
                            </Form.Group>
                            <div id="messageContact">{this.state.errorMessage}</div>
                            <Form.Button width={15} type="submit" color='teal' className="formButton">Contact Me</Form.Button>
                        </Form> :
                            <Form.Group className="msg">
                                <h3>Your request has been received successfully</h3>
                                <p>A representative of our believers will contact you as soon as possible</p>
                            </Form.Group>}

                    </Grid.Column>
                    <Grid.Column width={4} className="infoGroup" style={{ paddingBottom: "8%", paddingTop: "8%",textAlign: "left", width: "250", minWidth: "250"}} >
                        <Label className="info"><Icon circular inverted color="teal" className="iconInfo" name="envelope"></Icon>Email : easyclub100@gmail.com</Label>
                        <Label className="info"><Icon circular inverted color="teal" className="iconInfo" name="fax"></Icon>Fax : 03-9258478</Label>
                        <Label className="info"><Icon circular inverted color="teal" className="iconInfo" name="phone"></Icon>Phone : 052-7689412</Label>
                    </Grid.Column>
                </Grid>
                <Dimmer active={this.state.loading} inverted>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            </div>
        </div>
        )
    }
}
export default ContactUs
