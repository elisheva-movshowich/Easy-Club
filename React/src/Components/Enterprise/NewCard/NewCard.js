import React, { Component } from 'react'
import Lotery from './Lotery';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux'
import { Button, Form, Header, Divider, Dimmer, Loader} from 'semantic-ui-react';
import CardDetails from "./CardDetails"
import { postNewCard, updateCard } from "../../../Store/actions/EnterpriseAction"
import onSignUp from "../../Service/onSubmit";
import "./NewCard.css"
class NewCard extends Component {
    state = {
        lotery: {
            new: {
                header: "Lottery For Newers",
                active: false,
                LoteryType: "Discount",
                Sum: "",
                SumType: "$",
                Num1: "",
                Num2: "",
                Addition: "",
                ExpireDate: "",
                Type: 1,
                Expiration: ""
            },
            birthday: {
                header: "Lottery For Birthday",
                active: false,
                LoteryType: "Discount",
                Sum: "",
                SumType: "$",
                Num1: "",
                Num2: "",
                Addition: "",
                ExpireDate: "",
                Type: 2,
                Expiration: "",
            },
            club_members: {
                header: "Lottery For Club Members",
                active: false,
                LoteryType: "Discount",
                Sum: "",
                SumType: "$",
                Num1: "",
                Num2: "",
                Addition: "",
                ExpireDate: "",
                Type: 3,
                Expiration: "",
            },
        },
        cardError: false,
        cardForm: {
            Cost: {
                valid: true,
                label: "Price For Customer",
                icon: "$",
                type: 'number',
                step: 5,
                text: "Price For Customer",
                value: "",
                validation: {
                    required: true,
                }
            },
            CountPoints: {
                valid: true,
                label: "CountPoints",
                icon: " = 1 $",
                type: 'number',
                text: "CountPoints",
                value: "",
                validation: {
                    required: true,
                }
            },
            Type: {
                valid: true,
                options: [{ key: "Basic", text: 'Basic card', value: 'Basic card' },
                { key: "Primium", text: 'Primium card', value: 'Primium card' }],
                label: "Card Type",
                text: "Card Type",
                value: "",
                validation: {
                    required: true,
                },

            },
            Img: {
                valid: true,
                label: 'Card Image',
                value: "",
                text: "Img",
                validation: {
                    required: true,
                    img: true,
                }
            },
            Duration: {
                valid: true,
                label: 'Valid Time',
                value: "",
                step: 1,
                type: "number",
                text: "Valid Time",
                validation: {
                    required: true,
                }
            },
            FileName: {
                valid: true,
                validation: {
                    required: true,
                },
                value: ""
            },
        },
        defaultValue: 0,
        update:true
    }
    componentDidUpdate(){
        console.log("fsgsfhgs",this.state.update,this.state.update===true,this.props.location.pathname)
        if (this.props.location.pathname ===  "/enterprises/newCard"&&this.state.update===true) {
            console.log("if    sfds") 
       
        this.setState({update:false,lotery:{ 
             new: {
            header: "Lottery For Newers",
            active: false,
            LoteryType: "Discount",
            Sum: "",
            SumType: "$",
            Num1: "",
            Num2: "",
            Addition: "",
            ExpireDate: "",
            Type: 1,
            Expiration: ""
        },
        birthday: {
            header: "Lottery For Birthday",
            active: false,
            LoteryType: "Discount",
            Sum: "",
            SumType: "$",
            Num1: "",
            Num2: "",
            Addition: "",
            ExpireDate: "",
            Type: 2,
            Expiration: "",
        },
        club_members: {
            header: "Lottery For Club Members",
            active: false,
            LoteryType: "Discount",
            Sum: "",
            SumType: "$",
            Num1: "",
            Num2: "",
            Addition: "",
            ExpireDate: "",
            Type: 3,
            Expiration: "",
        }}, cardForm: {
            Cost: {
                valid: true,
                label: "Price For Customer",
                icon: "$",
                type: 'number',
                step: 5,
                text: "Price For Customer",
                value: "",
                validation: {
                    required: true,
                }
            },
            CountPoints: {
                valid: true,
                label: "CountPoints",
                icon: " = 1 $",
                type: 'number',
                text: "CountPoints",
                value: "",
                validation: {
                    required: true,
                }
            },
            Type: {
                valid: true,
                options: [{ key: "Basic", text: 'Basic card', value: 'Basic card' },
                { key: "Primium", text: 'Primium card', value: 'Primium card' }],
                label: "Card Type",
                text: "Card Type",
                value: "",
                validation: {
                    required: true,
                },

            },
            Img: {
                valid: true,
                label: 'Card Image',
                value: "",
                text: "Img",
                validation: {
                    required: true,
                    img: true,
                }
            },
            Duration: {
                valid: true,
                label: 'Valid Time',
                value: "",
                step: 1,
                type: "number",
                text: "Valid Time",
                validation: {
                    required: true,
                }
            },
            FileName: {
                valid: true,
                validation: {
                    required: true,
                },
                value: ""
            },
        }, defaultValue: 0,})
        }
        
    }
    componentDidMount() {
        if (this.props.location.pathname === '/enetrprises/UpdateEnterpCard') {
            const cardForm = { ...this.state.cardForm };
            for (let x in cardForm) {
                cardForm[x].value = this.props.indexedCard[x];
            }
            this.setState({ cardForm: cardForm,update:true })
            const defaultValue = this.props.indexedCard['Type'] === cardForm['Type'].options[0].value ? 0 : 1;
            this.setState({ defaultValue: defaultValue });
            const lottery = { ...this.state.lotery };
            const arr = this.props.indexedCard.Lotery;
            for (let x in arr) {
                const type = arr[x].Type === 1 ? "new" : arr[x].Type === 2 ? "birthday" : "club_members";
                const myLottery = { ...lottery[type] };
                for (let item in myLottery) {
                    const myarr = { ...arr[x] }
                    if (item !== "header" && item !== "active") {
                        if (item === "ExpireDate") {
                            myLottery[item] = new Date(myarr[item]);
                        }
                        else
                            myLottery[item] = myarr[item];
                    }
                    myLottery.active = true;
                }
                lottery[type] = myLottery;
            }
            this.setState({ lotery: lottery })
        }
        else {
            console.log("else")
            this.setState({
                update:false,
                lotery:{ 
                new: {
               header: "Lottery For Newers",
               active: false,
               LoteryType: "Discount",
               Sum: "",
               SumType: "$",
               Num1: "",
               Num2: "",
               Addition: "",
               ExpireDate: "",
               Type: 1,
               Expiration: ""
           },
           birthday: {
               header: "Lottery For Birthday",
               active: false,
               LoteryType: "Discount",
               Sum: "",
               SumType: "$",
               Num1: "",
               Num2: "",
               Addition: "",
               ExpireDate: "",
               Type: 2,
               Expiration: "",
           },
           club_members: {
               header: "Lottery For Club Members",
               active: false,
               LoteryType: "Discount",
               Sum: "",
               SumType: "$",
               Num1: "",
               Num2: "",
               Addition: "",
               ExpireDate: "",
               Type: 3,
               Expiration: "",
           }},
            cardForm: {
               Cost: {
                   valid: true,
                   label: "Price For Customer",
                   icon: "$",
                   type: 'number',
                   step: 5,
                   text: "Price For Customer",
                   value: "",
                   validation: {
                       required: true,
                   }
               },
               CountPoints: {
                   valid: true,
                   label: "CountPoints",
                   icon: " = 1 $",
                   type: 'number',
                   text: "CountPoints",
                   value: "",
                   validation: {
                       required: true,
                   }
               },
               Type: {
                   valid: true,
                   options: [{ key: "Basic", text: 'Basic card', value: 'Basic card' },
                   { key: "Primium", text: 'Primium card', value: 'Primium card' }],
                   label: "Card Type",
                   text: "Card Type",
                   value: "",
                   validation: {
                       required: true,
                   },
   
               },
               Img: {
                   valid: true,
                   label: 'Card Image',
                   value: "",
                   text: "Img",
                   validation: {
                       required: true,
                       img: true,
                   }
               },
               Duration: {
                   valid: true,
                   label: 'Valid Time',
                   value: "",
                   step: 1,
                   type: "number",
                   text: "Valid Time",
                   validation: {
                       required: true,
                   }
               },
               FileName: {
                   valid: true,
                   validation: {
                       required: true,
                   },
                   value: ""
               },
           }, defaultValue: 0})
           
        }
    }
    onSelectCard = (event, { value }) => {
        this.setState({ trySend: false, cardError: "" })
        const form = { ...this.state.cardForm }
        const input = { ...form["Type"] }
        input.value = value;
        form["Type"] = input
        this.setState({ cardForm: form })
    }
    convertImg = (event) => {
        const file = event.target.files[0];
        if (file) {
            var name = file.name;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.onChangeCard(String(reader.result), "Img")
                this.onChangeCard(name, "FileName")
            }
        }
    }
    onChangeCard = (value, id) => {
        this.setState({ trySend: false, cardError: "" })
        const form = { ...this.state.cardForm }
        const input = { ...form[id] }
        if (input.type === "number") {
            input.value = parseInt(value);
        }
        else {
            input.value = value;
        }
        form[id] = input
        this.setState({ cardForm: form })
    }
    onClick = (event, type) => {
        event.preventDefault();
        const lotery = { ...this.state.lotery };
        const loterySelected = { ...lotery[type] };
        loterySelected.active = !loterySelected.active;
        lotery[type] = loterySelected;
        this.setState({ lotery: lotery })
    }
    //lottery
    onChangeLottery = (value, id, type) => {
        const form = { ...this.state.lotery };
        const loterySelected = { ...form[type] };
        loterySelected[id] = value;
        form[type] = loterySelected;
        this.setState({ lotery: form });
    }
    onSelectLottery = (event, { value }, type) => {
        const form = { ...this.state.lotery };
        const loterySelected = { ...form[type] };
        if (value.length > 1) {
            for (let x in loterySelected) {
                if (x !== "active" && x !== "header" && x !== "Type" && x !== "SumType") {
                    loterySelected[x] = "";
                }
            }
            loterySelected.LoteryType = value;
        }
        else
            loterySelected.SumType = value;
        form[type] = loterySelected;
        this.setState({ lotery: form });
    }
    //main form
    onSubmit = () => {
        const form = { ...this.state.cardForm }
        const obj = onSignUp(form)
        if (obj === null) {
            const card = {}
            for (let x in this.state.cardForm) {
                card[x] = this.state.cardForm[x].value;
            }
            const data = { ...card };
            const lottery = []
            var cnt = 0;
            for (let x in this.state.lotery) {
                if (this.state.lotery[x].active === true)
                    lottery[cnt++] = { ...this.state.lotery[x] };
            }
            data['Lotery'] = [...lottery];
            data['EnterpId'] = this.props.enterprise.C_id;
            if (this.props.location.pathname === '/enetrprises/UpdateEnterpCard') {
                data['C_id'] = this.props.indexedCard.C_id;
                this.props.loadingNewCard(true);
                updateCard(data).then(x => {
                    this.props.loadingNewCard(false);
                    this.props.history.replace("/enterprises/enterpCards")
                    alert("updated")
                }).catch(x => {
                    this.props.errorFiled(x.response.data.Message)
                    this.props.loadingNewCard(false); 
                })
            }
            else {
                this.props.loadingNewCard(true);
                postNewCard(data).then(x => {
                    this.props.loadingNewCard(false);
                    this.props.history.replace('clearing');
                }).catch(x => {
                    this.props.loadingNewCard(false);
                    this.props.errorFiled(x.response.data.Message)
                })
            }
        }
        else {
            this.setState({ cardForm: form, trySend: true, cardError: obj.error });
        }
    }
    render() {
        const array = [];
        for (let x in this.state.lotery) {
            array.push({ id: x, config: this.state.lotery[x] })
        }
        return (
            <div className="wrapper_comp">
                <h1>{this.props.location.pathname === '/enetrprises/UpdateEnterpCard' ? "Update Card" : "New Card"}</h1>
                <CardDetails trySend={this.state.trySend} defaultValue={this.state.defaultValue} location={this.props.location.pathname} error={this.state.cardError} convertImg={this.convertImg} onSelect={this.onSelectCard} onChange={this.onChangeCard} form={{ ...this.state.cardForm }}></CardDetails>
                <Header as='h2' color='teal' textAlign='left' className="new-card-header"> Lotteries </Header>
                <Form onSubmit={this.onSubmit}>
                    {array.map((x) => {
                        return <div key={x.id}>
                            <Divider></Divider>
                            <Header as='h4' color='teal' textAlign='left' className="lottery-header">
                                <Button id="lottery-button" className="cardbutton" onClick={event => this.onClick(event, x.id)}>{x.config.active ? "Delete" : "Insert"}</Button>
                                {x.config.header}
                            </Header>
                            {x.config.active === true ? <Lotery index={x.id} onSelect={this.onSelectLottery} onChange={this.onChangeLottery} form={x.config}></Lotery> : ""}
                        </div>
                    })}
                    <Button type="submit" color='teal' id="submit-new-card" className="cardbutton">{this.props.location.pathname === '/enetrprises/UpdateEnterpCard' ? "Save Changes" : "Submit And Pay"}</Button>
                </Form>
                <Dimmer id='dimmer' active={this.props.enterp_loading} inverted='false'>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
                <div className="new-card-error">{this.props.error}</div>
                <div className="new-card-error">{this.state.cardError}</div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        enterprise: state.enterprise.enterprise,
        enterp_loading: state.enterprise.loadingE,
        error: state.enterprise.error,
        cards: state.enterprise.cards,
        indexedCard: state.enterprise.indexedCard,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        loadingNewCard: (status) => dispatch({ type: "LOADING", payload: status }),
        errorFiled: (errorMsg) => dispatch({ type: "ERROR", payload: errorMsg }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCard);
