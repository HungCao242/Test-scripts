const DELETE_BUTTON = '//*[@id="main_menu_part"]/div[1]/span[2]/span/a';
const ALL_SCHEDULES = '.attentionMessage-grn';
const YES_BUTTON = '//*[@id="schedule_button_save"]/a';

class DeleteAppointment {

    async clickOnDeleteButton() {
        await $(DELETE_BUTTON).click();
    }

    async deleteFrom() {
        await $(ALL_SCHEDULES).click();
    }

    async submit() {
        await $(YES_BUTTON).click();
    }
}

export default new DeleteAppointment();
