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
const ERROR_CODE = '.error_code';
const ERROR_MESS = '.error_diagnosis';
const ERROR_OK = '//*[@id="msgbox_btn_ok"]/a';
const DELETE_BUTTON = '//*[@id="main_menu_part"]/div[1]/span[2]/span/a';
const ALL_SCHEDULES = '.attentionMessage-grn';
const YES_BUTTON = '//*[@id="schedule_button_save"]/a';


class AppointmentDetails {

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

    async clickOnDeleteButton() {
        await $(DELETE_BUTTON).click();
    }

    async deleteFrom() {
        await $(ALL_SCHEDULES).click();
    }

    async submitDelete() {
        await $(YES_BUTTON).click();
        await $(YES_BUTTON).waitForDisplayed({ reverse: true });
    }

    async error(errorCode, errorMess) {
        await expect($(ERROR_CODE)).toHaveText(errorCode);
        await expect($(ERROR_MESS)).toHaveText(errorMess);
    }

    async clickErrorButton() {
        await $(ERROR_OK).click();
    }

}

export default new AppointmentDetails();