import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '150%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 420,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    btn: 
    {
        width: '75',
        margin: theme.spacing(3, 0, 2),
    }
}));


const Renter = () => {
    const classes = useStyles();
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <AccessibilityNewIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Welcome user, Please register your Equipment for rent
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="Product Name"
                            label="Product Name"
                            name="Product Name"
                            autoComplete="Product Name"
                            autoFocus
                        />

                        <TextField
                            multiline={true}
                            rows={4}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="Product Description"
                            label="Product Description"
                            type="Product Description"
                            id="Product Description"
                            autoComplete="current-password"
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Select Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value='age'
                                label="Age"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Machinery</MenuItem>
                                <MenuItem value={20}>Workers</MenuItem>
                                <MenuItem value={30}>Manual Machines</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                        className={classes.btn}
                            variant="contained"
                            component="label"
                        >
                            Product Image
                            <input
                                type="file"
                                hidden
                            />
                        </Button>

                        <TextField type="number" id="outlined-basic" label="Expected Rent in INR" variant="outlined" />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Register My Equipment
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default Renter