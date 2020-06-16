import React, { useState } from 'react';
import ChartistGraph from 'react-chartist';
 

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

import "./assets/css/material-dashboard-react.css?v=1.9.0";
import Ingreso_desperfectos from './Components/Ingreso_desperfectos';

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
          <Typography variant="h6" noWrap>
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
        <ListItem button onClick={handleClick3}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Cotizaciones" />
                {openP3 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Crear" onClick={() => menu("Crear cotizacion", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Listado" onClick={() => menu("Listado cotizacion", 1)} />
                  </ListItem>
                  
                  </List>

            

                  </Collapse>



        <ListItem button onClick={handleClick2}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Productos" />
                {openP2 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Crear" onClick={() => menu("Crear producto", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Listado" onClick={() => menu("Listado producto", 1)} />
                  </ListItem>
                  
                  </List>

            

                  </Collapse>

                  <ListItem button onClick={handleClick4}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Producción" />
                {openP4 ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={openP4} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Inventario pedidos" onClick={() => menu("Producción", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Ingreso diario" onClick={() => menu("Ingreso diario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Gasto materiales" onClick={() => menu("Gasto materiales", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Ingreso Desperfectos" onClick={() => menu("Ingreso desperfectos", 1)} />
                  </ListItem>
                  
                  </List>

            

                  </Collapse>

                 

              {[ 'Operario','Proveedor','Inventario', 'Compras','Pedidos','Procesos','Maquina'].map((text, index) => (
                <ListItem button key={text} >
                  <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                  <ListItemText primary={text} onClick={() => menu(text, index)} />
                </ListItem>
              ))}
            </List>
            <Divider />

            <List>


              <ListItem button onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Parametros" />
                {openP? <ExpandLess /> : <ExpandMore />}



              </ListItem>
              <Collapse in={openP} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Tipo operario" onClick={() => menu("Tipo operario", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Tipo unidades" onClick={() => menu("Tipo unidades", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Materia prima" onClick={() => menu("Materia prima", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Clasificación" onClick={() => menu("Colores", 1)} />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Materiales Clasificación" onClick={() => menu("Materiales colores", 1)} />
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
