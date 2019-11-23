export class LookupService {
    async getDoctorByName(firstName,lastName) {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&query=${query}location=wa-seattle&user_location=47.6062%2C122.3321&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
        } catch(error) {
        console.error("There was an error handling your request:" + error.message);    
        }
    }
