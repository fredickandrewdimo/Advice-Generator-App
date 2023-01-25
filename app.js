// Get the advice number element
const adviceId = document.getElementById("advice-number");

// Get the advice element
const adviceContent = document.getElementById("advice-content");

// Get the advice generate button
const generateButton = document.getElementById("generate-button");

// Listen for click event to refresh the page
generateButton.addEventListener("click", function () {
  location.reload();
});

// Define an async function called getAdvice
async function getAdvice() {
  try {
    // Use the fetch API to make a GET request to the advice API
    const response = await fetch(
      "https://api.adviceslip.com/advice?slip_id=13"
    );
    // Parse the response data as JSON
    const data = await response.json();

    // Extract the advice text from the data
    const advice = data.slip.advice;
    // Update the innerText of the adviceContent element with the advice text
    adviceContent.innerText = `"${advice}"`;

    // Extract the id of the advice from the data
    const id = data.slip.id;
    // Update the innerText of the adviceId element with the id
    adviceId.innerText = id;
  } catch (error) {
    // Log any errors that occur
    console.log(error);
  }
}

// Calls the getAdvice Function
getAdvice();
