//1.Hard Asserartions: if the asseration fails, the test will stop executing an dwill be marked as failed.
import {test,expect} from '@playwright/test';
test('Hard Assertions', async({page}) => {

    //Launch the application google.com
    await page.goto('https://www.google.com/');

    //Verify the application title 
    await expect(page).toHaveTitle('Google'); //if asseration is failed, the test will stop here an dwill be marked as failed.
   
    console.log("Execution Completed"); //This line will not be executed if the above assertion fails.
});

