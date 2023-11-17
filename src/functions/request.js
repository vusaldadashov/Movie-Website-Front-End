var server_url = "https://movie-website-api-jf1v.onrender.com"
export async function postRequest (url,body) {
    return fetch(server_url + url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
}

export async function getRequest (url, params) {
    let fullurl = server_url + url
    if(params !== {}) fullurl += '?' + new URLSearchParams(params)
    return fetch(fullurl, {
        method: "GET",
        credentials: "include",
        headers: {
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
}
