var emailKey = "email";

var myInfo = {
    name: "Triết",
    age: 19,
    address: "Cần Thơ, Việt Nam",
    getName: function () {
        return this.name;
    },
    [emailKey]: "nightcorekz69@gmail.com",
};

function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function () {
        return `${firstName} ${lastName}`;
    };
}

var author = new User("Triet", "Minh");
console.log(author.fullName());

var user = new User("Thu", "Duong");
console.log(user.fullName());
