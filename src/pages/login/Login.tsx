import React from "react";
import { Container, CssBaseline, makeStyles, Avatar, Typography, TextField, colors, Grid, Button } from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";


export default function Login() {

    const styles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItens: "center",
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: colors.orange[600],
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        iconArea: {
            marginLeft: theme.spacing(21)
        }

    }));

    const classes = styles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.iconArea}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h2" variant="h5">
                    Login
                </Typography>
                </div>

                <form className={classes.form}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                </form>
            </div>
            <Button type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}>Login</Button>

            <Grid container>
                <Grid item>
                    <Link to="/">Create Account</Link>
                </Grid>
            </Grid>

        </Container>
    )
}
