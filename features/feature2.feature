Feature: Second feature
  As a new user
  I'd like to search for homes
  So I can look for homes without storing my economy data
  
  Scenario: As a new user, I would like to look for homes on sunday.dk
	Given I navigate to "https://sunday.dk"
	When I search for homes in "København"
	Then I should see returned more than 0 results, in Danish - "0 resultater"