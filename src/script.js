const x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function sendPos() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "save.php?lat=" + position.coords.latitude + "&long=" + position.coords.longitude);
    xhr.send();
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
} 