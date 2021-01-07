import React, { Component } from 'react'
import { Loader, Dimmer, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';
import { getEnterpriseById } from "../../../Store/actions/EnterpriseAction";
import { connect } from 'react-redux'
class Main extends Component {
    state = {
        enterpId: null,
        permission: false,
        timeIsHoverError: "",

    }

    componentDidMount() {
        var search = this.props.location.search;
        var params = new URLSearchParams(search);
        var key = params.get('key');
        axios.get(`http://localhost:64430/api/SendMail?key=${key}`).then(x => {
            this.setState({ enterpId: x.data, permission: true }); 
            this.props.selectEnterprise(x.data);
            this.props.history.replace("/enterprises/enterpCards")
        }).catch(x=>{
            this.props.setLoading(false);
            this.setState({ timeIsHoverError: x.response.data.Message, permission: false });
        });
        
    }
    render() {
        return (
            <div>
                {!this.state.permission ?
                    <Message size='massive' style={{ textAlign: "center", position: "absolute", top: "30%", width: "80%", marginLeft: "10%", border: "none" }}>
                         <Message.Header>Error!</Message.Header>
                        <p>{this.state.timeIsHoverError}</p>
                    </Message> : null}
                <Dimmer id='dimmer' active={this.props.loading ===true} inverted='false'>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: state.enterprise.loadingE
    }
}
const mapDispatchToProps = dispatch => {
    return {
        selectEnterprise: (id) => dispatch(getEnterpriseById(id)),
        setLoading: (status) => dispatch({ type: "LOADIND", payload: status })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);
