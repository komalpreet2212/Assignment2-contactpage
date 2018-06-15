(function (content)
{

    let txtfirstname = document.getElementById("txtfirstname");
    let txtlastname = document.getElementById("txtlastname");
    let txtinitialcontact = document.getElementById("txtinitialcontact");
    let txtanothercontact = document.getElementById("txtanothercontact");
    let txtemail = document.getElementById("txtemail");
    let txtmessage = document.getElementById("txtmessage");


    function OutputFormDataToConsole() 
    {
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Data`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c First Name     : ${txtfirstname.value}`, "color: blue;");
        console.log(`%c Last Name     : ${txtlastname.value}`, "color: blue;");
        console.log(`%c Initial Contact: ${txtinitialcontact.value}`, "color: blue;");
        console.log(`%c Another Contact: ${txtanothercontact.value}`, "color: blue;"); 
        console.log(`%c E-MAIL ID : ${txtemail.value}`, "color: blue;");
        console.log(`%c Additional Information  : ${txtmessage.value}`, "color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");

        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Properties`, "font-weight:bold; font-size: 16px; color: blue;");
        console.log(`%c ---------------------------------------`, "color: blue;");
        console.log(`%c Form Length     : ${document.forms[0].length}`, "color: blue;");

        for (let Home = 0; Home < document.forms[0].length; Home++) 
        {
            console.log(`%c Form Element ${Home}: ${document.forms[0].elements[Home].value}`, "color: blue;");

        }

    }

    function clearValidationMessages() 
    {
        txtfirstname.setCustomValidity("");
        txtlastname.setCustomValidity("");
        txtinitialcontact.setCustomValidity("");
        txtanothercontact.setCustomValidity("");
        txtemail.setCustomValidity("");
        txtmessage.setCustomValidity("");
    }

    function setEventHandlersForFormElements() 
    {

        for (const element of document.forms[0].elements) 
        {
            if ((element.tagName === "INPUT") || (element.tagName === "TEXTAREA")) 
            {

                element.addEventListener("input", function () 
                {
                    element.setCustomValidity("");
                });

                element.addEventListener("invalid", function () 
                {
                    switch(element.id)
                    {
                        case "First Name":
                        element.setCustomValidity("You must enter an appropriate First Name with at least 2 characters");
                        break;
                        case "Last Name":
                        element.setCustomValidity("You must enter an appropriate Last Name with at least 2 characters");
                        break;
                        case "Initial Contact":
                        element.setCustomValidity("You must enter a phone number with the pattern (###) ###-####");
                        break;
                        case "Another Contact":
                        element.setCustomValidity("You must enter a phone number with the pattern (###) ###-####");
                        break;
                        case "Email ID":
                        element.setCustomValidity("Your email address is not valid");
                        break;
                        case "Additional Information":
                        element.setCustomValidity("You must enter a message");
                        break;
                        default:
                        element.setCustomValidity("This Field is Required");
                        break;
                    }
                    
                });
            }

        }
    }

    function ValidateForm() 
    {
        setEventHandlersForFormElements();
    }


    function ContactContent() 
    {
        clearValidationMessages();

        console.log("%c Contactpage Content Accessed...", "font-weight:bold; font-size: 20px;");

        document.getElementsByClassName("card-title")[0].textContent = "Contact You!";

        let resetButton = document.createElement("button");

        resetButton.setAttribute("class", "btn btn-warning");
        resetButton.classList.add("btn-lg");
        resetButton.textContent = "Cancel";
        resetButton.addEventListener("click", function (event) 
        {
            event.preventDefault();
            window.open("index.html", "_parent");
        });

        document.forms[0].appendChild(resetButton);


        let submitButton = document.getElementById("SendButton");
        submitButton.addEventListener("click", (event) => 
        {

            if (!document.forms[0].checkValidity()) 
            {
                OutputFormDataToConsole();
                ValidateForm();
            }


        });

    }

    content.ContactpageContent = ContactContent;

})(content || (content = {}))