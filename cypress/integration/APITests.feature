Feature: API Tests

  Scenario: Complete Session creation flow - happy flow
    Given I check the complete session creation flow
      | full_name | lang | document_country | document_type |
      | Szabi     | de   | AL               | ID_CARD       |

  Scenario: POST: https://demo.saas-3.veriff.me - Happy FLow
    Given I call POST, https://demo.saas-3.veriff.me api with request_body body
      | full_name | lang | document_country | document_type |
      | Szabi     | de   | AL               | ID_CARD       |

  Scenario: POST: https://demo.saas-3.veriff.me - Error Handling - Empty request body
    Given I call POST, https://demo.saas-3.veriff.me api with NULL body
      | full_name | lang | document_country | document_type |
      | N.A.      | N.A. | N.A.             | N.A.          |

  Scenario: POST: https://demo.saas-3.veriff.me - Error Handling - Empty field (name) in the request body
    Given I call POST, https://demo.saas-3.veriff.me api with request_body_empty_field body
      | full_name | lang | document_country | document_type |
      | N.A.      | de   | AL               | ID_CARD       |

  Scenario: POST: https://demo.saas-3.veriff.me - Error Handling - Invalid field value (lang) in the request body
    Given I call POST, https://demo.saas-3.veriff.me api with request_body_invalid_field body
      | full_name | lang             | document_country | document_type |
      | N.A.      | xYzert9120345678 | N.A.             | N.A.          |

  Scenario: GET: https://magic.saas-3.veriff.me/api/v2/sessions - Error Handling - Invalid token
    Given I call GET, https://magic.saas-3.veriff.me/api/v2/sessions api with invalid_token token
      | token                    |
      | Axcvnb56.tre456666666690 |

  Scenario: GET: https://magic.saas-3.veriff.me/api/v2/sessions - Error Handling - Empty token
    Given I call GET, https://magic.saas-3.veriff.me/api/v2/sessions api with NULL token
      | token |
      | N.A.  |