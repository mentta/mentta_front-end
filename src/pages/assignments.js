import React from 'react';
import { Grid, Card, CardActions,Typography, CardContent, Button, CssBaseline } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { teacherFeed } from "../data/assignments"


const useStyles = makeStyles(theme => ({
    title:{
        fontWeight:14
    },
    classTitle:{
        marginTop:'1.3rem',
        marginBottom:'1rem'
    },
    classTitle_btn:{
        marginLeft:'0.5rem'
    }
}));


const Assignment = props => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={3}>
            {
                teacherFeed.map((item) => (
                    <Grid container direction="column">
                        <Grid item xs={12} className={classes.classTitle} container direction="row">
                            <Grid>
                                <Typography variant="h6">{item.class} - {item.subject}</Typography>
                            </Grid>

                            <Grid>
                                <Button className={classes.classTitle_btn} color="primary" variant="contained">Create Assignment</Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}  container direction="row" spacing={3}>
                        {
                            item.assignmentList.map(assignment => (
                                <Grid item key={assignment.title} xs={12} md={4} lg={3}  >
                                    <Card>
                                        <CardContent>
                                            <Typography className={classes.title} color="textSecondary" gutterBottom>{assignment.chapter}</Typography>
                                            <Typography  variant="h6" component="h6">{assignment.title}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" variant="outlined">View submissions({assignment.submissions})</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>    
                            ))
                        }
                        </Grid>
                    </Grid>
                    
                ))
            }
        </Grid>
            
    );
}
export default Assignment;