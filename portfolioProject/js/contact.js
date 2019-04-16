


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2KcsI0Mwa_m2pUaFelQ3XYX5EX7GYM3Q",
    authDomain: "contactform-a9f53.firebaseapp.com",
    databaseURL: "https://contactform-a9f53.firebaseio.com",
    projectId: "contactform-a9f53",
    storageBucket: "contactform-a9f53.appspot.com",
    messagingSenderId: "814857741193"
  };
  firebase.initializeApp(config);
// // Reference messages collection



// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

// Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
// Save message
      saveMessage(name, email, phone, message);

      }



//   // Show alert
//   document.querySelector('.alert').style.display = 'block';
//
//   // Hide alert after 3 seconds
//   setTimeout(function(){
//     document.querySelector('.alert').style.display = 'none';
//   },3000);
//
//   // Clear form
//   document.getElementById('contactForm').reset();
// }
//
// // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }

// // Save message to firebase
  function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email:email,
      phone:phone,
      message:message
    });
  }
