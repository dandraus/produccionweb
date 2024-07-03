import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import axios from 'axios';


const  BACKEND_URL ='https://proyectos-6addd-default-rtdb.firebaseio.com';
const  BACKEND_URL2 ='http://produccionplastico.ddns.net:1337/'; 
const  BACKEND_URL3 ='http://produccionplastico.ddns.net:1337/api/referencias'; 

const token ="03cebb70b0058c438dfd565adb2a174e86455d68438c4a31b5f94ec2d16686dbe74c1bc4229ec966a3b7d8bdcb7e7617735dd02eefc7309a40b4012592f6784697fdf1bc1fbab2af89e51692a63a1712bd315b09b6b2b398ed8f7995b1144a9d0fe2de5a4a3031ae5e7d28ade474816e012c01f44141198f0e44187bd64aeb1e"
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


class Inventario extends Component {
  state = {
    datos: [],
    open: false
  }

  componentDidMount() {


    axios.get(BACKEND_URL2+`api/inventarios`,config)
      .then(res => {
        const productos = res.data.data;

        this.setState({ datos: productos });
        console.log(this.state.datos);
        // setPersonsState(PersonState=persona);

      })

  }
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
           options={{
            pageSize: 20
        }}
          columns={[
            
            
            // { title: 'id', field: 'id' },
            { title: 'Referencia', field: 'attributes.referencia' },
            { title: 'Nombre', field: 'attributes.nombre' },
            { title: 'Color Rebaba', field: 'attributes.color' },
            { title: 'Cantidad', field: 'attributes.cantidad' },
           


            { title: 'Creado', field: 'attributes.createdAt' },
            { title: 'Actualizado', field: 'attributes.updatedAt' }

          ]}
          data={this.state.datos}
          title="Inventario"
    
        />




      </div>



    )
  }
}
function handleClickOpen() {
  this.setState({
    datos: [],
    open: true
  });
}

function handleClose() {
  this.setState({ open: false });
}


function Nuevoboton(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}
export default Inventario;

