import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/AuthContext';
import { Snackbar } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)'
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px'
          }
        }
      }
    }
  }
});

export default function Authentication() {
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {
                let result = await handleLogin(username, password)
            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {
            console.log(err);
            let message = (err.response.data.message);
            setError(message);
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', overflow: 'auto' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <Box
                        sx={{
                            my: 4,
                            mx: isMobile ? 2 : 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ 
                            m: 1, 
                            bgcolor: 'secondary.main',
                            width: 56,
                            height: 56
                        }}>
                            <LockOutlinedIcon fontSize="medium" />
                        </Avatar>

                        <Typography component="h1" variant="h5" sx={{ 
                            mb: 3,
                            fontWeight: 700,
                            color: 'text.primary'
                        }}>
                            {formState === 0 ? 'Sign in to your account' : 'Create new account'}
                        </Typography>

                        <Box sx={{ 
                            display: 'flex',
                            width: '100%',
                            mb: 3,
                            border: '1px solid',
                            borderColor: 'divider',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            <Button 
                                fullWidth
                                variant={formState === 0 ? "contained" : "text"} 
                                onClick={() => { setFormState(0) }}
                                sx={{
                                    py: 1.5,
                                    borderRadius: 0,
                                    fontWeight: formState === 0 ? 600 : 500
                                }}
                            >
                                Sign In
                            </Button>
                            <Button 
                                fullWidth
                                variant={formState === 1 ? "contained" : "text"} 
                                onClick={() => { setFormState(1) }}
                                sx={{
                                    py: 1.5,
                                    borderRadius: 0,
                                    fontWeight: formState === 1 ? 600 : 500
                                }}
                            >
                                Sign Up
                            </Button>
                        </Box>

                        <Box component="form" noValidate sx={{ 
                            mt: 1,
                            width: '100%'
                        }}>
                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Full Name"
                                    name="name"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    sx={{ mb: 2 }}
                                />
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus={formState === 0}
                                onChange={(e) => setUsername(e.target.value)}
                                sx={{ mb: 2 }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                sx={{ mb: 2 }}
                            />

                            {error && (
                                <Typography color="error" variant="body2" sx={{ 
                                    mt: 1,
                                    textAlign: 'center',
                                    fontWeight: 500
                                }}>
                                    {error}
                                </Typography>
                            )}

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ 
                                    mt: 3, 
                                    mb: 2,
                                    py: 1.5,
                                    fontSize: '1rem'
                                }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Sign In" : "Sign Up"}
                            </Button>

                            {formState === 0 && (
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2" sx={{ textDecoration: 'none' }}>
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    {/* <Grid item>
                                        <Link 
                                            href="#" 
                                            variant="body2" 
                                            sx={{ textDecoration: 'none' }}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setFormState(1);
                                            }}
                                        >
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid> */}
                                </Grid>
                            )}
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar
                open={open}
                autoHideDuration={4000}
                message={message}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                sx={{
                    '& .MuiSnackbarContent-root': {
                        borderRadius: '8px'
                    }
                }}
            />
        </ThemeProvider>
    );
}