const bEl = document.getElementById("btn");
const jEl = document.getElementById("joke");

const apiKey = "HIYJqsGhSsOkVbsV0d36G6HmL57xNa39xBpr5T0o";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  try {
    jEl.innerText = "Updating...";
    bEl.disabled = true;
    bEl.innerText = "Loading...";
    const response = await fetch(apiURL, options);
    const data = await response.json();

    bEl.disabled = false;
    bEl.innerText = "Tell me a joke";

    jEl.innerText = data[0].joke;
  } catch (error) {
    jEl.innerText = "An error happened, try again later";
    bEl.disabled = false;
    bEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

bEl.addEventListener("click", getJoke);