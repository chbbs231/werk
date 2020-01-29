import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import MyProfileCard from '../../components/MyProfileCard'
import CustomCard from '../../components/CustomCard'
import RecentWO from '../../components/RecentWO'




function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 224,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  
const Profile = () => {
const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
return(
    <div className={classes.root}>
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      className={classes.tabs}
    >
      <Tab label="My Profile" {...a11yProps(0)} />
      <Tab label="Custom Workout" {...a11yProps(1)} />
      <Tab label="Recent Workout" {...a11yProps(2)} />
      <Tab label="Item Four" {...a11yProps(3)} />
    </Tabs>
    <TabPanel value={value} index={0}>
      <MyProfileCard/>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <Container>
      <CustomCard/>
      </Container>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <RecentWO/>
    </TabPanel>
    <TabPanel value={value} index={3}>
      Item Four
    </TabPanel>
  </div>
    );
}




export default Profile