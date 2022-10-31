import LoginPage from '../page-objects/Login';
import LoginData from '../test-data/LoginData';
import Scheduler from '../page-objects/Scheduler';
import Appointment from '../page-objects/AppointmentDetails';

describe('Create Appointment', () => {

    const LOGIN_DATA = LoginData.account;
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.waitForUserNameDisplayed();
        await LoginPage.username(LOGIN_DATA.username);
        await LoginPage.password(LOGIN_DATA.password);
        await LoginPage.login();
        await Scheduler.clickOnGaroon();
    });

    it('Create Appointment unsuccessfully', async () => {
        await Scheduler.clickonScheduler();
        await Scheduler.newAppointment();

        await Appointment.timeLine(15, 14);
        await Appointment.timeZone();
        await Appointment.title('Daily Meeting');
        await Appointment.addAttendees();
        await Appointment.addRoom();
        await Appointment.submit();

        await Appointment.error('GRN_SCHD_13012', 'Date and time are invalid.');
        await Appointment.clickErrorButton();
    });

    afterEach(async () => {
        await Scheduler.clickOnHeader();
        await Scheduler.LogOut();
    });
});




//*[@id="schedule/delete"]/table/tbody/tr[1]/td/div[2]/span/label