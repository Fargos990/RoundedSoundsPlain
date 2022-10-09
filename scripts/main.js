const API_KEY = '92b82c4c86b97fc11d5eea3c5f3e51fe'
const LINK = 'https://ws.audioscrobbler.com/';

const holders = document.getElementsByClassName("container__musicHolder__content__holder");

let dataTab = [];
let searchQuery = 'painted dreams'

const app = ()=>
{

}

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

const getTopCountryTracks =(countryName)=>
{
    
    fetch(`${LINK}/2.0/?method=geo.gettoptracks&country=${countryName}&api_key=${API_KEY}&format=json&limit=6`).then((response)=>
    {
        response.json().then((data)=>
        {
            console.log(data);
            for(let i = 0; i < holders.length; i++)
            {
                holders[i].children[0].children[0].src = `https://picsum.photos/seed/${data.tracks.track[i].artist.name}/110`;
                holders[i].children[1].children[0].innerHTML = data.tracks.track[i].name;
                holders[i].children[2].innerHTML = data.tracks.track[i].artist.name;
                
            }
        })
    })
}

app();

//searchForMusic(searchQuery);
getTopCountryTracks('poland');


















