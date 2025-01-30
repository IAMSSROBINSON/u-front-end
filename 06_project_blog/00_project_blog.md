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