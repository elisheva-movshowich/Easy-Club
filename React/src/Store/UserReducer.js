import * as actionName from './actionTypes'
const initalState = {
    user: null,
    error: "",
    loadingU: false
}

const rootReducer = (state = initalState, action) => {
      console.log(action)
    switch (action.type) {
        case actionName.selectUser:
            return {
                ...state,
                user: action.payload,
                loadingU:false
            }
        case actionName.error:
            return {
                ...state,
                error: action.payload,
                loadingU:false
            }
        case actionName.loading:
            return {
                ...state,
                loadingU: action.payload
            }
        case actionName.cleanUserState:
            return {
                ...state,
                user: null,
                error: "",
                loadingU: false
            }
        default: return state
    }

}
export default rootReducer;