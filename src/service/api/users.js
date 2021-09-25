import axios from "axios";


export const getAllUsersApiCall = async () => {
    try {
        const response = await axios.get('/user/')
        
        return response.data;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export const getUserInfoApiCall = async (phone) => {
    try {
        const response = await axios.get(`/user/${phone}/info/`)
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};
