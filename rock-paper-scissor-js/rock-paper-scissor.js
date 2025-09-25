let main = document.getElementById('root');
main.style.backgroundColor = 'lightblue';

// Create and style heading
let heading = document.createElement('h1');
heading.textContent = "Rock Paper Scissor Game";
heading.style.color = 'red';
heading.style.display = 'flex';
heading.style.justifyContent = 'center';
main.appendChild(heading);

// Create a container for the text options
let optionsContainer = document.createElement('div');
optionsContainer.style.display = 'flex';
optionsContainer.style.justifyContent = 'space-around';
optionsContainer.style.marginTop = '20px';

// Create game options text
let rock = document.createElement('h1');
rock.textContent = "Rock";
let paper = document.createElement('h1');
paper.textContent = "Paper";
let scissor = document.createElement('h1');
scissor.textContent = "Scissor";

optionsContainer.appendChild(rock);
optionsContainer.appendChild(paper);
optionsContainer.appendChild(scissor);
main.appendChild(optionsContainer);

// Create a container for the images
let optionsContainer1 = document.createElement('div');
optionsContainer1.style.display = 'flex';
optionsContainer1.style.justifyContent = 'space-around';
optionsContainer1.style.marginTop = '20px';

// Create images
let rockImage = document.createElement('img');
rockImage.setAttribute("src", "./rock.png");
rockImage.setAttribute("alt", "Udemy Image");
rockImage.style.width = "100px"; // Example size

let paperImage = document.createElement('img');
paperImage.setAttribute("src", "./paper.png"); // Use actual image path
paperImage.setAttribute("alt", "Paper Image");
paperImage.style.width = "100px";

let scissorImage = document.createElement('img');
scissorImage.setAttribute("src", "./scissor.png"); 
scissorImage.setAttribute("alt", "Scissor Image");
scissorImage.style.width = "100px";

optionsContainer1.appendChild(rockImage);
optionsContainer1.appendChild(paperImage);
optionsContainer1.appendChild(scissorImage);
main.appendChild(optionsContainer1);

// Create button
const button = document.createElement('button');
button.textContent = "Play";
button.style.display = 'block';
button.style.margin = '20px auto';
button.style.width = '200px';
button.style.height = '50px';
button.style.backgroundColor = 'yellow';
button.addEventListener('click', () => {
    let userChoice = prompt("Enter your choice: Rock, Paper, or Scissor").toLowerCase();
    let choices = ['rock', 'paper', 'scissor'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let newRow = document.createElement('tr');
    let userCell = document.createElement('td');
    let computerCell = document.createElement('td');

    if (userChoice === computerChoice) {
        alert(`It's a tie! You both chose ${userChoice}`);
        userCell.textContent = 1;
        computerCell.textContent = 1;
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
    ) {
        alert(`You win! ${userChoice} beats ${computerChoice}`);
        userCell.textContent = 1;
        computerCell.textContent = 0;
    } else if (choices.includes(userChoice)) {
        alert(`You lose! ${computerChoice} beats ${userChoice}`);
        userCell.textContent = 0;
        computerCell.textContent = 1;
    } else {
        alert("Invalid choice! Please choose Rock, Paper, or Scissor.");
        return;
    }

    userCell.style.border = '2px solid black';
    computerCell.style.border = '2px solid black';
    newRow.appendChild(userCell);
    newRow.appendChild(computerCell);
    scoreBody.appendChild(newRow);
});

main.appendChild(button);

// Create score table before the button to avoid reference error
let scoreTable = document.createElement('table');
scoreTable.style.width = '50%';
scoreTable.style.margin = '20px auto';
scoreTable.style.border = '2px solid black';

let headerRow = document.createElement('tr');
let header1 = document.createElement('th');
header1.textContent = "User Score";
let header2 = document.createElement('th');
header2.textContent = "Computer Score";
headerRow.appendChild(header1);
headerRow.appendChild(header2);
scoreTable.appendChild(headerRow);

let scoreBody = document.createElement('tbody');
scoreTable.appendChild(scoreBody);
main.appendChild(scoreTable);

// Add styles to the main container
main.style.textAlign = 'center';
main.style.padding = '20px';
// Add styles to the options container
optionsContainer.style.fontSize = '24px';
// Add styles to the images
optionsContainer1.style.marginTop = '20px';
// Add styles to the button
button.style.fontSize = '20px';
// Add styles to the score table
scoreTable.style.borderCollapse = 'collapse';
scoreTable.style.marginTop = '20px';
// Add styles to the table headers
header1.style.border = '2px solid black';
header2.style.border = '2px solid black';
