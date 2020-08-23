import axios from 'axios';

export const products = () => {
    return { type: 'PRODUCTS', payload: 'Checkoo' };
}

export const loading = () => {
    return { type: 'LOADING' };
}

export const getProducts = () => {

    console.log('test =>');
    
    return async dispatch => {
        dispatch({ type: 'LOADING' });
        const response = await axios.get('http://localhost:4000/user');

        dispatch({ type: 'PRODUCTS', payload: response.data[0].location })
    }
}

async function getUser() {
    try {
        const response = await axios.get('/user?ID=12345');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}