import axios from "axios";
import { blogs } from "../config";

const apiEndPoint = blogs;

export const getAllBlogs = () => {
 return axios.get(apiEndPoint + 'getAllBlog');
}

export const getAllPopularBlogs =() => {
    return axios.get(apiEndPoint + 'popularBlogs');
}

export const getSearchQuery = (query) => {
    return axios.get(apiEndPoint + 'searchBlog?key=' + query );
}

export const getOneBlogPost = (blogId) => {
    return axios.get(apiEndPoint + 'getBlog?id=' + blogId);
}