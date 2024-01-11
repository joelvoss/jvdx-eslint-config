function Foo(props) {
	return <label {...props} />;
}

function Bar() {
	return (
		<div>
			<input type="text" />
			<label>Surname</label>
		</div>
	);
}
