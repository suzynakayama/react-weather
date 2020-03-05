import React from "react";
import Card from "react-bootstrap/Card";

function ForecastHour({ data, units }) {
    return (
        <div className="hour__container col-sm-5 mt-2 mb-1">
            <Card className="hour__card text-center">
                <Card.Body className="hour__card--body ">
                    <Card.Title className="hour__card--title">
                        {data.hour}
                    </Card.Title>
                    <Card.Subtitle className="d-inline mr-1 font-weight-bold hour__card--subtitle">
                        {data.temp}&deg;{units}
                    </Card.Subtitle>
                    <Card.Img
                        src={`https://openweathermap.org/img/w/${data.icon}.png`}
                        alt="Current Conditions"
                        style={{ width: "2rem" }}
                        className="d-inline mb-3"
                    />
                    <Card.Text className="text-muted hour__card--text">
                        Feels like: {data.feels}
                    </Card.Text>
                    <Card.Text className="text-muted hour__card--text">
                        Humidity: {data.humidity}%
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ForecastHour;
