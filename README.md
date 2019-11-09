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
----------------------------------------------------------------
Bug fix

     movie image not available
----------------------------------------------------------------
Version 0.141

     click to close the search result
----------------------------------------------------------------
Version 0.142

     option to click on the search result. add eventlistener to
     each anchor tag
----------------------------------------------------------------
Version 0.143

     get function onMovieSelect() to display the necessary
     information 
----------------------------------------------------------------
Version 0.15

     added movieTemplate() to render important movie details 
----------------------------------------------------------------
Version 0.16

     refractoring autocomplete widget to be reuseable codes 
----------------------------------------------------------------
Version 0.161

     structure createAutoComplete to call the reusable codes
     from autocomplete.js 
----------------------------------------------------------------
Version 0.162

     update createAutoComplete further to call fetchData() 
----------------------------------------------------------------
Version 0.17

     html autocomplete section seperated into columns of left
     and right
----------------------------------------------------------------
Version 0.171

     setting up autoCompleteConfig object for reuse
----------------------------------------------------------------
Version 0.172

     display summary update for both columns
----------------------------------------------------------------
Version 0.18

     parse all movie information for future comparisons
----------------------------------------------------------------
Version 0.19

     comparison result display added
----------------------------------------------------------------
Bug fix

     equal comparison result and correct display after equal
     comparison