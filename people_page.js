window.REACT_CLASSES || (window.REACT_CLASSES = {});
window.REACT_CLASSES.PeoplePage = React.createClass({
  IMAGE_DIRECTORY: './images/people/',
  getInitialState: function() {
    return {
      coaches: [
        {
          name: 'Lorena Bravo',
          title: 'Ballroom and Smooth coach',
          description: <p>Lorena is our Smooth coach.  She got her start in the USC Ballroom and Latin Dance Team, and now she competes nationally and has many years of professional dance experience.  See her website <a href="http://www.bravodancing.com/" target="_blank">here</a>.</p>,
          imageName: 'lorena.jpg',
        },
        {
          name: 'Jonathan Atkinson',
          title: 'Latin and Rhythm coach',
          description: <p>Jonathan is our Rhythm coach.  He also competes nationally and has many years of experience in professional dancing and dance instruction.  See his website <a href="http://ballroomdancers.com/" target="_blank">here</a>.</p>,
          imageName: 'jonathan.jpg',
        },
      ],
      executiveBoard: [
        {
          name: 'Reed Blaylock',
          title: 'President',
          description: <p>Reed is a Ph.D. student in linguistics.  He runs the whole team and often gives dancing guidance to newer members.  He has been dancing ballroom for 4 years.</p>,
          imageName: 'reed.jpg',
        },
        {
          name: 'Kim Luong',
          title: 'Treasurer',
          description: <p>Kim is a senior mechanical engineering major and she joined the Ballroom and Latin Dance team in fall 2011. She has been the treasurer for the team since fall 2012.</p>,
          imageName: 'kim.jpg',
        },
        {
          name: 'Audrey Looby',
          title: 'Publicity Manager',
          description: <p>Audrey joined the team in Fall 2013 and has loved dancing ever since. She is in charge of the team’s publicity and member outreach.</p>,
          imageName: 'audrey.jpg',
        },
        {
          name: 'Erin Soares',
          title: 'Secretary',
          description: <p>Erin is a sophomore theatre major with a minor in dance, and she joined the USC Ballroom and Latin Dance Team in the fall of 2014. She sends out the weekly newsletter to all members of the team.</p>,
          imageName: 'erin.jpg',
        },
        {
          name: 'Eric Gauderman',
          title: 'Social Chair and Webmaster',
          description: <p>Eric is a senior computer science major and he joined the Ballroom and Latin Dance Team in fall 2014. He organizes social dancing outings for the team and maintains the team website.</p>,
          imageName: 'eric.jpg',
        },
        {
          name: 'Jeff Tanedo',
          title: 'Competition Coordinator',
          description: <p>Jeff helps us get our team members to competitions, including organizing carpools and finding a competition partner for each member.</p>,
          imageName: 'jeff.jpg',
        },
        {
          name: 'Max Pflueger',
          title: 'CDA Liaison',
          description: <p>Max works with the Collegiate Dancesport Association to discuss competition guidlines and coordinate with other schools.</p>,
          imageName: 'max.jpg',
        },
        {
          name: 'Sanika Bhargaw',
          title: 'Fundraising Co-Chair',
          description: <p>Sanika joined the Ballroom and Latin Dance Team in spring 2015 and she works on raising funds for the team.</p>,
          imageName: 'sanika.jpg',
        },
        {
          name: 'Sarah Berry',
          title: 'Fundraising Co-Chair',
          description: <p>Sarah is a freshman with an undecided major. She joined the Ballroom and Latin Dance Team in fall 2015 and she works on raising funds for the team.</p>,
          imageName: 'sarah.jpg',
        },
      ],
    };
  },
  _renderPerson: function(person) {
    return (
      <div className="PeoplePage_person" key={person.name}>
        <div
          className="PeoplePage_personImage"
          style={{backgroundImage: 'url("' + this.IMAGE_DIRECTORY + person.imageName + '")'}}
        />
        <div className="PeoplePage_personText">
          <h3>{person.name}</h3>
          <h5>{person.title}</h5>
          {person.description}
        </div>
        <div className="clearfix"/>
      </div>
    );
  },
  render: function() {
    // Render the coaches section
    var renderedCoaches = [];
    this.state.coaches.forEach(function(currentCoach) {
      renderedCoaches.push(this._renderPerson(currentCoach));
    }, this);

    // Render the executive board section
    var renderedExecutiveBoard = [];
    this.state.executiveBoard.forEach(function(currentMember) {
      renderedExecutiveBoard.push(this._renderPerson(currentMember));
    }, this);

    return (
      <div>
        <h1>People</h1>
        <p>Meet the team's coaches and executive board!</p>
        <h2>Executive Board</h2>
        {renderedExecutiveBoard}
        <h2 className="PeoplePage_coachesTitle">Coaches</h2>
        {renderedCoaches}
      </div>
    );
  },
});
