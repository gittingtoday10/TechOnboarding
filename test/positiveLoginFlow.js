describe('Browserstack Live Login', function() {
    before(browser => browser.navigateTo('https://live.browserstack.com/users/sign_in'));
  
    it('Browserstack Live test', function(browser) {
      browser
        .waitForElementVisible('body')
        .windowMaximize()
        .assert.titleContains('BrowserStack')
        .assert.visible('input[id=user_email_login]')
        .setValue('input[id=user_email_login]', 'austenjane567@gmail.com')
        //.setValue('input[id=user_password]', 'dummyuser1')
        .assert.visible('input[type=submit]')
        .setValue('input[id=user_password', [ 'dummyuser1', browser.Keys.ENTER ])
        .pause(15000)
        .assert.titleContains('Dashboard')
        .waitForElementVisible('body')
        .useXpath()
        .pause(5000)
        .click('/html/body/div[1]/header/div/div/nav/ul[1]/li[3]/a')
        .pause(5000)
        .click('/html/body/main/div[2]/div[3]/div[1]/div[2]/div/div[3]/div/div/div[2]/div[1]/div/div[2]/a[1]')
        .pause(5000)
        .click('/html/body/main/div[2]/div[3]/div[1]/div[2]/div/div[3]/div/div/div[2]/div[2]/div[1]/div[4]/div/div[2]/div[5]/form/input[1]')
        .pause(20000)
        //add an assert to check


    after(browser => browser.end());
  });
});