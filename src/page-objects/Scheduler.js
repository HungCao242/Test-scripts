import Page from "./Page";

const GARRON = '[title="Garoon"]';
let SCHEDULER = "=Scheduler";
const CREATE_APPOINTMENT = '=New';

class Scheduler extends Page {

    async clickOnGaroon() {
        await $(GARRON).click();
    }

    async clickonScheduler() {
        await $(SCHEDULER).click();
    }

    async newAppointment() {
        await $(CREATE_APPOINTMENT).click();
    }
}

export default new Scheduler();