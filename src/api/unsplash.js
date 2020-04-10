import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 3MGLBTLbf8wXSVCnrhfYhXu3oKi8KxBZZuI66rfMASQ'
    }
});