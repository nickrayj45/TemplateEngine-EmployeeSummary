// Create a function that will collect the information for the engineers
function Engineer(id, email, githubUsername) {
    if (typeof id != "number") {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    if (typeof email != "string") {
        throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (typeof githubUsername != "string") {
        throw new Error("Expected parameter 'Github Username' to be a non-empty string");
    }

    this.id = id;
    this.email = email;
    this.githubUsername = githubUsername;
}
