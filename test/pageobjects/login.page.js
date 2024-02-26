const { $, expect } = require('@wdio/globals')
const Page = require('./page');


class LoginPage extends Page {
    //Elemet Collection
    get fieldUsername () {
        return $('#user-name');
    }

    get fieldPassword () {
        return $('#password');
    }

    get buttonLogin () {
        return $('#login-button');
    }
    get errorLockedOutUser() {
         return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]') 
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await this.fieldUsername.setValue(username);
        await this.fieldPassword.setValue(password);
        await this.buttonLogin.click();
    }

    async validateLockedOutUserError () {
        await this.errorLockedOutUser.waitForDisplayed({ timeout: 2500 });
        await expect(this.errorLockedOutUser).toBeDisplayed()
    }


    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
