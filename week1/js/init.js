const map = L.map('map').setView([34.0709, -118.444], 5);

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//JavaScript let variable declaration to create a marker
let marker = L.marker([34.040562, -118.148308]).addTo(map)
		.bindPopup('East Los Angeles College<br> I work here!')
		.openPopup();

let marker2 = L.marker([42.145481, -83.162018]).addTo(map)
.bindPopup('Loyola Marymount University<br> I worked here!')

let marker3 = L.marker([33.790180, -118.178978]).addTo(map)
.bindPopup('California State University Long Beach<br> I worked here!')

fetch("map.geojson")
	.then(response => {
		return response.json();
		})
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
            // the leaflet method for adding a geojson
            L.geoJSON(data, {
                pointToLayer: function (feature, latlng) {
                    return L.circleMarker(latlng, {color: feature.properties.color});
                }
            }).bindPopup(function (layer) {
                return layer.feature.properties.place;
            }).addTo(map);
        });