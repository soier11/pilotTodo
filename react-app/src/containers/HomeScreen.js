import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

import styles from "../assets/styles/js/homeStyle";
import HomeComponent from '../components/HomeComponent';

const mapState = state => ({

});

const mapDispatch = dispatch => ({

});

const HomeScreen = connect(mapState, mapDispatch)(
  withStyles(styles, { withTheme: true })(HomeComponent)
)


export default HomeScreen;