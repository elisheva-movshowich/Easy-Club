import * as actionName from './actionTypes'
const initalState = {
    enterprise: null,
    loadingE: false,
    error: "",
    message: null,
    cards: null,
    allCards: null,
    indexedCard:null,
}
const rootReducer = (state = initalState, action) => {
    switch (action.type) {
        case actionName.selectEnterprise:
            return {
                ...state,
                enterprise: action.payload
            }
        case actionName.selectCards:
            return {
                ...state,
                cards: action.payload
            }
        case actionName.error:
            return {
                ...state,
                error: action.payload
            }
        case actionName.loading:
            return {
                ...state,
                loadingE: action.payload
            }
        case actionName.message:
            return {
                ...state,
                message: action.payload
            }
        case actionName.cleanEnterpriseState:
            return {
                ...state,
                enterprise: null,
                loadingE: false,
                error: "",
                message: null,
                cards: null,
                allCards: null,
                indexedCard:null,
            }
        case actionName.selectAllCards:
            return {
                ...state,
                allCards: action.payload,
            }
            case actionName.selectIndexedCard:
                return {
                    ...state,
                    indexedCard: action.payload,
                }
        default: return state
    }
}
export default rootReducer;
