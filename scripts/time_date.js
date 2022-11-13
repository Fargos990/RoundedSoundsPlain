//stale
const clock = document.getElementById('clock');
const date = document.getElementById('date');

/**
 * Przypisuje wartosci daty jak i czasu do obiektow z id
 */
const getTime = () =>
{
    fetch("http://worldtimeapi.org/api/timezone/Europe/Warsaw").then((response)=>
    {
        response.json().then((data)=>
        {
            clock.innerHTML = data.datetime.slice(11,19);//Czas
            date.innerHTML = data.datetime.slice(0,10);//Data
        })

    })

}
//getTime();
setInterval(getTime, 1000);
