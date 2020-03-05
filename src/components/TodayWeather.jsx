import React from "react";
import Card from "react-bootstrap/Card";

function TodayWeather({ data, units }) {
    return (
        <div className="today__container">
            <Card className="text-center today__card">
                <Card.Body>
                    <Card.Title>Weather for {data.name}</Card.Title>
                    <Card.Subtitle className="d-inline mr-3 font-weight-bold">
                        {data.main.temp}&deg;{units}
                    </Card.Subtitle>
                    <Card.Img
                        src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                        alt="Current Conditions"
                        style={{ width: "4rem", margin: "0 auto" }}
                        className="d-inline"
                    />
                    <Card.Text className="text-muted">
                        Feels like: {data.main.feels_like}
                    </Card.Text>
                    <Card.Text className="text-muted">
                        Humidity: {data.main.humidity}%
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default TodayWeather;
