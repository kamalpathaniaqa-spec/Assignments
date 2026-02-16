    
    import { test, Page, chromium, expect } from '@playwright/test';

     test('Browser actions', async () => {

        // Launch the browser window (Chrome)
      const browser =  await chromium.launch({headless: false, channel: 'chrome' }); //msedge edge

        //Launch the browser context from the browser window
        const context = await browser.newContext();

        //Create a new Page in the browser context
        const page = await context.newPage();
        

        //Maximize the browser window 
        await page.setViewportSize({ width: 1820, height: 1080 });


        //Clear cookies and Cache 
        await context.clearCookies();

        //Enter the URL and Launch the application
        await page.goto("https://www.google.com/");  

        //verify the application tittle
        await expect(page).toHaveTitle('Google');

        //Launch the new apllication  "https://www.amazon.com/" within the same.
        await page.goto("https://www.myluxurycart.com/");

         // go back to previous application.
         await page.goBack();
         
         // go forward to next application.
         await page.goForward();

         //Refresh the application
         await page.reload();

         // Launch the new Tab  or window .
         let newPage  = await context.newPage();
        
         // Launch the different application
          newPage.goto("https://www.playwright.dev/");

         // get all the page (tabs) Launched.
         const pages = await context.pages();
         console.log("Total Pages/tabs Launched: " + pages.length);

         //Switch back to the main window
         await page.bringToFront();
         
         //Get back to the mai window.
         let currentUrl = page.url();
         console.log("Current URL: " + currentUrl); 

         //Wait for 5 seconds
         await page.waitForTimeout(5000);

         // close the new tab or window
         await newPage.close();

          //Close all the browser windows
         await browser.close();


});
