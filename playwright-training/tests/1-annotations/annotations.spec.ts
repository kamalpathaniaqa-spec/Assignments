import { test, expect } from '@playwright/test';

test.describe('Group 1 Tests', async() => {

    test.skip('Group 1- Test 1', async ({ page }) => {
        console.log("Group 1 - Test 1: Executing");
    });

    test('Group 1- Test 2', async ({ page }) => {
        test.fixme();
        console.log("Group 1 - Test 2: Executing");
        expect(1).toBe(2);
      });

     test('Group 1- Test 3', async ({ page }) => {
        console.log("Group 1 - Test 3: Executing");
     });

  });

test.describe.skip('Group 2 Tests', async() => {

     test('Group 2- Test 1', async ({ page }) => {
        test.slow
        console.log("Group 2 - Test 1: Executing");
    });

    test('Group 2- Test 2', async ({ page }) => { 
        console.log("Group 2 - Test 2: Executing");
    });
     test('Group 2- Test 3', async ({ page }) => {
        console.log("Group 2 - Test 3: Executing");
    });
  });     