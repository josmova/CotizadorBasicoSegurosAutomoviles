import { Fragment } from "react";
import { BRANDS, PLANS, YEARS } from "../constants/index";
import useQuoter from "../hooks/useQuoter";
import Error from "./Error";

const Form = () => {
	const { data, changeDataHandler, error, setError, quoterSure } =
		useQuoter();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (Object.values(data).includes("")) {
			setError("Todos los campos son obligatorios");
			return;
		}
		setError("");
		quoterSure();
	};

	return (
		<>
			{error && <Error />}
			<form onSubmit={handleSubmit}>
				<div className="my-5 mb-3 font-bold text-gray-400 uppercase">
					<label
						htmlFor=""
						className="block"
					>
						Marca
					</label>
					<select
						name="brand"
						onChange={(event) => changeDataHandler(event)}
						value={data.brand}
						className="w-full p-3  border border-gray-200 bg-white"
					>
						<option value="">---Selecciona Marca--</option>
						{BRANDS.map((brand) => (
							<option
								key={brand.id}
								value={brand.id}
							>
								{brand.name}
							</option>
						))}
					</select>
				</div>
				<div className="my-5 mb-3 font-bold text-gray-400 uppercase">
					<label className="block">Año</label>
					<select
						name="year"
						value={data.year}
						onChange={(event) => changeDataHandler(event)}
						className="w-full p-3  border border-gray-200 bg-white"
					>
						<option value="">---Selecciona Año--</option>
						{YEARS.map((year) => (
							<option
								key={year}
								value={year}
							>
								{year}
							</option>
						))}
					</select>
				</div>
				<div className="my-5 mb-3 font-bold text-gray-400 uppercase">
					<label
						htmlFor=""
						className="block"
					>
						Elige un Plan
					</label>

					<div className="flex gap-3 items-center mt-1">
						{PLANS.map((plan) => (
							<Fragment key={plan.id}>
								<label>{plan.name}</label>
								<input
									type="radio"
									name="plan"
									value={plan.id}
									onChange={(event) => changeDataHandler(event)}
								/>
							</Fragment>
						))}
					</div>
				</div>
				<input
					type="submit"
					value="Cotizar"
					className="w-full p-3 font-bold text-white uppercase bg-cyan-500 hover:bg-cyan-400 cursor-pointer transition-colors"
				/>
			</form>
		</>
	);
};

export default Form;
