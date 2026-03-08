function displayPoem(response) {
  let loaderElement = document.querySelector("#loader");
  loaderElement.classList.add("hidden");

  let poemElement = document.querySelector("#poem");
  poemElement.classList.add("fade-in");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions").value;

  let apiKey = "acbod87f7ctb68340e47b7b3abe9ae79";
  let prompt = `create a short poem in Irish about ${instructionsInput}`;
  let context = `be romantic and whismical, just generate a short 4 line poem based on ${instructionsInput} using this example: <p>this is a poem,<br/>this is a poem</p>`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  let loaderElement = document.querySelector("#loader");
  loaderElement.classList.remove("hidden");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a poem about ${instructionsInput} in Irish`;

  console.log("Generating Poem");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
