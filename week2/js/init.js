// declare variables
let zoomLevel = 5;
const mapCenter = [34.0709,-118.444];

// use the variables
const myMap = L.map('mapArea').setView(mapCenter, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(myMap).bindPopup(`<h2>${title}</h2>`)
    createButtons(lat,lng,title); // new line!!!
    return message
}

// create a function to add buttons with a fly to command
function createButtons(lat,lng,title){
    const newButton = document.createElement("button"); // adds a new button
    newButton.id = "button"+title; // gives the button a unique id
    newButton.innerHTML = title; // gives the button a title
    newButton.setAttribute("lat",lat); // sets the latitude 
    newButton.setAttribute("lng",lng); // sets the longitude 

    // attach an event listner to the button with Leaflet's flyTo on our map called "myMap"
    newButton.addEventListener('click', function(){
        myMap.flyTo([lat,lng]); 
    })
    document.body.appendChild(newButton); //this adds the button to our page.
}

// use our marker functions
addMarker(33.77,-118.19,'home','home land!')
addMarker(34.040562,-118.148308,'work','where i work land!')
addMarker(38.581573,-121.494400,'my hometown','random location')
addMarker(35.689487,139.691711,'family hometown 1','another random location')
addMarker(36.737797,-119.7871,'family hometown 2','another random location')
addMarker(13.6929,-89.2182,'family hometown 3','another random location')
addMarker(36.737797,-119.7871,'family hometown 4','another random location')

// TIL you need an account for LatLong.net if you look too many locations up