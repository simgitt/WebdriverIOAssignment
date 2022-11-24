

const Page = require('./page');


/**
 * sub page containing specific selectors and methods for a specific page
 */
class PurchasePage extends Page {
    /**
     * define selectors using getter methods
     */


    get btnCart () {
        return $('body > div.page-wrapper > header > div.header.content > div.minicart-wrapper > a > span.counter.qty > span.counter-number');
        
    } 

    get btnPurchase () {
        return $('#top-cart-btn-checkout');
    }


    get inputAddress () {
        return $('input[name="company"]');

    }

    get inputCity () {
        return $('input#TLW3NY6');
    }


    get selState () {
            return $('input#XK7XFKT');
    }
    
    get inputZipcode () {
            return $('input#PTAY1YA');
    }
    
    
    get selCountry () {
        return $('input#K8VRQ7U');
    }

    get inputPhoneNumber () {
        return $('input#OAE0NOP');
    }
    
    
    get selShippMethodBest () {
        return $('#checkout-shipping-method-load > table > tbody > tr:nth-child(1) > td:nth-child(1) > input');
       
    }

    get selShippMethodFlat () {
        return $('#checkout-shipping-method-load > table > tbody > tr:nth-child(2) > td:nth-child(1) > input');
       
    }

    get btnNext () {
        return $('#shipping-method-buttons-container > div > button');
    }
    
    
    get btnPlaceOrder () {
        return $('#checkout-payment-method-load > div > div > div.payment-method._active > div.payment-method-content > div.actions-toolbar > div > button');
    }

   


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to signup using username and password
     */
    async purchase (street) 
    {
        await this.btnCart.click();
        await this.btnPurchase.click();
        await this.inputAddress.setValue(street);
        await this.inputCity.setValue(city);
        await $('#SHI9WFD').isSelected();
        await this.inputZipcode.setValue(zipcode);
        await $('#K8VRQ7U').isSelected();
        await this.inputPhoneNumber.setValue(phone);
        await this.selShippMethodFlat.click();
        await $('#checkout-shipping-method-load > table > tbody > tr:nth-child(2) > td:nth-child(1) > input').isSelected();
        await this.btnNext.click();
    }

    

    
   //overwrite specific options to adapt it to page object





    open1 () {
        return super.open2('purchasePage');
    }
}

module.exports = new PurchasePage();
