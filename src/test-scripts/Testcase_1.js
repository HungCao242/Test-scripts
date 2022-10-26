import LoginPage from '../page-objects/Login';
import LoginData from '../test-data/LoginData';
import InforPage from '../page-objects/Information';
import CreateAppointment from '../page-objects/Scheduler';
import Appointment from '../page-objects/AppointmentDetails';
import Delete from '../page-objects/DeleteAppointment';
import LogOut from '../page-objects/Logout';
import allureReporter from '@wdio/allure-reporter';

describe('Create Appointment', () => {

    const LOGIN_DATA = LoginData.account;
    before(async () => {
        await browser.url('/login');
        await LoginPage.waitForUserNameDisplayed();
        await LoginPage.username(LOGIN_DATA.username);
        await LoginPage.password(LOGIN_DATA.password);
        await LoginPage.login();
    });

    it('Create Appointment successfully', async () => {
        await InforPage.clickOnGaroon();
        await CreateAppointment.clickonScheduler();
        await CreateAppointment.newAppointment();

        await Appointment.timeLine(8, 10);
        await Appointment.timeZone();
        await Appointment.title('Daily Meeting');
        await Appointment.addAttendees();
        await Appointment.addRoom();
        await Appointment.submit();

        await Delete.clickOnDeleteButton();
        await Delete.deleteFrom();
        await Delete.submit();

        allureReporter.addFeature('Feature');
    });

    it('Create Appointment unsuccessfully', async () => {
        await InforPage.clickOnGaroon();
        await CreateAppointment.clickonScheduler();
        await CreateAppointment.newAppointment();

        await Appointment.timeLine(15, 14);
        await Appointment.timeZone();
        await Appointment.title('Daily Meeting');
        await Appointment.addAttendees();
        await Appointment.addRoom();
        await Appointment.submit();

        await Appointment.error('GRN_SCHD_13012', 'Date and time are invalid.');
        await Appointment.clickErrorButton();
        allureReporter.addFeature('Feature');
    });

    after(async () => {
        await LogOut.clickOnHeader();
        await LogOut.LogOut();
    });
});




//*[@id="schedule/delete"]/table/tbody/tr[1]/td/div[2]/span/label