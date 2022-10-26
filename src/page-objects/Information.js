const GARRON = '[title="Garoon"]';

class InforPage {

    async clickOnGaroon() {
        await $(GARRON).click();
    }
}

export default new InforPage();