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
import Despacho from './Components/Despacho';
import Ingreso_pedido from './Components/Ingreso_pedido';
import Gantt_pedido from './Components/Gantt_pedido';
import Reportes from './Components/Reportes';
import Reportes_pedido from './Components/Reportes_pedido';
import Modificar_cotizaacion from './Components/Modificar_cotizacion';









import Dashboard from './Components/Dashboard';
import Despachado from './Components/Despachado';
import Salida_segunda from './Components/Salida_segunda';

import Salida_primera from './Components/Salida_primera';
import Pedido_gantt from './Components/Pedido_gantt';

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
  function logout() {
    localStorage.clear();
    window.location.href = '/';
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
          <div style={{witdh:'100%',display: 'flex',  flexDirection: 'row',justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap onClick={() => menu("Dashboard", 1)}>
            Dashroute                          
          </Typography>
        
         
          </div>
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

     

                


        


       

          

                {/*  {[ 'Pedidos x maquina','Asignar pedido','Gantt x maquina','Gantt pedidos','Reportes'].map((text, index) => ( */}


              {[ 'Reportes','Inventario','Salir'].map((text, index) => (
                <ListItem button key={text} >
                  <ListItemIcon>{index % 2 === 0 ? <SvgIcon >
                    <path class="cls-1" d="M22,0H7.12V4.71A2.41,2.41,0,0,1,4.71,7.12H0V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2A2,2,0,0,0,22,0Zm0,21.06a.94.94,0,0,1-.94.94H9.94A.94.94,0,0,1,9,21.06V9.94A.94.94,0,0,1,9.94,9H21.06a.94.94,0,0,1,.94.94Z"/><path class="cls-1" d="M15,21H13.89A3.9,3.9,0,0,0,10,17.11V16A5,5,0,0,1,15,21Z"/><path class="cls-1" d="M16.06,14.94A6.2,6.2,0,0,0,10,10v1.38a4.81,4.81,0,0,1,4.81,4.81A4.82,4.82,0,0,1,19.63,21H21A6.2,6.2,0,0,0,16.06,14.94Z"/>
    </SvgIcon> : <AccountTreeIcon />}</ListItemIcon>
                  <ListItemText primary={text} onClick={() => menu(text, index)} />
                </ListItem>
              ))}
            </List>
            <Divider />

         
      

        
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
                  case "Modificar cotizacion": return <Modificar_cotizaacion />;
                  case "Listado cotizacion": return <CotizacionListado />;
                  case "Operario": return <Operarios />;
                  case "Proveedor": return <Proveedor />;
                  case "Compras": return <Compras />;
                  case "Inventario": return <Inventario />;
                  case "Procesos": return <Procesos />;
                  case "Pedidos x maquina": return <Pedido />;
                  case "Maquina": return <Maquina />;
                  case "Producción": return <Produccion />;
                  case "Ingreso diario": return <Ingreso_diario />;
                  case "Gasto materiales": return <Gastomateriales />;
                  case "Ingreso desperfectos": return<Ingreso_desperfectos/>
                  case "Dashboard": return<Dashboard/>
                  case "Gantt x maquina": return<Gantt/> 
                  case "Despachado": return<Despachado/> 
                  case "Listado segunda": return<Salida_segunda/> 

                  case "Listado primera": return<Salida_primera/> 
                  case "Realizar despacho": return<Despacho/> 
                  case "Ingreso pedido": return<Ingreso_pedido/> 
                  case "Asignar pedido": return<Pedido_gantt/>
                  case "Gantt pedidos" :return <Gantt_pedido/>
                  case "Reportes" :return <Reportes/>
                  case "Reportes pedido" :return <Reportes_pedido/>
                  case  "Salir" :return logout();

                  
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
    