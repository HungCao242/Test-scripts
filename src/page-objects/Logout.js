const HEADER = '//*[@id="cloudHeader-userName-grn"]';
const LOGOUT = '//*[@id="com-header-logout-link"]';

class LogOut {

    async clickOnHeader() {
        await $(HEADER).click();
    }

    async LogOut() {
        await $(LOGOUT).click();
        await browser.pause(5000);
    }
}

export default new LogOut();
