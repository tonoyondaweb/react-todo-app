export default function Header(props) {
	return (
		<header className="header">
			<h1>To Do</h1>
			<button className="add" onClick={props.handleClick}>
				<span>+</span>
			</button>
		</header>
	);
}
