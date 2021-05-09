# myPWgenerator   [Link](https://saibhreas.github.io/myPWgenerator/)
![Image](https://saibhreas.github.io/myPWgenerator/assets/img/ScreenShots.png)


# Password Genereator
## JS assignemnt to create a Password Generator
### Plese pardon apperance, still learning MD language
Password Generator
<ul> Criteria:
<li> generate password on event.
	<li>Prompt user for # of characters (stipulation--  must be between 8 & 128 character length)
	<li>Prompt the user for choices, and prompt when choices are not the right type.
	<li>Place password on the window in assigned space.
<ul>Given:
	<li> html index (base platform)
	<li> css sytle sheet (base platform)
<product>
	<li> Working JS script (all links and internet runnable
	<li> README.md with description and images.
	<li> Github repository
		<ul> 
<li>Working Site links
<li> Site page
<li>Evidence of good practices like multiple commit operations
---
	
About:
	Choices:
		Ul
<li> Did not want to handle static arrays when using the UTF(Unicode Transformation Format) is included in the html (<meta charset=”UTF-8”)
Found function that accomplishes the task of creating random characters, as needed, without need for parsing.
Using the UTF set  characters placement in the table, decimal index, library functions of Max Floor & Max Random to produce (as needed array elements) of specified types: Upper case, Lower case, and Number.  
Symbol does not have a standard range in the UTF table requiring an array to be made of character options to randomize.  Randomization used Max Floor & Max Random and the array length to set the choice of characters.
<li> Eliminated need for constant user prompt and response (decrease the time the script occupies the event stack for window), by using prompt’s property combines with ‘Confirm’.  Use of confirm minimized user non-compliance and redundant calls for event tying up the interface.
This also reduced the size of the code by eliminating multiple if conditions.

