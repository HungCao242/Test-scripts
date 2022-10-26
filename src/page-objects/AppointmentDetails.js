const START_HOUR = '#start_hour';
const END_HOUR = '#end_hour';
const TIME_ZONE = '=Other time zones';
const UTC = '#timezone_candidate';
const APPLY_TIMEZONE = '#apply_timezone';
const TITLE = '[title="Appointment title"]';
const ATTENDEES = '[data-name="Quynh Anh"]';
const ADD_ATTENDEES = '#btn_add_sUID';
const ROOM = '[data-name="seminar room"]';
const ADD_ROOM = '#btn_add_cITEM';
const SUBMIT = '//*[@id="schedule_submit_button"]/a';
const ERROR_CODE = '..error_code';
const ERROR_MESS = '.error_diagnosis';
const ERROR_OK = '//*[@id="msgbox_btn_ok"]/a';

class CreateAppointment {

    async timeLine(start, end) {
        await $(START_HOUR).selectByVisibleText(start);
        await $(END_HOUR).selectByVisibleText(end);
    }

    async timeZone() {
        await $(TIME_ZONE).click();
        await $(UTC).selectByVisibleText('(UTC+07:00) Bangkok');
        await $(APPLY_TIMEZONE).click();
    }

    async title(name) {
        await $(TITLE).setValue(name);
    }

    async addAttendees() {
        await $(ATTENDEES).click();
        await $(ADD_ATTENDEES).click();
    }

    async addRoom() {
        await $(ROOM).click();
        await $(ADD_ROOM).click();
    }

    async submit() {
        await $(SUBMIT).click();
        await $(SUBMIT).waitForDisplayed(10000, true);
    }

    async error(errorCode, errorMess) {
        expect(ERROR_CODE).toHaveText(errorCode);
        expect(ERROR_MESS).toHaveText(errorMess);
    }

    async clickErrorButton() {
        await $(ERROR_OK).click();
    }


}

export default new CreateAppointment();