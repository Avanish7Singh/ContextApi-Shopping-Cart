export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, { ...action.payload, qyt: 1 }] }

        case "REMOVE_FROM_CART":
            return { ...state, cart: state.cart.filter((a) => a.id !== action.payload.id) }

        case "QTY_CHANGE":
            return { ...state, cart: state.cart.filter((a) => a.id === action.payload.id ? (a.qty = action.payload.qty) : a.qty), }
        default:
            return state;
    }
}

export const productReducer = (productState, action) => {

    switch (action.type) {
        case "ASCENDING_DESCENDING":
            return { ...productState, sort: action.payload }

        case "FILTER_BY_STOCK":
            return { ...productState, byStock: !productState.byStock }

        case "FILTER_BY_RATING":
            return { ...productState, byRating: action.payload }

        case "FILTER_BY_DELIVERY":
            return { ...productState, byFastDelivery:!productState.byFastDelivery }

        case "FILTER_BY_SEARCH":
            return { ...productState, querySearch: action.payload }

        case "FILTER_BY_CLEAR":
            return {
                byStock: false,
                byFastDelivery: false,
                querySearch: "",
                byRating: 0,

            }

        default:
            return productState;
    }
}