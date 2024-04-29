document.getElementById('ageVerificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var birthdate = new Date(document.getElementById('birthdate').value);
    var now = new Date();
    var age = now.getFullYear() - birthdate.getFullYear();
    
    if (now.getMonth() < birthdate.getMonth() || (now.getMonth() == birthdate.getMonth() && now.getDate() < birthdate.getDate())) {
      age--;
    }
    
    if (age >= 16 && age <= 25) {
      document.getElementById('verificationMessage').textContent = '';
      document.getElementById('rules').style.display = 'block';
    } else {
      document.getElementById('verificationMessage').textContent = 'Lo siento, debes tener entre 16 y 25 años para acceder a este sitio.';
      document.getElementById('rules').style.display = 'none';
    }
  });
  
  document.getElementById('acceptButton').addEventListener('click', function() {
    document.getElementById('whatsappLink').style.display = 'block';
    document.getElementById('acceptButton').style.display = 'none';
  });
  
  document.getElementById('whatsappLink').addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  