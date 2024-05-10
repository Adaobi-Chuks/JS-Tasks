const prompt = require("prompt-sync")({ sigint: true });;

class PasswordManager {
    constructor(website, username, password) {
        this.website = website;
        this.username = username;
        this.password = password;
    }
}

class Mypasswords {
    passwords;
    constructor() {
        this.passwords = [];
    }

    addPassword(website, username, password) {
        const newPassword = new PasswordManager(website, username, password)
        this.passwords.push(newPassword)
    }

    displayPassword() {
        this.passwords.forEach((password) => {
            console.log(`Username: ${password.username}, Password: ${password.password}`)
        });
    }
}



const password1 = new Mypasswords();

password1.addPassword("www.facebook.com", "ChigozirimOgueji", "joyce1234")
password1.addPassword("www.google.com", "Chigozirim", "ogueji1234")

console.log(`What is the website`);
const websiteName = prompt();

const requiredLogin = password1.passwords.filter((password) => websiteName == password.website);

console.log(requiredLogin)
requiredLogin.displayPassword();