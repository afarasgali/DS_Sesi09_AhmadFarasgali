const { $, expect } = require('@wdio/globals')
const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get iconCart () {
        return $('.shopping_cart_link');}

        async validateHomePage() {
            expect(browser).toHaveUrlContaining('/inventory.html')
            expect (this.iconCart).toBeDisplayed()
        }

        async open (){
                return super.open('/inventory.html');
        }

        async validateLockedOutUserError () {
            await this.errorLockedOutUser.waitForDisplayed({ timeout: 2500 });
            await expect(this.errorLockedOutUser).toBeDisplayed()}
    
}

module.exports = new HomePage();
