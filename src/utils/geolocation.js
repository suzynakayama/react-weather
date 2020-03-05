export function getLatLng() {
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(pos =>
            resolve({
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            })
        );
    });
}
