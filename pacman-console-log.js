console.log('Pact-Man eats ghosts for lunch.')

var ghost = "Blinky!"; // <<-- this variable assignment is not a comment// in this sentence comment. JOKES
/* Each
of these
lines
are
comments */

var ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde'];

for (var index = 0; index < ghosts.length; index++) {
  console.log('Pac-Man eats ' + ghosts[index]);
}

power_pellet_eaten = false
ghosts = 2

while (true) {
  console.log('Ghosts remaining ' + ghosts);


  if (power_pellet_eaten == false) {
    console.log('Pac-man eats the power pellet.');
    power_pellet_eaten = true;
  } else if (ghosts > 0){
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
    }
  }

console.log('Pac-Man returns home after a long day in the maze.');

var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(ghost + ' is the colour ' + colour);

//pacman-return.just

function addScore(currentScore, eaten) {
  switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
  }
  return currentScore + scoreToAdd;
}

var score = 0;
score = addScore(score, 'powerPellet');
score = addScore(score, 'powerPellet');
score = addScore(score, 'powerPellet');


console.log(`Your score: ${score}`);
