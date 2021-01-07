import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Button, Confirm ,Dimmer,Loader} from 'semantic-ui-react';
import { connect } from 'react-redux'
class Report extends Component {
    state = {
        input: {
            value: "",
            pattern: /^[0-9]*$/,
        },
        open: false,
        cancel: false,
        error:true,
        loading: false,
        card:{}
    }
    onChangeHendler = (e) => {
        const inputChanged = { ...this.state.input };
        if (!inputChanged["pattern"].test(e.target.value)) {
            e.target.value = inputChanged["value"]
        }
        else
            inputChanged["value"] = e.target.value;
        this.setState({ input: inputChanged })
    }
    open = () => {
       this.setState({error:true});
        if (this.state.input["value"] === "") {
            document.getElementById("message").innerHTML = "This is a required field"
        }
        else{
            this.setState({error:false}); 
             document.getElementById("message").innerHTML = ""
        this.setState({ open: true });}
    }
    ok = () => {
        document.getElementById("input").value = ""
        this.setState({loading:true})
        ///מעתיקה לאוביקט
        // axios.get(`http://localhost:64430/api/ClubCards?id=${this.state.input["value"]}`).then(x => {
        //     this.setState({card:x.data})
        //     console.log(x.data);
        //   }).catch(x => console.log("erorr"));

        
                //ןמוחקת אותו
        // axios.delete(`http://localhost:64430/api/ClubCards?id=${this.state.input["value"]}&userId=${this.props.user.UserId}`).then(x => {
        //     document.getElementById("message").innerHTML = x.response.data.Message;
        //     // document.getElementById("new").style.display = "block"
        // }
        // ).catch(x => { document.getElementById("message").innerHTML = x.response.data.Message; document.getElementById("message").style.color = "red" }
        // );
        this.setState({ open: false, cancel: true ,loading:false});
        const inputChanged = { ...this.state.input };
        inputChanged["value"] ="";
        this.setState({ input: inputChanged })
    }
    close = () => this.setState({ open: false })
    issue=()=>{ 
        if (this.state.input["value"] === "") {
            document.getElementById("message").innerHTML = "This is a required field"
        }
        else{
        this.setState({loading:true});
        ///יוצרת חדש
        // axios.post(`http://localhost:64430/api/ClubCards?id=${this.props.user._id}&userId=${this.props.user.UserId}`).then(x => {
        // }
        // ).catch(x => { document.getElementById("message").innerHTML = x.response.data.Message; document.getElementById("message").style.color = "red" }
        // );
        this.setState({loading:false})
        document.getElementById("message").innerHTML="You have been successfully issued  <br> a new card Will be mailed to you at "+this.state.input["value"]
        }
    }
    render() {
        const deleteP = <p className="report">If your card is stolen or lost you can fill in the card code in the field below <br></br>and the ticket will be
        canceled and you will no longer be able to use it<br></br> and it will be possible to purchase a new card that
        will be sent to you by mail</p>
        const newP = <p className="report">your card successfully deleted please enter your address for sending new card</p>
        return (
            <div>
                {!this.state.cancel ? deleteP : newP}

                <Form.Input id="input" className={this.state.error===true?"error":""} placeholder={!this.state.cancel ? "enter id of your card" : "enter your address"} maxLength={5} onChange={e => this.onChangeHendler(e)}></Form.Input>

                <br></br>
                <Button color='teal' onClick={!this.state.cancel ? this.open:this.issue}>
                    {!this.state.cancel ? "cancel" : "Issue new"}  </Button><br></br><br></br><br></br>
                <Confirm
                    header={"Deleting a card"}
                    content={'Are you sure you want to cancel the card? '}
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.ok}
                ></Confirm>
                <div id="message" style={{color:"red"}}></div>
                <Dimmer active={this.state.loading} inverted>
                <Loader size='large'>Loading</Loader>
            </Dimmer>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user.user,
    }
}
export default connect(mapStateToProps, null)(Report);