Feature: UI Tests

  Scenario: Check the UI elements on the Welcome Page
    Given I check is the page title is Welcome to our Veriff Demo
    When  I check the content of the paragraph is Veriff helps you connect with honest customers. Test out our flow by filling in the following information: on page
    And   I check the title of the Full Name label
    And   I check the title of the Session Language label
    And   I check the title of the Document Country label
    And   I check the title of the Document Type label
    And   I check the title of the Launch Veriff via (browser only) label
    And   I check the content of the paragraph is this session you consent that your audio, video and technical information may be recorded and processed for the purposes of testing Veriff’s verification flow. on page
    Then  I see full name field
    And   I see session language filed
    And   I see the document country field
    And   I see the document type field
    And   I see incontext radio button
    And   I see redirect radio button

  Scenario: Configure Veriff - redirect
    Given I check is the page title is Welcome to our Veriff Demo
    When  I set Test User Spanish as a full name
    And   I set Español (España) as language
    And   I set Zimbabwe as document country
    And   I set Driver's license as document type
    And   I set redirect as Launch Veriff via
    Then  I click on Veriff Me button on page
    And   I check the content of the title is Vamos a verificarte on page
    And   I check the content of the sub title is Escanee el código QR on page
    And   I check the content of the paragraph is Escanea el código QR con la cámara de tu móvil on page
    And   I check if the content of the 1. highligthed sub title is Prepara un documento válido on page
    And   I check if the content of the 1. highligthed paragraph is Asegúrate de que no ha expirado o esté dañado on page
    And   I check if the content of the 2. highligthed sub title is Utiliza un smartphone on page
    And   I check if the content of the 2. highligthed paragraph is Necesitas un smartphone para continuar on page
    And   I check if QR Code appeares on page
    And   I check the content of the title is Vamos a verificarte on page
    And   I click on Continuar con este dispositivo button on page
    And   I see Iniciar sesión button on page

  Scenario Outline: Configure Veriff  - incontext - variations
    Given I check is the page title is Welcome to our Veriff Demo
    When  I set <user_name> as a full name
    And   I set <language> as language
    And   I set <document_country> as document country
    And   I set <document_type> as document type
    And   I set <veriff_via> as Launch Veriff via
    Then  I click on Veriff Me button on page
    And   I check the content of the title is Let's get you verified on iframe
    And   I check the content of the sub title is Scan the QR code on iframe
    And   I check the content of the paragraph is Scan the QR code with your camera app on iframe
    And   I check if the content of the 1. highligthed sub title is Prepare a valid document on iframe
    And   I check if the content of the 1. highligthed paragraph is Make sure it's not expired or physically damaged on iframe
    And   I check if the content of the 2. highligthed sub title is Use a smartphone on iframe
    And   I check if the content of the 2. highligthed paragraph is You need a smartphone in order to continue on iframe
    And   I check if QR Code appeares on iframe
    And   I click on Continue with your current device button on iframe
    And   I see Start session button on iframe
    Examples:
      | user_name                  | language | document_country | document_type    | veriff_via |
      | Test User Passport         | English  | Algeria          | Passport         | incontext  |
      | Test User ID Card          | English  | Benin            | ID Card          | incontext  |
      | Test User RP               | English  | Guatemala        | Residence Permit | incontext  |
      | Test User Driver's License | English  | Benin            | Driver's license | incontext  |

  Scenario: Configure Veriff - Cancellation
    Given I check is the page title is Welcome to our Veriff Demo
    When  I set Test User English as a full name
    And   I set English as language
    And   I set Algeria as document country
    And   I set Passport as document type
    And   I set incontext as Launch Veriff via
    Then  I click on Veriff Me button on page
    And   I check the content of the title is Let's get you verified on iframe
    When  I close the iframe
    Then  I click on Verify me button on iframe
    And   I check the content of the title is Let's get you verified on iframe
    When  I close the iframe
    Then  I click on Exit link on iframe
    And   I reload page
    And   I check is the page title is Welcome to our Veriff Demo





