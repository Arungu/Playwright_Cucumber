import {Page} from "@playwright/test"

export default class LoginPage{

    constructor(private page:Page){

        this.page= page;
    }

    public Elements= {
        userName:"//*[@id='Login:LoginScreen:LoginDV:username-inputEl']",
        password:"//*[@id='Login:LoginScreen:LoginDV:password-inputEl']",
        loginBtn:"//*[@id='Login:LoginScreen:LoginDV:submit-btnInnerEl']"

    }

    // async loginPC(username:string, password:string){

    //     await this.page.locator(this.Elements.userName).fill(username);
    //     await this.page.locator(this.Elements.password).fill(password);
    //     await this.page.locator(this.Elements.loginBtn).click();

    // }


}