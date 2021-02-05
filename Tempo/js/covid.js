
// function fazGet(url){
// var request = new XMLHttpRequest();
// request.open("GET", url, false);
// request.send();
// request.withCredentials = true;
// return request.responseText

// }

// request.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// let data = xhr.open("GET", "https://api.covid19api.com/");
// let covidData = JSON.parse(data) 
// xhr.send();


var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
  if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

data = xhr.open("GET", "https://api.covid19api.com/");
let covid = JSON.parse(data)

xhr.send();