import "./App.css";
import "@google/model-viewer";

function App() {
	return (
		<div
			className="App"
			style={{ display: "block", "text-align": "center" }}
		>
			<h1 height="5vh">Transportation</h1>
			<div>
				<h2>Old Truck</h2>
				<model-viewer
					id="mv-demo"
					shadow-intensity="1"
					src="truck.glb"
					alt="An old truck"
					style={{
						display: "block",
						left: "33%",
					}}
					ar
					auto-rotate
					camera-controls
					poster="./truck.jpg"
				></model-viewer>
			</div>
			<div>
				<h2>Steam Boat</h2>
				<model-viewer
					id="mv-demo"
					shadow-intensity="1"
					src="truck.glb"
					alt="An old truck"
					style={{
						display: "block",
						left: "33%",
					}}
					ar
					auto-rotate
					camera-controls
					poster="./truck.jpg"
				></model-viewer>
			</div>
		</div>
	);
}

export default App;
