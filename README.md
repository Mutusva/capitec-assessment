# capitec-assessment

https://github.com/Mutusva/capitec-assessment.git

Summary:

This widget is made on HTML5, Javascript and CSS.

I have used custom elements and shadow DOM to encapsulate the functionality into its own component without any reference to an HTML node on the DOM, 
thereby makeing it standalone.
There will be need of two files capitec-shares.js and capitec-shares.css, in the same directory e.g asserts/ lib and only reference the javascript file in any page where 
the widget need to be place.

I seperated the two file in to address separation of concerns, and not convolute one file with both javascript and css.

Testing the widget:

 - Requirements
   . Nodejs any version from 8.*.*
   . http-server (which is an npm package)=> Installation via npm: npm install http-server -g

 - Clone this repository/download the javascript and css file
 - create an html page and reference the capitec-shares.js
 - add the custom element as this : <share-calculator position="left"></share-calculator>
 - position can be set to 'left', 'center' or 'right' if not supplied it defaults to center
 - run http-server . i the directory with the files.
 - navigate to localhost:8080
 
 - I have included an index for a quick test.
 

Other:
- For any question you can contact me.
