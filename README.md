## Site Description

Author: Lilian Ho

Site Name: Delinquente

Site Category: Portfolio and Services

This website offers web design services. It consists of 6 pages: homepage, about me page, services page, portfolio page, FAQ page and a contact page. The homepage welcomes visitors and gives an overview of the services provided. The about me page introduces myself and my favorite things. The services page show 3 pricing plans and services offered. The portfolio page showcases the past websites I have created. The FAQ page consists of answers to the most frequently asked questions. The contact page has a web form that allows visitors to contact me. The HTML has been validated by W3C.

## Technical Applications

1. srcset/picture: I used picture in the contact page to show three different versions (small,medium,big) of a string of hearts image in different viewport sizes.

2. Responsive breakpoints: Breakpoints I used are 320px (mobile), 640px (tablet) and 1000px (desktop). Media queries in CSS are used for responsive design.

3. Three Column Layout: The portfolio page has a 3-column layout when viewed at desktop size. It uses flexbox and changes layout when viewport size is decreased. It changes into 2 columns on tablet and one column on mobile.

4. CSS Animation on Continuous Loop: The slideshow on the homepage runs on an continuous loop. CSS keyframes are used to crossfade between two images that are on top of each other. Each image is displayed for 4 seconds before fading into another.

5. Flexbox: Flexbox is used in both the services page and portfolio. The pricing tables use flexbox to wrap in different viewport sizes. When viewed on desktop, the 3 tables display in one row. When viewport size starts to decrease, 2 tables will fit into one row and the third one goes under both in full width. When viewed on mobile, each table will use up the full width of the display.

6. Background image: The flower background image is used on all pages.

7. Javascript Animation: I used Javascript animation in the crossfade slideshow on the about me page. Image will be displayed when its corresponding number is clicked. I made the effect by adding and removing class to the elements using jquery. (see crossfade.js)

8. Toggle an element's visual css style: I used jquery to change the css style on the pricing tables. The header background color of pricing plan changes on hover. (see changecss.js)

9. Toggle an element's visibility: I used jquery on both the menu slider and FAQ toggle. When viewed on mobile or tablet, the navigation menu changes to a menu slider and users can toggle the menu icon to show or hide the links. On the FAQ page, visitors can toggle the questions to show or hide the answers. (see menutoggle.js and faqtoggle.js)
