function validateForm() {
    var name = document.getElementById("name").value.trim();
    var mobilenumber = document.getElementById("mobilenumber").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();
    var msg1 = document.getElementById("msg1")
  
    if (name == "") {
      msg1.innerHTML = "Name must be filled out"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false;
    }
  
    if (/\d/.test(name)) {
      msg1.innerHTML = "Name must be character"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false
    }
  
    if (mobilenumber == "") {
      msg1.innerHTML = "Mobile Number must be filled out"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false;
    }
  
    if (isNaN(mobilenumber)) {
      msg1.innerHTML = "Mobile Number must be Digits"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false
    }
  
    if (mobilenumber.length < 10) {
      msg1.innerHTML = "Mobile Number must have 10 digits"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false
    }
  
    if (mobilenumber.length > 10) {
      msg1.innerHTML = "Mobile Number must have only 10 digits"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false
    }
  
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      msg1.innerHTML = "Email must be a valid email address"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false;
    }
  
    if (subject == "") {
      msg1.innerHTML = "Subject must be filled out"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false;
    }
  
  
    if (message == "") {
      msg1.innerHTML = "Message must be filled out"
      setTimeout(function () {
        msg1.innerHTML = ""
      }, 5000)
      return false;
    }
  
    return true;
  }
  
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwqNYxDj_FxTnM5lKZw6nSVXzI8oGLHALX6Hv527jUucnlVAVafa-J_ftHUSUinKjk/exec'
  const form = document.getElementById("form")
  const msg = document.getElementById("msg")
  
  form.addEventListener('submit', e => {
    e.preventDefault()
    if (validateForm()) {
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
          msg.innerHTML = "Sent Successfully"
          // alert("Sent Successfully")
          setTimeout(function () {
            msg.innerHTML = ""
          }, 5000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    }
  })