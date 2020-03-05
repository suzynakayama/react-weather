export function getCurrentWeather(lat, lng, units) {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${units}&appid=c6c1dac29b1335ad681f4e3abcc959e0`;
    return fetch(endpoint, { mode: "cors" }).then(res => res.json());
}

export function getForecast(lat, lng, units) {
    let endpoint = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=${units}&appid=c6c1dac29b1335ad681f4e3abcc959e0`;
    return fetch(endpoint, { mode: "cors" }).then(res => res.json());
}
