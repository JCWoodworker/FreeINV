# Home Inventory Application

* Just finished re-writing the basics of the app
* How FUN is it to delete and start over??
* Using the new version of React Router and taking full advantage of it's features!

## Below are mostly notes for me until I write a proper readme
  
* When using react-router-dom and deploying on netlify, be sure to create a file named ```_redirects``` in ```/public``` in the root of your project.

## BUGS, ISSUES, NOTES, etc

* When signing up with google for the first time, the user is taken to the regular (signed out) home page instead of the logged in user page.  Signing out and back in fixes this.  The problem lies in how the app checks for a logged in user.  It expects "user" to be in localStorage, but when signing up with google we only set the access and refresh tokens to localStorage.  This same issues does not happen when creating a user account through the app's regular sign up option.

* I added new functions in a ```utils``` folder:
  * ```fetchUserProfile()```
    * This will eventually be used in the app to fetch the user's data once the tokens are in localStorage.  We will want to stop adding any user info to localStorage on sign in, and instead fetch it once the user has successfully signed in and tokens have been recieved.  This will separate the receiving of the tokens and the user data so that we can fetch user data when other situations call for it that don't involve signing in or (especially) up.
  * ```attemptRefreshToken()```
    * I've not yet decided how to implement this yet, but it will be useful to throw into a function that returns a 401 response when sending authorization requests to the backend.

* I've added a LOT of styling that I wil ABSOLUTELY UNDO thanks to my constant changing of my mind.  I'm about ready to remove ALL styling from the app and starting over once I've got the main mechanics down ... but I haven't had any beer so I'm not as quick to the delete button tonight.
