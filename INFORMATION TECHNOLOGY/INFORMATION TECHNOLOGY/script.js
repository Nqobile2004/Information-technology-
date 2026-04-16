// Wait for page to load before running JS
document.addEventListener("DOMContentLoaded", function() {
    
    console.log("Future Tech Academy JS loaded");

    // 1. Auto-update footer year to current year
    let footers = document.querySelectorAll("footer p");
    let currentYear = new Date().getFullYear();
    
    footers.forEach(function(footer) {
        footer.innerHTML = footer.innerHTML.replace("2026", currentYear);
    });

    // 2. Stop form from crashing + show confirmation
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Stops "Cannot POST" error
            
            // Basic check if required fields are filled
            let requiredInputs = form.querySelectorAll("[required]");
            let allFilled = true;
            
            requiredInputs.forEach(function(input) {
                if (!input.value) {
                    allFilled = false;
                }
            });

            if (allFilled) {
                alert("Application submitted! We'll contact you soon. This is a demo — no data was sent.");
                form.reset(); // Clears the form
            } else {
                alert("Please fill in all fields marked with *");
            }
        });
    }

    // 3. Clear Form button actually clears the form
    let clearButton = document.querySelector('button[type="reset"]');
    if (clearButton) {
        clearButton.addEventListener("click", function() {
            let confirmClear = confirm("Clear all fields?");
            if (!confirmClear) {
                event.preventDefault();
            }
        });
    }

});