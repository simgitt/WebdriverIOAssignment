/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://magento.softwaretestingboard.com/${path}`)
    }

    open1 (path) {
        return browser.url(`https://magento.softwaretestingboard.com/what-is-new.html${path}`)
    }


    open2 (path) {
        return browser.url(`https://magento.softwaretestingboard.com/checkout/#shipping${path}`)
    }
  
    

    
}