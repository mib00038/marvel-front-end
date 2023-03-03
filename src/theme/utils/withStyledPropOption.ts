const withStyledPropOption = (propName: string) => ({
	shouldForwardProp: (prop: string) => prop !== propName,
});

export default withStyledPropOption;