var PageLink = window.REACT_CLASSES.PageLink;

window.REACT_CLASSES || (window.REACT_CLASSES = {});
window.REACT_CLASSES.FaqPage = React.createClass({
  getInitialState: function() {
    return {
      faqs: [
        {
          question: 'I’ve never danced before. Can I still join?',
          answer: (
            <p>
              Absolutely! We offer beginner lessons every week. Beginner lessons are for everyone, whether you have no experience or you’ve been dancing for years.
            </p>
          ),
        },
        {
          question: 'Do I need a partner?',
          answer: (
            <p>
              Nope! But feel free to bring a friend or two.
            </p>
          ),
        },
        {
          question: 'Do I need special shoes?',
          answer: (
            <p>
              Any shoes are fine for the first week. Suede-soled shoes are required for the intermediate class, and optional in the beginner class (we'll help you find the right kind). If you don't have suede-soled shoes, try to avoid shoes that don't slide on the floor. You can also dance in socks (except during Viennese Waltz).
            </p>
          ),
        },
        {
          question: 'Should I join the intermediate class?',
          answer: (
            <p>
              The intermediate class is for people who have been dancing ballroom for at least a year. We expect intermediate dancers to have a solid grasp of the Bronze (beginner) moves for a given dance. Intermediate dancers are expected to compete.
            </p>
          ),
        },
        {
          question: 'Do I have to go to all the classes?',
          answer: (
            <p>
              You should come as often as you can — the more you learn, the better you get. But it’s okay if you miss some weeks, or can’t come on certain days. You can also choose to attend just the Smooth classes, or just the Rhythm classes (see the <PageLink href="#schedule">schedule</PageLink>). We don’t recommend taking multiple weeks off, since you’ll be behind the other dancers, but we’ll always welcome you back and help you get up to speed no matter how long you’ve been gone.
            </p>
          ),
        },
        {
          question: 'Can I join in the middle of the semester?',
          answer: (
            <p>
              You sure can. We start teaching new dances at the beginning and half-way point of each semester — check out our <PageLink href="#schedule">schedule</PageLink> to see when the next dance starts. You can also join in the middle of a dance, but you’ll have some catching up to do.
            </p>
          ),
        },
        {
          question: 'What dances do you teach?',
          answer: (
            <div>
              <p>See the <PageLink href="#dances">dance styles</PageLink> page for a list of the dances we teach.</p>
              <p>See the <PageLink href="#schedule">schedule</PageLink> to see when we teach each dance.</p>
            </div>
          ),
        },
        {
          question: 'Who’s in charge?',
          answer: (
            <p>
              Our fearless leader and president is Reed Blaylock, and our coaches are Lorena Bravo and Jonathan Atkinson. You can read more about them and our executive board <PageLink href="#people">here</PageLink>.
            </p>
          ),
        },
        {
          question: 'But for real, I’m a terrible dancer.',
          answer: (
            <p>
              Our classes are designed for complete beginners, even if you have no music or dance experience! Almost all of our current members had no dance experience at all when they joined.
            </p>
          ),
        },
        {
          question: 'Do I have to compete?',
          answer: (
            <p>
              You are not required to compete unless you are in the Intermediate class, but most members start competing within just a couple months of starting dancing! Competitions have a whole division, "Newcomer", just for beginners who have less than a year of experience.
            </p>
          ),
        },
        {
          question: 'Does it cost money to join?',
          answer: (
            <p>
              Your first week is free, so you can try out dancing with no commitment! To join, the fee is $80 per semester for USC students. Your fees help us keep our professional coaches Lorena and Jonathan (see them on the <PageLink href="#people">People</PageLink> page) at every class. Other ballroom dancing classes often cost significantly more than this. (<PageLink href="#contact">Contact us</PageLink> for more payment details if you're not a USC student.)
            </p>
          ),
        },
        {
          question: 'I can\'t pay eighty dollars.',
          answer: (
            <p>
              We'll direct you to our Treasurer, Kim Luong (see the <PageLink href="#people">People</PageLink> page); you can talk to her about setting up a payment plan. We need membership fees to help fund the organization, but we also really want you to be able to dance with us.
            </p>
          ),
        },
        {
          question: 'Do I have to be a USC student to join?',
          answer: (
            <p>
              No!  We welcome USC students, alumni, and faculty as well as Los Angeles community members. If you're not affiliated with USC, <PageLink href="#contact">contact us</PageLink> for more details about joining!
            </p>
          ),
        },
        {
          question: 'How can I find out more about your team?',
          answer: (
            <p>
              You can email <b>ballroomusc@gmail.com</b> with questions. You can also <a href="http://bit.ly/uscballroomsignup" target="_blank">sign up for our weekly emails</a> and find us on <a href="https://www.facebook.com/USCBallroom/" target="_blank">Facebook</a>.
            </p>
          ),
        },
      ],
    };
  },

  render: function() {
    // Render the FAQs
    var renderedFaqs = [];
    this.state.faqs.forEach(function(currentFaq, index) {
      renderedFaqs.push(
        <div className="FaqPage_faq" key={'faq' + index}>
          <h3>{currentFaq.question}</h3>
          {currentFaq.answer}
        </div>
      );
    }, this);

    return (
      <div>
        <h1>Frequently Asked Questions</h1>
        {renderedFaqs}
      </div>
    );
  },
});
