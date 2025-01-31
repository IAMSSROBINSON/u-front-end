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
