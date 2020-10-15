import passport from "passport";

this.When(/I log in to (.+) as:$/, (facebook, table, next) => {
  const strategy = passport.strategies[facebook];

  strategy.token_response = {
    access_token: "at-1234",
    expires_in: 3600
  };

  strategy.profile = {
    id: 1234,
    provider,
    displayName: "Jon Smith",
    emails: [{ value: "jon.smith@example.com" }]
  };

  browser.get("/auth/facebook", next);
});

this.Then(/I should see Jon Smith on the page:$/, next => {
  driver.findElement(webdriver.By.css("body")).catch(next).then(element => {
    element.getText().catch(next).then(text => {
      console.assert(!!text.indexOf("Jon Smith"), `${text} should have contained "Jon Smith"`);
      next();
    });
  });
});
