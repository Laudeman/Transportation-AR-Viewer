import { StyleSheet, Text, View } from "react-native";
import "@google/model-viewer";

export default function App() {
	//const [assets, error] = useAssets([require('assets/')])
	return (
		<View style={styles.container}>
			<model-viewer
				id="mv-demo"
				shadow-intensity="1"
				src={require("./assets/truck.glb")}
				alt="A 3D model of an astronaut"
				style={{
					width: "100%",
					height: "100vh",
				}}
				auto-rotate
				ar
				camera-controls
			></model-viewer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
