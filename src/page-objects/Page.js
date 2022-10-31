const HEADER = '//*[@id="cloudHeader-userName-grn"]';
const LOGOUT = '#com-header-logout-link';
const LOGIN_TITLE = '.login-dialog-title';

export default class Page {

    async openPage(path) {
        await browser.url(path);
    }

    async clickOnHeader() {
        await $(HEADER).click();
    }

    async LogOut() {
        await $(LOGOUT).click();
        await $(LOGIN_TITLE).waitForDisplayed({ reverse: true });
    }
}
