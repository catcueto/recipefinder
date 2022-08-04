const addBtn = document.getElementById("addNewIngredient");
// const mealtime = document.querySelector('meal');

//  look up input file for image

// TODO: Add description after name of recipe in handleba

// Add a new ingredient box and delete button.
function addIngredientBox() {
	const newDiv = document.createElement("div");
	newDiv.className = "ingredient";

	const inputElem = document.createElement("input");
	inputElem.type = "text";
	newDiv.appendChild(inputElem);

	const btnElem = document.createElement("button");
	btnElem.type = "button";
	btnElem.textContent = "🗑";
	btnElem.addEventListener("click", removeUrlBox);
	newDiv.appendChild(btnElem);

	const element = document.getElementById("TextAreaBtn");
	element.appendChild(newDiv);
}

// Deletes ingredient box and button.
function deleteIngredientBox() {
	this.closest(".ingredient").remove;
}

// Post request
async function newRecipeHandler(event) {
	event.preventDefault();

	const name = document.querySelector("#name").value.trim();
	const description = document.querySelector("#description").value.trim();
	const ingredients = document.querySelector("#ingredients").value.trim();
	const instructions = document.querySelector("#instructions").value.trim();
	const mealtime = document.querySelector("input[name=meal]:checked").value.trim();
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

document
	.querySelector(".new-recipe-form")
	.addEventListener("submit", newRecipeHandler);

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
