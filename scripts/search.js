//Stale
const form = document.getElementById('form');
const contentHolder = document.getElementsByClassName('container__holder__content')[0]
const API_KEY = '92b82c4c86b97fc11d5eea3c5f3e51fe'
const LINK = 'https://ws.audioscrobbler.com/';

//zmienne
let artist = '';
let title = '';

const createSongHolder = (song) =>
{
    const a = document.createElement('a');
    a.innerHTML = 'Check Full Song';
    a.href = song.url;
    a.target = '_blank';

    //stworzenie strukutry elemntu ktory bedzie trzymal dane muzyki    
    const title = document.createElement('h2')
    title.innerHTML = song.name
    
    const author = document.createElement('div')
    author.innerHTML = song.artist;
    author.className = 'container__holder__content__block__music__author'

    const image = document.createElement('img')
    image.className = 'container__holder__content__block__music__frame__image'
    image.src = `https://picsum.photos/seed/${song.artist}/110`
    image.alt = 'thumbnail'

    const titleHolder = document.createElement('div');
    titleHolder.className = 'container__holder__content__block__music__title'
    titleHolder.appendChild(title);

    const imageHolder = document.createElement('figure')
    imageHolder.className = 'container__holder__content__block__music__frame'
    imageHolder.appendChild(image);

    const musicBlock = document.createElement('div')
    musicBlock.className = 'container__holder__content__block__music'
    musicBlock.appendChild(imageHolder);
    musicBlock.appendChild(titleHolder)
    musicBlock.appendChild(author)
    musicBlock.appendChild(a)

    const block = document.createElement('div')
    block.className = 'container__holder__content__block'
    block.appendChild(musicBlock);

    if(contentHolder.children.length > 0)
    {
        contentHolder.removeChild(contentHolder.children[0]);
    }
    
    contentHolder.appendChild(block);
}


//szukanie muzyki po tytule
const searchForMusicByTitle = (searchFor) =>
{
    fetch(`${LINK}/2.0/?method=track.search&track=${searchFor}&api_key=${API_KEY}&format=json&limit=1`).then((response)=>
    {
        response.json().then((data)=>
        {
            const song = data.results.trackmatches.track[0];
            console.log(data.results.trackmatches.track[0]);
            createSongHolder(song);
    
        })
    })
}

//szukanie muzyki po autorze i tytule
const searchForMusicByTitleAndAuthor = (searchFor, artist) =>
{
    fetch(`${LINK}/2.0/?method=track.search&track=${searchFor}&arist=${artist}&api_key=${API_KEY}&format=json&limit=1`).then((response)=>
    {
        response.json().then((data)=>
        {
            const song = data.results.trackmatches.track[0];
            console.log(data.results.trackmatches.track[0]);
            createSongHolder(song);
    
        })
    })
}


//Wyslanie formularzu, zdobycie danych od uzytkownika
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    //Jesli wartosc tytul jest null to zrob nic
    if(document.getElementById('title').value == '')
    {
        return;
    }
    
    if(document.getElementById('artist').value != '')
    {
        console.log('hlao')
        searchForMusicByTitleAndAuthor(document.getElementById('title').value,document.getElementById('artist').value)
    }
    else
    {
        searchForMusicByTitle(document.getElementById('title').value)
    }
    
})



