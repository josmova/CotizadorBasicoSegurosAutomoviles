import useQuoter from "../hooks/useQuoter";
import Form from "./Form";
import Result from "./Result";
import Spinner from "./Spinner";

const AppSeguro = () => {
	const { loading } = useQuoter();

	return (
		<>
			<header className="my-10">
				<h1 className="font-black  text-center text-4xl text-white ">
					Cotizado de Seguros de Auto
				</h1>
			</header>
			<main className="md:w-2/3 lg:w-2/4 mx-auto p-10 rounded-lg  shadow bg-white">
				<Form />
				{loading ? <Spinner /> : <Result />}
			</main>
		</>
	);
};

export default AppSeguro;
