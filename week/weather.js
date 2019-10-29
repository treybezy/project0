const baseUrl = 'http://api.apixu.com/v1/current.json?key=c1f8230445ff4ed690d145701192301&q=';
document.getElementById('submit').addEventListener('click', searchWeather);

async function searchWeather() {
  let input = document.getElementById('zipcode').value;

  if(input.length == 5) {
    
    if(document.getElementById('alert').hasChildNodes()) {
       document.getElementById('alert').removeChild(document.getElementbyId('alert'));
;
    }

    let responsePromise = fetch(baseUrl + input);
    responsePromise.then(response => {

        let dataPromise = response.json();
        dataPromise.then(data => {
          console.log(data)
          displayweather(data);
        })

  }).catch(error => {
    let alertMessageElement = document.createElement('p');
    alertMessageElement.innerText('Invalid Zipcode');
    document.getElementById('alert').appendChild(alertMessageElement);
      throw Error('Invalid Zipcode');
  });

  // let response = await fetch(baseUrl + input);
  // console.log(response)

  // let data = await response.json();
  //   console.log(data)
}
  
}

function displayweather(weather) {
  if (weather) {

 
    document.getElementById('location').innerText = `Weather for ${weather.location.name}`;
    document.getElementById('icon').setAttribute('src', `http://${weather.current.condition.icon}`);
    document.getElementById('icon').setAttribute('alt', weather.current.condition.text);
    document.getElementById('status').innerText = weather.current.condition.text;
    document.getElementById('temperature').innerText = `${weather.current.temp_f} F (feels like ${weather.current.feelslike_f})`;
  }
}