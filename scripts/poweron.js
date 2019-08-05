var timesClicked = 0;

// Functions called from within the HTML sites.
// Increment click counter before displaying or withdrawing content.

function homeMsg() {
  timesClicked++;
  console.log("click count home " + timesClicked);
  if (timesClicked % 2 == 1) {
    homeOddClick();
  } else {
    homeEvenClick();
  }
}

async function contactMsg() {
  timesClicked++;
  console.log("click count contact " + timesClicked);
  // Always even turn off.
  if (timesClicked % 2 == 0) {
    // Shut down
    contactEvenClick();
  } else {
    // Turn on goes back to index, fully loaded (uses previously cached even counter)
    window.open("index.html","_self");
  }
}

function projMsg() {
  timesClicked++;
  console.log("click count projects " + timesClicked);
  if (timesClicked % 2 == 0) {
    // Shut down
    projEvenClick();
  } else {
    // Turn on
    window.open("index.html","_self");
  }
}

function memeMsg() {
  timesClicked++;
  console.log("click count memes " + timesClicked);
  if (timesClicked % 2 == 0) {
    memeEvenClick();
  } else {
    window.open("index.html","_self");
  }
}

// Return to index home page. Used as a callback function.
function returnHome() {
  window.open("index.html","_self");
}

// Load home page when already powered on.
function reloadHome(callback) {
  callback();

  homeOddClick();
}

// ------------------------------------------------------
// Helper functions for displaying and removing elements.
function displayNavBar() {
  // 'li' elements don't have href attributes, so we must wrap the 'a' tag inside it.
  var resume = document.createElement("li")
  var a = document.createElement("a");
  a.textContent = "Resume";
  a.setAttribute('href', "docs/resume.pdf");
  resume.appendChild(a);
  // var $navbar = $('#navbar');
  document.getElementById("navbar").appendChild(resume);

  var contact = document.createElement("li")
  var a = document.createElement("a");
  a.textContent = "Contact";
  a.setAttribute('href', "contact.html");
  contact.appendChild(a);
  document.getElementById("navbar").appendChild(contact);

  var projects = document.createElement("li")
  var a = document.createElement("a");
  a.textContent = "Projects";
  a.setAttribute('href', "projects.html");
  projects.appendChild(a);
  document.getElementById("navbar").appendChild(projects);

  var memes = document.createElement("li")
  var a = document.createElement("a");
  a.textContent = "Memes";
  a.setAttribute('href', "memes.html");
  memes.appendChild(a);
  document.getElementById("navbar").appendChild(memes);
}

function homeOddClick() {
  displayNavBar();

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

function homeEvenClick() {
  // remove navbar
  document.getElementById("navbar").innerHTML = "";
  // find text by the 'h1' and 'p' tags, and remove.
  var text1 = document.getElementsByTagName("h1")[0];
  var text2 = document.getElementsByTagName("p")[0];
  text1.remove();
  text2.remove();
}

function contactEvenClick() {
  document.getElementById("navbar").innerHTML = "";
}

function projEvenClick() {
  document.getElementById("navbar").innerHTML = "";
}

function memeEvenClick() {
  document.getElementById("navbar").innerHTML = "";
  document.getElementById("memetext").innerHTML = "";
}

function memeOddClick() {
  // Turns on power from the Memes page.
  var definition = document.createElement("p");
  var txt = document.createTextNode("Meme: \ noun \ an idea or behavior that spreads from person to person within a culture.");
  definition.appendChild(document.createElement("br"));
  definition.appendChild(document.createElement("br"));
  definition.appendChild(txt);
  document.getElementById("memetext").appendChild(definition);
  var button = document.createElement("button");
  button.innerHTML = "click for a meme";
  document.getElementById("memetext").appendChild(button);

  var credit = document.createElement("p");
  var i;
  for (i=0; i<18; i++) {
    credit.appendChild(document.createElement("br"));
  }
  txt = document.createTextNode("Credit: Facebook group Mathematical Mathematics Memes.");
  credit.appendChild(txt);
  document.getElementById("memetext").appendChild(credit);
}


// Display a random meme in a new window in a new tab, upon click.
function displayMeme() {
  // Generate random number in [0, 1).
  var rng = Math.random();
  // Based on rng, choose one of 10 random memes to display.
  if (rng < 0.1) {
    window.open('memes/complex.png', '_blank');
  } else if (rng < 0.2) {
    window.open('memes/clopen.png', '_blank');
  } else if (rng < 0.3) {
    window.open('memes/euclidean.jpg', '_blank');
  } else if (rng < 0.4) {
    window.open('memes/ikea.png', '_blank');
  } else if (rng < 0.5) {
    window.open('memes/hamiltonian.jpg', '_blank');
  } else if (rng < 0.6) {
    window.open('memes/gt.jpg', '_blank');
  } else if (rng < 0.7) {
    window.open('memes/tmseries.jpg', '_blank');
  } else if (rng < 0.8) {
    window.open('memes/triplets.jpg', '_blank');
  } else if (rng < 0.9) {
    window.open('memes/curve.jpg', '_blank');
  } else {
    window.open('memes/category,jpg', '_blank');
  }
}
