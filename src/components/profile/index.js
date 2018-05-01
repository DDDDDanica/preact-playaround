import { Component } from 'preact';
import style from './style.less';

export default class Profile extends Component {
	state = {
		count: 0,
		checked: true
	};

	// update the current time
	updateTime = () => {
		let time = new Date().toLocaleString();
		this.setState({ time });
	};

	// gets called when this route is navigated to
	componentDidMount() {
		// start a timer for the clock:
		this.timer = setInterval(this.updateTime, 1000);
		this.updateTime();

		// every time we get remounted, increment a counter:
		this.setState({ count: this.state.count+1 });
	}

	// gets called just before navigating away from the route
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	_ClickButton = e => {
		let checked = !this.state.checked;
		this.setState({ checked });
	};

	// Note: `user` comes from the URL, courtesy of our router
	render({ user }, { time, count, checked }) {
		return (
			<div class={style.profile}>
				<h1>Profile: {user}</h1>
				<p class={style.checked} data-checked={checked}>This is the user profile for a user named {user}.</p>

				<div >Current time: {time}</div>
				<div>Profile route mounted {count} times.</div>
				<button onClick={this._ClickButton}>Click me</button>
			</div>
		);
	}
}
