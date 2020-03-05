import React, { Component } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ForecastHour from "./ForecastHour";

class ForecastCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            avg: null,
            day: this.props.data[1].day.slice(8, 10),
            month: this.props.data[1].day.slice(5, 7),
            year: this.props.data[1].day.slice(0, 4),
            data: this.props.data
        };
    }

    getAverage = () => {
        let total = 0;
        this.props.data.forEach(hour => {
            let temp = hour.temp;
            total += temp;
        });
        let avg = Math.round((total / 8) * 10) / 10;
        this.setState({
            ...this.state,
            avg: avg
        });
    };

    async componentDidMount() {
        await this.getAverage();
    }

    render() {
        return (
            <div className="col-sm-2">
                <Accordion className="forecast__accordion">
                    <Card className="forecast__card">
                        <Card.Header className="text-center">
                            <Card.Title className="forecast__accordion--title mb-3">
                                {this.state.month}/{this.state.day}/
                                {this.state.year}
                            </Card.Title>
                            <Card.Subtitle className="text-muted forecast__accordion--subtitle mb-2">
                                Average: {this.state.avg}&deg;{this.props.units}
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
                                {this.state.data.map((hour, idx) => {
                                    return (
                                        <ForecastHour
                                            key={idx}
                                            data={hour}
                                            units={this.props.units}
                                        />
                                    );
                                })}
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        );
    }
}

export default ForecastCard;
