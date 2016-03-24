var React = require('react');
var QuestionItem = require('./QuestionItem.js');
module.exports = React.createClass({
    render: function() {
        var questions = this.props.questions;
        if (!Array.isArray(questions)) {
            console.log("error");
        }
        var questionComps = questions.map(function(qst) {
            return <QuestionItem questionKey={qst.key}
                        title={qst.title}
                        description={qst.description}
                        voteCount={qst.voteCount}
                        onVote={this.props.onVote}
                        onEdit={this.props.onEdit}
                        onRemove={this.props.onRemove}
                        edit={this.props.edit}
                        remove={this.props.remove}/>
        }.bind(this));
        return (
            <div id="questions" className="" > 
                {questionComps}
            </div>
        )

    }
})