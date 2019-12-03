export class LookupService {
    async findDoctors(firstName,lastName) {
        try{
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=${firstName}&last_name=${lastName}&location=wa-seattle&user_location=47.6062%2C-122.3321&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
        } catch(error) {
        return response.status(400).send(error);    
        }
    }
}