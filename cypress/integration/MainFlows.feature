Feature: Main FLows

  Scenario: Happy FLow - User select/deselect inventory items and complete the check out process
    Given  I log in as standard_user user with secret_sauce password successful
    And    I check if the shopping cart badge shows 0 selected element
    # Add/remove items to/from the cart from the inventory
    When   I add the Sauce Labs Backpack item to-from the cart
    Then   I check if the shopping cart badge shows 1 selected element
    When   I add the Sauce Labs Fleece Jacket item to-from the cart
    Then   I check if the shopping cart badge shows 2 selected element
    When   I remove the Sauce Labs Fleece Jacket item to-from the cart
    Then   I check if the shopping cart badge shows 1 selected element

    # Add/remove items from item's page, opened by clicking on the title/picture of the item
    When   I open product page by clicking on picture and add the Sauce Labs Bolt T-Shirt item
    Then   I check if the shopping cart badge shows 2 selected element
    When   I open product page by clicking on title and remove the Sauce Labs Bolt T-Shirt item
    Then   I check if the shopping cart badge shows 1 selected element

    # Check the content of the cart, fill the checkout form and finalize the checkout process
    When   I check the cart - Item name: Sauce Labs Backpack , item description: item_description_sauce_labs_backpack , price: $29.99 -  and check out
    And    I fill the checkout form with first name Szabolcs , last name Hudak and postal code 1108 and continue
    And    I check the item overview - Item name: Sauce Labs Backpack , item description: item_description_sauce_labs_backpack , price: $29.99
    And    I check the payment overview - Item total: Item total: $29.99 , tax: Tax: $2.40 , total: Total: $32.39
    Then   I finish the checkout process


  Scenario: Alternative ways and cancellations during the checkout process
    Given  I log in as standard_user user with secret_sauce password successful
    And    I check if the shopping cart badge shows 0 selected element
    When   I open product page by clicking on picture and back to product the Sauce Labs Bolt T-Shirt item
    Then   I check if the shopping cart badge shows 0 selected element
    When   I open product page by clicking on title and back to product the Sauce Labs Fleece Jacket item
    Then   I check if the shopping cart badge shows 0 selected element
    When   I add the Sauce Labs Onesie item to-from the cart
    Then   I check if the shopping cart badge shows 1 selected element
    When   I open the cart and continue shopping
    And    I check if the shopping cart badge shows 1 selected element
    When   I open the cart and remove item
    And    I open the cart and continue shopping
    Then   I check if the shopping cart badge shows 0 selected element
    When   I add the Sauce Labs Onesie item to-from the cart
    And    I check if the shopping cart badge shows 1 selected element
    And    I open the cart and check out
    Then   I check if the shopping cart badge shows 1 selected element
    When   I fill the checkout form with first name Szabolcs , last name Hudak and postal code 1108 and cancel
    And    I check if the shopping cart badge shows 1 selected element
    And    I open the cart and continue shopping
    And    I open the cart and check out
    And    I fill the checkout form with first name Szabolcs , last name Hudak and postal code 1108 and continue
    And    I cancel the checkout process
    Then   I check if the shopping cart badge shows 1 selected element


  Scenario Outline: Sorting in the the inventory
    #Besides testing the sorting of inventory, we test how inventory behaves with different kind of users
    Given I log in as <user_name> user with <password> password successful
    When  I sort items by Price (low to high)
    Then  I check the Price (low to high) sort order
    When  I sort items by Price (high to low)
    Then  I check the Price (high to low) sort order
    When  I sort items by Name (Z to A)
    Then  I check the Name (Z to A) sort order
    When  I sort items by Name (A to Z)
    Then  I check the Name (A to Z) sort order
    Examples:
      | user_name               | password     |
      | standard_user           | secret_sauce |
      | problem_user            | secret_sauce |
      | performance_glitch_user | secret_sauce |


  Scenario: Error handlings and validations
    #Check the validations on the login page
    Given I try to log in as NULL user with NULL password
    And   I check if error message Epic sadface: Username is required appears
    When  I try to log in as standard_user user with NULL password
    Then  I check if error message Epic sadface: Password is required appears
    When  I try to log in as NULL user with secret_sauce password
    Then  I check if error message Epic sadface: Username is required appears
    When  I try to log in as standard_user user with asdf password
    Then  I check if error message Epic sadface: Username and password do not match any user in this service appears
    When  I try to log in as standard_user_2 user with secret_sauce password
    Then  I check if error message Epic sadface: Username and password do not match any user in this service appears
    When  I try to log in as locked_out_user user with secret_sauce password
    Then  I check if error message Epic sadface: Sorry, this user has been locked out. appears
    And   I wait 3 sec
    When  I log in as standard_user user with secret_sauce password successful
    And   I open the cart and check out

    #Check the validations on the checkout form page
    And   I try to fill the checkout form with first name NULL , last name NULL and postal code NULL and validate
    Then  I check if error message Error: First Name is required appears
    When  I try to fill the checkout form with first name Szabolcs , last name NULL and postal code NULL and validate
    Then  I check if error message Error: Last Name is required appears
    When  I try to fill the checkout form with first name NULL , last name Hudak and postal code NULL and validate
    Then  I check if error message Error: First Name is required appears
    When  I try to fill the checkout form with first name NULL , last name NULL and postal code 1108 and validate
    Then  I check if error message Error: First Name is required appears
    When  I try to fill the checkout form with first name Szabolcs , last name Hudak and postal code NULL and validate
    Then  I check if error message Error: Postal Code is required appears



