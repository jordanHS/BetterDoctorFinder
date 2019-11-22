import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { LookupService } from './lookup-service';

$(document).ready(function() {
  $('#findDoctors').click(function() {
    const firstName = $('#firstName').val();
    const lastName = $("#lastName").val();   
        $('#firstName').val("");
        $("lastName").val("");

    (async () => {
      let lookupService = new LookupService();
      const response = await lookupService.getDoctorByName(firstName, lastName);
      getElements(response);
      
    })();

  const getElements = function(response) {
      $('.showDoctors').text(`Found these doctors matching these doctors with the first name ${firstName} and last name ${lastName}: ${response.data[0].profile.bio}`);
    console.log(response.data[0].profile);
    }
  });
});
