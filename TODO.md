- In expertise section, on desktop, make each one appear as I scroll down... on mobile same , but make each sticky until I scroll to a certain point and then the next appears... in all of them, they should "fade in"
- in professional projects, especially on mobile, but generally too, make an initial animation when I scroll down to show that you can swipe to the side
- Make a success modal appear if the email sends successfully... currently nothing happens!!!
- In the project modal, make the detail bullet points NARROWER than the title and subtitle... currently they're too wide and it looks wierd...
- Make the modal maybe pop up from the bottom and you can swipe down to make it disappear? I think that's a better modern modal style but Google about this ... "bottom sheet" or "sliding sheet"... especially on mobile. could actually just add it to the mobile version of the site actually, think about that. Enhance design of the site in general.
- Increase the sensitivity of scrolling through the porjects... happens too easily currently..
- often when I scroll through the projects, it scrolls multiple rather than just one... fix this...
- change from 'professional projects' to just 'projects'
- make the buttons which show project progress lower because currently they're overlapping
- maybe make some subtle animation when the carousel slides into view, like with the timeline? otherwise looks a bit stale
- Within each project, layout the text better for different screen sizes... when the screens big, currently it looks too spaced out... maybe make it adjust dynamically???
- Redo the other bullet point place to have li elements instead of manual bullet points
- Add colour to the expertise logos? Maybe make them the original ones that they were...
- Look up other templates for the project cards for ideas 
- Make some sort of animation for the project cards as well
- Set up the deployment with a git push rather than the current manual approach.
- Every time I redeploy, it removes the old custom domain. Make that part of the deployment pipeline too.
- The favicon isn't loading on the deployed site.
- There are 'about-container' css class definitions spread throughout multiple files.
  - Consolidate these into one.
- Make it so that when I hover on professional projects the mouse goes to a hand and a popup says 'click to learn more' 
- Doing the above will make it easier to CENTRE EVERYTHING, especially the h1's for each section,
  and the whole of my about section so that I appear in the middle, which it does anyway on smaller
  screens (and looks better imho).
- Then finally make the professional projects into a grid, with just the headers, which expand slightly
  when hovered over to show the subheading (and 'push' the others to the side a little bit), and then prompt
  with an icon to click to show all details, which makes it even bigger and pushes everything else further
  maybe? or maybe do the final stage as a modal, have a think! Also, currently I have five projects,
  but in general the format should be a grid with 2 colums.. but FIND A WAY THAT ANY STRAGGLING SINGLE
  COLUMNS WILL BE CENTERED IF POSS, E.G.:
                        X   X
                        X   X
                          X

        where 'X' is a project cell.

or do it:
  
                        X   X   X
                          X   X

    as this align better with the expertise format. or make the expertise section match with:

       X   X
         X

   have a think!!

- Make the section with my photo in it CENTERED.
- Make there be some sort of animation when I scroll to my projects section,
  similarish to the timeline - something subtle!
- Make linkedin and github logos at top and bottom go purple (same shade as on timeline) when hovered on! this already happens when running locally... why not
  on the deployed website??? debug this...
- Make each of the sections on the top right go purple when you hover over them, and possibly some other interaction / transition (ask chatgpt what looks modern and professional)
- Decrease max width on the expertise section so that the different sections don't go as far apart on wide screen...
- On wide screens, in the project section, make all the projects show.. so show all when wide enough... or basically show just engouh as can be display on the screen,
  see if there's an option for this....
- Make the 'tech stack' chips interactive maybe?? so when you hover over them they go purple as well, and they open a link to the landing page of that particular technology???
- Find a way to make the design of the professional projects tiles more interesting?? maybe add some shadow, or a more interesting shape or something??
- Somewhere in the contact section, make a place for clicking to open my cv in a new window: see if I can just put it in the repo (as pdf probs), and then it will open...
- Otherwise make an option to select either as a word document or as a pdf, and then come up with a good way to give them access... like 'open as pdf' here, or 'download as .docx' here...
- think about maybe having a (dark) yellow as a secondary color theme, in keeping with the logos that I've got... for example, when I hover over the tech stack chips, there coul dbe some sort
  of revolving dark yellow and purple border in a sort of modern way to show that I'm hovering over it... 
- Link to google fonts and use JetBraints mono typeface? or jetbrains sans (similar but non-monospace?) .. could even use space grotesque
- Could just use the mono font for headers, and leave everything else as sans for readability?
- Keep my cv in a separate folder in this repo, keep it as a static asset, make a section to load the html for the cv and render it for preview, and then logic
  (all processed on the client-end) to download it in different formats (with the processing done on the client-side)... in pdf and docx... also probably just to keep it
  in one place have different versions of the cv in the folder... have a 'main' one... and then a subfolder for variants like data engineering heavy, software engineering heavy, etc...
  as well as different formatting options for my own interest....
    - I think maybe in the top-left corner make a "My CV" link (styled nicely)... when you hover on it options come down to "preview", "download pdf", "download docx", and "download json"...
      - If you just click on it normally, it should open the preview...
    - Clicking any of them downloads, renders the html (but doesn't necessarily paint it if just downloading), and if relevant converts to the right format...
    - Also in the preview mode there should be a couple of icons of the docx logo and pdf logo, when you click on them it should download them in the right format...
- testing new todo