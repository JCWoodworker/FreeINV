# Home Inventory Application

After much consideration I've come up with the basic business plan for this app.  This is definitely subject to change, but should provide a guideline for why things are the way they are.

<a name="table-of-contents"></a>

## Table of Contents
[Business Plan](#business-plan)
[CI/CD](#deployment)
[TODOs](#todos)

<a name="business-plan"></a>

## Business Plan - Strict rules for the app
[Back To Table of Contents](#table-of-contents)

* This app SHOULD be the SIMPLIST inventory app in terms of UX ... PERIOD
  * Users will immediately see the overview of their inventory locations updon signing in, and will easily be able to navigate between locations, rooms, and the items in those rooms.
    * WE FAILED TO FOLLOW THIS ONE .. SEE [TODO](#todos) AND NOTES BELOW WITH INSTRUCTIONS
  * Users should also have the choice to view all locations, rooms, or items in one big, organized list, and these lists should be accessable via the navigation bar directing to the pages ```/locations```, ```/rooms``` and ```/items```
    * AGAIN - SEE [TODO](#todos) FOR HOW WE PLAN TO IMPLEMENT THIS
  * Any page a user sees should be able to be identically reaccessable if the user copies and pasts the url into another tab, window, or browser, and should still pop up if the user has to first sign back in.
    * NOT QUITE THERE YET ON THIS ONE

* This app will make money in the following way
  * This app will remain 100% free of charge with NO visible ads and NO in-app purchases
    * Except when purchasing the unlimited tier with ONE-TIME purchase for the app to be 100% functional, unlimited data, and no affiliate blog emails
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

<a name="deployment"></a>

## NOTES ABOUT CI/CD, NETLIFY, AND DEPLOYMENT
[Back To Table of Contents](#table-of-contents)

* When using react-router-dom and deploying on netlify, be sure to create a file named ```_redirects``` in ```/public``` in the root of your project.
* Pushing to branch ```preprod``` auto-deploys to ```https://myfreeinvpreprod.netlify.app/```
* Pushing to branch ```main``` auto-deploys to ```https://myfreeinv.com/```


## NEW FEATURES & TODOs
<a name="todos"></a>
[Back To Table of Contents](#table-of-contents)

* Users will be able to add meta tags to items in their inventory
* Users will be able to add images to items in their inventory
* Users can delete items
* Users can edit items (name + description, tags)
* Users can easily move items to another room
* Users can add new items from any screen and THEN select the room they belong in OR add a new room and/or location at that time

* Users can delete rooms
* Users will be able to add meta tags to rooms
* Users can edit rooms (name + description, tags)

* Users can delete locations - DONE
* Users will be able to add meta tags to locations
* Users can edit locations (name + description, tags)
* When deleting a location and items are moved to the orphan location AND the orphan
location did NOT exist before, it does not auto-populate without a refresh.  We need to
check if the orphan location existed, then add it to userInventoryData context if not.

* We should list out the orphanded items instead of making a user click "Orphan Home", then
"Orphan Room"

* Do we just get rid of the user home page and go straight to locations index?
* Better UI/UX if dropdown has [locations, rooms, items, settings]?
  * Rooms Index list shows - "Room name @ Location name has XX items"
  * Items Index list shows - "Item name in Room name @ Location name"
* "Locations" link always available at the top of the page instead of "home"
* Need to update the back button to go back to the previous step
  * When viewing item, it says "Back to XXX room"
  * When viewing room, it says "Back to XXX location"
  * When viewing location, it says "Back locations list"
* Search bar when logged in that allows searching across all items, rooms, and locations
  * Includes names, descriptions, and meta tags

* Add feature for cropping images as they are uploaded.  One, unchangeable square box that
can be dragged around the image to capture the exact box that will be the final image.
* We need better/custom image placeholders - [Placehold Image Generator Website]("https://placehold.co/")
