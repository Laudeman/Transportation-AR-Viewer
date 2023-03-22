import "./App.css";
import "@google/model-viewer";
import { Box, Card, Container } from "@mui/material";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": MyElementAttributes;
		}
		interface MyElementAttributes {
			src: string;
			id: any;
			alt: string;
			ar: boolean;
			poster: string;
		}
	}
}

function App() {
	return (
		<Box>
			<h1>Transportation</h1>
			<Card raised>
				<h2>Old Truck</h2>
				<model-viewer
					id="mv-demo"
					shadow-intensity="1"
					src="truck.glb"
					alt="An old truck"
					ar
					auto-rotate
					camera-controls
					poster="./truck.jpg"
				></model-viewer>
			</Card>
		</Box>
	);
}

export default App;
