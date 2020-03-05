import React, { Component } from "react";
import { getLatLng } from "./utils/geolocation";
import { getCurrentWeather, getForecast } from "./utils/weather";
import TodayWeather from "./components/TodayWeather";
import Forecast from "./components/Forecast";
import Footer from "./components/Footer";
import "./App.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

class App extends Component {
    state = {
        lat: null,
        lng: null,
        weatherData: null,
        forecast: null,
        units: "metric"
    };

    async componentDidMount() {
        const { lat, lng } = await getLatLng();
        const weatherData = await getCurrentWeather(lat, lng, this.state.units);
        const forecast = await getForecast(lat, lng, this.state.units);
        this.setState({
            lat,
            lng,
            weatherData: weatherData,
            forecast: forecast
        });
    }

    handleUnits = () => {
        let weather;
        let forecast;
        const getData = async unit => {
            weather = await getCurrentWeather(
                this.state.lat,
                this.state.lng,
                unit
            );
            forecast = await getForecast(this.state.lat, this.state.lng, unit);
        };
        if (this.state.units === "metric") {
            getData("imperial");
            this.setState({
                ...this.state,
                weatherData: weather,
                forecast: forecast,
                units: "imperial"
            });
        } else {
            getData("metric");
            this.setState({
                ...this.state,
                weatherData: weather,
                forecast: forecast,
                units: "metric"
            });
        }
    };

    render() {
        return this.state.weatherData && this.state.forecast ? (
            <div>
                <h1 className="text-center mt-5 mb-4 app-title">
                    React Weather
                </h1>
                <div className="btn-container">
                    <Button
                        variant="warning"
                        className="units-btn font-weight-bold"
                        onClick={this.handleUnits}
                    >
                        {this.state.units === "metric" ? "C" : "F"}
                    </Button>
                </div>
                <TodayWeather
                    data={this.state.weatherData}
                    units={this.state.units === "metric" ? "C" : "F"}
                />
                <Forecast
                    forecast={this.state.forecast}
                    units={this.state.units === "metric" ? "C" : "F"}
                />
                <Footer />
            </div>
        ) : (
            <h2 className="text-center mt-5">
                <Spinner animation="border" variant="warning" /> Loading...
            </h2>
        );
    }
}

export default App;
