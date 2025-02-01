# Project: Blog

## Components
- logo: 
  - place logo inside a logo-container, it only contains a logotype right now but my include an icon in the future
- menu:
  - place hamburger menu inside a icon-container
  - on screen sizes larger than 480px take the menu away and replace with links
  - append to a nav, the nav should stay
- links:
  - create a link component
  - get links from the data source, iterate and generate a link anchor for each
  - place each link anchor in an li
  - add to a document fragment and once iteration ends append to a ul
  - append the ul to the nav that the icon-container was removed from
- append both components to the header


- Heading:
  - each page will have a heading that coincides with the link text in the header-navigation that is clicked
    - to start just render 'blog' with a heading component and paint to the UI in the init stage
    - the index.html page heading will be 'blog' the about.html heading will be 'about'
    - initially the homepage/index.html will load, the blog link will have .selected set as an attribute, when another link it selected it will be removed for other links and appended to the link clicked on
    - store the currentlySelectedLink as an element in the model
    - get the currentlySelectedLink.textContent e.g. 'blog' and render a heading component for the page and repaint the .mainHeading with the new value
  


- Subject:
  - a subject is a list of topics that there are blog posts on
    - : first subject should always be 'All' so user can navigate back to seeing all subjects
  - a subject be unique and should only exist if it has been tagged on a post
  - initially render a component for each unique subject and later replace the array with data from the data model source
    - : iterate over posts
    - : for each post get the subjects listed
    - : add subjects to a set to ensure uniqueness
    - : then send the set to view and render a component
      - the component will be a list-item
      - the list item will eventually be clickable and generate a list of the articles the same subject as was clicked
        - : click subject name
        - : iterate over posts
        - : return posts with subjects that include subject clicked on
        - : display these posts in the view through the controller

- Card:
  - a card is a sample of a larger blog post.
  - the data to populate each card will come from the data source through the controller to get the data from model and pass into the view.
  - initially just render sample data
  - receive an array of article objects, render a card component for each object and populate data points

- Footer:
  - the footer will show copyright information and it will house a form to take a users emails address, there will be a button to submit the form




## Blog Template
When a user clicks on a blog post card/link a blog page should open up and the blog template items should be populated with the data points from the card.
  - : blog template html
