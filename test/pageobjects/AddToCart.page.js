

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddToCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnHome () {
        return $('body > div.page-wrapper > header > div.header.content > a > img');
    }

    get btnWomenCat () {
        return $('#ui-id-4 > span:nth-child(2)');
    }

    get btnJackets () {
        return $('#maincontent > div.columns > div.sidebar.sidebar-main > div.widget.block.block-static-block > div > ul:nth-child(2) > li:nth-child(2) > a');
    }

    get btnOliviaJacket () {
        return $('#maincontent > div.columns > div.column.main > div.products.wrapper.grid.products-grid > ol > li:nth-child(1) > div > a > span > span > img');
    }

    get btnSizeM () {
        return $('#option-label-size-143-item-168');
    }


    get btnColorBlack () {
            return $('#option-label-color-93-item-49');
    }
    
    get inputQty () {
            return $('#qty');
    }
    
    
    get btnAddToCart () {
        return $('#product-addtocart-button');
    }
    
    get flashAdded () {
        return $('#maincontent > div.page.messages > div:nth-child(2) > div > div > div');
        //text You added Olivia 1/4 Zip Light Jacket to your shopping cart.
    }
    
    
 


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to signup using username and password
     */
    async addJacket (qty) 
    {
        await this.btnWomenCat.click();
        await this.btnJackets.click();
        await this.btnOliviaJacket.click();
        await this.btnSizeM.click();
        await $('#option-label-size-143-item-168').isSelected();
        await this.btnColorBlack.click();
        await $('#option-label-color-93-item-49').isSelected();
        await this.inputQty.setValue(qty);
        await this.btnAddToCart.click();
    }

    

    
   //overwrite specific options to adapt it to page object





    open1 () {
        return super.open1('addToCartPage');
    }
}

module.exports = new AddToCartPage();
