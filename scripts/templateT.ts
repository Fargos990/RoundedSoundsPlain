//dostanie elementu w ktorym beda wyswietlane dane piosenki
const holders : HTMLCollection = document.getElementsByClassName("container__musicHolder__content__holder");

/**
 * Stworzenie obiektu, ktory bedzie przechowywac dane piosenki z local storage
 */
const createBox = () =>
{
    //stworzenie zmiennych i dostanie index elementu i wszystkich top piosenek
    const index : number = JSON.parse(localStorage.getItem('indexOfItem'))
    const dataTab : object = [...JSON.parse(localStorage.getItem('topTracks'))];

    //Stworzenie a tagu, aby uzytkownik mogl sobie przejrzec dane piosenki
    const a : HTMLAnchorElement = document.createElement('a');
    a.innerHTML = 'Check Full Song';
    a.href = dataTab[index].url;
    a.target = '_blank';

    ////Ustawienie okladki, tytulu i wykonwacy piosenki, ktora uzytkownik wybral
    //Dostanie piosenki indexu z local storage
    (holders[0].children[0].children[0] as HTMLImageElement).src = `https://picsum.photos/seed/${dataTab[index].artist.name}/110`;
    (holders[0].children[1].children[0] as HTMLElement).innerHTML = dataTab[index].name;
    (holders[0].children[2] as HTMLElement).innerHTML = dataTab[index].artist.name;
    holders[0].appendChild(a);
    
}
createBox();
