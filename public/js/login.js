const loginFormHandler = async (event) => {
	// Stop the browser from submitting the form so we can do so with JavaScript
	event.preventDefault();

	// Grabbing data from the form
	// trim () removes whitebase from both ends of a string
	const userEmail = document.querySelector("#email-login").value.trim();
	const userPassword = document.querySelector("#password-login").value.trim();

	// if user enters BOTH email and password...
	if (email && password) {
		// Send e-mail and password to the server
		const response = await fetch("/api/users/login", {
			method: "POST",
			body: JSON.stringify({ userEmail, userPassword }),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace("/");
		} else {
			alert("Failed to log in");
		}
	}
};

// When you click on this form SUBMIT, then grab data
document
	.querySelector(".login-form")
	.addEventListener("submit", loginFormHandler);
