//$("#commentForm").validate();
$(document).ready(function() {
    $('#commentForm').validate({ // initialize the plugin
         
       
        rules: {
            rating: {
                selectcheck: true
            },
            howFind: {
                required: true
            },
            howRate: {
                required: true 
            }
        }
    });
    jQuery.validator.addMethod('selectcheck', function(value) {
        return (value != '0');
    }, "please rate us");
   
    
});

$('#selectRadio1 input[name=radio]').change(function () {
    if (!$('#subscribe').is(":checked")) {
        
        $subscribeOptionsCheckBoxes = $('#subscribeOptions input[type=checkbox]');
        $subscribeOptionsCheckBoxes.prop('checked', false);
        $subscribeOptionsCheckBoxes.attr('disabled', 'disabled');
        
    } else {
       
        $subscribeOptionsCheckBoxes.removeAttr('disabled');
    }
    
});