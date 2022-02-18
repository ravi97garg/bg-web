import axios from 'axios';

export const subscribe = (data) => {
    return axios.post('https://iyf-site.glitch.me/subscribe', data);   
}

export const message = (data) => {
    return axios.post('https://iyf-site.glitch.me/message', data);
}
