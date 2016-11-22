var PageLink = window.REACT_CLASSES.PageLink;

var SiteHeaderBackground = React.createClass({
  BACKGROUND_DIRECTORY: './images/backgrounds/',
  FILENAMES: [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg'
  ],

  propTypes: {
    initializeSlick: React.PropTypes.func.isRequired,
  },
  getInitialState: function() {
    return {
      renderedImages: [],
    };
  },
  componentWillMount: function() {
    // Shuffle filenames
    var m = this.FILENAMES.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.FILENAMES[m];
      this.FILENAMES[m] = this.FILENAMES[i];
      this.FILENAMES[i] = t;
    }

    var renderedImages = [];
    for (var i in this.FILENAMES) {
      var filename_i = this.FILENAMES[i];
      renderedImages.push(
        <div
          className="SiteHeaderBackground_image"
          style={{backgroundImage: 'url("' + filename_i + '")'}}
          key={filename_i}
        />
      );
    }
    // Trigger re-render so that React will add the images to
    // the DOM, before initializing Slick on the images
    this.setState({renderedImages: renderedImages});
    this.props.initializeSlick();
  },
  render: function() {
    return (
      <div className="SiteHeaderBackground">
        <div className="SiteHeaderBackground_carousel">
          {this.state.renderedImages}
        </div>
      </div>
    );
  },
});



var Navigation = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired,
    autoplay: React.PropTypes.bool.isRequired,
    onPlayPause: React.PropTypes.func.isRequired,
  },
  render: function() {
    var renderedNavigationPages = [];
    for (var pageKey in window.PAGES) {
      renderedNavigationPages.push(
        <PageLink
          className={window.cx({'Navigation_currentPage': this.props.page===pageKey})}
          href={'#'+pageKey}
          key={pageKey}
        >
          {window.PAGES[pageKey].title}
        </PageLink>
      );
    }
    return (
      <div className="Navigation_container">
        <div className="container">
          <div className="Navigation">
            <div className="Navigation_pages">
              {renderedNavigationPages}
            </div>
            <div className="Navigation_controls">
              <a id="Navigation_controls_prev"><i className="material-icons">skip_previous</i></a>
              <a id="Navigation_controls_pause" onClick={this.props.onPlayPause}>
                <i className="material-icons">
                  {this.props.autoplay ? 'pause' : 'play_arrow'}
                </i>
              </a>
              <a id="Navigation_controls_next"><i className="material-icons">skip_next</i></a>
            </div>
          </div>
        </div>
      </div>
    );
  },
});



var SiteHeader = React.createClass({
  propTypes: {
    large: React.PropTypes.bool.isRequired,
    page: React.PropTypes.string.isRequired,
  },
  getInitialState: function() {
    return {
      autoplay: true,
    };
  },
  _slickCarousel: null,
  _initializeSlick: function() {
    this._slickCarousel = $('.SiteHeaderBackground_carousel');
    // Initialize Slick carousel
    this._slickCarousel.slick({
      autoplay: this.state.autoplay,
      autoplaySpeed: 4000,
      pauseOnHover: false,
      fade: true,
      speed: 700,
      lazyLoad: 'ondemand',
      draggable: false,
      nextArrow: '#Navigation_controls_next',
      prevArrow: '#Navigation_controls_prev',
    });
  },
  componentWillUpdate: function(nextProps, nextState) {
    // Pause or play slideshow
    if (this._slickCarousel) {
      if (this.state.autoplay && !nextState.autoplay) {
        this._slickCarousel.slick('slickSetOption', 'autoplay', false).slick('slickPause')
      }
      else if (!this.state.autoplay && nextState.autoplay) {
        this._slickCarousel.slick('slickSetOption', 'autoplay', true).slick('slickPlay');
      }
    }
    // Animate changing SiteHeader height if the page changes
    if (nextProps.page !== this.props.page) {
      $('.SiteHeader').animate(
        { height: nextProps.page === 'home' ? '80vh' : '30vh'}, 
        300
      );
    }
  },
  _onPlayPause: function() {
    this.setState({autoplay: !this.state.autoplay});
  },
  render: function() {
    return (
      <div>
        <div className={window.cx({
          'SiteHeader': true,
          'SiteHeader_large': this.props.large,
          'SiteHeader_small': !this.props.large,
        })}>
          <SiteHeaderBackground initializeSlick={this._initializeSlick}/>
          <div className="SiteHeader_overlay">
            <div className="container">
              <div className="SiteHeader_title">
                SC Ballroom and Latin Dance Team
              </div>
            </div>
            <Navigation
              page={this.props.page}
              autoplay={this.state.autoplay}
              onPlayPause={this._onPlayPause}
            />
          </div>
        </div>
        <div className="SiteHeader_shadowBorder"/>
      </div>
    );
  },
});



var ContentArea = React.createClass({
  propTypes: {
    page: React.PropTypes.string.isRequired,
  },
  render: function() {
    var currentPage = window.PAGES[this.props.page];
    return (
      <div className="container">
        <div className="ContentArea_wrapper">
          <div className="ContentArea">
            {currentPage && currentPage.content}
          </div>
        </div>
      </div>
    );
  },
});



var Site = React.createClass({
  getInitialState: function() {
    return {
      page: 'home',
    };
  },
  componentWillMount: function() {
    // Register setting pages
    var routieObject = {};
    for (var page in window.PAGES) {
      routieObject[page] = function(pageKey) {
        this.setState({page: pageKey});
        document.title =
          pageKey==='home'
            ? 'SC Ballroom and Latin Dance Team'
            : window.PAGES[pageKey].title + ' | SC Ballroom and Latin Dance Team';
      }.bind(this, page);
    }
    routie(routieObject);
  },
  render: function() {
    return (
      <div className="Site">
        <SiteHeader large={this.state.page==='home'} page={this.state.page}/>
        <ContentArea page={this.state.page}/>
      </div>
    );
  },
});



ReactDOM.render(<Site/>, document.getElementById('main'));
