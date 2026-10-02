import APIConfig from "../config/API.config.ts";
import axios from 'axios';

const APIService = {
    validUUID: (uuid: string): Promise<any> => {
        return new Promise((resolve, reject) => {

            const url = `${APIConfig.path}valid/${uuid}`;

            axios.get(url,{timeout:5000}).then((response) => {

                console.log('==API RESPONSE==', response.data);
                resolve(response.data);

            }).catch((error) => {
                console.log('Error reading the API', error);
                reject(error);
            });

        });
    }
};

export default APIService;
