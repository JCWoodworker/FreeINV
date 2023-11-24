# Home Inventory Application

Features in the works:

## Sprint 1

- Add/Remove/Edit:
  - Location
  - Room or rooms at each location
  - Item or items in each room
    - Name, description
- Create menu to select from available locations and their rooms
  - Viw all items in each room
  
## Sprint 2

- Backend
  - Set up Home Inventory app on Nest Boilerplate server
  - Connect auth to work with this app
  - Create it's own user table
  - REFACTOR - set up auth to work with whatever subapp is accessing it's features
    - Instead of always pulling from the main users table, run CRUD operations specific to the app the user is accessing and make this universally repeatable.
