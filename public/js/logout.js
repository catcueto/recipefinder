const logout = async () => {
  // Make a POST request to destroy the session on the back end; runs api/users/logout
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // If logged out, redirect to the login page
    document.location.replace("/login");
  } else {
    alert(response.statusText);
  }
};
// When clicking the log out button
document.querySelector("#logout").addEventListener("click", logout);
