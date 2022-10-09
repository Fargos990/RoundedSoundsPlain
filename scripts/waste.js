//if nothing works i will be back
const apiKey = 'YTY2MzAyN2EtMjNlMi00OTFmLTk4NGItZTMxY2Y4MGQzMGVm'

const app2 = async() =>
{

    const response = await fetch(`https://api.napster.com/v2.2/tracks/top?apikey=${apiKey}&limit=6`,
    {
        method:"GET"
    })

    const data = await response.json();
    dataTab = await [...data.tracks];
    console.log(dataTab)
    getPhoto(dataTab);

}

const getPhoto = async(dataTab)=>
{
    let i = 0;
    let photosW = []
    dataTab.map(async(elem)=>
    {
        const response = await fetch(`https://api.napster.com/v2.2/albums/${elem.albumId}/images?apikey=${apiKey}`,
        {
            method:"GET"
        })
        const data = await response.json();
        //images[i].src = data.images[Math.floor(Math.random() * data.images.length )];
        console.log(data.images[2].url);
        i++;
    })
    
    
    
}