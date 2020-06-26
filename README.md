## about this project/

This is a simple web service (WIP) which allows user to search for a country, and get their population and currencies, the user can then save the country to a list and check the exchangerate compared to SEK.
So far no db with users is connected to it, so it's simple to login with the username: "user" and password: "password".


## exchangerates/

* add your own secret key and api key in .env. 

* install and start the backend server. 

* run the client. 

## dependencies

* Express is used because it's a well known, lightweight framework for NodeJS, makes life easier when developing an api. 

* rate-limit is used to limit the amount of api calls to the external apis.  

* I use Axios, because it's compability, also it transforms to json (OK i save 1 line of code, but still.)


## known issues

* **Everything** should be tested, but given the short time frame I spent on developing, and the fact that I am a bit unfamiliar with the tech stack, I wanted to initially reduce the amount of documentation to read. 

* Search functionality is **very bad**, the most important flaw is that it only returns the first country in the list, the first thing that should be fixed is that it should return a list of matches, so searching for Korea should return north and South Korea, same with Sudan etc.


* Validation token is not secure, it is stored in localStorage, should be send as httpOnly cookie.

* Repeated searches for the same country could be cached, I guess. 

* Since I am using a free api key, I dont have access to changing of base value, or specify conversion endpoints, I decided to roll with it and make my own currency converter, however, I think the rounding function has some issues, obviously, ideally it would be better to get the base and amount directly from the api rather than writing my own functions. 

* The react app is quite messy, the Home component should be cleaned up and better modularised.

* The country cards should return “no exchange rates found” in case of an error, instead of returning nothing.

* The Welcome {user} in the header doesnt show username until window is refreshed.

* The styling is sad, very sad. (working on it!)
