# Home Inventory Application

After much consideration I've come up with the basic business plan for this app.  This is definitely subject to change, but should provide a guideline for why things are the way they are.

## Business Plan - Strict rules for the app

* This app will be the SIMPLIST inventory app in terms of UX ... PERIOD
  * Users will immediately see the overview of their inventory locations updon signing in, and will easily be able to navigate between locations, rooms, and the items in those rooms.
  * Users should also have the choice to view all locations, rooms, or items in one big, organized list, and these lists should be accessable via the navigation bar directing to the pages ```/locations```, ```/rooms``` and ```/items```
  * Any page a user sees should be able to be identically reaccessable if the user copies and pasts the url into another tab, window, or browser, and should still pop up if the user has to first sign back in.

* This app will make money in the following way
  * This app will remain 100% free of charge with NO visible ads and NO in-app purchases
    * Save for a ONE-TIME purchase for the app to be 100% functional, unlimited data, and no affiliate blog emails
  * SUBSCRIPTION LEVEL 1:
    * Up to 1 location
    * Up to 2 rooms
    * Up to 10 items per room
    * User will opt in to receive blog/newsletter emails twice per month that include articles with affiliate links
  * SUBSCRIPTION LEVEL 2:
    * Up to 3 locations
    * Up to 5 rooms per location
    * Up to 50 items per room
    * User will opt in to receive blog/newsletter emails once per week that include articles with affiliate links
  * SUBSCRIPTION LEVEL 3:
    * Up to 6 locations
    * Up to 10 rooms per location
    * Up to 100 items per room
    * User will opt in to receive blog/newsletter emails once per day that include articles with affiliate links and/or paid ads.
  * SUBSCRIPTION LEVEL 4:
    * One time payment of $XX.XX???
    * Unlimited locations
    * Unlimited rooms
    * Unlimited items
    * User wiill receive blog/newsletter emails once per month that include articles with affiliate links  and/or paid ads BUT has the option to opt out of receiving these emails completely.  Users will still receive an email if important updates or information need to be sent to them, but these will never include paid ads or affiliate links.

* Users will be obtained legally, morally, and fairly
  * We will engage in conversation within blogs, FB posts, Reddit threads, and other social media.  These conversations will be targeted around groups who's interests are directly related to a free, easy to use, non-invasive inventory app.
  * Some ideas include:
    * Homeowners, renters, etc. who are about to buy/sell/rent a new dwelling, will need to quickly store away their belongings, and don't want the frustration of figuring out where the heck everything went in the move.
    * Groups centered around organization, tidyness, or productivity.
    * Entrepreneurs who are in the business of storing other peoples' items, vehicles, etc.
    * Business managers who want an easy way to manage their inventory, as long as that inventory is not not an overly complicated list of items.
    * ?
    * ?

* User data will never be sold or shared with third parties unless it is absolutely necessary AND they have given their consent in a clear and legible manner.

* In order to target the ads and affiliate links in their emails we will utilize AI and machine learning to analyze their item data and generate a list of recommended items to purchase.

* ANY analytical data collected will be from the user's actions in the web app, and we will never collect or track anything a user does outside Free INV.

## Below are mostly notes for me until I write a proper readme
  
* When using react-router-dom and deploying on netlify, be sure to create a file named ```_redirects``` in ```/public``` in the root of your project.

## BUGS, ISSUES, NOTES, etc

* BUG - When signing up with google for the first time, the user is taken to the regular (signed out) home page instead of the logged in user page.  Signing out and back in fixes this.  The problem lies in how the app checks for a logged in user.  It expects "user" to be in localStorage, but when signing up with google we only set the access and refresh tokens to localStorage.  This same issues does not happen when creating a user account through the app's regular sign up option, since that actually returns and sets the user ID and email to "user" in localStorage upon signing up successfully.

* I added two new functions in a ```utils``` folder:
  * ```fetchUserProfile()```
    * This will eventually be used in the app to fetch the user's data once the tokens are in localStorage.  We will want to stop adding any user info to localStorage on sign in, and instead fetch it once the user has successfully signed in and tokens have been recieved.  This will separate the receiving of the tokens and the user data so that we can fetch user data when other situations call for it that don't involve signing in or (especially) up.
  * ```attemptRefreshToken()```
    * I've not yet decided how to implement this yet, but it will be useful to throw into a function that returns a 401 response when sending authorization requests to the backend.
  * Perhaps these should be custom React hooks?

* Perhaps all fetch requests should either be a custom hook or a class with methods that can be called upon based on the necessities of the fetch?

* I've added a LOT of styling that I wil ABSOLUTELY UNDO thanks to my constant changing of my mind.  I'm about ready to remove ALL styling from the app and starting over once I've got the main mechanics down ... but I haven't had any beer so I'm not as quick to the delete button tonight.

* If the user copies the url and pasts it into a new tab, window, or browser, the following will need to happen:
  * We need to check if there is already a valid user in localStorage
  * We should do further verification by checking the refresh token and returning fresh tokens
  * If they cannot be auto-verified this way, they will be redirected to sign in instead
  * The user should still be redirected to the page that they ORIGINALLY intended to visit after a successful sign in.
    * This is easily acheived by accessing state witin useNavigate(), and passing it the url that was originally intended to be visited while redirecting the user back to sign in, and adding a check if that state exists in the sign in functionality.

* Users will be able to tag their items and use a tag as a search term to retrieve a list of those items.


