import { Locator, Page } from "@playwright/test";

import { userCredentials } from '../data/login.json';

export class SignUpPage {
    public readonly page            : Page;
    
    private readonly signUpButton   : Locator;
    private readonly firstNameInput : Locator;
    private readonly lastNameInput  : Locator;
    private readonly emailInput     : Locator;
    private readonly passwordInput  : Locator;

    constructor(page: Page) {
        this.page           = page;
        this.signUpButton   = page.getByRole("button", { name: "Sign up" });
        this.firstNameInput = page.locator("#firstName");
        this.lastNameInput  = page.locator("#lastName");
        this.emailInput     = page.locator("#email");
        this.passwordInput  = page.locator("#password");
    }

    async clickSignUpButton() { await this.signUpButton.click(); }

    public async fillUserCredentials(userCredentials : { firstName: string; 
                                                         lastName : string; 
                                                         email    : string; 
                                                         password : string}): Promise<void> { 
        
        await this.firstNameInput.fill(userCredentials.firstName);
        await this.lastNameInput.fill(userCredentials.lastName);
        await this.emailInput.fill(userCredentials.email);
        await this.passwordInput.fill(userCredentials.password);
    }


}