Cypress  https://www.cypress.io/



SDET: https://www.youtube.com/watch?v=_DObJL2_lEs&list=PLUDwpEzHYYLu4jKg-rNSKH3aJeBinlPXp&index=1

Helper : https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-requirements

Cypress is a JavaScript based frame work for End to End Testing
It’s internally uses Mocha framework
 It support Chrome browser only. (Now Electron also).


Create folder 
cmd in path > npm init > fill details > yes

To install and save dependencies : npm install cypress --save-dev

By default Cypress structure generated: 
cypress > integration > examples > all sample spect file are there

To open Test Runner: node_module\.bin\cypress open

To run all test from example directory in headless mode: node_module\.bin\cypress run

To run all test from example directory in headless mode off: node_module\.bin\cypress run —headed

To run single test from example directory:
node_module\.bin\cypress run —spec “{relative path of .js file}”

To run all test from example directory in chrome browser:
node_module\.bin\cypress run —browser chrome

Folder Structure

￼

For Configuration:

Open Cypress Test Runner > Setting > Configuration

To Override default configuration > Change the value in cypress.json with key-value.


CSS reference : https://www.w3schools.com/cssref/css_selectors.asp

￼

By default Cypress uses CSS

We can also get css locators from runner it self also

Css playground : to get an Element for any webpage element


Events: https://docs.cypress.io/api/events/catalog-of-events.html#App-Events

Navigation:
https://docs.cypress.io/api/commands/go.html#Syntax


Hooks

￼


cypress run --record --key 971c61cd-1e79-4411-a296-978cc59f0df0
