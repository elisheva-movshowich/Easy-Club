import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import Card from './Card';
import Lotery from './Lotery';
import { Button, List } from 'semantic-ui-react';
import "../Cards/Cards.css"
class Cards extends Component {
    state = {
        cards: [],
        loading: true,
        value: "loading..."
    }
    componentDidMount() {
        this.setState({ loading: true });
        axios.get(`http://localhost:64430/api/ClubCards?id=${this.props.user.C_id}`).then(res => {
            this.setState({ cards: res.data })
            this.setState({ loading: false });
        }).catch(x => {
            this.setState({ value: x.response.data.Message })
        })
    }
    render() {
        return <div className="wrapper_comp">
            <h1>| My Club Cards |</h1>
            {this.state.cards !== null ?
                this.state.cards.map((x, i) => {
                    return <div key={i} className="wrapper-user-card">
                        <div className="user-card">
                            <Card name={x.Card['Name']}
                                expire={x.Card['ExpireDate']}
                                Img={x.Card['Img']}
                                type={x.Card['Type']}
                                points={x.Card['Points']}></Card>
                            <div className="lotteries">
                                <List>
                                    {x.Lottery.length !== 0 ? x.Lottery.map((y, j) => {
                                        return <Lotery key={j}
                                            Type={y.Type}
                                            Num1={y.Num1}
                                            Num2={y.Num2}
                                            SumType={y.SumType}
                                            Sum={y.Sum}
                                            LoteryType={y.LoteryType}
                                            Addition={y.Addition}
                                            Expiration={y.Expiration}
                                            ExpireDate={y.ExpireDate}
                                        >
                                        </Lotery>
                                    }) : <div className="lottery">No lottery was found</div>}
                                </List></div>
                            <a href={x.Card['Url']}>
                                <Button className="cardbutton" id="realization">
                                    For realization<br></br>in web side</Button>
                            </a>
                        </div> </div>
                })
                : "No Results"
            }

        </div>

    }
}
const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}
export default connect(mapStateToProps)(Cards);