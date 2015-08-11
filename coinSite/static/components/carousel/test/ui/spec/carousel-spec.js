'use strict';

/*
 * Copyright (c) 2013 GE Global Research. All rights reserved.
 *
 * The copyright to the computer software herein is the property of
 * GE Global Research. The software may be used and/or copied only
 * with the written permission of GE Global Research or in accordance
 * with the terms and conditions stipulated in the agreement/contract
 * under which the software has been supplied.
 */

/**
 * @class UI test spec for datagrids
 *
 * @author Jeff Reichenberg
 *
 * TODO: make a selenium "PageObject out of the carousel to provide an interface to expected behavior
 */

var webdriver = require('webdriver-support/node_modules/selenium-webdriver'),
    mocha = require('webdriver-support/node_modules/selenium-webdriver/testing'),
    chai = require('chai'),
    webdriverFactory = require('webdriver-support'),
    chaiAsPromised = require('chai-as-promised');

var driver;

chai.use(chaiAsPromised);

before(function() {
    driver = webdriverFactory.setup();
});

after(function(done) {
    webdriverFactory.teardown(done);
});

afterEach(function (done) {
    webdriverFactory.logState(this.currentTest, done, driver);
});

describe('Instancing a Carousel from provided DOM', function () {

    before(function() {
        return driver.get('/test/ui/fixtures/index.html');
    });

    it('should automatically instance a carousel from the expected DOM', function () {
        return chai.expect(
            driver.findElement(webdriver.By.css(".carousel-navigation"))
        ).to.eventually.exist;
    });
});

