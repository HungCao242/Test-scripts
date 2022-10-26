class Page {
    async openPage(path) {
        await browser.url(path);
    }
}

export default new Page();