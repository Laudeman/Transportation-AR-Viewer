import "./App.css";
import "@google/model-viewer";
import { Box, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

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

const darkTheme = createTheme({ palette: { mode: "dark" } });

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline>
				<Box>
					<h1>Transportation</h1>
					<Paper variant="outlined">
						<Box position="relative" width="75vw" height="50vh">
							<h2
								style={{
									position: "absolute",
									paddingLeft: 10,
									bottom: 0,
									left: 0,
								}}
							>
								Old Truck
							</h2>
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
						</Box>
					</Paper>
				</Box>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
