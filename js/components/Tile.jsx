var React = require('react');
var ReactAddons = require('react/addons');

var cx = ReactAddons.addons.classSet;

var Tile = React.createClass({
    onClick: function () {
        this.props.onTileClick(this.props.id);
    },
    render: function () {

        var backStyle = {
            // backgroundImage: 'url(' + this.props.image + ')'
        }

        return (
            <div className="flip-container">
                <div
                    className={cx({
                        'flipper': true,
                        'flipped': this.props.flipped
                    })}
                    onClick={this.onClick}>
                    <div className="front">
                      {this.props.firstName}
                      {' '}
                      {this.props.lastName}
                    </div>
                    <div style={backStyle} className="back">
                      {this.props.animal}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Tile;
