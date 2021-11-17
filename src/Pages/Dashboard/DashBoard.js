import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../Hooks/useAuth'
import { Button } from '@mui/material';
import MyOrders from './MyOrders/MyOrders';
import Pay from './Pay/Pay';
import Review from './Review/Review';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AddAProduct from './AddAProduct/AddAProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import ManageProducts from './ManageProducts/ManageProducts';


const drawerWidth = 200;

function ResponsiveDrawer(props) {
  const {user,logout,admin,}=useAuth()
  let { path, url } = useRouteMatch();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
     <List>
      <Link to="/Home"><Button style={{display:'block', marginLeft:"35px"}}color="inherit">Home</Button></Link>
      <Link to={`${url}`}><Button style={{display:'block', marginLeft:"35px"}} color="inherit">My Orders</Button></Link>
      <Link to={`${url}/pay`}><Button style={{display:'block', marginLeft:"35px"}}color="inherit">Pay</Button></Link>
      {/* <Link to={`${url}/review`}><Button style={{display:'block', marginLeft:"35px"}} color="inherit">Review</Button></Link> */}
       {
         admin && <Box>
           <Link to={`${url}/review`}><Button style={{display:'block', marginLeft:"35px"}} color="inherit">Review</Button></Link>     
           <Link to={`${url}/mangeallusers`}><Button color="inherit">Manage All Users</Button></Link>
         <Link to={`${url}/addaproduct`}><Button color="inherit">Add Product</Button></Link>
         <Link to={`${url}/manageproducts`}><Button color="inherit">Manage Products</Button></Link>
         <Link to={`${url}/makeadmin`}><Button color="inherit">Make Admin</Button></Link></Box>
       }
       </List>     
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{height:'80px'}}noWrap component="div">
            Dashboard
            
          </Typography>
         {user?.email &&  <Button style={{backgroundColor:"purple",marginLeft:"35px"}} onClick={logout} variant="contained">Logout</Button>}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', marginLeft:"35px", sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block', marginLeft:"35px" },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
                    <Route exact path={path}>
                      <MyOrders></MyOrders>
                        
                    </Route>
                   <Route path={`${path}/pay`}>
                     <Pay></Pay>
                   </Route>
                   <AdminRoute path={`${path}/review`}>
                     <Review></Review>
                   </AdminRoute>
                  
                   <AdminRoute path={`${path}/mangeallusers`}>
                     <ManageAllOrders></ManageAllOrders>
                   </AdminRoute>
                   <AdminRoute path={`${path}/addaproduct`}>
                    <AddAProduct></AddAProduct>
                   </AdminRoute>
                   <AdminRoute path={`${path}/manageproducts`}>
                    <ManageProducts></ManageProducts>
                   </AdminRoute>
                   <AdminRoute path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                   </AdminRoute>

                    {/* <AdminRoute path={`${path}/addDoctor`}>
                        <AddDoctor></AddDoctor>
                    </AdminRoute> */}
                </Switch>
    
     
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
