Feature: UI Tests

  Scenario: Check the UI elements on the Welcome Page
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I check the content of the paragraph is "Veriff helps you connect with honest customers. Test out our flow by filling in the following information:" on page
    And   I check the title of the Full Name label
    And   I check the title of the Session Language label
    And   I check the title of the Document country label
    And   I check the title of the Document type label
    And   I check the title of the Launch Veriff via (browser only) label
    And   I check the content of the paragraph is "this session you consent that your audio, video and technical information may be recorded and processed for the purposes of testing Veriff’s verification flow." on page
    Then  I see full name field
    And   I see session language filed
    And   I see the document country field
    And   I see the document type field
    And   I see incontext radio button
    And   I see redirect radio button

  Scenario: Configure Veriff - incontext - Spanish language settings
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I set Test User Spanish as a full name
    And   I set Español (España) as language
    And   I set Zimbabwe as document country
    And   I set Driver's license as document type
    And   I set incontext as Launch Veriff via
    Then  I click on Veriff Me button on page
    And   I check the content of the title is "Vamos a verificarte" on iframe
    And   I check the content of the sub title is "Escanee el código QR" on iframe
    And   I check the content of the paragraph is "Escanea el código QR con la cámara de tu móvil" on iframe
    And   I check if the content of the 1. highligthed sub title is "Prepara un documento válido" on iframe
    And   I check if the content of the 1. highligthed paragraph is "Asegúrate de que no ha expirado o esté dañado" on iframe
    And   I check if the content of the 2. highligthed sub title is "Utiliza un smartphone" on iframe
    And   I check if the content of the 2. highligthed paragraph is "Necesitas un smartphone para continuar" on iframe
    And   I check if QR Code appeares on iframe
    And   I check the content of the title is "Vamos a verificarte" on iframe
    And   I click on Continuar con este dispositivo button on iframe
    When  I click on Iniciar sesión button on iframe
    Then  I check the content of the title is "Por favor, ten preparado tu carnet de conducir" on iframe
    And   I see Continuar button on iframe

  Scenario Outline: Configure Veriff  - redirect - Configuration variations
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I set <user_name> as a full name
    And   I set <language> as language
    And   I set <document_country> as document country
    And   I set <document_type> as document type
    And   I set <veriff_via> as Launch Veriff via
    Then  I click on Veriff Me button on page
    And   I check the content of the title is "Let's get you verified" on page
    And   I check the content of the sub title is "Scan the QR code" on page
    And   I check the content of the paragraph is "Scan the QR code with your camera app" on page
    And   I check if the content of the 1. highligthed sub title is "Prepare a valid document" on page
    And   I check if the content of the 1. highligthed paragraph is "Make sure it's not expired or physically damaged" on page
    And   I check if the content of the 2. highligthed sub title is "Use a smartphone" on page
    And   I check if the content of the 2. highligthed paragraph is "You need a smartphone in order to continue" on page
    And   I check if QR Code appeares on page
    And   I click on Continue with your current device button on page
    When  I click on Start session button on page
    Then  I check the content of the title is "<title>" on page
    And   I see Continue button on page

    Examples:
      | user_name                  | language | document_country | document_type    | veriff_via | title                                    |
      | Test User Passport         | English  | Algeria          | Passport         | redirect   | Please have your passport ready.         |
      | Test User ID Card          | English  | Benin            | ID Card          | redirect   | Please have your ID card ready.          |
      | Test User RP               | English  | Guatemala        | Residence Permit | redirect   | Please have your residence permit ready. |
      | Test User Driver's License | English  | Benin            | Driver's license | redirect   | Please have your driver’s license ready. |

  Scenario: Configure Veriff - Alternative flow - None of the fields has value
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I set NULL as a full name
    And   I set NULL as language
    And   I set NULL as document country
    And   I set NULL as document type
    And   I set incontext as Launch Veriff via
    Then  I click on Veriff Me button on page
    When  I click on Continue with your current device button on iframe
    And   I click on Start session button on iframe
    Then  I check the content of the title is "Take a photo of your document’s photo page" on iframe
    And   I check the content of the paragraph is "Accepted documents: passport, residence permit, driver's license, ID card." on iframe
    And   I see Take photo button on iframe
    And   I see Take photo button on iframe
    When  I click on Take photo button on iframe
    Then  I check the content of the title is "Sorry, we don't recognize your document" on iframe
    And   I check the content of the paragraph is "Please make sure your document is supported and try again" on iframe
    When  I click on Residence permit button with ID's image on iframe
    And   I click on Continue button on iframe
    Then  I check the content of the title is "Take a picture of the photo side of your residence permit" on iframe
    And   I see Take photo button on iframe

  Scenario: Configure Veriff - Alternative flow - Document Country field and Document Type field is empty
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I set Test User English as a full name
    And   I set English as language
    And   I set NULL as document country
    And   I set NULL as document type
    And   I set incontext as Launch Veriff via
    Then  I click on Veriff Me button on page
    When  I click on Continue with your current device button on iframe
    And   I click on Start session button on iframe
    Then  I check the content of the title is "Take a photo of your document’s photo page" on iframe
    And   I check the content of the paragraph is "Accepted documents: passport, residence permit, driver's license, ID card." on iframe
    And   I see Take photo button on iframe
    When  I click on Take photo button on iframe
    Then  I check the content of the title is "Sorry, we don't recognize your document" on iframe
    And   I check the content of the paragraph is "Please make sure your document is supported and try again" on iframe
    When  I click on Residence permit button with ID's image on iframe
    And   I click on Continue button on iframe
    Then  I check the content of the title is "Take a picture of the photo side of your residence permit" on iframe
    And   I see Take photo button on iframe

  Scenario: Configure Veriff - Alternative flow - Document Country field is empty
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I set Test User English as a full name
    And   I set English as language
    And   I set NULL as document country
    And   I set Passport as document type
    And   I set incontext as Launch Veriff via
    Then  I click on Veriff Me button on page
    When  I click on Continue with your current device button on iframe
    And   I click on Start session button on iframe
    Then  I check the content of the title is "Select issuing country" on iframe
    And   I check the content of the paragraph is "Please select the country that issued your ID." on iframe
    When  I click on Continue button on iframe
    Then  I check the content of the title is "Please have your passport ready." on iframe
    And   I see Continue button on iframe

  Scenario: Configure Veriff - Alternative flow - Document Type field is empty
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I set Test User English as a full name
    And   I set English as language
    And   I set Algeria as document country
    And   I set NULL as document type
    And   I set incontext as Launch Veriff via
    Then  I click on Veriff Me button on page
    When  I click on Continue with your current device button on iframe
    And   I click on Start session button on iframe
    Then  I check the content of the title is "Select ID type" on iframe
    And   I check the content of the paragraph is "Which government-issued identity document would you like to use?" on iframe
    When  I click on Passport button with ID's image on iframe
    And   I click on Continue button on iframe
    Then  I check the content of the title is "Take a picture of your passport photo page" on iframe
    And   I check the content of the paragraph is "Make sure your passport photo page is clear and readable." on iframe
    And   I see Take photo button on iframe

  Scenario: Configure Veriff - Cancellation
    Given I check is the page title is "Welcome to our Veriff Demo"
    When  I set Test User English as a full name
    And   I set English as language
    And   I set Algeria as document country
    And   I set Passport as document type
    And   I set incontext as Launch Veriff via
    Then  I click on Veriff Me button on page
    And   I check the content of the title is "Let's get you verified" on iframe
    When  I close the iframe
    Then  I click on Verify me button on iframe
    And   I check the content of the title is "Let's get you verified" on iframe
    When  I close the iframe
    Then  I click on Exit link on iframe
    And   I reload page
    And   I check is the page title is "Welcome to our Veriff Demo"





