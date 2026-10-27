console.log('loading script file?');

async function loadOptions() {

  const response = await fetch("assets/data/data.json");

  if (!response.ok) {
    throw new Error("Could not load local JSON");
  }

  const data = await response.json();
  const favorites = document.querySelector("#favorite");
  let newOption;

  console.log(data);
  data.forEach((choice) => {
    newOption = new Option(choice.name, choice.id);
    favorites.appendChild(newOption);
  })

//   const newOption = new Option(data[0].name, data[0].id);
}

loadOptions();