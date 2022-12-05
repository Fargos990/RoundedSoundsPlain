//Stale
const API_KEY = '92b82c4c86b97fc11d5eea3c5f3e51fe'
const LINK = 'https://ws.audioscrobbler.com/';

//Dostanie wszystkich kontenerow gdzie moga przebywac piosenki
const holders : HTMLCollection = document.getElementsByClassName("container__musicHolder__content__holder");

//Zmienne
let searchQuery : string = 'painted dreams'


/**
 * Szukanie muzyki na podstawie wpisanego panstwa
 * 
 * @param {*} countryName nazwa panstwa ktorego szukamy
 */
const getTopCountryTracks = (countryName : string)=>
{
    
    fetch(`${LINK}/2.0/?method=geo.gettoptracks&country=${countryName}&api_key=${API_KEY}&format=json&limit=6`).then((response)=>
    {
        response.json().then((data)=>
        {
            //Dostanie danych piosenek
            for(let i = 0; i < holders.length; i++)
            {
                //Ustawienie ich okladek, tytulu i wykonwacow
                (holders[i].children[0].children[0] as HTMLImageElement).src = `https://picsum.photos/seed/${data.tracks.track[i].artist.name}/110`;
                (holders[i].children[1].children[0] as Element).innerHTML = data.tracks.track[i].name;
                (holders[i].children[2] as HTMLParagraphElement).innerHTML = data.tracks.track[i].artist.name;
                
            }
            //Zapisanie do localstorage z zamyslem pozniejszego wykorzystania
            localStorage.setItem('topTracks',JSON.stringify(data.tracks.track));
            
            
        })
    })
}

//Wykonanie funkcji
getTopCountryTracks('poland');

//Zobacz index.html, chodzi o to zeby dostac index elemntu i zapisac go do pozniejszego uzytku w localstorage
/**
 * Zapisuje indeks obiektu w local storage
 * 
 * 
 * @param {*} index indeks obiektu, na ktorym funkcja jest wywolywana 
 */
function whichElement(index : number)
{
    localStorage.setItem("indexOfItem",JSON.stringify(index));
}
