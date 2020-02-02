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


    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Inventario`)
      .then(res => {
        const productos = res.data;

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
            { title: 'Materia Prima', field: 'materia_prima.nombre' },
            { title: 'Cantidad actual', field: 'cantidad_actual' },
            { title: 'Cantidad anterior', field: 'cantidad_anterior' },
            { title: 'Ultimo movimiento', field: 'movimiento_cantidad' },
           


            { title: 'Creado', field: 'created_at' },
            { title: 'Actulizado', field: 'updated_at' }

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

