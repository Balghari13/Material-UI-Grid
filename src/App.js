import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Button,
  Toolbar,
  Container,
} from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9]

function App() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
           {/* inline css  style={{marginTop:'100px'}}*/}
        <div className={classes.container}>
        <Container maxWidth="sm"  > 
          <Typography
            varient="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Photo Album
          </Typography>
          <Typography
            varient="h5"
            align="center"
            color="textSecondary"
            paragraph
          >
            Hello everyone. This is a phot album and i am creating to make this
            sentence as long as possible.
          </Typography>
          <div className={classes.button}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  See my Photo
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary Action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
       </div>
       <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
             {cards.map((card)=>(
                <Grid item key={card} xs={12} sm={6} md={4} >
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} 
                  image="https://source.unsplash.com/random"
                  title='Image title'
                  >
                  </CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography varient='h5' gutterBottom>
                        Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use the section to describe contents
                    </Typography>
                    <CardActions>
                      <Button size='small' color='primary'>View</Button>
                      <Button size="small" color='primary'>Edit</Button>
                    </CardActions>
                  </CardContent>
                </Card>
            </Grid>
           
             )
                
             )}
           

          </Grid>
       </Container>
      </main>
      <footer className={classes.footer}>
            <Typography varient="h6" align='center' gutterBottom>
              Footer
            </Typography>
            <Typography varient="subtitle1" align='center' color='text'>
              Some nice footer
            </Typography>
      </footer>
    </>
  );
}

export default App;
