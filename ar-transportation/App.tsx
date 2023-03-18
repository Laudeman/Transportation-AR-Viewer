import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "@google/model-viewer";
import ModelViewerElementBase from "@google/model-viewer/lib/model-viewer-base";

declare global {
	namespace JSX {
		interface IntrinsicElements {
			"model-viewer": React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement>,
				ModelViewerElementBase
			>;
		}
	}
}

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
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
