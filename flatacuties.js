$(document).ready(function() {
    // Load the JSON data
    $.getJSON("animals.json", function(data) {
      // Loop through each animal in the JSON data
      $.each(data, function(i, animal) {
        // Set the name and vote count for the corresponding button and details div
        $("#button" + (i + 1)).text("Animal " + (i + 1) + ": " + animal.name);
        $("#vote-count" + (i + 1)).text(animal.votes);
        // Set the image for the corresponding details div
        $("#details" + (i + 1) + " img").attr("src", animal.image);
      });
    });
    
    // Attach event handlers for the voting buttons
    $("[id^='votingButton']").click(function() {
      var detailsDiv = $(this).closest("div[id^='details']");
      var voteCount = detailsDiv.find("span[id^='vote-count']");
      var checkBox = detailsDiv.find("input[type='checkbox']");
      if (checkBox.is(":checked")) {
        voteCount.text(parseInt(voteCount.text()) + 1);
        checkBox.prop("checked", false);
      } else {
        alert("Please check the box to confirm your vote.");
      }
    });
  });
  
 // Get the button elements
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const finishButton = document.getElementById("finishButton");

// Get the details elements
const details1 = document.getElementById("details1");
const details2 = document.getElementById("details2");
const details3 = document.getElementById("details3");
const details4 = document.getElementById("details4");
const details5 = document.getElementById("details5");

// Get the vote count elements
const voteCount1 = document.getElementById("vote-count1");
const voteCount2 = document.getElementById("vote-count2");
const voteCount3 = document.getElementById("vote-count3");
const voteCount4 = document.getElementById("vote-count4");
const voteCount5 = document.getElementById("vote-count5");

// Get the vote button elements
const voteButton1 = document.getElementById("voteButton1");
const voteButton2 = document.getElementById("voteButton2");
const voteButton3 = document.getElementById("voteButton3");
const voteButton4 = document.getElementById("voteButton4");
const voteButton5 = document.getElementById("voteButton5");

// Get the results elements
const results1 = document.getElementById("results1");
const results2 = document.getElementById("results2");
const results3 = document.getElementById("results3");
const results4 = document.getElementById("results4");
const results5 = document.getElementById("results5");

// Add click event listeners to the buttons
button1.addEventListener("click", function() {
  toggleDetails(details1);
});
button2.addEventListener("click", function() {
  toggleDetails(details2);
});
button3.addEventListener("click", function() {
  toggleDetails(details3);
});
button4.addEventListener("click", function() {
  toggleDetails(details4);
});
button5.addEventListener("click", function() {
  toggleDetails(details5);
});

// Add click event listeners to the vote buttons
voteButton1.addEventListener("click", function() {
  vote(voteCount1, results1);
});
voteButton2.addEventListener("click", function() {
  vote(voteCount2, results2);
});
voteButton3.addEventListener("click", function() {
  vote(voteCount3, results3);
});
voteButton4.addEventListener("click", function() {
  vote(voteCount4, results4);
});
voteButton5.addEventListener("click", function() {
  vote(voteCount5, results5);
});

// Add click event listener to the finish button
finishButton.addEventListener("click", function() {
  let votedAnimal = getVotedAnimal();
  alert(`Thank you for voting for ${votedAnimal}!`);
  location.reload(); // Refresh the page to reset the program
});

// Function to toggle the display of the details element
function toggleDetails(details) {
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}

// Function to increment the vote count and display the results
function vote(voteCount, results) {
  // Get the current vote count and increment it
  let count = parseInt(voteCount.innerText);
  count++;
  voteCount.innerText = count;

  // Display the results
  results.innerText = `Total votes: ${count}`;
}

// Function to get the animal the user voted for
function getVotedAnimal() {
  if (voteCount1.innerText !== "0") {
    return votedAnimal }
  }