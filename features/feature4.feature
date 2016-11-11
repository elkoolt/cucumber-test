Feature: Fourth feature
  As a new user
  I'd like to view the home details for the first home available in "København V"
  So I can look at pictures and economy data
  
  Scenario: As a new user, I would like to view home details for the first home available in "København V"
	Given I surf to "https://sunday.dk"
	When I seek for homes in "København V"
	Then I click on first result I should be able to see pictures and other economy data