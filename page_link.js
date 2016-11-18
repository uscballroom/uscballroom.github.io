window.REACT_CLASSES || (window.REACT_CLASSES = {});
window.REACT_CLASSES.PageLink = React.createClass({
  _onClick: function(scrollElementId) {
    // Scroll to top
    $('html, body').animate(
      { scrollTop: 0 },
      300
    );
  },
  render: function() {
    return (
      <a {...this.props} onClick={this._onClick}>
        {this.props.children}
      </a>
    );
  },
});
