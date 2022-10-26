let SCHEDULER = "=Scheduler";
const CREATE_APPOINTMENT = '=New';

class CreateAppointment {

    async clickonScheduler() {
        await $(SCHEDULER).click();
    }

    async newAppointment() {
        await $(CREATE_APPOINTMENT).click();
    }
}

export default new CreateAppointment();