import React from "react";
import Card from "react-bootstrap/Card";

function ForecastHour({ data, units }) {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{data.hour}</Card.Title>
                    <Card.Subtitle className="d-inline mr-3 font-weight-bold">
                        {data.temp}&deg;{units}
                    </Card.Subtitle>
                    <Card.Img
                        src={`https://openweathermap.org/img/w/${data.icon}.png`}
                        alt="Current Conditions"
                        style={{ width: "4rem", margin: "0 auto" }}
                        className="d-inline"
                    />
                    <Card.Text className="text-muted">
                        Feels like: {data.feels_like}
                    </Card.Text>
                    <Card.Text className="text-muted">
                        Humidity: {data.humidity}%
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ForecastHour;
