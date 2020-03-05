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
            ...this.state,
            lat: lat,
            lng: lng,
            weatherData: weatherData,
            forecast: forecast
        });
    }

    handleUpdate = async unit => {
        const weatherData = await getCurrentWeather(
            this.state.lat,
            this.state.lng,
            unit
        );
        const forecast = await getForecast(
            this.state.lat,
            this.state.lng,
            unit
        );
        this.setState({
            ...this.state,
            weatherData: weatherData,
            forecast: forecast,
            units: unit
        });
    };

    handleUnits = async () => {
        try {
            if (this.state.units === "metric") {
                this.handleUpdate("imperial");
            } else {
                this.handleUpdate("metric");
            }
        } catch (err) {
            console.log(err);
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
                        {this.state.units === "imperial" ? "C" : "F"}
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
