import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/avatar'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
        cursor:'pointer',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    img: {
        float: 'right',
        width: 145,
        height: 145,

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Tenants = () => {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} >
                        <Card className={classes.root}>
                            <CardContent>
                                <Avatar className={classes.img} alt="Sorry !" src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kubota.com%2Fproducts%2Ftractor%2Findex.html&psig=AOvVaw0vz9gUkZN5_vZl8P3WtULk&ust=1648583077578000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIDusuXI6fYCFQAAAAAdAAAAABAD' />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    CrypWorld
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Coin Name
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Current Price: $
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Total Volume: 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default Tenants