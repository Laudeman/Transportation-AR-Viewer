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
					width: "1000px",
					height: "1000px",
				}}
				width="800px"
				height="100%"
				auto-rotate
				camera-controls
				ar
				poster="./truck.jpg"
			></model-viewer>
		</div>
	);
}

export default App;
