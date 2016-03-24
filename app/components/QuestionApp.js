var React = require('react');
var ShowAddButton = require('./ShowAddButton.js');
var QuestionForm = require('./QuestionForm.js');
var QuestionList = require('./QuestionList.js');

var _ = require('lodash');

module.exports = React.createClass({
    getInitialState: function() {
        var questions = [{
            key: 1,
            title: '为什么使用 React?',
            description: 'React 都是关于构建可复用的组件。事实上，通过 React 你唯一要做的事情就是构建组件。得益于其良好的封装性，组件使代码复用、测试和关注分离（separation of concerns）更加简单。',
            voteCount: 10,
        }, {
            key: 2,
            title: 'Redux 中文文档?',
            description: 'Redux 是 JavaScript 状态容器，提供可预测化的状态管理。可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。不仅于此，它还提供 超爽的开发体验.',
            voteCount: 8,
        }];
        return {
            questions: questions,
            formDisplayed: false
        }
    },
    onToggleForm: function() {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        })
    },
    onNewQuestion: function(newQuestion) {
        newQuestion.key = this.state.questions.length + 1;
        var newQuestions = this.state.questions.concat(newQuestion);
        newQuestions = this.sortQuestion(newQuestions);
        this.setState({
            questions: newQuestions,
        })
        this.onToggleForm();
    },
    setQuestion: function(key, newQuestion) {
        var questions = _.uniq(this.state.questions);
        var index = _.findIndex(questions, function(qst) {
            return qst.key == key;
        });
        questions[index].title = newQuestion.title;
        questions[index].description = newQuestion.description;
        this.setState({
            questions: questions
        });
        this.onToggleForm();
    },
    sortQuestion: function(questions) {
        questions.sort(function(a, b) {
            return b.voteCount - a.voteCount;
        })
        return questions;
    },
    onVote: function(key, newCount) {
        var questions = _.uniq(this.state.questions);
        var index = _.findIndex(questions, function(qst) {
            return qst.key == key;
        });
        questions[index].voteCount = newCount;
        questions = this.sortQuestion(questions);
        this.setState({
            questions: questions
        })
    },
    onEdit: function(key) {
        var questions = _.uniq(this.state.questions);
        var index = _.findIndex(questions, function(qst) {
            return qst.key == key;
        });
        this.setState({
            formDisplayed: true
        });
        //不知道这里这么调用对不，怎么这么麻烦? 父子组件如何交互的问题？
        this.refs.questionForm.refs.title.value = questions[index].title;
        this.refs.questionForm.refs.description.value = questions[index].description;
        this.refs.questionForm.refs.key = key;
    },
    onRemove: function(key) {
        var questions = _.remove(this.state.questions, function(qst) {
            return qst.key != key;
        });
        questions = this.sortQuestion(questions);
        this.setState({
            questions: questions
        })
    },
    render: function() {
        return (
            <div>
                <div className="jumbotron text-center">
                    <div className="container">
                        <h1>React 问答</h1>
                        <ShowAddButton onToggleForm={this.onToggleForm} />
                    </div>
                </div>
                <div className="main container">
                    <QuestionForm ref="questionForm" onNewQuestion={this.onNewQuestion}
                        setQuestion = {this.setQuestion}
                        onToggleForm={this.onToggleForm}
                        formDisplayed={this.state.formDisplayed } />
                    <QuestionList onVote={this.onVote} questions={this.state.questions}
                                onEdit={this.onEdit} onRemove={this.onRemove}/>
                </div>
            </div>
        )
    }

})