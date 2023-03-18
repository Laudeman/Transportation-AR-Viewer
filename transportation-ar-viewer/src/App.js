import logo from "./logo.svg";
import "./App.css";
import "@google/model-viewer";

function App() {
	return (
		<div className="App">
			<model-viewer
				id="mv-demo"
				shadow-intensity="1"
				src="truck.glb"
				alt="A 3D model of an astronaut"
				style={{
					width: "100%",
					height: "100vh",
				}}
				auto-rotate
				ar
				camera-controls
				poster="./truck.jpg"
			></model-viewer>
		</div>
	);
}

export default App;
