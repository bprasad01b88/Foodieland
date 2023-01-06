import axios from "axios";
import { blogs } from "../config";

const apiEndPoint = blogs + 'subscribe';

export function setSubscription(user){
    return axios.post(apiEndPoint, {  
        email : user.email,
    });
}