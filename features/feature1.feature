Feature: First feature
  As an existing user
  I'd like to be to login to my existing account
  So I can continue where I left off, if I use a new computer
  
  Scenario: As an existing user, I would like to open sunday.dk
	Given I visit "https://sunday.dk"
	When I login into page with user "autotester@test.com" and password "Test123!"
	Then I should see the front page with "Favoritter" tab