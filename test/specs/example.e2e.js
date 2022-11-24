
const AddToCartPage = require('../pageobjects/AddToCart.page');
const PurchasePage = require('../pageobjects/Purchase.page');
const SignUpPage = require('../pageobjects/SignUp.page');


describe('My Unhappy Path', () => {
  

    it('should not signUp with a weak password', async () => {
        
       
        await SignUpPage.open();
        await SignUpPage.signUp('Tom','Smith','tomsmith@gmail.com', 'SuperSecretPassword','SuperSecretPassword');
        await expect(SignUpPage.weakPassword).toBeExisting();
        await expect(SignUpPage.weakPassword).toHaveTextContaining(
            'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.');
        
    });

    it('should not signUp with password that dont match', async () => {
        await SignUpPage.open();

        await SignUpPage.signUp('Tom','Smith','tomsmith@gmail.com', 'SuperSecretPassword1!','SuperSecretPassword!');
        await expect(SignUpPage.passwordNotMatching).toBeExisting();
        await expect(SignUpPage.passwordNotMatching).toHaveTextContaining(
         'Please enter the same value again.');
        
    });

    it('should not signUp with an email already in use', async () => {
        await SignUpPage.open();

        await SignUpPage.signUp('Tom','Smith','tomsmith@gmail.com', 'SuperSecretPassword!','SuperSecretPassword!');
        await expect(SignUpPage.accountError).toBeExisting();
        await expect(SignUpPage.accountError).toHaveTextContaining(
            'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.');
    });


    describe('should signUp/ add product', () => {
        
        it('should signUp', async () => {
            await browser.url('https://magento.softwaretestingboard.com/');
            await SignUpPage.open();
   
            await SignUpPage.signUp('Tom','Smith','newuser001@gmail.com', 'SuperSecretPassword!','SuperSecretPassword!');
            
           await $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').waitForExist();
           await expect(await $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div')).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
           
        });


        it('should add product to cart', async () => {
            await AddToCartPage.open1();
   
            await AddToCartPage.addJacket('1');
          
            await expect(await $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div')).toHaveTextContaining('You added Olivia 1/4 Zip Light Jacket to your shopping cart.');
            
        //    await $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div').waitForExist();
        //    await expect(await $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div')).toHaveTextContaining('Thank you for registering with Fake Online Clothing Store.');
           
        });

        it('should  purchase product(s) in cart', async () => {
            
            await PurchasePage.open1();
            await expect(await $('#opc-sidebar > div.opc-block-summary > span')).toBeExisting();
            
                               

           
        });

       
       
    

    });


   

});


