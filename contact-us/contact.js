
//Contact form in contact.html page
window.addEventListener("DOMContentLoaded", function() {

        // get the form elements defined in your form HTML above

        var form = document.getElementById("my-form");
        var button = document.getElementById("my-form-button");
        var status = document.getElementById("my-form-status");

        function formValidation() {
            
                    if ($("#name").val() == "" || $("#email").val() == "") {
                        error();
                    }
            }

        // Success and Error functions for after the form is submitted
    
        function success() {
            form.reset();
            button.style = "display: none ";
            status.innerHTML = "Thank you. Your message has been sent.";
        }
    
        function error() {
            status.innerHTML = "Oops! There was a problem.";
            return;
        }
    
        // handle the form submission event
        form.addEventListener("submit", function(ev) {
            console.log("cpoming");
            ev.preventDefault();
            
            var formData = {
            emailTo: "wrapdivisioncustoms@gmail.com",
            name: $("#name").val(),
            email: $("#email").val(),
            location: "Make: " + $("#car").val() + ".\nPhone: " + $("#phone").val(),
            subject: "Online Website - Get a Quote - " + $('#name').val(),
            message: $('#message').val()
        }
    
        // Post request to aws lambda function and that sends an email
        if ($("#name").val() == "" || $("#email").val() == "") {
            error();
        }
        else
        {
            $.ajax({
                data: JSON.stringify(formData),
                crossDomain: true,
                dataType: "json",
                method: "POST",
                url: "https://zpv97wkyu6.execute-api.us-east-1.amazonaws.com/Prod/contact/",
                success: function(data){
                    //console.log("success");
                    success();
                },
                error: function (data) {
                    //console.log(data);
                    error();
                    console.log ('error');
                }
            });
        }
        });
        
    });