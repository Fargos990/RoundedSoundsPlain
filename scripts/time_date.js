const clock = document.getElementById('clock');
const date = document.getElementById('date');

const getTime = () =>
{
    fetch("http://worldtimeapi.org/api/timezone/Europe/Warsaw").then((response)=>
    {
        response.json().then((data)=>
        {
            console.log(data.datetime);
            console.log(data.datetime.slice(0,10));
            console.log(data.datetime.slice(11,19));

            clock.innerHTML = data.datetime.slice(11,19);
            date.innerHTML = data.datetime.slice(0,10);
        })

    })

}
getTime();
//setInterval(getTime, 1000);
