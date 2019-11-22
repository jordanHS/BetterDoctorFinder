export class WeatherService {
    async getWeatherByCity(city) {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=47.6062%2C122.3321&user_location=47.6062%2C122.3321&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
        } catch(error) {
        console.error("There was an error handling your request:" + error.message);    
        }
    }
