import React, { Component } from 'react';
import { Form, Grid, Header, Input, Popup, Divider } from 'semantic-ui-react';
import { InputFile } from 'semantic-ui-react-input-file';
class CardDetails extends Component {
    render() {
        const path = '/enetrprises/UpdateEnterpCard';
        const form = this.props.form;
        const array = [];
        for (let x in form) {
            array.push({ id: x, config: form[x] })
        }
        return (<div>
            <Header as='h2' color='teal' textAlign='left' className="new-card-header">Card Details</Header>
            <Divider></Divider>
            <Form className="new-card-form">
                <Grid><Grid.Column><Form.Group>
                    <Form.Input label={form.Cost.label} className={this.props.trySend && !form.Cost.valid ? "error" : ""} >
                        <Input label={form.Cost.icon} min={0} labelPosition="right" type={form.Cost.type} onChange={event => this.props.onChange(event.target.value, "Cost")} value={form.Cost.value}
                            placeholder={form.Cost.text}
                            step={form.Cost.step}
                        /></Form.Input>
                    <Form.Input label={form.CountPoints.label} className={this.props.trySend && !form.CountPoints.valid ? "error" : ""}
                    ><Popup content="for example : 5 point =1$" trigger={<Input min={1} onChange={event => this.props.onChange(event.target.value, "CountPoints")} value={form.CountPoints.value} type={form.CountPoints.type} label={form.CountPoints.icon} labelPosition="right" placeholder={form.CountPoints.text} />}
                        />
                    </Form.Input>
                    <Form.Select label={form.Type.label} placeholder={form.Type.text} className={this.props.trySend && !form.Type.valid ? "error" : ""}
                        defaultValue={this.props.location === path ? form.Type.options[this.props.defaultValue].value : ""}
                        options={form.Type.options} onChange={this.props.onSelect} ></Form.Select>
                    <Form.Input label={form.Img.label} className={this.props.trySend && !form.Img.valid ? "error" : ""} >
                        <InputFile
                            button={{
                                labelPosition: "left",
                                label: <Input placeholder={form.Img.text} value={form.FileName.value !== "" ? form.FileName.value : ""}></Input>
                            }}
                            input={{
                                onChange: this.props.convertImg,
                            }} /></Form.Input>
                    <Popup content="for example : the card is valid for 10 years" trigger={
                        <Form.Input label={form.Duration.label} min={0} onChange={event => this.props.onChange(event.target.value, "Duration")}
                            className={this.props.trySend && !form.Duration.valid ? "error" : ""}
                            value={form.Duration.value} type="number"
                            placeholder={form.Duration.text}
                            step={form.Duration.step} >

                        </Form.Input>}></Popup>
                </Form.Group></Grid.Column></Grid></Form>
        </div>
        )
    }
}
export default CardDetails;