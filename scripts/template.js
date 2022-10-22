const holders = document.getElementsByClassName("container__musicHolder__content__holder");

const app = () =>
{
    const index = JSON.parse(localStorage.getItem('indexOfItem'))
    dataTab = [...JSON.parse(localStorage.getItem('topTracks'))];
    console.log(holders[0].children[0].children[0])
    holders[0].children[0].children[0].src = `https://picsum.photos/seed/${dataTab[index].artist.name}/110`
    holders[0].children[1].children[0].innerHTML = dataTab[index].name;
    holders[0].children[2].innerHTML = dataTab[index].artist.name;
}
app();