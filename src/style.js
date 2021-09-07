import { CardContent, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//down below we are creating a hook called usestyles....that is equal to a function call makestyle .... inside of that function call..we pass in a call back functio which simply ...imediately returns a object ...which containes all the styles...
const useStyles = makeStyles((theme) => ({
    container: {
        backgroundColor: theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    icons: {
        marginRight: '20px',
    },
    buttons: {
        marginTop:'40px',
    },
    cardGrid:{
       padding:'20px 0',
    },
    card:{
        height: '100%',
        display: 'flex',
        flexDirection:'column',
    },
    cardMedia: {
        paddingTop:'56.25%',//16:9

    },
    cardContent: {
        flexGrow:1,

    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding:'50px 0',
    },

}));
export default useStyles;