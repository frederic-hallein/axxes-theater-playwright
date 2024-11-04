import { Locator, Page } from "@playwright/test";

export class HomePage {
    public readonly page          : Page;
    
    private readonly signUpButton : Locator;


    constructor(page: Page) {
        this.page         = page;
        this.signUpButton = page.locator("css=.hidden").getByText("Signup");
    }

    async clickSignUpButton() { await this.signUpButton.click(); }



    async goTo() {
        await this.page.goto('/');
    }
}