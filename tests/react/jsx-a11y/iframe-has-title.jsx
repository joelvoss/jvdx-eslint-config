function Comp() {
	return (
		<div>
			<iframe />
			<iframe {...props} />
			<iframe title="" />
			<iframe title={''} />
			<iframe title={``} />
			<iframe title={undefined} />
			<iframe title={false} />
			<iframe title={true} />
			<iframe title={42} />
		</div>
	);
}
