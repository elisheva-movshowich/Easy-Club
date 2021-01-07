import axios from 'axios';
// export async function getUser(mail, password) {
//     return dispatch => {
//         axios.get(`http://localhost:64430/api/Users?password=${password}&email=${mail}`).then(x => {
//             return x;
//         }).catch(x => {
//             throw x;
//         });
//     }
// }
export const getUser = (mail, password) => {
    return dispatch => {
        dispatch({ type: "LOADING", payload: true })
        axios.get(`http://localhost:64430/api/Users?password=${password}&email=${mail}`).then(x => {
           dispatch({ type: "LOADING", payload: false });
           console.log(x.data)
            dispatch({ type: "SELECT_USER", payload: x.data });
        }).catch(x => {
           dispatch({ type: "LOADING", payload: false })
            dispatch({ type: "ERROR", payload: x.response.data.Message });
        })
    }
}