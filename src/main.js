import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { LookupService } from './lookup-service';

$(document).ready(function() {
  $('#findDoctors').click(function() {
    const firstName = $('#firstName').val();
    const lastName = $("lastname").val();   
        $('#doctors').val("");

    (async () => {
      let lookupService = new LookupService();
      const response = await lookupService.getDoctorByName(lastName);
      getElements(response);
      
    })();

  const getElements = function(response) {
      $('.showDoctors').text(`Found these doctors matching the name ${firstName + lastName} is ${response.practices.name}`);
    }
  });
});
