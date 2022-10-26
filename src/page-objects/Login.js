const USERNAME = '[name="username"]';
const PASSWORD = '[name="password"]';
const LOGIN_BTN = ".login-button";

class LoginPage {

    async waitForUserNameDisplayed() {
        await $(USERNAME).waitForDisplayed(15000);
    }

    async username(username) {
        await $(USERNAME).setValue(username);
    }

    async password(password) {
        await $(PASSWORD).setValue(password);
    }
    async login() {
        await $(LOGIN_BTN).click();
    }
}

export default new LoginPage();