import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/avatar'
import { spacing } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 375,
        minHeight: 300,
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
    cont: {
        marginTop: 50,
    },
    img: {
        float: 'right',
        width: 175,
        height: 175,

    },
    itm: {
        display: 'flex',
        flexDirection:"row",
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
            <Container className={classes.cont}>
                <Grid container spacing={3} className = {classes.itm}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Avatar className={classes.img} alt="Sorry !" src='https://res.cloudinary.com/dsfzcj5qk/image/upload/v1615410918/tractor/Modeern-tractor.jpg' />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    EqConnect
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Tractor
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Rent Range : ₹ 600-1200
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Category : Machine 
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Product Description :
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt nihil in suscipit. Quo consequuntur culpa eligendi fugit atque similique mollitia ipsa velit! Voluptatem, ullam vero quasi iste sequi nulla.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Avatar className={classes.img} alt="Sorry !" src='https://3.imimg.com/data3/KP/CY/MY-8032692/harvester-250x250.jpg' />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                EqConnect
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    Harvester
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Rent Range : ₹ 600-1200
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Category : Machine 
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Product Description :
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt nihil in suscipit. Quo consequuntur culpa eligendi fugit atque similique mollitia ipsa velit! Voluptatem, ullam vero quasi iste sequi nulla.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4}>
                        <Card className={classes.root}>
                            <CardContent>
                                <Avatar className={classes.img} alt="Sorry !" src='https://4.imimg.com/data4/YB/RF/MY-15110964/1-500x500.jpg' />
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    EqConnect
                                </Typography>
                                <Typography variant="h5" component="h2">
                                Seed Sower
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Rent Range : ₹ 600-1200
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Category : Machine 
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Product Description :
                                </Typography>
                                <Typography className={classes.pos} color="textSecondary">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nesciunt nihil in suscipit. Quo consequuntur culpa eligendi fugit atque similique mollitia ipsa velit! Voluptatem, ullam vero quasi iste sequi nulla.
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