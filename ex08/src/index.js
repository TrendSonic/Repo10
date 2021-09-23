function getUsername(email) {
    var username = '';

    // Only change code below this line
    username = {
        'user1@gmail.com': "user1",
        'user2@gmail.com': "user2",
        'user3@gmail.com': "user3",
        'user4@gmail.com': "user4",
        'user5@gmail.com': "user5",
        'user6@gmail.com': "user6"
    };
        // Only change code above this line
        username = username[email];
        return username;
}
console.log(getUsername("user1@gmail.com"));
console.log(getUsername("user2@gmail.com"));
console.log(getUsername("user3@gmail.com"));
console.log(getUsername("user4@gmail.com"));
console.log(getUsername("user5@gmail.com"));
console.log(getUsername("user6@gmail.com"));
console.log(getUsername(""));
module.exports = getUsername;