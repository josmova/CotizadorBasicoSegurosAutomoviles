import useQuoter from "../hooks/useQuoter";

const Error = () => {
	const { error } = useQuoter();

	return (
		<div>
			<p className="py-3 text-center text-red-700 border border-red-400 bg-red-100">
				{error}
			</p>
		</div>
	);
};

export default Error;
