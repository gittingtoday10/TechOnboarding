describe('Browserstack Live Login', function() {
    before(browser => browser.navigateTo('https://live.browserstack.com/users/sign_in'));
  
    it('Browserstack Live test', function(browser) {
      browser
        .waitForElementVisible('body')
        .windowMaximize()
        .assert.titleContains('BrowserStack')
        .assert.visible('input[id=user_email_login]')
        .setValue('input[id=user_email_login]', 'austenjane567@gmail.com')
        .assert.visible('input[type=submit]')
        .setValue('input[id=user_password', [ 'dummyuser2', browser.Keys.ENTER ])
        .pause(5000)
        .assert.titleContains('Login')

    after(browser => browser.end());
  });
});