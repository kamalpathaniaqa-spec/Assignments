//cssSelector locator : this locator is going to help us to locate the element by using CSS properties of the element
//syntax: page.locator('css selector');

//css-selector syntaxes:

//Syntax 1: tagName#id
//Syntax 2: tagName.className
//Syntax 3: tagName[attribute='attribute-value']
//Syntax 4: tagName[attribute*='attribute-value']  // * means contains
//Syntax 5: tagName[attribute^='attribute-value']  // ^ means starts with
//Syntax 6: tagName[attribute$='attribute-value']  // $ means ends with
//Syntax 7: tagName[attribute1='attribute1-value'][attribute2='attribute2-value']  // multiple attributes

import {test, expect, firefox} from '@playwright/test';

test('Browser actions', async() => {
    
    //Launch the browser window (Firefox)
    const browser = await firefox.launch({headless: false, channel: 'firefox'}); //msedge for edge //, args: ['--start-maximized']
    
    //Launch the browser context from the browser engine. 
    const context = await browser.newContext();
    //Create a new page in the browser context.
    const page = await context.newPage();
    //Enter URL "https://www.google.com/" and launch the application. 
    await page.goto('https://www.facebook.com/');
    //Verify the application title.
    await expect(page).toHaveTitle('Facebook - log in or sign up');
    //Locate the 'Email or Phone' textbox using syntax 2
    let eamilOrPhoneTextbox = page.locator('input.inputtext'); //tagName.class-att-value
    //Locate the 'Email or Phone' textbox using syntax 3
    let eamilOrPhoneTextbox2 = page.locator('input[name="email"]'); //tagName[attribute ='attribute-value']
    //Locate the 'Password' textbox using syntax 4
    let passwordTextbox = page.locator('input[aria-label*="Password"]');
    //Locate the 'Log In' button using syntax 5
    let logInButton = page.locator('button[name^="login"]');
    //Locate the 'Create New Account' button using syntax 6
    let createNewAccountButton = page.locator('a[data-testid$="open-registration-form-button"]');
    //Locate the 'Forgotten password?' link using syntax 7
    let forgottenPasswordLink = page.locator('a[data-testid="open-registration-form-button"][role="button"]');

    

    //close all pages
    await browser.close();
});