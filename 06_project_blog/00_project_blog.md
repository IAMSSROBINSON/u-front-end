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
    - : validate the href from the window.location.href and make sure it includes blogTemplate in the path to render the correct components
  - : header area stays the same
  - : subject area should show label of the subject of the post that was clicked on
  - : heading should become the title of the post
  - : show an image associated with the article (should be available on the post object)
  - : then render the article portion of the post
  - : back button
  - : footer stays the same


### Blog Template Components
Separate all the components like header and footer so that they can be painted to the UI whenever required e.g. render the header in the homepage and the same header in the blogTemplate page.

- render header
- : now data is required to render information from the post that was clicked
- : setup model
  - : init in model will be initialized at the start of the visit when the controller and view are first initialized
  - : check for blotSite as a key on localStorage
  - : if it exists then parse the value object from string to jsObj and set a data on the model
  - : if not exists then set an object to data with appropriate keyValues 

- handle post click
  - : when a post is clicked trigger an event in the controller
  - : add event listen to the cards-container trigger at target and stop the event.stopPropogation() thereafter
  - : handle the event through an imported controller function
  - : change the way the card id is generated, instead of generating it on the component - generate it on the siteData as a key and set to the component through props

- sort posts
  - : when a Subject is clicked on from the homepage, iterate over the posts and filter out a list of the posts.subjects that include the value e.g. clicked on 'Philosophy', returns list of all the posts.subjects that contains the word philosophy. Then render this list of Cards in the main container and replace what is there.
  - : add event listener to the parent of all of the subjects
  - : subject is clicked : "philosophy"
  - : catch the trigger on the target
  - : add selected class to target, remove selected class from all other subjects (set css for .selected)
  - : get the textContent of the target
  - : get all posts
  - : filter posts.subjects that include textContent, returns array
  - : render newList(arr)
  - : get main container and clear content
  - : generate cards from arr and render on UI
  - : if there are no posts render a message "No posts for this subject."