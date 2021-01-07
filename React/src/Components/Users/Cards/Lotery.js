import React, { Component } from 'react'
import { List, Icon } from "semantic-ui-react"
class lotery extends Component {
    state = {
        num1: null,
        num2: null,
        Addition: null,
        different: null,
    }
    componentDidMount() {
        this.props.Type === 1 ?
        this.props.Expiration!==null?
            this.setState({ different: "* Is valid for " + this.props.Expiration + " month" }): this.setState({ different: null })
            : this.props.Type === 2 ?
                this.setState({ different: null })
                :
                this.props.ExpireDate!==null?
                this.setState({ different: "* Is valid until " + this.props.ExpireDate }):this.setState({ different: null })
        this.props.LoteryType === "Discount" ?
            this.setState({ num1: this.props.Sum, num2: this.props.SumType + "  Discount" })
            : this.props.LoteryType === "Plus Free" ?
                this.setState({ num1: this.props.Num1 + " + ", num2: this.props.Num2 + "  Sale" })
                :
                this.setState({ num1: this.props.Num1 + " in ", num2: this.props.Num2 + "  $" })

        this.setState({ Addition: this.props.Addition })
    }
    render() {
        return <List.Item  className="lottery-list">
            <List.Icon  >
                <Icon circular inverted color="teal" size="big" name={this.props.Type === 1 ? "user plus" : this.props.Type === 2 ? "birthday" : "credit card outline"}></Icon>
            </List.Icon>
            <List.Content>
                <List.Header className="list-header">{this.props.Type === 1 ? "New Member" : this.props.Type === 2 ? "Birthday" : "Club Members"}</List.Header>
                <div className="content-first"> You have {this.state.num1}{this.state.num2}</div>
                <div className="content-second"> {this.state.Addition!==null?this.state.Addition:"" }</div>
                <div className="content-third">{this.state.different!==null?this.state.different:""}</div>
            </List.Content>
        </List.Item>
    }
}
export default lotery;