import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ForecastHour from "./ForecastHour";
import Spinner from "react-bootstrap/Spinner";

function ForecastCard(props) {
    const [state, setState] = useState({
        state: {
            avg: null,
            day: null,
            month: null,
            year: null,
            data: null
        }
    });

    const getAverage = data => {
        let total = 0;
        data.forEach(hour => {
            let temp = hour.temp;
            total += temp;
        });
        let avg = Math.round((total / 8) * 10) / 10;
        setState({
            state: {
                avg: avg,
                day: data[1].day.slice(8, 10),
                month: data[1].day.slice(5, 7),
                year: data[1].day.slice(0, 4),
                data: data
            }
        });
    };

    useEffect(() => {
        let data = props.data;
        getAverage(data);
    }, [props.data]);

    return state.state.data ? (
        <div className="col-sm-2 forecast__card--container">
            <Accordion className="forecast__accordion">
                <Card className="forecast__card">
                    <Card.Header className="text-center">
                        <Card.Title className="forecast__accordion--title mb-3">
                            {state.state.month}/{state.state.day}/
                            {state.state.year}
                        </Card.Title>
                        <Card.Subtitle className="text-muted forecast__accordion--subtitle mb-2">
                            Average: {state.state.avg}&deg;{props.units}
                        </Card.Subtitle>
                        <Accordion.Toggle
                            as={Button}
                            variant="link"
                            eventKey="0"
                            className="forecast__accordion--btn mt-2"
                        >
                            Read More!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="forecast__accordion--body d-flex justify-content-around flex-wrap">
                            {state.state.data.map((hour, idx) => {
                                return (
                                    <ForecastHour
                                        key={idx}
                                        data={hour}
                                        units={props.units}
                                    />
                                );
                            })}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    ) : (
        <h2 className="text-center mt-5">
            <Spinner animation="border" variant="warning" /> Loading...
        </h2>
    );
}

export default ForecastCard;
