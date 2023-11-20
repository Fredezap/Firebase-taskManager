import APIrequest from './axios.config';

export default function GetRandomJoke () {
        return APIrequest.get('/', {
            validateStatus: function (status) {
              return status < 500; // Resolve only if the status code is less than 500
            }
        })
    }