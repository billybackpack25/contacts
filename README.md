If running as new, run

- `npm i`
- `npm pod`

- Set up a react native project
  - npx react-native run-ios
  - Command+R to refresh the simulator screen
  - `npm start -- --reset-cache` can be useful if errors when renaming files
  - `watchman watch-del '/Users/bilalhasson/Documents/rncontacts'`
  - `watchman watch-project '/Users/bilalhasson/Documents/rncontacts'`

`app.json` contains the app name

## Project Structure

- src
  - assets
    - fonts
    - images
    - theme
  - components (Reusable part of the app)
  - contants ()
  - screens (Pages)
  - config
  - context (GLobal state management)
    - reducers
    - initialStates
    - actions
  - navigation
  - utils (axios, etc.)
  - .env

## Constants

- `routeNames` stores all the page route names

## Global State Management

- `React Redux`

context > store: provides access all the reducers
context > slices: The reducers, auth, contact.

## Navigation

This contains all the navigation pieces:

- `HomeNavigator` contains all the app stack for logged in users
- `AuthNavigator` contains all the app stack for non-logged in users
- `DrawerNavigator` contains the home navigation

Managing Environments

- `react-native-dotenv`

.env.[...] replaces and overrides the .env file.
Import like this `import {BACKEND_URL} from '@env';`

Separate environments and variables

## Mock API

`json-mock-api`

Uses the mockApi directory. Run `yarn mock`.

## Last steps

- In the middle of creating the global context for auth and contacts. 1:01:51
  https://www.youtube.com/watch?v=npe3Wf4tpSg
- Added redux rather than using useContext like the video
- Changes everything to typescript and fixed the bugs
- Stylng the input for the login screen
- Exracted the styling of text input to the styles sheet
- Changing the border color if focused
- Styling the loading indicator, be sure to make the color of the indicator different to the button color so that it can be visible
- Styling the login screen
- Created a register page
- Extracted out the password show/hide functionality to a useHook
- Hooked up the register form to validation handlers, added required fields
- Taking the error off the field if the data changes
- Created a mock api
- Added environment variables for development and added ENV var to the start command which chooses the file to run

- Setting up the dispatch for the login on the register screen.
- Hooking up the register form to the state

- Created a message component to show errors on the login screen
- Updated the login/logout with AsyncStorage token
- Updating the drawer nav
- Adding a notification reducer in contacts to show as a message when someone registers up
- Set up the modal
- Added a data/contacts folder with contact details
- Using a random URI to fetch images
- Using flatlist to show the data
