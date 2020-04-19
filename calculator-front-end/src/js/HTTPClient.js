const http = class HttpClient {

    constructor() { }

    async post(url, data) {
        return new Promise((resolve, reject) => {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = (evt) => {
                if (evt.currentTarget.readyState === 4 && evt.currentTarget.status === 200) {
                    try {
                        const response = JSON.parse(evt.currentTarget.response);
                        resolve(response);
                    } catch (exception) {
                        reject(exception);
                    }
                }
            };
            xhttp.open('POST', url, true);
            xhttp.send(data);
        });
    }
}

export default http;