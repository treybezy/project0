
window.onload = () =>{
  getPosts();
  getPostss();
  getPostsss();
  myFunction();
}

window.onclick = () =>{
  getMeals();
}

document.getElementById('random').addEventListener('click', getMeals);


async function getMeals() {

  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true);
  

  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
     

      document.getElementById('strMeals').innerText = response.meals[0].strMeal
      document.getElementById('strCategories').innerText = response.meals[0].strCategory
      document.getElementById('strArea').innerText = response.meals[0].strArea
      document.getElementById('strTags').innerText = response.meals[0].strTags
      document.getElementById('strYoutube').innerHTML = response.meals[0].strYoutube
      document.getElementById('strMealThumbs').src = response.meals[0].strMealThumb
      document.getElementById('strInstructions').innerText = response.meals[0].strInstructions

      document.getElementById('strIngredient1').innerText = response.meals[0].strIngredient1
      document.getElementById('strIngredient2').innerText = response.meals[0].strIngredient2
      document.getElementById('strIngredient3').innerText = response.meals[0].strIngredient3
      document.getElementById('strIngredient4').innerText = response.meals[0].strIngredient4
      document.getElementById('strIngredient5').innerText = response.meals[0].strIngredient5
      document.getElementById('strIngredient6').innerText = response.meals[0].strIngredient6
      document.getElementById('strIngredient7').innerText = response.meals[0].strIngredient7
      document.getElementById('strIngredient8').innerText = response.meals[0].strIngredient8
      document.getElementById('strIngredient9').innerText = response.meals[0].strIngredient9
      document.getElementById('strIngredient10').innerText = response.meals[0].strIngredient10
      document.getElementById('strIngredient11').innerText = response.meals[0].strIngredient11
      document.getElementById('strIngredient12').innerText = response.meals[0].strIngredient12
      document.getElementById('strIngredient13').innerText = response.meals[0].strIngredient13
      document.getElementById('strIngredient14').innerText = response.meals[0].strIngredient14
      document.getElementById('strIngredient15').innerText = response.meals[0].strIngredient15
      document.getElementById('strIngredient16').innerText = response.meals[0].strIngredient16
      document.getElementById('strIngredient17').innerText = response.meals[0].strIngredient17
      document.getElementById('strIngredient18').innerText = response.meals[0].strIngredient18
      document.getElementById('strIngredient19').innerText = response.meals[0].strIngredient19
      document.getElementById('strIngredient20').innerText = response.meals[0].strIngredient20
    }
  }

}







function getPosts() {
 

  let xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true);

  xhr.send();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = JSON.parse(xhr.responseText);
      
      document.getElementById('strMeal').innerText = response.meals[0].strMeal
      document.getElementById('strCategory').innerText = response.meals[0].strCategory
      document.getElementById('strArea').innerText = response.meals[0].strArea
      document.getElementById('strTags').innerText = response.meals[0].strTags
      document.getElementById('strYoutube').innerHTML = response.meals[0].strYoutube
      document.getElementById('strMealThumb').src = response.meals[0].strMealThumb
    }
  }
}

function getPostss() {

  let xhr1 = new XMLHttpRequest();

  xhr1.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true);
  

  xhr1.send();
  xhr1.onreadystatechange = () => {
    if (xhr1.readyState == 4 && xhr1.status == 200) {
      let response1 = JSON.parse(xhr1.responseText);
      
      document.getElementById('strMeal1').innerText = response1.meals[0].strMeal
      document.getElementById('strCategory1').innerText = response1.meals[0].strCategory
      document.getElementById('strArea1').innerText = response1.meals[0].strArea
      document.getElementById('strTags1').innerText = response1.meals[0].strTags
      document.getElementById('strYoutube1').innerHTML = response1.meals[0].strYoutube
      document.getElementById('strMealThumb1').src = response1.meals[0].strMealThumb
    }
  }
}

function getPostsss() {

  let xhr2 = new XMLHttpRequest();

  xhr2.open('GET', 'https://www.themealdb.com/api/json/v1/1/random.php', true);
  

  xhr2.send();
  xhr2.onreadystatechange = () => {
    if (xhr2.readyState == 4 && xhr2.status == 200) {
      let response2 = JSON.parse(xhr2.responseText);
      // let youtubeLink = document.getElementById('strYoutube2');
      

      document.getElementById('strMeal2').innerText = response2.meals[0].strMeal
      document.getElementById('strCategory2').innerText = response2.meals[0].strCategory
      document.getElementById('strArea2').innerText = response2.meals[0].strArea
      document.getElementById('strTags2').innerText = response2.meals[0].strTags
      document.getElementById('strYoutube2').innerHTML = response2.meals[0].strYoutube
      document.getElementById('strMealThumb2').src = response2.meals[0].strMealThumb
    }
  }
}

function myFunction() {
  let x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

