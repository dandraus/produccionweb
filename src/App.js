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
                  <path class="cls-2" d="M13.47,21.77h7.34A2.19,2.19,0,0,0,23,19.58V14.43C20.52,18.8,16.93,19.7,13.47,21.77Z"/><rect class="cls-3" x="9.5" y="2.36" width="13.5" height="19.64" rx="2.46"/><path d="M20.54,22.5H12a3,3,0,0,1-3-3V4.82a3,3,0,0,1,3-3h8.58a3,3,0,0,1,3,3V19.54A3,3,0,0,1,20.54,22.5ZM12,2.86a2,2,0,0,0-2,2V19.54a2,2,0,0,0,2,2h8.58a2,2,0,0,0,2-2V4.82a2,2,0,0,0-2-2Z"/><rect class="cls-4" x="11.83" y="6.55" width="8.84" height="4.42" rx="0.65"/><path class="cls-1" d="M6.21,9.4,3.67,12.5,1.13,9.4a.57.57,0,0,1,.44-.94h.69V2.33H5.08V8.46h.68A.58.58,0,0,1,6.21,9.4Z"/><polygon class="cls-5" points="5.82 9.08 3.67 11.71 1.52 9.08 1.57 8.96 2.76 8.96 2.76 1.83 4.58 1.83 4.58 8.96 5.76 8.96 5.82 9.08"/><line class="cls-1" x1="2.26" y1="1.33" x2="2.26" y2="0.33"/><path class="cls-6" d="M5.66,13.33.9,21.1a1.58,1.58,0,0,0,1.35,2.4H16.42a1.58,1.58,0,0,0,1.35-2.4L13,13.33A4.31,4.31,0,0,0,5.66,13.33Z"/><path class="cls-7" d="M17.36,22.45a1,1,0,0,0,0-1.09l-1.24-2c-2.92,2.08-12.85,3.49-14,3.65l.13,0H16.42A1.06,1.06,0,0,0,17.36,22.45Z"/>


    </SvgIcon>
                  

                </ListItemIcon>
                <ListItemText primary="Producción" />
                {openP4 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Estado de  pedidos" onClick={() => menu("Producción", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ingreso produccion diaria" onClick={() => menu("Ingreso diario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AddBoxIcon />
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




                  <ListItem button onClick={handleClick5}>
                <ListItemIcon>
                <SvgIcon >
                  
                  <path class="cls-2" d="M20,17c0-8.25-7.91-7.8-8.25-8.25S12.78.5,3.5.5L4,17Z"/><path class="cls-1" d="M14.5,17c0-5.5-5.28-5.2-5.5-5.5S9.69,6,3.5,6l.33,11Z"/><rect class="cls-3" x="3.5" y="0.5" width="16.5" height="16.5"/><path class="cls-4" d="M3.6,15.48l-.32.45a1.09,1.09,0,0,0,.24,1.51l4.35,3.24A1.68,1.68,0,0,0,9,21l6.13-.61a1.09,1.09,0,0,0,.65-.3L17,18.93s.47-3.1-1.75-3.1H9.51a1,1,0,0,0-.95.94V17a1,1,0,0,0,1,1H8.87a.91.91,0,0,1-.55-.18L4.88,15.28A.91.91,0,0,0,3.6,15.48Z"/><rect class="cls-5" x="15.34" y="16.36" width="3.41" height="6.36" transform="translate(18.81 -6.33) rotate(45)"/>
                
                
                
                    </SvgIcon>
                </ListItemIcon>
                <ListItemText primary="Inventario" />
                {openP5 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP5} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <GetAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Salida materia prima" onClick={() => menu("Gasto materiales", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Entrada materia prima" onClick={() => menu("Compras", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inventario" onClick={() => menu("Inventario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <AddBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Producto terminado" onClick={() => menu("Ingreso desperfectos", 1)} />
                  </ListItem>
                  
                  </List>

            

                  </Collapse>


        <ListItem button onClick={handleClick3}>
                <ListItemIcon>
                <SvgIcon >
                <path d="M19,1a1,1,0,0,1,1,1V22a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.41L8.41,1H19m0-1H8L3,5V22a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2Z"/><path class="cls-2" d="M3.5,5.5V5.21L8.21.5H8.5V4A1.54,1.54,0,0,1,7,5.5Z"/><path d="M8,1.41V4A1,1,0,0,1,7,5H4.41L8,1.41M9,0H8L3,5V6H7A2,2,0,0,0,9,4V0Z"/><line class="cls-3" x1="5" y1="7.5" x2="14" y2="7.5"/><line class="cls-3" x1="5" y1="10.5" x2="14" y2="10.5"/><line class="cls-3" x1="16" y1="7.5" x2="19" y2="7.5"/><line class="cls-3" x1="16" y1="10.5" x2="19" y2="10.5"/><line class="cls-3" x1="5" y1="13.5" x2="9.08" y2="13.5"/><line class="cls-3" x1="5" y1="16.5" x2="9.08" y2="16.5"/><circle class="cls-4" cx="15" cy="17.81" r="4"/><path class="cls-5" d="M13.81,18.64a1.2,1.2,0,0,0,1.22.85c.79,0,1.13-.33,1.13-.78s-.22-.7-1.2-.88c-1.13-.2-1.48-.58-1.48-1.18S14,15.52,15,15.52a1.44,1.44,0,0,1,1.57,1.15h-.51c-.05-.24-.27-.73-1.09-.73s-1,.36-1,.69.3.58,1.17.74c1.23.23,1.54.75,1.54,1.28,0,.68-.49,1.26-1.66,1.26a1.55,1.55,0,0,1-1.7-1.27Zm1-3V15h.46v.68Zm0,4.95v-.8h.46v.8Z"/>
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
                  
                  </List>

            

                  </Collapse>

          

                 

              {[ 'Pedidos','Gantt'].map((text, index) => (
                <ListItem button key={text} >
                  <ListItemIcon>{index % 2 === 0 ? <PlaylistAddCheckIcon /> : <AccountTreeIcon />}</ListItemIcon>
                  <ListItemText primary={text} onClick={() => menu(text, index)} />
                </ListItem>
              ))}
            </List>
            <Divider />

            <List>


              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Parametros" />
                {openP? <ExpandLess /> : <ExpandMore />}



              </ListItem>
              <Collapse in={openP} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tipo operario" onClick={() => menu("Tipo operario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Tipo unidades" onClick={() => menu("Tipo unidades", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Materia prima" onClick={() => menu("Materia prima", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Clasificación" onClick={() => menu("Colores", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Materiales Clasificación" onClick={() => menu("Materiales colores", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Operario" onClick={() => menu("Operario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Proveedor" onClick={() => menu("Proveedor", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Procesos" onClick={() => menu("Procesos", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <PlaylistAddCheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Maquina" onClick={() => menu("Maquina", 1)} />
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
