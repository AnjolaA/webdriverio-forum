var Page = require('./page');

var HomePage = Object.create(Page, {
    a_link: {
        get: function () {
            return browser.element("a[id='i am a link']");
        }
    },

    title: {
        value: function () {
            return browser.getTitle();
        }
    },

    follow_link: {
        value: function () {
            this.a_link.click()
        }
    }

});

module.exports = HomePage;
