// Cannot be a ES6 arrow function.
function rml() {
  window.rmlCalls.push(arguments);
}

console.log("window.rmlLoaded", window.rmlLoaded);
if (!window.rmlLoaded) {
  window.rmlLoaded = true;
  window.rmlCalls = [];

  window.rml = rml;
  console.log("window.rml: ", window.rml);
}
