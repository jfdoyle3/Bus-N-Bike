var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.Routing.control({
    waypoints: [
        L.latLng(41.87092932,-71.42788283),
        L.latLng(41.3743224,-71.5454094)
    ],
    routeWhileDragging: true
}).addTo(map);

41.87092932,-71.42788283