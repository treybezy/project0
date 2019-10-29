/*

  AJAX(Asynchrnonous javascript and XML)

  Ajax is not a programming language, it is a technique used to access web servers from a web page using Javascript.

  It allows for us to "asynchronously" send a request and process the response. While our page is awaiting the respone from the server, our web page remians functionality and does not stop just because we are waiting for the informatoin form the server.

  */

  window.onload = function() {
    // Add event listener to the id field
    idField.addEventListener('blur', fieldsValid);
   // Add event listener to the category field
    selectField.addEventListener('blur', fieldsValid);

   // Add event listener to the submit button
submitBtn.addEventListener('click', fetchInfo)
   // Disable the submit button
submitBtn.setAttribute('disabled', true);

   // Hide the alert message
   alertMessage.style.display = 'none';
  }

  function fieldsValid() {
    console.log('in fieldsValid()') //DEBUG
    let id = idField.value;
    let category = selectField.value;

    if(id && category) {
      console.log('id or category is truthy!'); //DEBUG
      alertMessage.style.display = 'none'
      submitBtn.removeAttribute('disabled');
    } else {
      console.log('id and category are falsy!')
      alertMessage.style.display = 'block';
      submitBtn.setAttribute('disabled', true);
    }
  }

  function processPeopleFetch(Jedi) {
      responsePromise.then(response) => {
        if(category == 'people')
      }
  }

  function getInfo() {
    console.log('in getInfo()');

  function fetchinfo() {

    /* 
      Fetch API

        Fetch is a browser API for loading text, images, structured data asynchronously to update an HTML page. Similar to Ajax, in fact AJAX is used under the hood, but Fetch is built upon the JS Promise object which greatly simplifies our code.
    */

    console.log('in fetchInfo()');

    let id = idField.value;
    let category = selectField.value;
    createResultsContainer(category);

    /*
    JS Promises

      The Promise object represents the eventual copletion (or failure) of an asynchronous operation, and its resulting value. Use the .then() method we can process a successful response, otherwise we can use the .catch() method to handle a failed request. Promises return either zero or one value per request.
    */

    let responsePromise = fetch(`https://swapi.co/api/${category}/${id}`)
    responsePromsie.then(response => {
      if(category == 'people') {
          response.json().then(jedi => {
            processPeopleFetch(jedi);
          })
      }
    })
  }

    //Get the values of the input and select frields
    let id = idField.value;
    let category = selectField.value

    // Determine what is being searched for (people, planets or startships) and create the appropriate HTML reslts container
    createResultsContainer(category);
/*
Making asynchronous calls to an external web servering using AJAX:

    1. Create an XHR(XMLHttpRequest) object
    2. Open the request by defining the HTTP method/verb and the target server URL
    3. Send the request to the web server
    4. Define a 'callback' function which will handle the response when received.
*/

//Step 1
let xhr = new XMLHttpRequest();

//Step 2
xhr.open('GET', `http://swapi.co/api/${category}/${id}`, true);

//Step 3
xhr.send();

//Step 4
xhr.onreadystatechange = function () {

    //The XMLHttpRequest.readyState property returns the state an XHR object/client is currently in. An XHR object/client exists in one of the following states:
    //0-Unsent (the XHRobject has been created, but .open() has not been called)
    //1-opened (.open() has been called)
    //2-headers_received (.send() has been called, and the response headers and status are available)
    //3-loading (beginning to receive the response body; .responseText holds partial data)
    //4-done (the operation is complete)
  console.log('Current XHR ready state: ' + xhr.readyState);
  // Perform action only if the readyState is DONE and the status code is OK
  if(xhr.readyState == 4 && xhr.status == 200) {
       if(category == 'people') {
          processPeopleResponse(xhr);
       } else if(category == 'planets') {

       } else if(category == 'starships') {

       }
    }

  }
}

function processPeopleResponse(xhr) {
  let jedi = JSON.parse(xhr.responseText);
  console.log(jedi);
  document.getElementById('name').innerText = `Name: ${jedi.name}`;
  document.getElementById('height').innerText = `Height: ${jedi.height}`;
  document.getElementById('mass').innerText = `Mass: ${jedi.mass}`;
  document.getElementById('birth_year').innerText = `Birth_year: ${jedi.birth_year}`;
  document.getElementById('gender').innerText = `Gender: ${jedi.gender}`;
}

function createResultsContainer(category) {
    console.log('in CreateResultsContainer()')//debug'

    //If there is anything already within the results-container div, we need to remove it
    while(resultsContainer.firstChild)
      resultsContainer.removeChild(resultsContainer.firstChild);

    if(category == 'people') {
    //create the DOV elements that will be added to the results-container div

    let nameContainer = document.createElement('h3')
    let heightContainer = document.createElement('h5')
    let massContainer = document.createElement('h5')
    let birthYearContainer = document.createElement('h5')
    let genderContainer = document.createElement('h5')

    // Add id attributes to each of the newly crated DOM elements
    nameContainer.setAttribute('id', 'name');
    heightContainer.setAttribute('id', 'height');
    massContainer.setAttribute('id', 'mass');
    birthYearContainer.setAttribute('id', 'birth_year');
    genderContainer.setAttribute('id', 'gender');

    //Attach the DOM elements to the results-container
    resultsContainer.appendChild(nameContainer);
    resultsContainer.appendChild(heightContainer);
    resultsContainer.appendChild(massContainer);
    resultsContainer.appendChild(birth_yearContainer);
    resultsContainer.appendChild(genderContainer);
  }


  }

  const swForm = document.getElementById('sw-form');
  const idField = document.getElementById('sw-id');
  const selectField = document.getElementById('sw-category');
  const submitBtn = document.getElementById('submit-btn');
  const resultsContainer = document.getElementById('results-container');
  const alertMessage = document.getElementById('alert-msg');