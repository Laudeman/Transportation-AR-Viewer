import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "@google/model-viewer";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": MyElementAttributes;
		}
		interface MyElementAttributes {
			src: string;
			id: any;
			style: any;
			alt: string;
			ar: boolean;
			poster: string;
		}
	}
}

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
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
				poster="./truck.jpg"
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
