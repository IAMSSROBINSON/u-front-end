# Project: Blog

## Subject matter
All of my interests:
- Programming
- Design
- Technology
- Advertising
- Languages
- Fitness
- Nutrition
- Art
- Mixology
- Philosophy

- These subjects could be displayed in the form of quick links

## Title
logomark: some icon
logotype: `iamssrobinson`

- feature on every page in the header
- double-up as link to homepage

## Links
- Blog
  - Link to homepage where list of blog items are featured
  - Each blog item is a quick synopsis: title, date posted, first 140 characters of the blog text. When clicked it will open the full blog and image on a new page.
  - Create template for blog page and populate when clicked. Keep the same format to start with.
  
- Work (eventually)

- About:
  - A concise article about how my interests came to be.
  - A small photo gallery of things I like.


## Data
Store the blogs in a data file as if they were being fetched from a data source:
```JavaScript
const posts = [
    {
        label : "philosophy",
        dateCreated : "YYYY-MM-DD",
        title : "Blog Post Title",
        content : "Some blog text content.",
        image : "./pathToImage.png"
    },
]
```


## Initialization
- design basic layout, low fidelity, paper:
  - homepage: list of blog articles
  - blog template: when a blog is clicked on in the UI populate the template and display

- components:

    - Header

    - Logo
      - logomark
      - h1: logotype 

    - Links
      - Blog
      - About
      - : Create link component that accepts href and text arguments to populate the link.
      - : Store link names in data file object under links: e.g { links: ["blog", "about"] }
      - : create <nav class=".link-container>
      - : create <ul class="link-list">
      - : For each link create an <li class="link-item">
      - : append to a document.createDocumentFragment() 
      - : when iteration finishes append fragment to link-list
      - : when iteration finishes append link-list to link-container
      - : when iteration finishes append link-container to .header-wrapper
      - : do this on initialization and then display: none the .link-container
      - : display: block the .link-container when the first menu media query occurs

    - Subscribe form
      - email input
      - button
      - text

    - QuickLinks / Subjects
      - Philosophy
      - Art
      - Design
      - Ect..
      - : Create an array of subjects in the data file
      - : Create getSubjects function in model that returns a list of subjects during view initialization through controller
      - : Create Subject Component that accepts a subjectNameValue
      - : For each subject generate a component and populate a new Subject(subjectNameValue)
      - : Create a container for all of the subject elements
      - : Append container to the UI

    - BlogCard
      - title (restrict characters to single line)
      - text (restrict content to 2 lines)
      - quickLink subject indicator
      - date posted
      - : from the controller render the cards in the view. 
      - : create a function in controller and then call it during initialization
      - : if there are no blog posts display a message in the UI stating as such
      - : collate the data points from model in this function then create separate functions to handle individual datapoints where required
      - : create Card component
      - : Card should receive => new Card(title, articleText, subject, dateStamp)
      - : title => truncate to 2 lines but give explicit height so that the form / structure remains intact
      - : articleText => truncate to 3 lines, -webkit-line-clamp: 3, using display: -webkit-box as well as accompanying rules.
      - : subject => there is currently no subject as part of the blog posts, generate a random subject for each blog post just for this mock project
      - : dateStamp => there is currently no dateStamp associated with each blog post, assign random date to each post for this mock project
      - there are many post posts, restrict the number of shown posts initially e.g. 8, then create a button to reveal the next 8..., when all posts are shown hide the button

    - BlogTemplate
      - quickLink subject indicator
      - title
      - first paragraph
      - image
      - remaining paragraphs

    - Pagination ?
      - back icon + text
      - next icon + text

    - Footer
      - Copyright
        - &copy; SSR 2025

      - Social media icons (will not function, include?)
        - Instagram
        - X
        - YouTube

