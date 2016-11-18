/* Specify pages in the following format:

  'unique-page-key-for-url': {
    title: 'Page name in navigation',
    content: (
      <div>
        your JSX code here
      </div>
    ),
  },

*/

var PageLink = window.REACT_CLASSES.PageLink;
var PeoplePage = window.REACT_CLASSES.PeoplePage;
var FaqPage = window.REACT_CLASSES.FaqPage;
var ClassesPage = window.REACT_CLASSES.ClassesPage;
var SchedulePage = window.REACT_CLASSES.SchedulePage;

window.PAGES = {

  'home': {
    title: 'Home',
    content: (
      <div>
        <p>We are the premiere Ballroom Dance organization at the University of Southern California!</p>
        <p>We're switching to new dances this week, so now's the perfect time to try out ballroom dancing!  And if you join now, you get a discount on dues!</p>
        <p>Simply come to any Rumba or Tango class to try it!  No experience is required and your first week is free!</p>
        <h6>Rumba classes are Mondays at 7pm in the PED Basement, starting Monday Oct. 17!</h6>
        <h6>Tango classes are Wednesdays at 7pm in the PED South Gym (second floor) starting Wednesday Oct. 12!</h6>
        <p>See the <PageLink href="#schedule">Schedule</PageLink> for more info.</p>
        {/*<h6>To find out more about joining in Fall 2016 or for summer classes, <a href="https://docs.google.com/forms/d/1UNgbiQJmya6-LysRbEamnRTOxF0LWecjtnOV7fKe4Zo/viewform" target="_blank">fill out our interest form!</a></h6>*/}
        <h3>What we do:</h3>
        <ul>
          <li>We hold <PageLink href="#classes">classes</PageLink> for both beginners and experienced dancers in many <PageLink href="#dances">dance styles</PageLink>!</li>
          <li>We compete across California and the U.S.</li>
          <li>We go out social dancing all around L.A. -- Swing dancing, Salsa dancing, and more!</li>
          <li>We <PageLink href="#classes">perform</PageLink> at on-campus events</li>
          <li>We have lots of fun!</li>
        </ul>
        <h3>Try it out!</h3>
        <p>Everyone can join!</p>
        <p>We're starting brand-new dances after spring break!  That will be the perfect time to come try dancing!</p>
        <p>You can come and try out your first ballroom class with no commitment. Just <PageLink href="#schedule">come to one of our classes!</PageLink></p>
        <p><PageLink href="#join">See the Join page</PageLink> for membership benefits. <a href="http://bit.ly/uscballroomsignup" target="_blank">Sign up for our email newsletter</a> and come to one of our practices to try out dancing!</p>
        <h3>More questions?</h3>
        <p>See the <PageLink href="#faq">Frequently Asked Questions</PageLink> page, or feel free to <PageLink href="#contact">contact us</PageLink> with any question at all!</p>
      </div>
    ),
  },

  'join': {
    title: 'Join',
    content: (
      <div>
        <h1>Join the Team</h1>
        <p>All USC students, alumni, and faculty, as well as Los Angeles community members are welcome to join! We welcome all experience levels, from total beginners to dancing masters! No tryouts needed.</p>
        <p>You can try out the team with no commitment. Simply <PageLink href="#schedule">come to one of our classes!</PageLink></p>
        <p><a href="http://bit.ly/uscballroomsignup" target="_blank">Sign up for our email newsletter</a> for updated practice dates and times.</p>
        <p>Find us on <a href="https://www.facebook.com/USCBallroom/" target="_blank">Facebook</a> for updates on our events and photos of our members at competitions!</p>
        <h3>What we offer:</h3>
        <ul>
          <li>Hour-long beginner and intermediate <PageLink href="#classes">classes</PageLink>, 2 days a week, with professional coaches (see them on the <PageLink href="#people">People</PageLink> page)</li>
          <li>Practice sessions where you can improve your dancing skills under the mentorship of experienced members</li>
          <li>Carpools to social dancing events around the L.A. area</li>
          <li>Discounts on dance shoes through our favorite shoe vendor, <a href="https://www.facebook.com/crowndanceshoes/" target="_blank">Crown Dance Shoes</a></li>
        </ul>
        <h3>Schedule</h3>
        <p>We hold classes on Monday and Wednesday evenings, and have open practices on Friday evenings.  See the <PageLink href="#schedule">Schedule</PageLink> page for times and dates.</p>
        <h3>Membership cost</h3>
        <p>Your first week is free, so you can try out ballroom dancing! To join the team, there is a fee of $80 per semester for USC students. This fee enables us to have our incredible professional coaches teach us every week. We have a payment plan option as well, if needed.</p>
        <p>Non-USC students are also welcome to join! The fee for non-students is $120 per semester. <PageLink href="#contact">Contact us</PageLink> for more details about joining if you are not a USC student!</p>
      </div>
    ),
  },

  'schedule': {
    title: 'Schedule',
    content: (
      <SchedulePage/>
    ),
  },

  'faq': {
    title: 'FAQ',
    content: (
      <FaqPage/>
    ),
  },

  'classes': {
    title: 'Classes',
    content: (
      <ClassesPage/>
    ),
  },

  'dances': {
    title: 'Dance Styles',
    content: (
      <div>
        <h1>List of Dance Styles</h1>
        <p>In our regular classes throughout the year, we teach American styles of dance: <b>Smooth</b> and <b>Rhythm</b>.</p>
        <p>We teach these Smooth dances:</p>
        <ul>
          <li>Foxtrot</li>
          <li>Tango</li>
          <li>Waltz</li>
          <li>Viennese Waltz</li>
        </ul>
        <p>and these Rhythm dances:</p>
        <ul>
          <li>Cha-Cha</li>
          <li>Rumba</li>
          <li>Swing Dancing (East Coast Swing)</li>
          <li>Mambo</li>
          <li>Bolero</li>
        </ul>
        <p>We also hold one-time workshops, taught by either our coaches or experienced team members, in other dance styles, such as:</p>
        <ul>
          <li>Salsa</li>
          <li>Hustle</li>
          <li>Lindy Hop (Swing dance style)</li>
          <li>Blues dancing</li>
          <li>West Coast Swing</li>
        </ul>
      </div>
    ),
  },

  'people': {
    title: 'People',
    // From people.js
    content: (
      <PeoplePage/>
    ),
  },

  'contact': {
    title: 'Contact Us',
    content: (
      <div className="ContactPage">
        <h1>Contact Us</h1>
        <p>Feel free to send us any questions you have!</p>
        <p>Send us an email at <a href="mailto:ballroomusc@gmail.com">ballroomusc@gmail.com</a></p>
        <p><a href="http://bit.ly/uscballroomsignup" target="_blank">Sign up for our weekly emails</a></p>
        <p>Find us on <a href="https://www.facebook.com/USCBallroom/" target="_blank">Facebook</a> for updates on our events and <a href="https://www.facebook.com/USCBallroom/photos_stream" target="_blank">photos</a> of our members at competitions!</p>
      </div>
    ),
  },

};
