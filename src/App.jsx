import { QuoterProvider } from "./context/QuoterProvider";
import AppSure from "./components/AppSure";

function App() {
	return (
		<QuoterProvider>
			<AppSure />;
		</QuoterProvider>
	);
}

export default App;
