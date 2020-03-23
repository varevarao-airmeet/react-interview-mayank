Please assume you have the following availbale:
- Under `src/context` you have the React Context for an authenticated user

## Problem Statements
1. Modify the hook, under `src/hooks/useFakeConnection` to implment the functionality mentioned in that file
2. Modify the component under `src/components/UserCard.js` which uses the above hook, and prints the user information (including connected state) in a box in the middle of the page
3. Modify the component `src/App.js` file to **provide** the given context value to all children, and display the user card