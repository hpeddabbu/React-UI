import { callApiGet } from "./baseApi";

export const getInitialData =(data)=>{
    return callApiGet('/get');
}