import "./App.css";
import "@google/model-viewer";
import { Box, Paper, Slider, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import models from "./models.json";
import { useState } from "react";

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
const marks = [
	{
		value: 5,
		label: "3500 B.C.E",
	},
	{
		value: 50,
		label: "1804",
	},
	{
		value: 60,
		label: "1807",
	},
	{
		value: 75,
		label: "1886",
	},
	{
		value: 95,
		label: "1903",
	},
];

function getModelPath(value: number) {
	if (value === 5) {
		return models.models[0].path;
	} else if (value === 50) {
		return models.models[1].path;
	} else if (value === 60) {
		return models.models[2].path;
	} else if (value === 75) {
		return models.models[3].path;
	} else if (value === 95) {
		return models.models[4].path;
	}
}

function App() {
	const [value, setValue] = useState<number>(5);

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number);
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline>
				<Box width="100vw" height="100vh" bgcolor={"#2D3748"}>
					<Stack
						direction="column"
						sx={{ justifyContent: "center", alignItems: "center" }}
					>
						<h1>Transportation Over Time</h1>
						<Paper
							variant="outlined"
							sx={{
								background: "#1a202c",
								position: "relative",
								width: "75vw",
								height: "75vh",
								"@media (max-width: 600px)": {
									width: "90vw",
									height: "50vh",
								},
							}}
						>
							<Box>
								<h2
									style={{
										position: "absolute",
										paddingLeft: 10,
										bottom: 0,
										left: 0,
									}}
								>
									{
										marks.find(
											(mark) => mark.value === value
										)?.label
									}{" "}
									-{" "}
									{
										models.models.find(
											(model) =>
												model.path ===
												getModelPath(value)
										)?.name
									}
								</h2>
								<model-viewer
									id="mv-demo"
									shadow-intensity="1"
									src={getModelPath(value)}
									alt={models.models[0].name}
									ar
									auto-rotate
									camera-controls
									poster="./wheel_cart.jpg"
								></model-viewer>
							</Box>
						</Paper>
						<Paper
							variant="outlined"
							sx={{
								position: "relative",
								width: "75vw",
								bgcolor: "#1a202c",
								"@media (max-width: 600px)": {
									width: "90vw",
								},
							}}
						>
							<Slider
								aria-label="Restricted values"
								step={null}
								valueLabelDisplay="off"
								value={value} // Add this line to set the value of the slider
								onChange={handleSliderChange} // Add this line to
								marks={marks}
								track={false}
							/>
						</Paper>
					</Stack>
				</Box>
			</CssBaseline>
		</ThemeProvider>
	);
}

export default App;
