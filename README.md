# MovieBattle

Project description

    MovieBattle enables user to compare two commerical movies on the market by their boxoffice and review score. This can be further improved by retrieving more data. The input box should provide recommended movie names based on the input of the user.

Structure

    -User Inputs
        -Widget should look for possible match based on the input word
        -Display the recommended movies below the input box
    -User confirms the input
        -Request for movie information from an api or similar
        -Formats and displays the information below
        -Compares the stats and color code the information box

----------------------------------------------------------------
Version 0.11

     setup boilerplate
----------------------------------------------------------------
Version 0.12

     axios server request added
----------------------------------------------------------------
Version 0.121

     debouce for the input request added
----------------------------------------------------------------
Version 0.122

     refractoring debounce
----------------------------------------------------------------
Version 0.123

     creating util.js
----------------------------------------------------------------
Bug fix

     variable naming error to cause debounce to fail
----------------------------------------------------------------
Version 0.13

     adding widget search result using innerHTML
----------------------------------------------------------------
Bug fix

     catch promise resolved, search result error
----------------------------------------------------------------
Version 0.14

     autocomplete widget html container, html code generated
     using javascript
