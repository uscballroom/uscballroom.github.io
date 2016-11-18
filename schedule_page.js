window.REACT_CLASSES || (window.REACT_CLASSES = {});
window.REACT_CLASSES.SchedulePage = React.createClass({
  render: function() {
    // note: This is the format for Facebook event links
    // <li>First class is Monday <b>January 20th</b>, 2016 <a href="https://www.facebook.com/events/980647405342817/" target="_blank">facebook.com/events/980647405342817/</a></li>
    // <li>First class is Wednesday <b>January 25th</b>, 2016 <a href="https://www.facebook.com/events/204219263258175/" target="_blank">facebook.com/events/204219263258175/</a></li>
    return (
      <div className="SchedulePage">
        <h1>Schedule</h1>
        <h3>Weekly Classes</h3>
        <p>Here is our weekly schedule for Fall 2016:</p>
        <ul className="SchedulePage_weeklyList">
          <li>
            Mondays in <b>PED Basement Group Exercise Room (Yoga Room)</b><br/>
            {/*<h6>First Cha-Cha class is Monday <b>August 29th</b>, 2016 <a href="https://www.facebook.com/events/1635891643368467/" target="_blank">facebook.com/events/1635891643368467</a></h6>*/}
          </li>
          <ul>
            <li><b>7-8pm</b> - Beginner Rhythm: Rumba</li>
            <li><b>8-9pm</b> - Intermediate Rhythm: East Coast Swing</li>
          </ul>
          <li>
            Wednesdays in <b>PED 210 (South Gym, second floor)</b><br/>
            {/*<h6>First Foxtrot class is Wednesday <b>August 31st</b>, 2016 <a href="https://www.facebook.com/events/1635189190125076/" target="_blank">facebook.com/events/1635189190125076</a></h6>*/}
          </li>
          <ul>
            <li><b>6-7pm</b> - Open Practice (experienced members available to answer questions)</li>
            <li><b>7-8pm</b> - Beginner Smooth: Tango</li>
            <li><b>8-9pm</b> - Intermediate Smooth: Foxtrot</li>
          </ul>
          <li>Fridays in <b>PED Basement Group Exercise Room (Yoga Room)</b></li>
          <ul>
            <li><b>7-9pm</b> - Open Practice (experienced members available to answer questions)</li>
          </ul>
        </ul>
        <p><a href="http://bit.ly/uscballroomsignup" target="_blank">Sign up for our email newsletter</a> to receive reminders and updates on dates and times.</p>

        <h3>Map to PED (USC Physical Education building)</h3>
        <img className="SchedulePage_map" src="./images/ped_map.png"/>
        
        <h3>Dance Schedule</h3>
        <p>The <b>beginner</b> class cycles through the dances in the following order:</p>
        <ul>
          <li>First half of fall 2016:</li>
          <ul>
            <li>Rhythm: <b>Cha-Cha</b></li>
            <li>Smooth: <b>Foxtrot</b></li>
          </ul>
          <li>Second half of fall 2016:</li>
          <ul>
            <li>Rhythm: <b>Rumba</b></li>
            <li>Smooth: <b>Tango</b></li>
          </ul>
          <li>First half of spring 2017:</li>
          <ul>
            <li>Rhythm: <b>East Coast Swing</b></li>
            <li>Smooth: <b>Waltz</b></li>
          </ul>
          <li>Second half of spring 2017:</li>
          <ul>
            <li>Rhythm: <b>Mambo</b> and <b>Bolero</b></li>
            <li>Smooth: <b>Viennese Waltz</b></li>
          </ul>
        </ul>
        <p>The <b>intermediate</b> class cycles through the dances in the following order:</p>
        <ul>
          <li>First half of fall 2016:</li>
          <ul>
            <li>Rhythm: <b>Rumba</b></li>
            <li>Smooth: <b>Waltz</b></li>
          </ul>
          <li>Second half of fall 2016:</li>
          <ul>
            <li>Rhythm: <b>East Coast Swing</b></li>
            <li>Smooth: <b>Foxtrot</b></li>
          </ul>
          <li>First half of spring 2017:</li>
          <ul>
            <li>Rhythm: <b>Cha-Cha</b></li>
            <li>Smooth: <b>Tango</b></li>
          </ul>
          <li>Second half of spring 2017:</li>
          <ul>
            <li>Rhythm: <b>Mambo</b> and <b>Bolero</b></li>
            <li>Smooth: <b>Viennese Waltz</b></li>
          </ul>
        </ul>
      </div>
    );
  },
});
