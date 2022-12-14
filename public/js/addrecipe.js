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

function getIngredients() {
	const ingredientListContainer = document.querySelector("#ingredient-list");
	const ingredientList = ingredientListContainer.children;

	let ingredientArray = [];

	for (let i = 0; i < ingredientList.length; i++) {
		// grab ingredient input value
		var ingredientValue = ingredientList[i].firstChild.value;
		ingredientArray.push(ingredientValue);
	}

	return JSON.stringify(ingredientArray);
}

// Post request
async function newRecipeHandler(event) {
	event.preventDefault();

	const name = document.querySelector("#name").value.trim();
	const description = document.querySelector("#description").value.trim();
	const ingredients = getIngredients();
	const instructions = document.querySelector("#instructions").value.trim();
	let mealtime = document.querySelector("input[name=meal]:checked");
	
	if (mealtime) {
		mealtime = mealtime.value;
	}

	const file_name = document.querySelector("#myfile").files[0].name;
	const user_id = 1;
	const time_created = new Date();


	console.log(document.querySelector("#myfile").files[0]);

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
		document.location.replace("/");
	}
}
