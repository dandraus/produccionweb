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


class CotizacionListado extends Component {
  state = {
    datos: [],
    open: false
  }

  componentDidMount() {


    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Cotizacion`)
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
                title: 'id',
                field: 'id',
                render: rowData => (
                <h6>{rowData.id }
                <a href={"http://ec2-54-151-71-25.us-west-1.compute.amazonaws.com:8080/jasperserver/rest_v2/reports/reports/cotizacion2.pdf?Cotizacionid="+rowData.id} target="_blank">   PDF</a>
                </h6>
                ),
              },
            // { title: 'id', field: 'id' },
            { title: 'Cliente', field: 'cliente' },
            { title: 'Nit', field: 'nit' },
            {
              title: 'Subtotal', field: 'subtotal', type: 'currency',
              currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 }
            },
            {
              title: 'Total', field: 'total', type: 'currency',
              currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 },
            },


            { title: 'Creado', field: 'created_at' },
            // { title: 'Actulizado', field: 'updated_at' }

          ]}
          data={this.state.datos}
          title="Cotizaciones"
          // actions={[
          //   {
          //     icon: 'edit',
          //     tooltip: 'Cambiar Fecha',
          //     onClick:  (event, rowData) => console.log(rowData)
          //    // onClick:  (event, rowData) => this.HandleItemscot(rowData)
          //   }
         
         // ]}
          detailPanel={[
            {
              tooltip: 'Items',
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                      //  color: 'white',
                      //  backgroundColor: '#43A047',
                    }}
                  >
                    {rowData.cotizacion_items.map((items, index) =>
                      <div
                        style={{
                          fontSize: 20,
                          textAlign: 'center',
                         //  color: rowData.colores[index].colores.rgb,
                          //  backgroundColor: '#43A047',
                        }}
                      >


                        {"Referencia   " +items.referencia} <br></br>{ " Descripcion    " + items.descripcion + "   Cantidad   "+ items.cantidad_m2 + "     Total     $" + items.total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
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
export default CotizacionListado;

