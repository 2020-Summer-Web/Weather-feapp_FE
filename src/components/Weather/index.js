import React from "react";
const API_CITIES_WEATHERS = "http://localhost:8888/weather-service/weathers?";
// Stateless component
class Weather extends React.Component {
 state = {
     weatherData: {
         weather: [
             {main: "string", description: "string"}
         ],
         main: {
             temp: 0,
         }
     },
 };

    componentDidMount() {
        const {cityName} =this.props.match.params;

        const currentWeatherData =fetch(API_CITIES_WEATHERS + 'cityName=' + cityName)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    weatherData : data,
                });
            });
        //console.log(currentWeatherData);
    }

    render() {
        const {cityName} =this.props.match.params;
        const {weatherData} = this.state;
        const currentweather = weatherData.weather[0].main
        const description = weatherData.weather[0].description
        const temperature = (weatherData.main.temp - 273.15).toFixed(2);

        return (
            <div>
                <h1>Description about city</h1>
                <h2>도시 이름: {cityName}</h2>
                <p>현재 날씨 : {currentweather}</p>
                <p>날씨에 대한 자세한 정보: {description}</p>
                <p>기온: {temperature} 도 </p>
            </div>
        );
    }
};
export default Weather;
