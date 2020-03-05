import React, { Component } from "react";
import ForecastCard from "./ForecastCard";

class Forecast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: []
        };
    }

    splitIntoDays = (arr, num) => {
        let newArr = [];
        while (arr.length) {
            newArr.push(arr.splice(0, num));
        }
        this.setState({
            ...this.state,
            days: newArr
        });
    };

    async componentDidMount() {
        let data = this.props.forecast.list;
        let allDays = [];
        await data.map(item => {
            let hour = {};
            hour.hour = item.dt_txt.slice(11, 16);
            hour.temp = item.main.temp;
            hour.feels = item.main.feels_like;
            hour.humidity = item.main.humidity;
            hour.day = item.dt_txt.slice(0, 10);
            hour.icon = item.weather[0].icon;
            return allDays.push(hour);
        });
        this.splitIntoDays(allDays, 8);
    }

    render() {
        return (
            <div className="d-flex justify-content-around flex-wrap forecast__div">
                {this.state.days.map((day, idx) => {
                    return (
                        <ForecastCard
                            key={idx}
                            data={day}
                            units={this.props.units}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Forecast;
