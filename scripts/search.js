//Stale
const submit = document.getElementById('submit');
const API_KEY = '92b82c4c86b97fc11d5eea3c5f3e51fe'
const LINK = 'https://ws.audioscrobbler.com/';

let artist = '';
let title = '';

const searchForMusic = (searchFor) =>
{
    fetch(`${LINK}/2.0/?method=track.search&track=${searchFor}&api_key=${API_KEY}&format=json&limit=1`).then((response)=>
    {
        response.json().then((data)=>
        {
            console.log(data.results.trackmatches.track[0]);
        })
    })
}

submit.addEventListener('submit',(e)=>
{
    e.preventDefault();
})



