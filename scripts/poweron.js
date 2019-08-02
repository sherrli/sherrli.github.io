var timesClicked = 0;

// Functions called from within the HTML sites.
// Increment click counter before displaying or withdrawing content.

function homeMsg() {
  timesClicked++;
  if (timesClicked % 2 == 1) {
    homeOddClick();
  } else {
    homeEvenClick();
  }
}

function contactMsg() {
  timesClicked++;
  if (timesClicked % 2 == 1) {
    contactOddClick();
  } else {
    contactEvenClick();
  }
}

function projMsg() {
  timesClicked++;
  if (timesClicked % 2 == 1) {
    projOddClick();
  } else {
    projEvenClick();
  }
}

function memeMsg() {
  timesClicked++;
  if (timesClicked % 2 == 1) {
    memeOddClick();
  } else {
    memeEvenClick();
  }
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

function displayHome() {

}

function homeOddClick() {

  displayNavBar()

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

function contactOddClick() {

  displayHome()

}

function contactEvenClick() {

}

function projOddClick() {

  displayHome()

}

function projEvenClick() {

}

function memeOddClick() {

  displayHome()

}

function memeEvenClick() {

  displayNavBar()

}
