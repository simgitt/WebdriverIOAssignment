

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SignUpPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputFirstname () {
        return $('#firstname');
    }

    get inputLastname () {
        return $('#lastname');
    }

    get inputEmail () {
        return $('#email_address');
    }

    get inputPassword () {
        return $('#password');
    }

    get inputPasswordConfirmation () {
        return $('#password-confirmation');
    }


    get weakPassword () {
            return $('#password-error');
    }
    
    get passwordNotMatching () {
            return $('#password-confirmation-error');
    }
    
    
    get btnSubmit () {
        return $('#form-validate > div > div.primary > button > span');
    }
    
    get btnSignup () {
        return $('body > div.page-wrapper > header > div.panel.wrapper > div > ul > li:nth-child(3) > a');
    }
    
    
    get accountError () {
        return $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div');
    }

   


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to signup using username and password
     */
    async signUp (firstname, lastname, email, password, passwordconfirmation) 
    {
        await this.btnSignup.click();
        await this.inputFirstname.setValue(firstname);
        await this.inputLastname.setValue(lastname);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordConfirmation.setValue(passwordconfirmation);
        await this.btnSubmit.click();
    }

    

    
   //overwrite specific options to adapt it to page object


    open () {
        return super.open('signUpPage');
    }
}

module.exports = new SignUpPage();
