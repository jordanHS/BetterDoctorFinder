import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';
import { LookupService } from './lookup-service';

$(document).ready(function() {
  $('#findDoctors').click(function() {
    const firstName = $('#firstName').val();
    const lastName = $("#lastName").val();
    const query = $("query").val();   
        $('#firstName').val("");
        $("#lastName").val("");
        $("query").val("");

    (async () => {
      let lookupService = new LookupService();
      const response = await lookupService.findDoctors(firstName, lastName, query);
      getElements(response);
      
    })();

  const getElements = function(response) {
      $('.showDoctors').text(`${response.data[0].practices[0].name} - Address: ${response.data[0].practices[0].visit_address.street}
      Phone: ${response.data[0].practices[0].phones[0].number}`);
    console.log(response.data[0].practices[0]);
    }
  });
});
