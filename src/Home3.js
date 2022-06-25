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

 




                  <ListItem button onClick={handleClick5}>
                <ListItemIcon>
                <SvgIcon >
                  
                <path class="cls-1" d="M14.28,0V9l-.94-.64L12.06,9,10.8,8.29,9.72,9V0H2A2,2,0,0,0,0,2V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2Z"/>
                
                
                
                    </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Inventario" />
                {openP5 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP5} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <SvgIcon >
                  
                    <path class="cls-1" d="M6.81,12.55v4.29l-.45-.31-.61.33-.6-.35-.52.33V12.55H1a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1h9.43a1,1,0,0,0,1-1V13.56a1,1,0,0,0-1-1Z"/><path class="cls-1" d="M19.37,12.55v4.29l-.45-.31-.62.33-.6-.35-.51.33V12.55H13.56a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H23a1,1,0,0,0,1-1V13.56a1,1,0,0,0-1-1Z"/><path class="cls-1" d="M13.1,0V4.33L12.65,4,12,4.36,11.42,4l-.52.34V0H7.23a1,1,0,0,0-1,1v9.55a1,1,0,0,0,1,1h9.54a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1Z"/>
              
              
              
                  </SvgIcon>
                    </ListItemIcon>
                    <ListItemText primary="Inventario" onClick={() => menu("Inventario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                  
                    </ListItem>
                   
                  </List>

            

                  </Collapse>


        <ListItem button onClick={handleClick3}>
                <ListItemIcon>
                <SvgIcon >
                <path class="cls-1" d="M7.12,0V4.71A2.41,2.41,0,0,1,4.71,7.12H0V22a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2ZM16,22.33A8.1,8.1,0,1,1,22.33,16,8.12,8.12,0,0,1,16,22.33Z"/><path class="cls-1" d="M14.39,8.09a6.3,6.3,0,1,0,6.29,6.3A6.31,6.31,0,0,0,14.39,8.09Zm.91,10.45V19.9H13.57V18.54a3,3,0,0,1-2.64-2.62l-.07-.5h1.75l.07.35A1.73,1.73,0,0,0,14.44,17C15.16,17,16,16.8,16,16c0-.39,0-.82-1.78-1.14-2.13-.4-3-1.17-3-2.58a2.56,2.56,0,0,1,2.37-2.42v-1H15.3v1a2.87,2.87,0,0,1,2.37,2.38l.06.5H16l-.09-.35c-.08-.36-.38-.95-1.51-.95-.86,0-1.37.29-1.37.77,0,.27,0,.58,1.73.9,2.08.39,3.13,1.31,3.13,2.74A2.66,2.66,0,0,1,15.3,18.54Z"/>
    </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Cotizaciones" />
                {openP3 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                    <div>
   <AddBoxIcon />
 </div>
                    
                    </ListItemIcon>
                    <ListItemText primary="Crear" onClick={() => menu("Crear cotizacion", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Listado" onClick={() => menu("Listado cotizacion", 1)} />
                  </ListItem>
                  
                  </List>

            

                  </Collapse>



        <ListItem button onClick={handleClick2}>
                <ListItemIcon>
                  <WidgetsIcon />
                </ListItemIcon>
                <ListItemText primary="Productos" />
                {openP2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Crear" onClick={() => menu("Crear producto", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Listado" onClick={() => menu("Listado producto", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inventario primera" onClick={() => menu("Listado primera", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inventario segunda" onClick={() => menu("Listado segunda", 1)} />
                  </ListItem>
                  
                  </List>

            

                  </Collapse>

          

                {/*  {[ 'Pedidos x maquina','Asignar pedido','Gantt x maquina','Gantt pedidos','Reportes'].map((text, index) => ( */}


              {[ 'Gantt pedidos','Reportes'].map((text, index) => (
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
