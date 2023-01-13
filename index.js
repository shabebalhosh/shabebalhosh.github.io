setTimeout(function(){
    document.getElementById("splashP").style.display = "none";
  }, 5300);
  
  document.getElementById("name").oninput = function() {
    this.value = this.value.replace(/[^\s,أ-ي]/gi, '');
  } 
  
  document.getElementById("phonenb").oninput = function() {
    this.value = this.value.replace(/[^0-9]/gi, '');
  }

  document.getElementById("phonenb").oninput = function() {
    if (this.value.length > 8) {
      this.value = this.value.substring(0, 8);
    }
  }
  
  document.getElementById("name").setAttribute("autocomplete", "off");
  
  document.getElementById("phonenb").setAttribute("autocomplete", "off");
  
  
  var md = new MobileDetect(window.navigator.userAgent);
if (md.mobile()) {
  // code to run if the website is accessed from a mobile device
} else {
  // code to run if the website is accessed from a desktop
  window.location.href = "https://google.com";
}
