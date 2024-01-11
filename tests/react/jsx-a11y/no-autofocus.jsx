function Comp() {
	return (
		<div>
			<div autoFocus />
			<div autoFocus="true" />
			<div autoFocus="false" />
			<div autoFocus={undefined} />
		</div>
	);
}
