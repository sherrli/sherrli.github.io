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

function battleMsg() {
  timesClicked++;
  console.log("click count battle " + timesClicked);
  if (timesClicked % 2 == 0) {
    battleEvenClick();
  } else {
    window.open("index.html","_self");
  }
}

// TODO: Return to index home page, then run the callback function.
function returnHome(callbackFcn) {
  window.open("index.html","_self");
  callbackFcn();
  //return true;
}


// HTML hack that mimics going to a url then running a script on that url.
// Check the hash of the url and load the screen if you came here from another url.
function displayHome() {
  // timesClicked resets to 0 when you leave index.html
  // So we have to set it back to 1.
  if (window.location.hash === '#return') {
    timesClicked++;
    homeOddClick();
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
  // Make the href open in a new tab
  a.setAttribute('target', "_blank");
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

  var battle = document.createElement("li")
  var a = document.createElement("a");
  a.textContent = "Battle";
  a.setAttribute('href', "battle.html");
  memes.appendChild(a);
  document.getElementById("navbar").appendChild(battle);
}

function homeOddClick() {
  displayNavBar();

  // display header text
  var hdr = document.createElement("h1");
  var txt = document.createTextNode("hello world! i'm sherri..");
  hdr.appendChild(txt);
  document.getElementById("homepage").appendChild(hdr);

  // display paragraph text
  var p = document.createElement("p");
  var txt = document.createTextNode("..an aspiring programmer from san jose.");
  p.appendChild(txt);
  p.appendChild(document.createElement("br"));

  var txt = document.createTextNode("who has worked in QA automation + performance testing.");
  p.appendChild(txt);
  p.appendChild(document.createElement("br"));

  var txt = document.createTextNode("outside of work, she likes new music and games.");
  p.appendChild(txt)
  p.appendChild(document.createElement("br"));

  p.appendChild(document.createElement("br"));

  document.getElementById("homepage").appendChild(p);
}

function homeEvenClick() {
  // remove navbar
  document.getElementById("navbar").innerHTML = "";
  // find text by the 'h1' and 'p' tags, and remove.
  // console.log(document.getElementsByTagName("h1"));
  // console.log(document.getElementsByTagName("h2")[0]);
  var textlist = document.getElementsByTagName("h1");
  // while loop prevents double-printing of the text on the homepage.
  while (textlist[0] !== undefined) {
    textlist[0].remove();
  }
  while (document.getElementsByTagName("p")[0] !== undefined) {
    var text2 = document.getElementsByTagName("p")[0];
    text2.remove();
  }
}

function contactEvenClick() {
  document.getElementById("navbar").innerHTML = "";
}

function projEvenClick() {
  document.getElementById("navbar").innerHTML = "";
}

function memeEvenClick() {
  document.getElementById("navbar").innerHTML = "";
  document.getElementById("memeimage").innerHTML = "";
}

function battleEvenClick() {
  document.getElementById("navbar").innerHTML = "";
  // document.getElementById("memetext").innerHTML = "";
}

function memeOddClick() {
  // Turns on power from the Memes page.
  var definition = document.createElement("p");
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

  document.getElementById("memetext").appendChild(credit);
}


// Display a random meme in a new window in a new tab, upon click.
function displayMeme() {
  var memeList = new Array("memes/broom_whack.jpg",
"memes/nancy_rap.jpg",
"memes/nymphia_boba.gif",
"memes/nymphia_fake.jpeg",
"memes/nymphia_typical.png",
"memes/plain_jane_Q.jpeg",
"memes/plain_jane_read.jpeg",
"memes/primeape_inosuke.jpg",
"memes/rupaul_judging.png",
"memes/rupaul_watch.jpeg",
"memes/undefined_gf.jpg",
"memes/yusuf_mom.jpg")

  var div = document.getElementById("memeimage");
  // Clear images.
  div.innerHTML = "";

  // Based on rng, choose one of 10 random memes to display.
  // Generate random number in [0, 1).
  var rng = Math.random();
  var rngIndex = Math.floor(Math.random() * memeList.length);

  // Display meme on page instead of new window.
  var memePicture = document.createElement('img');
  memePicture.src = memeList[rngIndex];
  // debug print statement
  console.log("memeList[rngIndex]");
  div.appendChild(memePicture);
}

// Displays two fighters on the screen, upon click.
function displayFighters() {
  // Update this list when a new pokemon img is added.
  var pokemonList = new Array("battle_contestants/budew.png", "battle_contestants/clobbopus.png", "battle_contestants/cloyster.png", "battle_contestants/ditto.png", "battle_contestants/dratini.png", "battle_contestants/ekans.png", "battle_contestants/gardevoir.png", "battle_contestants/gyarados.png", "battle_contestants/lickitung.png", "battle_contestants/lopunny.png", "battle_contestants/lucario.png", "battle_contestants/machamp.png", "battle_contestants/machoke.png", "battle_contestants/magikarp.png", "battle_contestants/metapod.png", "battle_contestants/muk.png", "battle_contestants/nidoking.png", "battle_contestants/nidoqueen.png", "battle_contestants/onix.png", "battle_contestants/persian.png", "battle_contestants/squirtle.png", "battle_contestants/tentacool.png", "battle_contestants/vaporeon.png", "battle_contestants/vulpix.png", "battle_contestants/weedle.png");
  var div = document.getElementById("enterbattle");
  // Clear images.
  div.innerHTML = "";
  // Generate random number in [0, 1), multiply by pokemon list length, then round result down to an int.
  var rngOne = Math.floor(Math.random() * pokemonList.length);
  var rngTwo = Math.floor(Math.random() * pokemonList.length);
  // Based on rng, choose random contestants.
  // const battleElements = document.querySelectorAll('div');
  // battleElements.forEach((el) => el.style.display = 'none')
  // battleElements[0].style.display = 'block';
  var contestantOne = document.createElement('img');
  var contestantTwo = document.createElement('img');
  contestantOne.src = pokemonList[rngOne];
  contestantTwo.src = pokemonList[rngTwo];
  let nameOne = pokemonList[rngOne].replace("battle_contestants/","");
  nameOne = nameOne.replace(".png","");
  let nameTwo = pokemonList[rngTwo].replace("battle_contestants/","");
  nameTwo = nameTwo.replace(".png","");
  // Display pokemon
  div.appendChild(contestantOne);
  div.appendChild(contestantTwo);
  // Print winner
  console.log(nameOne+" beat "+nameTwo);
  var p = document.createElement("p");
  var txt = document.createTextNode(nameOne+" beat "+nameTwo);
  p.appendChild(txt);
  document.getElementById("enterbattle").appendChild(p);
}
