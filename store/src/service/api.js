import axios from 'axios';

const URL = 'http://localhost:8000';

export const addItem = async (data) => {
    try {
        return await axios.post(`${URL}/add`, data);

    } catch (error) {
        console.log('Error while calling add Item api', error);
    }
}
export const getItems = async () => {
    try {
        return await axios.get(`${URL}/all`);
    }
    catch (error) {
        console.log('Erro while calling get Items api', error);
    }
}
export const getItem = async (id) => {

    try {
        return await axios.get(`${URL}/${id}`);

    }
    catch (error) {
        console.log('Error while calling getItem api', error);
    }
}
export const editItem = async (item, id) => {
    try {
        return await axios.put(`${URL}/${id}`, item);

    } catch (error) {
        console.log('Error while calling edit Item api', error);
    }
}
export const deleteItem = async (id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    }
    catch (error) {
        console.log('Error while calling delete Item api', error);

    }
}