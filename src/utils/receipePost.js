import axios from "axios";
import { blogs } from "../config";

const apiEndPoint = blogs;

export const getAllReceipes = () => {
    return axios.get(apiEndPoint + 'v1/getAllRecipes');
}

export const getPopularReceipes = () => {
    return axios.get(apiEndPoint + 'popularRecipes')
}

export const getSearchReceipe = (query) => {
    return axios.get(apiEndPoint + 'searcRecipe?key=' + query)
}

export const getOneReceipePost = (receipeId) => {
    return axios.get(apiEndPoint + 'recipeDetails?id=' + receipeId);
}