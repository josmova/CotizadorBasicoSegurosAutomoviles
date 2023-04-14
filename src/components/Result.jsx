import { useCallback, useRef } from "react";
import { BRANDS, PLANS } from "../constants";
import useQuoter from "../hooks/useQuoter";

const Result = () => {
	const { result, data } = useQuoter();
	const { brand, plan, year } = data;
	const yearRef = useRef(year);


	const [nameBrand] = useCallback(
		BRANDS.filter((brandd) => brandd.id === Number(brand)),
		[result]
	);

	const [namePlan] = useCallback(
		PLANS.filter((plann) => plann.id === Number(plan)),
		[result]
	);

	if (result === 0) return null;

	return (
		<div className="mt-5 p-5 text-center shadow bg-gray-100">
			<h2 className="text-3xl text-gray-600 font-bold ">Resumen</h2>
			<p className="my-2">
				<span className="font-bold">Marca: </span>
				{nameBrand.name}
			</p>
			<p className="my-2">
				<span className="font-bold">Plan: </span>
				{namePlan.name}
			</p>
			<p className="my-2">
				<span className="font-bold">Año del Auto: </span>
				{yearRef.current}
			</p>
			<p className="my-2 text-2xl">
				<span className="font-bold">Total Cotización: </span>
				{result}
			</p>
		</div>
	);
};

export default Result;
