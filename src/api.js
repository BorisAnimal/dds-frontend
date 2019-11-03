export default class ApiService {
    _apiBase = process.env.NODE_ENV === 'development' ? 'http://192.168.1.134:9000' : "https://api.atc.mustafin.dev/api/v1";

    register = async (data) => {
        console.log("Started request with: ", data);
        const url = "/users/register";
        console.log(data);
        const dataToSend = {
            username: data.name, // XXX
            name: data.name,
            surname: data.name, // XXX
            phone: "88005553535", // XXX
            address: data.email,
            password: data.password
        };

        const res = await fetch(`${this._apiBase}${url}`, {
            mode: 'no-cors',
            method: "POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(dataToSend)
        });

        if (res.ok) {
            return res.json();
        } else {
            throw new Error(`Couldn't fetch ${url}, received ${res.status}, ${res.messageerror}, ${res.message}`);
        }
    }
}
