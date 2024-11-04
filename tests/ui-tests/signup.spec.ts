import { test, expect }    from '@playwright/test';

import { HomePage }        from '../../POMs/homepage';
import { SignUpPage }      from '../../POMs/sign-up-page';
import { userCredentials } from '../../data/login.json';


let homePage   : HomePage;
let signUpPage : SignUpPage;

test.describe('Create and login with a new user on the the Axxes Theater app', () => {

    test.beforeAll(async ({ page }) => {
        homePage   = new HomePage(page);
        signUpPage = new SignUpPage(page);
    });

    test.beforeEach(async () => { 
        await homePage.goTo();
        await expect(homePage.page).toHaveTitle("Axxes Theatres"); 
    });

    test('Sign Up - Create a new user', async () => {
        await homePage.clickSignUpButton();
        await expect(signUpPage.page.getByRole('heading', { name: 'Sign Up' })).toHaveText("Sign Up");

        await signUpPage.fillUserCredentials(userCredentials);

    });


    test('Log In - Login with a new user', async () => {
        //await homePage.clickSignUpButton();




    });





});