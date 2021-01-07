import axios from 'axios';
export const getEnterprise = (mail, password) => {
    return dispatch => {
        dispatch({ type: "LOADING", payload: true })
        axios.get(`http://localhost:64430/api/Enterprises?password=${password}&email=${mail}`).then(x => {
            dispatch({ type: "LOADING", payload: false });
            dispatch({ type: "MESSAGE", payload: x.data });
        }).catch(x => {
            dispatch({ type: "LOADING", payload: false })
            dispatch({ type: "ERROR", payload: x.response.data.Message });
        })
    }
}
export const getEnterpriseById = (id) => {
    return dispatch => {
        dispatch({ type: "LOADING", payload: true })
        axios.get(`http://localhost:64430/api/Enterprises?enterpId=${id}`).then(x => {
            dispatch({ type: "SELECT_ENTERPRISE", payload: x.data });
            dispatch({ type: "LOADING", payload: false });
        }).catch(x => {
            dispatch({ type: "LOADING", payload: false })
            dispatch({ type: "ERROR", payload: x.response.data.Message });
        })
    }
}
export async function updateCard (card) {
        axios.put(`http://localhost:64430/api/EnterpCards`, card).then(x => {
         //   console.log(x)
        }).catch(x => {
          //  console.log(x)
        });
}
export async function postNewCard(card) {
    axios.post(`http://localhost:64430/api/EnterpCards`, card).then(x => {
        return x;
    }).catch(x => {
        throw x;
    });
}
export const getCards = (id) => {
    return dispatch => {
        dispatch({ type: "LOADING", payload: true });
        axios.get(`http://localhost:64430/api/EnterpCards?id=${id}`).then(x => {
            dispatch({ type: "SELECT_CARDS", payload: x.data });
            dispatch({ type: "LOADING", payload: false });
        }).catch(x => {
            dispatch({ type: "LOADING", payload: false })
            dispatch({ type: "ERROR", payload: x.response.data.Message });
        });
    }
}
export const getAllCards = () => {
    return dispatch => {
        axios.get(`http://localhost:64430/api/EnterpCards`).then(x => {
            // dispatch({ type: "LOADING", payload: false });
            //console.log(x)
            dispatch({ type: "SELECT_ALL_CARDS", payload: x.data });
        }).catch(x => {
            // dispatch({ type: "LOADING", payload: false })
            dispatch({ type: "ERROR", payload: x.response.data.Message });
        });
    }
}


// export const postNewCard = (card, lotteries, enterpId) => {
//     return dispatch => {
//         dispatch({ type: "LOADING", payload: true })
//         console.log(card, lotteries, enterpId)
//         const data = { ...card };
//         data['Lotery'] = lotteries;
//         data['EnterpId'] = enterpId;
//         axios.post(`http://localhost:64430/api/EnterpCards`, data).then(x => {
//             // this.props.history.replace('clearing');
//         }).catch(x => {
//             dispatch({ type: "ERROR", payload: x.response.data.Message });
//         });
//     }
// }
