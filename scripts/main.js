const app = () =>
{
    const CLIENT_ID = 'f4fadefe8da54c0a9e8831a590bd3214'
    const REDIRECT_URI = 'http://127.0.0.1:5500/'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSE_TYPE = 'token'

    const loginButton = document.createElement("a");
    loginButton.innerText = "Login"
    loginButton.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
    document.getElementsByClassName('container')[0].appendChild(loginButton);
}

app();