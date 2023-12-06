document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login bem-sucedido
        var user = userCredential.user;
        alert('Login bem-sucedido!');
      })
      .catch((error) => {
        // Erro no login
        var errorCode = error.code;
        var errorMessage = error.message;
        alert('Erro no login: ' + errorMessage);
      });
  });