import { createContext, useState } from "react";
import {
	calculateBrand,
	calculatePlan,
	getYearDifference,
	formatMoney,
} from "../helpers";

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
	const [data, setData] = useState({
		brand: "",
		year: "",
		plan: "",
	});
	const [error, setError] = useState("");
	const [result, setResult] = useState(0);
	const [loading, setLoading] = useState(false);

	const changeDataHandler = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		});
	};

	const quoterSure = () => {
		let result = 2000;

		const differenceYear = getYearDifference(data.year);

		result -= (differenceYear * 3 * result) / 100;

		result *= calculateBrand(data.brand);

		result *= calculatePlan(data.plan);

		result = formatMoney(result);
		setLoading(true);
		setTimeout(() => {
			setResult(result);
			setLoading(false);
		}, 3000);
	};

	return (
		<QuoterContext.Provider
			value={{
				changeDataHandler,
				data,
				error,
				setError,
				quoterSure,
				result,
				loading,
			}}
		>
			{children}
		</QuoterContext.Provider>
	);
};

export { QuoterProvider };
export default QuoterContext;
