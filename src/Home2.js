import React, { useState } from 'react';
import ChartistGraph from 'react-chartist';
import SvgIcon from '@material-ui/core/SvgIcon';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Productos from './Components/Productos';
import Tipo_operario from './Components/Tipo_operario';
import Tipo_unidades from './Components/Tipo_unidades'
import ListSubheader from '@material-ui/core/ListSubheader';
import Collapse from '@material-ui/core/Collapse';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Materia_prima from './Components/Materia_prima';
import Colores from './Components/Colores';
import Materiales_colores from './Components/Materiales_colores'
import Producto_crear from './Components/Productos/Producto_crear'
import Cotizacion from './Components/Cotizacion'
import CotizacionListado from './Components/CotizacionListado';
import Operarios from './Components/Operarios'
import Proveedor from './Components/Proveedor'
import Compras from './Components/Compras'
import Inventario from './Components/Inventario'
import Procesos from './Components/Procesos';
import Maquina from './Maquina';
import Pedido from './Components/Pedido';
import Produccion from  './Components/Produccion';
import Ingreso_diario from  './Components/Ingreso_diario';
import Gastomateriales from './Components/Gastomateriales';
import { ReactComponent as Iconot } from './Components/iconot.svg';
import "./assets/css/material-dashboard-react.css?v=1.9.0";
import Ingreso_desperfectos from './Components/Ingreso_desperfectos';
import Gantt from './Components/Gantt';
import WidgetsIcon from '@material-ui/icons/Widgets';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AddBoxIcon from '@material-ui/icons/AddBox';
import GetAppIcon from '@material-ui/icons/GetApp';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import BuildIcon from '@material-ui/icons/Build';











import Dashboard from './Components/Dashboard';
import Despachado from './Components/Despachado';
import Salida_segunda from './Components/Salida_segunda';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const simpleLineChartData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [
      [12, 9, 7, 8, 5],
      [2, 1, 3.5, 7, 3],
      [1, 3, 4, 5, 6]
    ]
}


  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [openP, setOpenP] = React.useState(false);
  const [openP2, setOpenP2] = React.useState(false);
  const [openP3, setOpenP3] = React.useState(false);
  const [openP4, setOpenP4] = React.useState(false);
  const [openP5, setOpenP5] = React.useState(false);
  const [openP6, setOpenP6] = React.useState(false);
  const [openP7, setOpenP7] = React.useState(false);
  //const [otherState,setOtherState]=useState('some other value');
  const [lateral, setLateral] = useState([]);

  //   //persons: {name:''}

  //   )};

  const handleClick = () => {
    setOpenP(!openP);
    console.log(openP);
  };
  const handleClick2 = () => {
    setOpenP2(!openP2);
    console.log(openP2);
  };
  const handleClick3 = () => {
    setOpenP3(!openP3);
    console.log(openP3);
  };
  const handleClick4 = () => {
    setOpenP4(!openP4);
    console.log(openP4);
  };

  const handleClick5 = () => {
    
    setOpenP5(!openP5);
    console.log(openP5);
  };

  const handleClick6 = () => {
    setOpenP6(!openP6);
    console.log(openP6);
  };


  const handleClick7 = () => {
    setOpenP7(!openP7);
    console.log(openP7);
  };

  function handleDrawerOpen() {


    setOpen(true);


  }

  function handleDrawerClose() {
    setOpen(false);
  }

  const menu = (text, index) => {

    setLateral(text);


  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap onClick={() => menu("Dashboard", 1)}>
            Dashroute
          </Typography>
        
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
       
        <List>

        <ListItem button onClick={handleClick4}>
                <ListItemIcon>
               

                  <SvgIcon >
                  {/* <path class="cls-2" d="M13.47,21.77h7.34A2.19,2.19,0,0,0,23,19.58V14.43C20.52,18.8,16.93,19.7,13.47,21.77Z"/><rect class="cls-3" x="9.5" y="2.36" width="13.5" height="19.64" rx="2.46"/><path d="M20.54,22.5H12a3,3,0,0,1-3-3V4.82a3,3,0,0,1,3-3h8.58a3,3,0,0,1,3,3V19.54A3,3,0,0,1,20.54,22.5ZM12,2.86a2,2,0,0,0-2,2V19.54a2,2,0,0,0,2,2h8.58a2,2,0,0,0,2-2V4.82a2,2,0,0,0-2-2Z"/><rect class="cls-4" x="11.83" y="6.55" width="8.84" height="4.42" rx="0.65"/><path class="cls-1" d="M6.21,9.4,3.67,12.5,1.13,9.4a.57.57,0,0,1,.44-.94h.69V2.33H5.08V8.46h.68A.58.58,0,0,1,6.21,9.4Z"/><polygon class="cls-5" points="5.82 9.08 3.67 11.71 1.52 9.08 1.57 8.96 2.76 8.96 2.76 1.83 4.58 1.83 4.58 8.96 5.76 8.96 5.82 9.08"/><line class="cls-1" x1="2.26" y1="1.33" x2="2.26" y2="0.33"/><path class="cls-6" d="M5.66,13.33.9,21.1a1.58,1.58,0,0,0,1.35,2.4H16.42a1.58,1.58,0,0,0,1.35-2.4L13,13.33A4.31,4.31,0,0,0,5.66,13.33Z"/><path class="cls-7" d="M17.36,22.45a1,1,0,0,0,0-1.09l-1.24-2c-2.92,2.08-12.85,3.49-14,3.65l.13,0H16.42A1.06,1.06,0,0,0,17.36,22.45Z"/> */}
                  {/* <rect class="cls-1" width="22" height="3.43"/><rect class="cls-1" y="6.86" width="24" height="3.43"/><rect class="cls-1" y="13.71" width="21" height="3.43"/><rect class="cls-1" y="20.57" width="17" height="3.43"/> */}
                  <path class="cls-1" d="M11,19.8l-1.14-.92a4,4,0,0,0,0-1.2l1.07-1-.51-1.12-1.45.15a4.27,4.27,0,0,0-.88-.82l.06-1.46L7,13,6,14.14a4,4,0,0,0-1.19,0l-1-1.07-1.12.51.15,1.45a4.27,4.27,0,0,0-.82.88L.6,15.88.16,17,1.3,18a4.33,4.33,0,0,0,0,1.19l-1.08,1,.51,1.12,1.46-.15a4.22,4.22,0,0,0,.87.82L3,23.4l1.16.44.92-1.14a4.39,4.39,0,0,0,1.2,0l1,1.08,1.12-.51-.15-1.46a4.22,4.22,0,0,0,.82-.87l1.46.06Zm-7.67-.36A2.47,2.47,0,1,1,6.6,20.67,2.47,2.47,0,0,1,3.33,19.44Z"/><path class="cls-2" d="M23.8,10.4,24,9.18l-1.7-.82A6.38,6.38,0,0,0,22.05,7l1.39-1.34-.53-1.11-1.86.23c-.13-.17-.25-.34-.39-.51s-.34-.37-.52-.54l.44-1.88-1-.65L18.08,2.4A6.8,6.8,0,0,0,16.75,2L16.11.19l-1.23,0L14.31,2A6.5,6.5,0,0,0,13,2.4L11.44,1.22l-1,.68.51,1.82a6.85,6.85,0,0,0-.91,1L8.08,4.6,7.59,5.73,9,7A7.06,7.06,0,0,0,8.8,8.36l-1.71.9.2,1.22,1.85.3A6.82,6.82,0,0,0,9.72,12l-1,1.68.82.92,1.73-.75a6.63,6.63,0,0,0,1.17.75l.1,1.92,1.19.33,1.05-1.57a7.17,7.17,0,0,0,1.39,0l1.13,1.56,1.18-.37,0-1.89a6.16,6.16,0,0,0,1.16-.74l1.8.7.8-.95-1-1.6a7.15,7.15,0,0,0,.57-1.26Zm-5.93,1a3.63,3.63,0,1,1,.42-5.11A3.63,3.63,0,0,1,17.87,11.39Z"/>
    </SvgIcon>
                  

                </ListItemIcon>
                <ListItemText primary="Producción" />
                {openP4 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <SvgIcon >
                  {/* <path class="cls-2" d="M13.47,21.77h7.34A2.19,2.19,0,0,0,23,19.58V14.43C20.52,18.8,16.93,19.7,13.47,21.77Z"/><rect class="cls-3" x="9.5" y="2.36" width="13.5" height="19.64" rx="2.46"/><path d="M20.54,22.5H12a3,3,0,0,1-3-3V4.82a3,3,0,0,1,3-3h8.58a3,3,0,0,1,3,3V19.54A3,3,0,0,1,20.54,22.5ZM12,2.86a2,2,0,0,0-2,2V19.54a2,2,0,0,0,2,2h8.58a2,2,0,0,0,2-2V4.82a2,2,0,0,0-2-2Z"/><rect class="cls-4" x="11.83" y="6.55" width="8.84" height="4.42" rx="0.65"/><path class="cls-1" d="M6.21,9.4,3.67,12.5,1.13,9.4a.57.57,0,0,1,.44-.94h.69V2.33H5.08V8.46h.68A.58.58,0,0,1,6.21,9.4Z"/><polygon class="cls-5" points="5.82 9.08 3.67 11.71 1.52 9.08 1.57 8.96 2.76 8.96 2.76 1.83 4.58 1.83 4.58 8.96 5.76 8.96 5.82 9.08"/><line class="cls-1" x1="2.26" y1="1.33" x2="2.26" y2="0.33"/><path class="cls-6" d="M5.66,13.33.9,21.1a1.58,1.58,0,0,0,1.35,2.4H16.42a1.58,1.58,0,0,0,1.35-2.4L13,13.33A4.31,4.31,0,0,0,5.66,13.33Z"/><path class="cls-7" d="M17.36,22.45a1,1,0,0,0,0-1.09l-1.24-2c-2.92,2.08-12.85,3.49-14,3.65l.13,0H16.42A1.06,1.06,0,0,0,17.36,22.45Z"/> */}
                  <rect class="cls-1" width="22" height="3.43"/><rect class="cls-1" y="6.86" width="24" height="3.43"/><rect class="cls-1" y="13.71" width="21" height="3.43"/><rect class="cls-1" y="20.57" width="17" height="3.43"/>
                  {/* <path class="cls-1" d="M11,19.8l-1.14-.92a4,4,0,0,0,0-1.2l1.07-1-.51-1.12-1.45.15a4.27,4.27,0,0,0-.88-.82l.06-1.46L7,13,6,14.14a4,4,0,0,0-1.19,0l-1-1.07-1.12.51.15,1.45a4.27,4.27,0,0,0-.82.88L.6,15.88.16,17,1.3,18a4.33,4.33,0,0,0,0,1.19l-1.08,1,.51,1.12,1.46-.15a4.22,4.22,0,0,0,.87.82L3,23.4l1.16.44.92-1.14a4.39,4.39,0,0,0,1.2,0l1,1.08,1.12-.51-.15-1.46a4.22,4.22,0,0,0,.82-.87l1.46.06Zm-7.67-.36A2.47,2.47,0,1,1,6.6,20.67,2.47,2.47,0,0,1,3.33,19.44Z"/><path class="cls-2" d="M23.8,10.4,24,9.18l-1.7-.82A6.38,6.38,0,0,0,22.05,7l1.39-1.34-.53-1.11-1.86.23c-.13-.17-.25-.34-.39-.51s-.34-.37-.52-.54l.44-1.88-1-.65L18.08,2.4A6.8,6.8,0,0,0,16.75,2L16.11.19l-1.23,0L14.31,2A6.5,6.5,0,0,0,13,2.4L11.44,1.22l-1,.68.51,1.82a6.85,6.85,0,0,0-.91,1L8.08,4.6,7.59,5.73,9,7A7.06,7.06,0,0,0,8.8,8.36l-1.71.9.2,1.22,1.85.3A6.82,6.82,0,0,0,9.72,12l-1,1.68.82.92,1.73-.75a6.63,6.63,0,0,0,1.17.75l.1,1.92,1.19.33,1.05-1.57a7.17,7.17,0,0,0,1.39,0l1.13,1.56,1.18-.37,0-1.89a6.16,6.16,0,0,0,1.16-.74l1.8.7.8-.95-1-1.6a7.15,7.15,0,0,0,.57-1.26Zm-5.93,1a3.63,3.63,0,1,1,.42-5.11A3.63,3.63,0,0,1,17.87,11.39Z"/> */}
    </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Estado de  pedidos" onClick={() => menu("Producción", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <SvgIcon >
                  {/* <path class="cls-2" d="M13.47,21.77h7.34A2.19,2.19,0,0,0,23,19.58V14.43C20.52,18.8,16.93,19.7,13.47,21.77Z"/><rect class="cls-3" x="9.5" y="2.36" width="13.5" height="19.64" rx="2.46"/><path d="M20.54,22.5H12a3,3,0,0,1-3-3V4.82a3,3,0,0,1,3-3h8.58a3,3,0,0,1,3,3V19.54A3,3,0,0,1,20.54,22.5ZM12,2.86a2,2,0,0,0-2,2V19.54a2,2,0,0,0,2,2h8.58a2,2,0,0,0,2-2V4.82a2,2,0,0,0-2-2Z"/><rect class="cls-4" x="11.83" y="6.55" width="8.84" height="4.42" rx="0.65"/><path class="cls-1" d="M6.21,9.4,3.67,12.5,1.13,9.4a.57.57,0,0,1,.44-.94h.69V2.33H5.08V8.46h.68A.58.58,0,0,1,6.21,9.4Z"/><polygon class="cls-5" points="5.82 9.08 3.67 11.71 1.52 9.08 1.57 8.96 2.76 8.96 2.76 1.83 4.58 1.83 4.58 8.96 5.76 8.96 5.82 9.08"/><line class="cls-1" x1="2.26" y1="1.33" x2="2.26" y2="0.33"/><path class="cls-6" d="M5.66,13.33.9,21.1a1.58,1.58,0,0,0,1.35,2.4H16.42a1.58,1.58,0,0,0,1.35-2.4L13,13.33A4.31,4.31,0,0,0,5.66,13.33Z"/><path class="cls-7" d="M17.36,22.45a1,1,0,0,0,0-1.09l-1.24-2c-2.92,2.08-12.85,3.49-14,3.65l.13,0H16.42A1.06,1.06,0,0,0,17.36,22.45Z"/> */}
                  <path class="cls-1" d="M0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2ZM14.67,19l-2.83,2.83L5.58,15.58l2.83-2.83,3.43,3.43,8-8L22.68,11l-8,8Z"/>
    </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Ingreso produccion diaria" onClick={() => menu("Ingreso diario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <SvgIcon >
                  {/* <path class="cls-2" d="M13.47,21.77h7.34A2.19,2.19,0,0,0,23,19.58V14.43C20.52,18.8,16.93,19.7,13.47,21.77Z"/><rect class="cls-3" x="9.5" y="2.36" width="13.5" height="19.64" rx="2.46"/><path d="M20.54,22.5H12a3,3,0,0,1-3-3V4.82a3,3,0,0,1,3-3h8.58a3,3,0,0,1,3,3V19.54A3,3,0,0,1,20.54,22.5ZM12,2.86a2,2,0,0,0-2,2V19.54a2,2,0,0,0,2,2h8.58a2,2,0,0,0,2-2V4.82a2,2,0,0,0-2-2Z"/><rect class="cls-4" x="11.83" y="6.55" width="8.84" height="4.42" rx="0.65"/><path class="cls-1" d="M6.21,9.4,3.67,12.5,1.13,9.4a.57.57,0,0,1,.44-.94h.69V2.33H5.08V8.46h.68A.58.58,0,0,1,6.21,9.4Z"/><polygon class="cls-5" points="5.82 9.08 3.67 11.71 1.52 9.08 1.57 8.96 2.76 8.96 2.76 1.83 4.58 1.83 4.58 8.96 5.76 8.96 5.82 9.08"/><line class="cls-1" x1="2.26" y1="1.33" x2="2.26" y2="0.33"/><path class="cls-6" d="M5.66,13.33.9,21.1a1.58,1.58,0,0,0,1.35,2.4H16.42a1.58,1.58,0,0,0,1.35-2.4L13,13.33A4.31,4.31,0,0,0,5.66,13.33Z"/><path class="cls-7" d="M17.36,22.45a1,1,0,0,0,0-1.09l-1.24-2c-2.92,2.08-12.85,3.49-14,3.65l.13,0H16.42A1.06,1.06,0,0,0,17.36,22.45Z"/> */}
                  <path class="cls-1" d="M7.15,0,3.73,1.58,7.61,3.76l-2.24.51L7.61,8.34,2.68,6.56l-.29,4.3L0,9v12.9A2.07,2.07,0,0,0,2.07,24H21.93A2.07,2.07,0,0,0,24,21.93V2.07A2.07,2.07,0,0,0,21.93,0ZM22.68,19l-2.83,2.83-4-4-4,4L9,19l4-4L9,11l2.83-2.83,4,4,4-4L22.68,11l-4,4Z"/>
    </SvgIcon>
                    </ListItemIcon>
                    {/* <ListItemText primary="Gasto materiales" onClick={() => menu("Gasto materiales", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon> */}
                    <ListItemText primary="Ingreso segunda" onClick={() => menu("Ingreso desperfectos", 1)} />
                  </ListItem>
                  
                  </List>

            

                  </Collapse>




              
       

       



                 

              
            </List>
        

    

        
      </Drawer>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />

            <Typography paragraph>

              {(() => {
                switch (lateral) {
                  case "Listado producto": return <Productos />;
                  case "Tipo operario": return <Tipo_operario />;
                  case "Tipo unidades": return <Tipo_unidades />;
                  case "Materia prima": return <Materia_prima />;
                  case "Materiales colores": return <Materiales_colores />;
                  case "Colores": return <Colores />;
                  case "Crear producto": return <Producto_crear />;
                  case "Crear cotizacion": return <Cotizacion />;
                  case "Listado cotizacion": return <CotizacionListado />;
                  case "Operario": return <Operarios />;
                  case "Proveedor": return <Proveedor />;
                  case "Compras": return <Compras />;
                  case "Inventario": return <Inventario />;
                  case "Procesos": return <Procesos />;
                  case "Pedidos": return <Pedido />;
                  case "Maquina": return <Maquina />;
                  case "Producción": return <Produccion />;
                  case "Ingreso diario": return <Ingreso_diario />;
                  case "Gasto materiales": return <Gastomateriales />;
                  case "Ingreso desperfectos": return<Ingreso_desperfectos/>
                  case "Dashboard": return<Dashboard/>
                  case "Gantt": return<Gantt/> 
                  case "Despachado": return<Despachado/> 
                  case "Listado segunda": return<Salida_segunda/> 
                  default: return <Dashboard/>;
                }
              })()}


            </Typography>
            <Typography paragraph>
              
        </Typography>
          </main>
    </div>
        );
      }
      
      /*
import React, {Component} from 'react';
        import axios from 'axios';
        import Button from '@material-ui/core/Button';
        import Container from '@material-ui/core/Container';
        import './App.css';
        
class App extends Component {
          state = {
            persons: []
          }

 componentDidMount() {
          axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/products/1`)
            .then(res => {
              const persons = res.data;
              console.log(persons);
              this.setState({ persons });
            })
        }

        render() { return (
    <Container maxWidth="sm">

          <div className="container">
            <h1 className="text-center">Productos</h1>
            <ul>
              {this.state.persons.name}
            </ul>

            <Button variant="contained" color="primary">
              Hello World
    </Button>

          </div>
        </Container>
        );
      }}
      
      export default App;
      
      */
