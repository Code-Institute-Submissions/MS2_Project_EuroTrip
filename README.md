# EuroTrip

This website was created as a platform for users to quickly see where they can go on holiday in Europe for their proposed budget. The site incorporates a search bar where they can enter their budget and the list of affordable flight destinations pop up in a scrollable section below the input box. Once they see their options they can then search for information about that particular place or things to do in it in the google maps/places API. It serves as a quick and easy way to find out where they can go and what they can do there for a certain amount. Kayak is then linked so that the person can then proceed to book their entire holiday from here on once they have done their research on my website. There is also a trending section where the users can swift through different destinations if they are undecided on where to go.

#### Demo:

A live demo can be found [here](https://brianscan14.github.io/MS2_Project_EuroTrip/index.html).

this section will hopefully have the [responsive](http://ami.responsivedesign.is/) website which sows your project on the different screens as a snapshot.

#### UX:

The main goal of the site is to offer a quick and simple way for a customer to decide where they want to go in Europe on a holiday break for their budget. The page is kept simple so as to not distract the customer too much from their task and hence incorporates a very sleek, neutral and professional design. 

The banner at the top is there to capture that initial sense of delight of booking a holiday. The picture of a nice destination draws the customer in initially to the exciting booking process. The Navbar is a simple button to keep with the modern design and each section brings you to the relative section on the page, with a smooth scroll feature incorporated to keep the professional feel of the page. All sections of the page are easily accessible for the customer to navigate through them. They all give them options to search for places that might interest them with plenty of information at hand to make their decision. There is also a little information section below the main banner at the top to assure the customer that they are picking the best website for the task at hand.

#### Client Stories:

1. Being a new visitor to the website, I want to be easily navigate the site and find information I was looking for in one or two clicks. 
2. As a potential client, I want to know what is within my budget, and what my options are for this amount.
3. As a new visitor to the site, when after seeing what is within my budget. If I already know about this destination, I want to be able to book it straight away without going through unnecessary distractions.
4. As a new visitor to the site, I want to be assured that this is a professional site and is the best means to go about looking up destinations to book.
5. As a potential client, I want to be able to find out more about my destination in a better and more thrilling manner than I would just using a flight search website. 
6. As a potential client with an open mind and budget, I want to be able to ponder the options that are available that are popular at the moment.
7. As an interested client, when I decide where I want to go I want to be able to order my entire package in one go with a site in a simple and quick manner with no distractions.

#### Wireframe mockups:

This website was designed with two screen size ranges in mind:

1. Mobile
2. Tablet-Desktop

As a result of this the below wireframes consist largely of only 2 mockups drawings (contact & footer are the exceptions). 

- Navbar
  - xs-xl screen
- Footer
  - xs-xl screen
- Home
  - xs-sm screen
  - md-xl screen
- Google maps
  - xs-sm screen
  - md-xl screen

### **Technologies:**

- This project uses Html, JavaScript & CSS programming languages.
- [Bootstrap](https://getbootstrap.com/)
  - Used to make the website more responsive and streamline the grid layout.
- [jQuery](https://jquery.com/)
  - Used for the navbar, also the modal and to simplify DOM manipulation.
- [Popper.js](https://popper.js.org/)
  - A reference JS needed for the navbar & modal.
- [Google Fonts](https://fonts.google.com/)
  - Utilised to style the fonts on the site.
- [FontAwesome](https://fontawesome.com/start)
  - The site used BootstrapCDN to provide icons from FontAwesome.
- [Autoprefixer](https://autoprefixer.github.io/)
  - Used to validate the CSS code for all browsers.
- [Jasmine](https://jasmine.github.io/)
  - To test all JS & jQuery code.

#### Features:

The navbar stays the same on this page to maintain the sheek professional feel to the website. Once the button is clicked there is a dropdown of the different sections which act as links to scroll you down smoothly to that part of the page. Once the section on the navbar is clicked that item is 'active' to denote to users what section they are currently on.

There is also a footer at the bottom of every page, which highlights when hovered over to the standard lighter shade of the same colour. These icons symbolise links to social media, the actual pages are non existent. If this website were to be real then social media pages keeping up to date with all the latest offers and holiday trends would be produced as it is a great way of bringing in traffic to the website. A hero image is also used above this encouraging the user to book, it adds to the professional feel of the website., 

##### Search Bar:

The search bar is a means of easily seeing where the user can go for their budget. The user inputs an amount into the bar and this then populates the div below with destinations of where they can go when the search button is clicked. The scroll bar appears on this section when the button is clicked so the user knows to scroll down through them all. Each row then consists of the name of the destination followed by a "book" and "explore" button, linking to the kayak website and embedded google maps respectively. As outlined in my UX these rows are kept simple so if the client knows about their destination already then they can just book it straight away at this early stage. This entire section is encompassed by a hero image of a holiday destination to give them that holiday feeling initially when the page is first loaded.

##### Reasons:

There is a reasons section which is included in order to ensure the client that they are picking the best website for searching for a holiday destination. Three headings of "cheap", "maps" and "quick" along with their respective icons tell the customer a little bit about the page and how it works behind the scenes. They now know exactly what the page does and it is these little nuggets of information that safeguard in the customer's head that this is indeed the best route to take for booking a holiday. Hence, continuing on with using the website and not going elsewhere.

##### Google Map:

Google maps is the main feature of this website or 'selling point' and is the means by which the maps & places API's are utilised so the user can find out the top things to do in the city of their choice. This div is initially hidden and is opened when the customer clicks on a search button or explore maps button. It is then given the full width of the page and most of the screen height so that the user is immersed fully in the city info search experience. An information modal is also used with the info icon, this triggers a modal that tells the user more about the google API and how to use it on this page.

The user can either pick two options, they can search for any city in the search bar, or they can choose a country  form the dropdown list. The autocomplete feature will only allow cities within that country's bounds to populate the search bar. When the user selects a country form this list the map will automatically pan to said country. Once the user decides on a city to look up and searches it the map will again automatically pan to this city. Here is where the places info kicks in and the map returns the top 20 tourist destinations in the city. These are populated with icons dropped in a delayed fashion one by one with an animation. 

The user can click on an icon and information about the place is returned, including the name and website that they can search in a seperate URL if they desire. A list also appears to the right of the maps on bigger screens showing the names of all these icons. When a name is clicked the relevant icon highlights in the map and the map pans to it, which is also the case if an icon is just clicked in general. If a place catches the user's interest that isn't in the top 20 icons then they can just click on it and the info window returns information about this place also.

##### Trending:

This section is for users that have a flexible budget and an open mind to where they want to go. It consists of 6 destinations that are currently very popular with tourists and gives a brief description of them and the highlights of what they are known for. A carousel feature is utilised here with arrows acting as buttons to allow the user to browse through the different destinations and see what they have to offer. An animation is also in place which moves the cards along itself without any input from the user. 

#### Features left to implement:

The search bar uses the filter method to filter through an array that I created with the holiday destinations and their fixed prices that I put into JS. There are API's out there that I could link to and get back lives prices such as [Skyscanner API](https://partners.skyscanner.net/affiliates/travel-apis) offers live price times but the service isn't free, hence why my own prices were made. If this were to be a real website then an API would be utilised getting live updates for prices and this functionality added. Date buttons would also then be added to the search bar because of this.

Using a live API would also allow me to update the trending section with the holiday destinations that the public are booking most. The top 6 destinations being booked with then populate this carousel and the user can swift through these then.

If the [kayak](https://www.kayak.com/) official API was available then this also would have been included in my page in the 'book' links. When a user clicks on one of these buttons then a modal would appear with the API widget and the destination already populate with the users choice. From there on they could proceed to book their entire holiday. 

#### Testing:

Testing is going to be added in a seperate testing md file.

### Deployment

To deploy EuroTrip to GitHub Pages from its [GitHub repository](https://github.com/brianscan14/MS2_Project_EuroTrip), the following steps were taken:

1. Log into GitHub.
2. From the list of repositories on the screen, select **brianscan14/MS2_Project_EuroTrip**.
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, EuroTrip is now deployed.
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

### How to run this project locally

To clone this project from GitHub:

1. Follow this link to the EuroTrip [GitHub repository](https://github.com/brianscan14/MS2_Project_EuroTrip).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository.
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone`, and then paste the URL you copied in Step 3.

```
git clone https://github.com/brianscan14/MS2_Project_EuroTrip.git
```

1. Press Enter. Your local clone will be created.

#### Credits

##### Content

All content on the home page was written by the developer.

##### Media

- All images on the site were sourced from [Pixaby](https://pixabay.com/).
- The page's icon in the header was gotten from [Favicon](https://favicon.io/).

##### Acknowledgments

To be added...

##### Disclaimer

This is for educational purposes only.