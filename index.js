if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  exit;
} else {
  window.location.replace("error.html");
}


setTimeout(function(){
  document.getElementById("splashP").style.display = "none";
}, 5300);

document.getElementById("name").oninput = function() {
  this.value = this.value.replace(/[^\s,أ-ي]/gi, '');
} 

document.getElementById("phonenb").oninput = function() {
  this.value = this.value.replace(/[^0-9]/gi, '');
  if (this.value.length > 8) {
    this.value = this.value.substring(0, 8);
  }
}

document.getElementById("name").setAttribute("autocomplete", "off");

document.getElementById("phonenb").setAttribute("autocomplete", "off");

document.body.style.position = "fixed";

setTimeout(function() {
  document.body.style.position = "static";
}, 3300);

