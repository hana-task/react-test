# My react-test App

My react-test App is a React application that allows users to view various items such as movies, TV shows, etc. The application uses Bootstrap for styling and allows searching, filtering, and sorting of items.

## Features

- Display different items with image, name, and year.
- Search items by name and year.
- Sort items in ascending or descending order by name.
- Toggle between grid view and list view.
- Update item name by double-clicking.
- Display items by different categories using tabs.
- Handle broken images and display a default image.
- Hover animation on images.
- State management using Redux.
- API service for data fetching.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/hana-task/react-test.git
    ```

2. Navigate to the project directory:

    ```bash
    cd react-test
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

   The app will open in your browser at `http://localhost:3000`.

## Project Structure

- `src/`
    - `components/`
        - `Home.js` : Component to display the main page.
        - `Tabs.js`: Component for displaying tabs.
        - `Tab.js`: Single tab component.
        - `ItemsList.js`: Component for displaying a list of items.
        - `EditableItem.js`: Component for displaying a single item with editable name.
        - `ItemDetails.js`: Component for displaying item details.
        - `YearFormatted.js` : Component to display the date string at friendly format
    - `store/`
        - `reducer.js`: Redux reducer for state management.
        - `store.js`: Redux store configuration.
    - `services/`
        - `apiService.js`: Service for API calls.
    - `App.js`: Main component of the application.
    - `App.css`: Custom CSS file.
    - `index.js`: Entry point of the React application.

## Usage

1. Search Items:
    - Use the search field to search items by name or year.
    - Click the "Clear" button to reset the search field.

2. Toggle Views:
    - Click the "Switch to List View" or "Switch to Grid View" button to change the view of the items.

3. Sort Items:
    - Click the "Sort Ascending" or "Sort Descending" button to sort the items in ascending or descending order by name.

4. Refresh Data:
    - Click the "Refresh Data" button to reload data from the server.

5. Edit Items:
    - Double-click on the item name to edit it.
    - After editing, click outside the text field to save the change.

## API Service

The `apiService` function in `src/services/apiService.js` is used for making API calls. It supports `GET` and `POST` methods.

## State Management with Redux

The Redux store and reducer are located in `src/store`.

## System Requirements

- Node.js
- Npm

## Technologies Used

- React
- Redux
- React Router
- Bootstrap
- date-fns

## Notes
Add the `response.json` file to the `public` folder to provide data for the application.
