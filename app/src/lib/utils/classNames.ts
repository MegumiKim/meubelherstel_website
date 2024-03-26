// Helper function to concatenate class names.
export function classNames(...args) {
	const classes = [];
	args.forEach((arg) => {
		if (typeof arg === 'object' && arg.constructor === Object) {
			Object.keys(arg).forEach((key) => {
				if (arg[key]) classes.push(key);
			});
		} else if (arg) classes.push(arg);
	});
	const uniqueClasses = [];
	classes.forEach((c) => {
		if (uniqueClasses.indexOf(c) < 0) uniqueClasses.push(c);
	});

	return uniqueClasses.join(' ');
}
