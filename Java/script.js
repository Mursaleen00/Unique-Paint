function sendMessage() {
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Validate the input values
    if (!name || !email || !message) {
      alert('Please fill out all the fields.');
      return;
    }
    
    // Send the message
    alert(`Thank you for your message, ${name}! We will be in touch shortly.`);
  }
  