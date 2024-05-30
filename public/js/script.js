(() => {
    "use strict";

    //Fetch all the forms we want to apply custom Bootstrap validation style to 
    const forms = document.querySelectorAll(".needs-validation");

    //Loopover them and prevent submission
    Array.form(forms).forEach(form => {
        form.addEventListener("submit",
         event => {
            if(!form.checkValidity()) {
                event.preventDefault()
                event.stopPropogation()
            }
            form.classList.add("was-validated")
        }, false)
    });
})();