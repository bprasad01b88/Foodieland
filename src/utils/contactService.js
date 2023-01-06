import axios from "axios";
import { blogs } from "../config";

const apiEndPoint = blogs + 'addContactDetails';

export function setContact(user){
    return axios.post(apiEndPoint, {
        name : user.name,
        email : user.email,
        subject : user.subject,
        enquiryType : user.enquiryType,
        message : user.message,
    });
}
