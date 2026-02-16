//1. Soft Asseration: if the asseration fails , the test will continue executing and will be marked as failed at the end of the test.
import {test,expect} from '@playwright/test';   
test('Soft Assertions', async({page}) => {

    //Launch the application google.com
    await page.goto('https://www.google.com/');
    
    //Verify the application title 
    await expect.soft(page).toHaveTitle('Google'); //if asseration is failed, the test will continue executing and will be marked as failed at the end of the test.
    console.log("Execution Completed"); //This line will be executed even if the above assertion fails.
});