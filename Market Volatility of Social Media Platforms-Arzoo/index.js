document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("dropdownForm");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const formData = new FormData(form);
        const selectedOption = formData.get('dropdown');

        const resultElement = document.getElementById("result-id").textContent = "Changed";
       
    });
});

#1. Prep HTML Structure: