import React from 'react';

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: '',
			tasks: []
		};
	}

	handleChange = (event) => {
		this.setState({ inputValue: event.target.value });
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const newTask = this.state.inputValue;
		this.setState(prevState => ({
			inputValue: '',
			tasks: [...prevState.tasks, newTask]
		}));
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						type="text"
						value={this.state.inputValue}
						onChange={this.handleChange}
					/>
					<button type="submit">Добавить задачу</button>
				</form>
				<ul>
					{this.state.tasks.map((task, index) => (
						<li key={index}>{task}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default TodoList;