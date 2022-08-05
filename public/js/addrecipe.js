const addBtn = document.getElementById("addNewIngredient");


// ingredients
// - amount
// - unit of measurement
// - ingredient name


// const mealtime = document.querySelector('meal');

//  look up input file for image

// TODO: Add description after name of recipe in handleba

// Add a new ingredient box and delete button.
function addIngredientBox(event) {
	event.preventDefault();

	// Grabs the ol element
	var ingredientList = document.querySelector("#ingredient-list");

	// Creates the input and sets the placeholder
	var newEmptyIngredientInput = document.createElement("input");
	newEmptyIngredientInput.placeholder = "(amount, unit of measurement, ingredient name)";

	// Creates the trash button
	var newTrashButton = document.createElement("button");
	newTrashButton.textContent = "🗑";
	newTrashButton.type = "button";
	newTrashButton.onclick = deleteIngredientBox;

	// Creates the list element and appends input and trash button
	var listElement =  document.createElement("li");
	listElement.appendChild(newEmptyIngredientInput);
	listElement.appendChild(newTrashButton);

	// Adds list element to ingredient list
	ingredientList.appendChild(listElement);
}

// Deletes ingredient box and button.
function deleteIngredientBox(event) {
	event.preventDefault();

	// Grab parent element of the button that was clicked
	var listElement = event.target.parentElement;

	// Then removes the element from the page
	listElement.remove();
}

// Post request
async function newRecipeHandler(event) {
	event.preventDefault();

	const name = document.querySelector("#name").value.trim();
	const description = document.querySelector("#description").value.trim();
	// const ingredients = document.querySelector("#ingredients").value.trim();
	const ingredients = "";
	const instructions = document.querySelector("#instructions").value.trim();
	const mealtime = document.querySelector("input[name=meal]:checked").value;
	const file_name = "sam-moghadam-khamseh-VpOpy6QrDrs-unsplash.jpg";
	const user_id = 1;
	const time_created = new Date();
	console.log(mealtime);

	const response = await fetch(`/api/addrecipe`, {
		method: "POST",
		body: JSON.stringify({
			name,
			description,
			ingredients,
			instructions,
			mealtime,
			file_name,
			user_id,
			time_created
		}),
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (response.ok) {
		document.location.replace("/"); // TODO: Navigate to recipe details page
	}
}

// document
// 	.querySelector(".new-recipe-form")
// 	.addEventListener("submit", newRecipeHandler);

// const response = await fetch(`/api/dish`, {
//     method: 'POST',
//     body: JSON.stringify({
//       name,
// 	  description,
//       ingredients,
//       instructions,
//       mealtime,
//     //   filename,
//     }),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });

// if (response.ok) {
// document.location.replace('/'); // TODO: Naviagte to recipe details page
// } else {
// alert('Failed to add dish');
// }
