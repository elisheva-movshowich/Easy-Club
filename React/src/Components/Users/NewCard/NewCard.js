import React, { Component } from 'react';
import axios from 'axios';
import { getAllCards } from "../../../Store/actions/EnterpriseAction";
import { connect } from 'react-redux';
import { Input, Dimmer, Loader, Button, Icon} from 'semantic-ui-react';
import "./NewCard.css"
class NewCard extends Component {
    state = {
        loading: false,
        stores: [],
        isFlipped: false,
        index: -1,
        value: '',
        data: [],
    }
    componentDidMount() {
        this.props.selectAllCards();
        this.setState({ data: this.props.allCards })
    }
    componentDidUpdate() {
        if (this.state.data !== null && this.state.data.length === 0 && this.props.allCards.length > 0) {
            this.setState({ data: this.props.allCards })
        }
    }
    onclick = (e, card) => {
        this.setState({ loading: true });
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const data = {};
        data['UserId'] = this.props.user['C_id']
        data['EnterpCardId'] = card.CardId;
        data['BuyDate'] = date;
        data['ExpireDate'] = today.getFullYear() + card['Duration'] + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        axios.post(`http://localhost:64430/api/ClubCards`, data
        ).then(x => {
            this.props.history.replace('/users/clearing')
        }
        ).catch(x => {
            this.setState({ loading: false, errorMessage: x.response.data.Message ,open:true});
            alert(x.response.data.Message)
        });
    }
    search = () => {
        // this.setState({ loading: true });
        // const data = [];
        // for (let x in this.props.allCards) {
        //   var  cnt=0
        //     if (x.Name === this.state.value)
        //     data[cnt++] = x;
        // }
        // this.setState({ data: data, value: '', loading: false })
        this.setState({ loading: true });
        const data = [];
        this.props.allCards.map((x, i) => {
            if (x.Name === this.state.value)
                data[i] = { ...x };
            else
                console.log(x)
        })
        this.setState({ data: data, value: '' })
        this.setState({ loading: false });

    }
    render() {
        return (
            <div className="wrapper_comp">
                <h1>| New Card |</h1>
                <div><Input className="search" placeholder='Search...' value={this.state.value} onChange={e => this.setState({ value: e.target.value })} /><Button.Group><Button icon='search' onClick={this.search}></Button><Button icon='refresh' onClick={e => this.setState({ data: this.props.allCards })}>
                </Button></Button.Group></div>
                <div className="wrap_all_cards">
                    {this.state.data !== null && this.state.data.length !== 0 ?
                        this.state.data.map((x, i) => {
                            return <div className="flip-box" key={i} >
                                <div className="flip-box-inner-new-card" onClick={e => this.onclick(e, x)}>
                                    <div className="flip-box-front-new-card" style={{ backgroundImage: `url(${x.Img})` }}></div>
                                    <div className="flip-box-back-new-card">
                                        <div className="card-name"><h2>{x.Name}</h2></div>
                                        <p className="card-type">{x.Type === "Primium card" ? <Icon circular inverted color="teal" name="star"></Icon> : ""}{" " + x.Type}</p>
                                        <p className="card-cost">{x.Cost + "$"}</p>
                                    </div>
                                </div>
                            </div>
                        })
                        : "No Results"
                    }
                </div>
                <Dimmer active={this.state.loading} inverted>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        allCards: state.enterprise.allCards,
        user: state.user.user,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectAllCards: () => dispatch(getAllCards()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCard);