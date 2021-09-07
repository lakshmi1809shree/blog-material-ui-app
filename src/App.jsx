
import React from 'react';
import { Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import useStyles from './style';


const cards=[1,2,3,4,5,6,7,8,9]

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icons}/>
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            photo alBUm
                        </Typography>
                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis amet fuga aspernatur porro culpa aliquam molestias soluta vitae, quod, quam temporibus laboriosam minima! Deleniti, odio. Unde, a? Quis, corporis blanditiis!
                        </Typography>
                        <div className={classes.buttons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        see my photo

                                    </Button>

                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        secondary action

                                    </Button>

                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(() => (
                             <Grid item key={cards}xs={12}sm={6}md={4}>
                             <Card className={classes.card}>
                                 <CardMedia
                                     className={classes.cardMedia}
                                     image="https://source.unsplash.com/random"
                                     title="Image Title"
                                 />
                                 <CardContent className={classes.cardContent}>
                                     <Typography gutterBottom variant="h5">
                                         Heading
                                     </Typography>
                                     <Typography>
                                         THis ia amedia card you can use it as template
                                     </Typography>
                                 </CardContent>
                                 <CardActions>
                                     <Button size="small" color="primary">
                                        View
                                     </Button>
                                     <Button size="small" color="primary">
                                       Edit
                                     </Button>
                                 </CardActions>
                             </Card>
                         </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            <footer className={classes.footer}>
                  <Typography variant="h6" align="center" gutterBottom>
                                       footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis in quas harum vel tenetur, sequi ullam, neque fugit error iure sed, dolores commodi id amet  
                 </Typography>


            </footer>

       </>     
    );
}

export default App;