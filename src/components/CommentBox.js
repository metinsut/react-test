import React, { Component } from 'react';

class CommentBox extends Component {
	state = {
		comment: ''
	};

	handleChange = e => {
		this.setState({ comment: e.target.value });
	};

	handleSubmit = e => {
      // TODO
		e.preventDefault();
		this.setState({ comment: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a comment</h4>
				<textarea value={this.state.comment} onChange={this.handleChange} cols="30" rows="5" />
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
		);
	}
}

export default CommentBox;
