export const getYearDifference = (year) => {
	return new Date().getFullYear() - year;
};

export const calculateBrand = (brand) => {
	let increment;

	switch (brand) {
		case "1":
			increment = 1.3;

			break;
		case "2":
			increment = 1.15;

			break;

		case "3":
			increment = 1.05;

			break;

		default:
			break;
	}
	return increment;
};

export const calculatePlan = (plan) => {
	return plan === "1" ? 1.2 : 1.5;
};

export const formatMoney = (amount) => {
	return amount.toLocaleString("es-ES", {
		style: "currency",
		currency: "MXN",
	});
};
