   import {test,chromium, expect } from '@playwright/test';

  test('Validating the Parabank Application', async({page}) => {
    
    //1. Launch application using url
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    //2.verify application logo is displayed
    const logo = page.locator("img[src*='logo']");
    await expect(logo).toBeVisible();
    console.log('Logo is displayed successfully');
 
    // 3.Verify application caption displayed as "Experience the difference"
    const caption = page.locator('.caption');
    const expectedCaption = 'Experience the difference';
    const actualCaption = await caption.textContent();
    expect(actualCaption).toBe(expectedCaption);
    console.log('Caption is displayed successfully');


    //4.Enter invalid username
     const username = page.locator('input[name="username"]');
     username.fill('Invalid User');
      
     // 5.Enter empty Password
     const password = page.locator('input[name="password"]');
     username.fill('');

     // 6.Click on login button
      const loginbutton = page.locator('input[value="Log In"]');
      loginbutton.click();
      
      //7.Verify the error message "Please enter a username and password."
      const errorMessage = page.locator('p.error');
      await expect(errorMessage).toBeVisible();
      const expectedErrorMessage = 'Please enter a username and password.';
      const actualErrorMessage = (await errorMessage.textContent())?.trim();
      await expect(actualErrorMessage).toBe(expectedErrorMessage);
      console.log("Error message is displayed successfully");
     

      //8.Click on admin page link
      const adminLink = page.locator('//a[text()="Admin Page"]');
      await adminLink.click();
      const adminPageHeader = page.locator('h1.title');
      await expect(adminPageHeader).toBeVisible();


      //9 common funstions to select : Data Access Mode
      async function selectDataAccessMode(page:any, option:string) {
        const radio = page.locator(`input[value="${option}"]`);
        
      }
      
      selectDataAccessMode(page, 'soap');
      
      //10Scroll to element dropdown
      const loanProvider = page.locator('select[name="loanProvider"]');
      await loanProvider.scrollIntoViewIfNeeded();
      console.log('Scrolled to loan provider dropdown successfully');

      //11.Select the option web service from the dropdown
      await loanProvider.selectOption({label:'Web Service'});
      console.log('Selected Web Service option successfully');

      //12.click on submit button
      const submitButton = page.locator('input[value="Submit"]');
      await submitButton.click();
      console.log('Submit button clicked successfully');

    
      //13.verify submission is successful by validating success message
      const successMessage = page.locator('//b[text()="Settings saved successfully."]');
      await expect(successMessage).toBeVisible();
      console.log("Settings saved successfully message is displayed");

     //14.Click on services page link
      const servicesLink = page.locator('ul.leftmenu>li>a[href="services.htm"]');
      await servicesLink.click();
      console.log("Clicked on services page link successfully");


      //15.wait for service page to load
      const servicesPageHeader = page.locator('//span[text()="Bookstore services:"]');
      await expect(servicesPageHeader).toBeVisible();
      console.log("Service page header is visible ");
     
      //16.Scroll down till bookstore services table
      await servicesPageHeader.scrollIntoViewIfNeeded();
      console.log("Scrolled to bookstore services table successfully");

     // 17.get total rows of books store services table
      const rows =  page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr');
      const rowsCount = await rows.count();
      console.log("Total rows in bookstore services table:", rowsCount);
      
      //18.get total columns of books store services table
      const columns = page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr[1]/td');
      const totalColumns = await columns.count();
      console.log('Total columns in bookstore services table:', totalColumns);
       
      //19.Print table data (row wise and column wise data)
      //loop to  iterate columns

      for (let r = 1; r<=rowsCount; r++) {

        //loop to iterate columns
          for (let c = 1; c<=totalColumns; c++) {
            const cell = await page.locator('//span[text()="Bookstore services:"]/following-sibling::table[1]//tr['+r+']//td['+c+']');
            const cellValue = await cell.textContent();
            console.log("Row " + r + ", Column " + c + ": " + cellValue);
          }

        }

});
