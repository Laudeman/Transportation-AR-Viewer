import "./App.css";
import "@google/model-viewer";
import { Box, Button, Divider, Paper, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import models from "./models.json";

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
          <Paper
            variant="outlined"
            sx={{
              position: "relative",
              width: "75vw",
              height: "50vh",
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
                Wheel Cart - 3500 B.C.E
              </h2>
              <model-viewer
                id="mv-demo"
                shadow-intensity="1"
                src={models[0].path}
                alt="Wheel Cart"
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
            }}
          >
            <Stack
              justifyContent="space-evenly"
              direction="row"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <Button>
                <img src="logo192.png" />
              </Button>
              <Button>
                <img src="logo192.png" />
              </Button>
              <Button>
                <img src="logo192.png" />
              </Button>
            </Stack>
          </Paper>
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
