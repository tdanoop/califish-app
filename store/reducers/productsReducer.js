const initialState = {
    products : 'Initial check Value',
    loading:false
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS":
            return { products: action.payload, loading: false };
        case "LOADING":
            return { ...state, loading: true }
        default:
            return state;
    }

}

export default productReducer;