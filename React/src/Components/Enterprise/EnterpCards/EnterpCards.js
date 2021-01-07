import React, { Component } from 'react'
import "./EnterpCard.css"
import { Button, Item, Icon, Dimmer, Loader } from 'semantic-ui-react';
import "semantic-ui-css"
import EnterpCard from "./EnterpCard"
import { getCards } from "../../../Store/actions/EnterpriseAction";
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
class EnterpCards extends Component {
    componentDidMount() {
        this.props.selectCards(this.props.enterprise.C_id);
    }
    onClick = (e, index) => {
        this.props.selectIndexedCard({ ...this.props.cards[index] });
        this.props.history.replace("/enetrprises/UpdateEnterpCard")
    }
    render() {
        return (
            <div className="wrapper_comp" style={{ textAlign: "center" }}>
                { this.props.cards !== null ? <div>
                    <h1>| My Card/s |</h1>
                    <Item.Group divided className="item-group">
                        {this.props.cards.map((x, i) => {
                            return <EnterpCard onClick={this.onClick} content={x.Type} key={i} img={x.Img} index={i}></EnterpCard>
                        })}   </Item.Group>
                    <NavLink to="/enterprises/newCard">
                        <Button animated="fade" icon labelPosition='left' style={{ color: "white", fontSize: "18px", backgroundColor: "#191a19", width: "35vw", marginBottom: "10vh", marginTop: "20vh", padding: "2vw" }}>
                            <Button.Content visible>Click Here For New Card</Button.Content>
                            <Button.Content hidden>Basic Price : 20$ For A Month</Button.Content>
                            <Icon name="hand point right outline" size="big" className="right-icon"></Icon>
                        </Button></NavLink>
                </div>
                    :
                    <Dimmer id='dimmer' active={this.props.cards === null} inverted='false'>
                        <Loader size='large'>Loading</Loader>
                    </Dimmer>}
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        enterprise: state.enterprise.enterprise,
        cards: state.enterprise.cards,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectCards: (id) => dispatch(getCards(id)),
        selectIndexedCard: (indexedCard) => dispatch({ type: "SELECT_INDEXED_CARD", payload: indexedCard })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EnterpCards);
