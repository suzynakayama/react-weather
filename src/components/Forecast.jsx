import React, { useState, useEffect } from "react";
import ForecastCard from "./ForecastCard";
import Spinner from "react-bootstrap/Spinner";

function Forecast(props) {
    const [days, setDays] = useState(null);

    const splitIntoDays = arr => {
        const groupByDay = (objectArray, property) => {
            return objectArray.reduce((acc, obj) => {
                let key = obj[property];
                if (!acc[key]) {
                    acc[key] = [];
                }
                acc[key].push(obj);
                return acc;
            }, {});
        };
        let dayMap = groupByDay(arr, "day");
        let daysArr = Object.keys(dayMap).map(k => dayMap[k]);
        setDays({
            days: daysArr
        });
    };

    useEffect(() => {
        let data = props.forecast.list;
        let allDays = [];
        const getDays = async () => {
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
            splitIntoDays(allDays);
        };
        getDays();
    }, [props.forecast.list]);

    return days ? (
        <div className="d-flex justify-content-around flex-wrap forecast__div">
            {days.days.map((day, idx) => {
                return (
                    <ForecastCard key={idx} data={day} units={props.units} />
                );
            })}
        </div>
    ) : (
        <h2 className="text-center mt-5">
            <Spinner animation="border" variant="warning" /> Loading...
        </h2>
    );
}

export default Forecast;
