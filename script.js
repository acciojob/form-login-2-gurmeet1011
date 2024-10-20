//your JS code here. If required.
function displayFormInfo() {
            // Prevent form from submitting normally
            // Retrieve form values
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const phoneNumber = document.getElementById('phone').value;
            const email = document.getElementById('email').value;

            // Construct the alert message
            const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

            // Display the alert with form info
            alert(alertMessage);
        }