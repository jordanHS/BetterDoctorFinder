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
        $("#lastName").val("");
    (async () => {
      let lookupService = new LookupService();
      const response = await lookupService.findDoctors(firstName, lastName);
      getElements(response);
      
    })();

  const getElements = function(response) {
    if(response.meta.error){
      if(response.meta.http_status_code == 400)
          $('.showDoctors').text(`Please enter a name`);
      else
          $('.showDoctors').text(`Error 401: Unauthorized Request`);
      
      return;
    }
    if (response.data) {
      if(response.data.length)
        $('.showDoctors').text(`${response.data[0].practices[0].name} - Address: ${response.data[0].practices[0].visit_address.street}
      Phone: ${response.data[0].practices[0].phones[0].number}`);
      else
        $('.showDoctors').text(`No doctors matching that name were found.`);
    }
  }
  });
});
