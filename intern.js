// Create a function that will collect the information for the interns
function Engineer(id, email, school) {
    if (typeof id != "number") {
        throw new Error("Expected parameter 'name' to be a non-empty string");
    }
    if (typeof email != "string") {
        throw new Error("Expected parameter 'email' to be a non-empty string");
    }

    if (typeof school != "string") {
        throw new Error("Expected parameter 'school' to be a non-empty string");
    }

    this.id = id;
    this.email = email;
    this.school = school;
}
