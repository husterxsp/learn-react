var React = require('react');
module.exports = React.createClass({
    handleForm: function(e) {
        e.preventDefault();
        if (!this.refs.title.value) {
            return false;
        }
        var newQuestion = {
            title: this.refs.title.value,
            description: this.refs.description.value,
            voteCount: 0
        };
        if (this.refs.key) {
            this.props.setQuestion(this.refs.key, newQuestion);
            this.refs.key = null;
        } else {
            this.props.onNewQuestion(newQuestion);
        }
        this.refs.addQuestionForm.reset();
    },
    render: function() {
        var styleObj = {
            display: this.props.formDisplayed ? 'block' : 'none'
        }
        return (
            <form ref="addQuestionForm" style={styleObj} name="addQuestion" className="clearfix"
                onSubmit={this.handleForm}>
                <div className="form-group">
                    <lable htmlFor="qtitle">标题</lable>
                    <input type="text" ref="title" className="form-control"
                            id="qtitle" placeholder="标题" />
                </div>
                <textarea ref="description" className="form-control" row="3" placeholder="描述"></textarea>
                <button className="btn btn-success pull-right">确定</button>
                <a className="btn btn-default pull-right" onClick={this.props.onToggleForm}>取消</a>
            </form>
        )
    }
})