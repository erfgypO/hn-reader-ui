import Button from "@suid/material/Button";
import {AppBar, Container, createTheme, ThemeProvider, Toolbar, Typography} from "@suid/material";
import {CssBaseline} from "@suid/material";
import {blue, purple} from "@suid/material/colors";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: blue[500],
        },
        secondary: {
            main: purple[500],
        }
    },
});

export default function App(props) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <AppBar position="fixed" color="primary" enableColorOnDark sx={{ height: "64px" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        HN Reader
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={"margin-top: 64px; padding-top: 8px"}>
                <Container>
                    {props.children}
                </Container>
            </div>
        </ThemeProvider>
    )
}
