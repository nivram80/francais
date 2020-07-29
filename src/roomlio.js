export const rml = function rml() {
  window.rmlCalls.push(arguments);
};

if (!window.rmlLoaded) {
  window.rmlLoaded = true;
  window.rmlCalls = [];

  window.rml = rml;

  let s = document.createElement("script");
  s.setAttribute("src", "http://embed.roomlio-dev.com:5000/embed.js");
  document.body.appendChild(s);
}
