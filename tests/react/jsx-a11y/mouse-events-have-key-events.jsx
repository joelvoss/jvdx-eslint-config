function Comp() {
	return (
		<div>
			<div onMouseOver={() => void 0} />
			<div onMouseOut={() => void 0} />
			<div onMouseOver={() => void 0} {...otherProps} />
			<div onMouseOut={() => void 0} {...otherProps} />
		</div>
	);
}
