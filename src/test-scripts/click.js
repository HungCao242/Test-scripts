let path = require('path');
describe("API Learning", () => {

   const MAX_WAIT_TIME = 3000;
   let url =
      "https://internship-qa-3.cybozu-dev.com/login?redirect=https%3A%2F%2Finternship-qa-3.cybozu-dev.com%2F";
   let username = '[name="username"]';
   let password = '[name="password"]';
   let login = ".login-button";
   let garoon = '[title="Garoon"]';
   let scheduler = "=Scheduler";
   let createAppointment = '=New';
   let highlightTextSelector = 'h2';
   let currentHighlightText = '';
   let currentUrl = '';
   let currentPageTitle = '';
   let startHour = '#start_hour';
   let endHour = '#end_hour';
   let timeZone = '=Other time zones';
   let utc = '#timezone_candidate';
   let applyTimezone = '#apply_timezone';
   let appointmentName = '[title="Appointment title"]';
   let attendees = '[data-name="Quynh Anh"]';
   let addAttendees = '#btn_add_sUID';
   let room = '[data-name="seminar room"]';
   let addRoom = '#btn_add_cITEM';
   let chooseFile = '#file_upload_';
   let addAppointment = '//*[@id="schedule_submit_button"]/a';


   it("Click on garoon app", async () => {
      //1. Open login page
      await browser.url(url);

      //2. Input username and password
      await $(username).waitForDisplayed(MAX_WAIT_TIME);
      await $(username).setValue("cybozu");
      await $(password).setValue("cybozu");
      await $(login).click();

      //3. Click on Garoon app
      await $(garoon).waitForDisplayed(MAX_WAIT_TIME);
      await $(garoon).click();

      //4. Click on Scheduler
      await $(scheduler).click();

      //5. Create appointment
      await $(createAppointment).click();
      // currentUrl = await browser.getUrl();
      // currentPageTitle = await browser.getTitle();
      // console.log('Current Url: ', currentUrl);
      // console.log('Current title: ', currentPageTitle);

      //6. Select start, end hour
      currentHighlightText = await $(highlightTextSelector).getText();
      console.log(currentHighlightText);
      await $(startHour).selectByVisibleText('8');
      await $(endHour).selectByVisibleText('10');
      // await $(startHour).selectByAttribute('value', '8');
      // await $(startHour).selectByIndex(10);

      //7. Change timezone
      await $(timeZone).click();
      await $(utc).selectByVisibleText('(UTC+07:00) Bangkok');
      await $(applyTimezone).click();

      //8. Named appointment
      await $(appointmentName).setValue("Meeting");

      //9. Add Attendees
      await $(attendees).click();
      await $(addAttendees).click();

      //10. Add room
      await $(room).click();
      await $(addRoom).click();

      //11. Upload file
      // let uploadFile = path.join(__dirname, './fileupload.txt');
      // $(chooseFile).setValue(uploadFile);

      //12. Add appointment
      await $(addAppointment).click();
      //await $(addAppointment).waitForDisplayed(MAX_WAIT_TIME, true);
      await browser.pause(MAX_WAIT_TIME);

   });
});
