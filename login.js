//This is login page
let users = [{
    email: "rahul.09chouhan1996@gmail.com",
    pass: "123456"
}];

let addUsers = {};
count = 0;

for (let turns = 0; count != 1; turns++) {
    let value1 = prompt("Enter your email address to login: ");
    let value2 = prompt("Enter Password: ");
    for (let index = 0; index < users.length; index++) {

        if (value1 === users[index].email && value2 === users[index].pass) {
            count++;
        }
    }
    if (count === 1) {
        alert("You have successfully logged into your account");
    } else {
        alert("You entered wrong details.Register.");
        addUsers.email = prompt("Enter your email address: ");
        addUsers.pass = prompt("Create Password: ");
        users.push(addUsers);
        alert("Click OK to login");
    }
}
