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
            year: this.props.data[1].day.slice(0, 4)
        };
    }

    getAverage = () => {
        let total;
        this.props.data.forEach(hour => {
            total += hour.temp;
            console.log(hour.temp);
            console.log(total);
        });
        let avg = total / 8;
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
            <div className="d-flex justify-content-around align-items-center">
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                {this.state.month}/{this.state.day}/
                                {this.state.year}
                            </Card.Title>
                            <Card.Subtitle>
                                Average: {this.state.avg}&deg;{this.props.units}
                            </Card.Subtitle>
                            <Accordion.Toggle
                                as={Button}
                                variant="link"
                                eventKey="0"
                            >
                                Read More!
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                {this.props.data.forEach((hour, idx) => {
                                    return (
                                        <ForecastHour
                                            key={idx}
                                            data={hour}
                                            units={this.state.units}
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
