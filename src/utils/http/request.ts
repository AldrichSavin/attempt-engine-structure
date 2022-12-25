export default function request(url: string, options: any) {
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(data => ({ data }))
        .catch(err => ({ err }));
}
