# Veriff Tech Assignment Project

###Test plan and approach
- I created 9 goups of test cases:
  - Happy FLows: This group contains the basic E2E user flows, when the user sets valid configurations and walks through the verification flow with all of the documnet's types on mobile and on PC as well.
  - Alternative flows with 1 sided document: I used here the state transition test design technique to identify my test cases. I test here all the variations of the picture validations : inappropriate document pictures, pictures with unclear text, inappropriate selfie, and validations all of these scenarios. 
  - Alternative flows with 2 sided documents: In this group I check the same things, but in case of 2 sided documents (we need to scan 2 sides of the documnets)
  - Exit the flow: Here I check that, how user's can exit the verification flow
  - Configuration: These test cases examine the different kind of configuration settings and possibilities, I check those cases as well, when the user doesn't set up some of the configuration settings
  - Useful links: The application contains some links to other pages, which are not part of the verification flow itself. Here I check these links.
  - Camera permission handling: Test cases of this session check that how we can enable / disable our camera during the verification flow
  - QR Code handling: Checking duplicated QR sending, possible timeouts, etc...
  - Error handling: Test cases for network connection lost scenarios
  

- You can find the detailed test plan with test case set : ./TestPlan.numbers



 