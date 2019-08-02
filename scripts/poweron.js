var timesClicked = 0;

function homeMsg() {
  // display header text
  var hdr = document.createElement("h1");
  var txt = document.createTextNode("Hello world! I'm Sherri.");
  hdr.appendChild(txt);
  document.getElementById("homepage").appendChild(hdr);

  // display paragraph text
  var p = document.createElement("p");
  var txt = document.createTextNode("Sherri is a programmer based in San Jose who ");
  p.appendChild(txt);
  p.appendChild(document.createElement("br"));

  var txt = document.createTextNode("graduated from UCSC in 2019. She loves to learn ");
  p.appendChild(txt);
  p.appendChild(document.createElement("br"));

  var txt = document.createTextNode("new things, share her knowledge with others, and ");
  p.appendChild(txt)
  p.appendChild(document.createElement("br"));

  var txt = document.createTextNode("bring cool ideas to life.");
  p.appendChild(txt)
  p.appendChild(document.createElement("br"));
  p.appendChild(document.createElement("br"));

  var txt = document.createTextNode("Her current role model is AOC :]");
  p.appendChild(txt);

  document.getElementById("homepage").appendChild(p);

}
