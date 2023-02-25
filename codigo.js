// El codigo siguiente inhabilita que se pueda utilizar el menu contextual
document.oncontextmenu = function () {
  return false;
};

// El codigo siguiente inhabilita ctrl+c  -crtl+v
document.addEventListener("keydown", (event) => {
  var keystroke = String.fromCharCode(event.keyCode).toLowerCase();

  if (event.ctrlKey && (keystroke == "c" || keystroke == "v")) {
    event.returnValue = false;
  }
});


