import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Input, Form, Dropdown, Grid, Popup, Button } from 'semantic-ui-react';
class Lotery extends Component {
    state = {
        LoteryTypes: [
            { key: 'Discount', text: 'Discount', value: 'Discount' },
            { key: "Plus Free", text: "Plus Free", value: "Plus Free" },
            { key: "X in Y", text: "X in Y", value: "X in Y" }],
        SumTypes: [
            { key: '%', text: '%', value: '%' },
            { key: '$', text: '$', value: '$' }
        ]
    }
    render() {
        return (
            <div>
                <Form className="lottery-form">
                    <Grid >
                        <Grid.Column style={{ width: 950 }}>
                            <Grid.Row>
                                <Form.Group widths="equal">
                                    <Form.Select label="Lottery Types" options={this.state.LoteryTypes}
                                        defaultValue={this.props.form.LoteryType}
                                        onChange={(e,v)=>this.props.onSelect(e,v,this.props.index)}></Form.Select>
                                    {this.props.form.LoteryType === "Discount" ?
                                        <Popup
                                            content="for example:30% or 30$"
                                            trigger={<Form.Input
                                                onChange={e => this.props.onChange(e.target.value, "Sum",this.props.index)}
                                                value={this.props.form.Sum}
                                                min={1}
                                                label="Details"
                                                type="number"
                                                labelPosition='right'
                                                action={
                                                    <Dropdown id="sumType" button basic floating options={this.state.SumTypes} defaultValue={this.props.form.SumType} onChange={(e,v)=>this.props.onSelect(e,v,this.props.index)}
                                                    />}></Form.Input>} /> : this.props.form.LoteryType === "Plus Free" ?
                                            <Form.Input label="Details">
                                                <Popup content="for example:1+1" trigger={<Input type="number" min={1} max={10} value={this.props.form.Num1} onChange={(e) => this.props.onChange(e.target.value, "Num1",this.props.index)}></Input>} />
                                                <Button style={{ borderRadius: "100px" }} onClick={event => event.preventDefault()}>+</Button>
                                                <Popup content="for example:1+1" trigger={<Input type="number" min={1} max={10} value={this.props.form.Num2} onChange={(e) => this.props.onChange(e.target.value, "Num2",this.props.index)}></Input>} /></Form.Input> :
                                            <Form.Input label="Details">
                                                <Popup content="for example:3 In 100$" trigger={<Input type="number" min={1} max={10} value={this.props.form.Num1} onChange={(e) => this.props.onChange(e.target.value, "Num1",this.props.index)}></Input>} />
                                                <Button style={{ borderRadius: "100px" }} onClick={event => event.preventDefault()}>In</Button>
                                                <Popup content="for example:3 In 100$" trigger={<Input type="number" min={1} max={1000000} value={this.props.form.Num2} onChange={(e) => this.props.onChange(e.target.value, "Num2",this.props.index)}></Input>} /></Form.Input>}
                                   
                                                {this.props.index === "club_members"?<Form.Input type="date" label="Expire Date"  min={(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1).toISOString().split('T')[0])} value={this.props.form.ExpireDate} onChange={(e) => this.props.onChange(e.target.value, "ExpireDate",this.props.index)}>
                                     </Form.Input>:this.props.index === "new"?
                                      <Popup content="for example : the lottery is valid for 2 month" trigger={<Form.Input type="number" label="Valid Time" value={this.props.form.Expiration} onChange={(e) => this.props.onChange(e.target.value, "Expiration",this.props.index)}>
                                     </Form.Input>}></Popup>:""}
                                </Form.Group>
                            </Grid.Row>
                            <Grid.Row>
                                <Form.TextArea label="Addition" type="text" placeholder="Addition" maxLength={50} value={this.props.form.Addition} onChange={(e) => this.props.onChange(e.target.value, "Addition",this.props.index)}></Form.TextArea></Grid.Row></Grid.Column></Grid>
                            </Form>
                            </div >
        )
    }
}
export default Lotery;
