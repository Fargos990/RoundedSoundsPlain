//stale
const form : HTMLElement = document.getElementById('form');
const contentHolder = document.getElementsByClassName('container__holder__content')[0]
const API_KEY : string = '92b82c4c86b97fc11d5eea3c5f3e51fe'
const LINK : string = 'https://ws.audioscrobbler.com/';

//zmienne
let artist : string = '';
let title : string = '';

/**
 * Tworzy blok znacznikow, ktorzy maja byc jako kontener dla elemntow piosenki
 * 
 * @param {string} piosenka przekazujemy z bezposrednio z api
 */
const createSongHolder = (song: { url: string; name: string; artist: string; }) =>
{
    const a : HTMLAnchorElement = document.createElement('a');
    a.innerHTML = 'Check Full Song';
    a.href = song.url;
    a.target = '_blank';

    //stworzenie strukutry elemntu ktory bedzie trzymal dane muzyki    
    const title : HTMLElement = document.createElement('h2')
    title.innerHTML = song.name
    
    const author : HTMLParagraphElement = document.createElement('p')
    author.innerHTML = song.artist;
    author.className = 'container__holder__content__block__music__author'

    const image : HTMLImageElement = document.createElement('img')
    image.className = 'container__holder__content__block__music__frame__image'
    image.src = `https://picsum.photos/seed/${song.artist}/110`
    image.alt = 'thumbnail'

    const titleHolder : HTMLParagraphElement = document.createElement('p');
    titleHolder.className = 'container__holder__content__block__music__title'
    titleHolder.appendChild(title);

    const imageHolder : HTMLElement = document.createElement('figure')
    imageHolder.className = 'container__holder__content__block__music__frame'
    imageHolder.appendChild(image);

    const musicBlock : HTMLElement = document.createElement('section')
    musicBlock.className = 'container__holder__content__block__music'
    musicBlock.appendChild(imageHolder);
    musicBlock.appendChild(titleHolder)
    musicBlock.appendChild(author)
    musicBlock.appendChild(a)

    const block : HTMLElement = document.createElement('section')
    block.className = 'container__holder__content__block'
    block.appendChild(musicBlock);

    if(contentHolder.children.length > 0)
    {
        contentHolder.removeChild(contentHolder.children[0]);
    }
    
    contentHolder.appendChild(block);
}


/**
 * Znajduje piosenke po tytule
 * 
 * 
 * @param {string} searchFor wpisujemy tytul piosenki, ktorej szukamy 
 */
const searchForMusicByTitle = (searchFor : string) =>
{
    fetch(`${LINK}/2.0/?method=track.search&track=${searchFor}&api_key=${API_KEY}&format=json&limit=1`).then((response)=>
    {
        response.json().then((data)=>
        {
            const song : { url: string; name: string; artist: string;} = data.results.trackmatches.track[0];
            createSongHolder(song);
    
        })
    })
}

/**
 * Znajduje piosenke po tytule jaki i autorze
 * @param {string} searchFor wpisujemy tytul piosenki 
 * @param {string} artist wpisujemy nazwe artysty
 */
const searchForMusicByTitleAndAuthor = (searchFor : string, artist : string) =>
{
    fetch(`${LINK}/2.0/?method=track.search&track=${searchFor}&arist=${artist}&api_key=${API_KEY}&format=json&limit=1`).then((response)=>
    {
        response.json().then((data)=>
        {
            const song : { url: string; name: string; artist: string;} = data.results.trackmatches.track[0];
            createSongHolder(song);
    
        })
    })
}


//Wyslanie formularzu, zdobycie danych od uzytkownika
form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    //Jesli wartosc tytul jest null to zrob nic
    if((document.getElementById('title') as HTMLFormElement).value == '')
    {
        return;
    }
    
    if((document.getElementById('artist') as HTMLFormElement).value != '')
    {
        searchForMusicByTitleAndAuthor((document.getElementById('title') as HTMLFormElement).value,(document.getElementById('artist') as HTMLFormElement).value)
    }
    else
    {
        searchForMusicByTitle((document.getElementById('title') as HTMLFormElement).value)
    }
    
})
