function displayFormInfo(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Retrieve form values by using getElementById
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;

    // Construct the alert message with spaces between the field values
    const alertMessage = `First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`;

    // Display the alert with form info
    alert(alertMessage);
}
