console.log("main.js");
let API_KEY = '590f80257a1ed7e74491347b0c44a419'
fetch(`https://api.openweathermap.org/data/2.5/weatherlat=39.099724&lon=-94.578331&appid=${API_KEY}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
