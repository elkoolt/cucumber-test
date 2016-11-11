Feature: Third feature
  As a new user
  I'd like to create an economic profile
  So the website can store my info for next time
  
  Scenario: As a new user, I would like to create new account on sunday.dk
	Given I go to "https://sunday.dk"
	When I create a new profile
	Then I should see "Favoritter" tab in the top-right corner

