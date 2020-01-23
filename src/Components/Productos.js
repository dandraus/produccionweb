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


class Productos extends Component {
  state = {
    datos: [],
    open: false
  }

  componentDidMount() {


    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto`)
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
            {
              title: 'Foto',
              field: 'foto',
              render: rowData => (

                <img
                  style={{ height: 100, }}//borderRadius: '50%' }}
                  src={process.env.REACT_APP_URL_LARAVEL +"uploads/"+ rowData.foto}
                />
              ),
            },

            { title: 'id', field: 'id' },
            { title: 'Nombre', field: 'nombre' },
            { title: 'Referencia', field: 'referencia' },
            {
              title: 'Costo', field: 'costo_estimado', type: 'currency',
              currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 }
            },
            {
              title: 'Precio', field: 'precio_estimado', type: 'currency',
              currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 },
            },
            {
              title: 'Margen', field: 'margen_estimado',
             
            },


            { title: 'Creado', field: 'created_at' },
            // { title: 'Actulizado', field: 'updated_at' }

          ]}
          data={this.state.datos}
          title="Productos"
          detailPanel={[
            {
              tooltip: 'Clasificación',
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                      //  color: 'white',
                      //  backgroundColor: '#43A047',
                    }}
                  > Precio Mt    $
                    {  (rowData.unidades_por_mts*rowData.precio_estimado).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    <br></br>
                    Valor operario  por Mt $
                    {(rowData.unidades_por_mts*rowData.valor_operario).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                    <br></br>
                    {rowData.colores.map((color, index) =>
                      <div
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                          color: rowData.colores[index].colores.rgb,
                          //  backgroundColor: '#43A047',
                        }}
                      >


                        {color.colores.nombre} {color.porcentaje + "%"}
                        <br></br>
                      </div>
                    )}



                  </div>
                )
              },
            },
            {
              //icon: 'account_circle',
              tooltip: 'Materiales',
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 15,
                      textAlign: 'center',

                    }}
                  >

                    {rowData.materiales.map((material, index) =>
                      <div
                        style={{
                          fontSize: 15,
                          textAlign: 'center',
                          
                          //  backgroundColor: '#43A047',
                        }}
                      >


                        {material.materiales.nombre +"  -  "} {material.cantidad} {material.materiales.tipo_unidad.nombre}
                        <br></br>
                      </div>
                    )}



                  </div>
                )
              },
            },

          ]}
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
export default Productos;

