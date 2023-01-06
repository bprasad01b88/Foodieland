import axios from "axios";
import { blogs } from "../config";


const apiEndPoint = blogs + 'signIn';

export function setLogin(user){
    return axios.post(apiEndPoint, {
        email : user.email,
        password : user.password,
    });
}