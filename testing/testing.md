### EuroTrip Testing

#### Manual Testing

###### **Panning**

------

The intention of this website was to allow a user to easily see where they can go for their money, either book it straight away or if they wanted to find out more about it then they can do so on the rest of the pages, mainly the maps section. This testing will be carried out using developer tools audit tests, different browsers and also different screen sizes to check responsiveness. Validation tools and automated tests will also be carried out to check the code's validity, as outlined in the "Automated testing" section below. The main means of testing the intended purpose of this website will also be to go through each client story and check if their outcome was achieved.

###### **Implementation**

------

*This site was tested across the below browsers:*

- Chrome
- Safari
- IE
- Firefox

*And devices:*

- Laptops (windows & mac)
- Desktop (windows & mac)
- iPhones 5 & 7,
- iPad & iPad mini
- Samsung's 6, 8, 10 & A7

The audit tool from google inspect was also used in order to improve on three aspects:

- Performance
- Best Practices
- Accessibility

This let me realise where aria-labels were missing and alt tags. Where loading times can be reduced and colour's opacities needed to be changed to improve performance. The pictures were gotten form [Pixaby](https://pixabay.com/) and were already small in file size so didn't need to be condensed further. From these audits on the site each page scored at least 92% or over in the three aspects aforementioned.

###### *Bugs fixed*

In the console log when using the developer tools I was getting errors for Favicon. This led me to realise there was no icon in place for the website and thus it was downloaded from the [Favicon](https://favicon.io/) website and implemented onto my page. There was also an error relating to a widget that was being used on the site. Initially I thought it was because it was loading before the document was fully loaded, but after using the 'document.ready' function in JS it still persisted. This led me to realising the widget wasn't an official one and removing it from the site.

There was an issue with the screen being zoomed out on smaller screens and big amounts of white space being left to the right because of this. Originally I thought it was hidden divs in the maps function but I came to realise that there was fixed widths in my CSS causing this problem, along with a margin in the BS4 'row'. I was able to fix this by changing the width to 100% on the element causing the problem, to fill its container, and then overwriting the BS4 'row' class and giving it an auto x-axis margin.

When a user inputted a value under any of the cost of the cities in my array, nothing came up as a result and I felt that the user would just think that the button didn't work. Therefore an alert was added to say that they weren't in budget. I then realised that an event needed to be added for when people put in a wrong value, i.e. a 'minus'. So the second alert was added with a fun message to denote this also.

###### *Bugs still an issue*

There was a bug in IE where the JQuery used doesn't work, I looked up [Can i use](https://caniuse.com/#search=jquery) and unfortunately it isn't available in any forms of IE. This is also the case for the carousel's use of translate and the smooth scroll behavior, as seen [here](https://caniuse.com/#search=translate) and [here](https://caniuse.com/#search=smooth%20scroll).

###### **Results**

------

###### *Client Stories tests*

1. Being a new visitor to the website, I want to be easily navigate the site and find information I was looking for in one or two clicks.
   - The navbar is very simple to use and brings the user to any part of the page when clicked.
   - There are also buttons all over the page linking intuitively to different parts of it, there is only one page on this site so it is very easily navigated.
   - When searching in the map the search bar is autocompleted, once clicked it bring you straight to the city and icons populate with their info windows, these are all clickable and show  the attractions website's urls.
2. As a potential client, I want to know what is within my budget, and what my options are for this amount.
   - This is very easily achieved as the client simply inputs their budget into the search bar and the eligible cities are returned in a scrollable div.
3. As a new visitor to the site, when after seeing what is within my budget. If I already know about this destination, I want to be able to book it straight away without going through unnecessary distractions.
   - A 'book' button is there so the user can go straight to the booking process on kayak if they wish.
4. As a new visitor to the site, I want to be assured that this is a professional site and is the best means to go about looking up destinations to book.
   - There are three headings on the page which explain to the user why this is the website for them and offers them comfort that it is a good website.
   - There sleek design, hero images and smooth scroll feature also gives an overall professional feel to the site, this feature was only  unavailable in IE from testing.
5. As a potential client, I want to be able to find out more about my destination in a better and more thrilling manner than I would just using a flight search website.
   - Google maps is the 'selling point' of this page and is given a full width and a lot of height so that the client can fully immerse themselves in the experience. It offers an interactive or fun way of finding out about the best attractions within a city and didn't show any issues in testing.
6. As a potential client with an open mind and budget, I want to be able to ponder the options that are available that are popular at the moment.
   - A trending section offers the user the chance to browse through the currently popular destinations. The buttons were tested and worked well for moving through the cards one at a time.
7. As an interested client, when I decide where I want to go I want to be able to order my entire package in one go with a site in a simple and quick manner with no distractions.
   - This is easily done as click any of the 'book' buttons will do this, these were all tested with the dev audit tool and aria-labels added as a result.

The intended outcome of this site was achieved as it offered a quick and simple way for a customer to decide on where to go on a holiday in Europe for their budget. The client can easily input their projected amount and see where they can go for their money. If this is all that they wanted to do then they can simply click the 'book' button and begin the booking process with no messing around. The page is kept relatively simple so as not to distract them form the task at hand. However if the client  does want to find out more about the places they want to go then they can easily do so. All of the sections of the page are easily accessible with the navbar and links form the buttons, most of these buttons either encourage the user to explore the google maps or book the destination. This is all done in an interactive manner while adhering to a professional design.

#### Automated Testing

##### Validation

- [W3C Markup Validation](https://validator.w3.org/) was used to validate HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) was used to validate CSS.
- [JSHint](https://jshint.com/) was used to validate JavaScript.

No major errors were observed, the only one to note was with CSS and this relates to a knows BS problem.

##### Jasmine

The main functions were tested in this project with Jasmine as a means of ensuring they were working as planned. The way I approached the testing method was to start small and make sure it is implemented correctly in the first place and work from there. As I am new to Jasmine testing this method best suited me for this project. The files for testing are below:

- [Jasmine HTML](https://github.com/brianscan14/MS2_Project_EuroTrip/blob/master/testing/jasmine.html)
- [Jasmine JS specs](https://github.com/brianscan14/MS2_Project_EuroTrip/blob/master/testing/jasmine.spec.js)
- [EuroTrip JS](https://github.com/brianscan14/MS2_Project_EuroTrip/blob/master/assets/js/script.js)

###### Running the tests

Firstly make sure the the project is cloned from the GitHub repo and running on your own IDE as outlined in the [README.md](https://github.com/brianscan14/MS2_Project_EuroTrip/blob/master/README.md) file. Then:

1. Open the Jasmine HTML file.
2. Run it to see the results in your browser.

To create Jasmine tests of your own:

1. Open the Jasmine spec file.
2. Write the tests using Jasmine's framework.
3. Save the spec and refresh the HTML file.
