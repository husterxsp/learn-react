var React = require('react');
module.exports = React.createClass({
    voteUp: function(e) {
        console.log(this.props.questionKey);
        var newCount = parseInt(this.props.voteCount + 1);
        this.props.onVote(this.props.questionKey, newCount);
    },
    voteDown: function(e) {
        var newCount = parseInt(this.props.voteCount - 1);
        this.props.onVote(this.props.questionKey, newCount);
    },
    edit: function() {
        this.props.onEdit(this.props.questionKey);
    },
    remove: function() {
        this.props.onRemove(this.props.questionKey);
    },
    render: function() {
        return (
            <div className="media">
                <div className="media-left">
                    <button className="btn btn-default" onClick={this.voteUp}>
                        <span className="glyphicon glyphicon-chevron-up"></span>
                        <span className="vote-count">{this.props.voteCount}</span>
                    </button>
                    <button className="btn btn-default" onClick={this.voteDown}>
                        <span className="glyphicon glyphicon-chevron-down"></span>
                    </button>
                </div>
                <div className="media-body">
                    <h4 className="media-heading">{this.props.title}</h4>
                    <p>{this.props.description}</p>
                    <button className="btn btn-success" onClick={this.edit}>修改</button>
                    <button className="btn btn-success" onClick={this.remove}>删除</button>
                </div>
            </div>
        )
    }
})