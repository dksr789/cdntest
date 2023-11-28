// Creating the necessary document structure using pure JavaScript
document.write('<!DOCTYPE html>');
document.write('<html lang="en">');
document.write('<head>');
document.write('<meta charset="UTF-8">');
document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
document.write('<title>Create Button with Pure JavaScript</title>');
document.write('<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>');
document.write('</head>');
document.write('<body>');

// Function to create a button and add it to the body
function createButton() {
    // Create a button element
    const button = document.createElement('button');
    button.textContent = 'Click me!';

    // Add a click event listener to the button
    button.addEventListener('click', function () {
        // Functionality to be executed when the button is clicked
        showError();
    });

    // Append the button to the body
    document.body.appendChild(button);
}

// Function to show an error using SweetAlert2
function showError() {
    Swal.fire({
        title: 'Image icon',
        iconHtml: '<img src="https://picsum.photos/100/100">',
        customClass: {
            icon: 'no-border'
        }
    });
}

// Call the createButton function to create and add the button
createButton();

document.write('</body>');
document.write('</html>');
