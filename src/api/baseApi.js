import axios from 'axios';

const api_url ='http://facebook:9009/api';

const callApiGet = (url) =>{
    let data = axios.get(api_url+url)
    .then(response=>{
        return response.data;
    })
    .catch(error=> console.log(error));
    return data;
}

const callApiPost = (url,params) =>{
    let data = axios.post(api_url+url,params)
    .then(response=>{
        return response.data;
    })
    .catch(error=> console.log(error));
    return data;
}

export {callApiGet,callApiPost};