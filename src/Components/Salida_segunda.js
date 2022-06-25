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

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


class Salida_segunda extends Component {
  state = {
    datos: [],
    valores:[],
    maquinas:[],
    pedido_guardar:[],
    guardarMaq:[],
    Nummaquina:1,
    fecha_final:'',
    fecha_maquina:new Date(),
    startDate:new Date(),
    dias_totales:0,
    open: false,
    items:[],
    itemsped:[],
    select:true,
    tipo: '',
    operarios:[],
    fecha_min:"",
    maquina:[],
    unidades_dia:'',
    unidades_fabricar:'',
    dias_operario:'',
    Sopen: false,
    formControls: {
        nombre: {
            value: ''
        },
        apellido: {
            value: ''
        },
        operario: {
            value: ''
      

    }

  }}



  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    console.log(this.state);
    // console.log(value);
    this.setState({
        formControls: {
            ...this.state.formControls,
            [name]: {
                ...this.state.formControls[name],
                value
            }
        }
    });
    // this.setState({ nombre: event.target.value });
}


  componentDidMount() {


    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Inventario_segunda`)
      .then(res => {
        const productos = res.data;

        this.setState({ datos: productos });
        console.log(this.state.datos);
        // setPersonsState(PersonState=persona);

      })

     
  }


  HandleItemscot = (item) => {
    console.log(item);
    this.setState({ valores: item});
    this.setState({
  
        //datos: [],
        open: true,
       // items:[]
      });

  
};


  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
   


<MaterialTable
           options={{
            pageSize: 5
        }}
          columns={[
            
            {
                title: 'id',
                field: 'productos_id',
                // render: rowData => (
                // <h6>{rowData.id }
                // <a href={"http://ec2-18-144-28-190.us-west-1.compute.amazonaws.com:8080/jasperserver/rest_v2/reports/reports/cotizacion2.pdf?Cotizacionid="+rowData.id} target="_blank">   PDF</a>
                // </h6>
                // ),
              },
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
            // { title: 'id', field: 'id' },
            { title: 'Cantidad', field: 'cantidad' },
           ]}
          data={this.state.datos}
          title="Inventario segunda"
       
          actions={[
            {
              icon: 'send',
              tooltip: 'Despachar',
              onClick:  (event, rowData) => this.HandleItemscot(rowData)
            }
         
          ]}

        />
         

<Dialog open={this.state.open} onClose={handleClose.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Despacho Segunda</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
-------------------          </DialogContentText>
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          fullWidth
        >
          

          <InputLabel htmlFor="age-simple">Producto id {this.state.valores.productos_id} </InputLabel>
          
          <TextField
                              value={this.state.cantidad_despachada} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="cantidad_despachada"
                              label="Cantidad despachada"
                              name="cantidad_despachada"
                              fullWidth
                          />
                                    <TextField
                              value={this.state.valor} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="valor"
                              label="Valor mt "
                              name="valor"
                              fullWidth
                          />
                              <TextField
                              value={this.state.observaciones} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="observaciones"
                              label="Observaciones "
                              name="observaciones"
                              multiline
                              rowsMax={4}
                              fullWidth
                          />
          
                        <div style={{display: 'flex', justifyContent: 'right'}}>
                        <Button onClick={handleClose.bind(this)} variant="primary"  >
                            Cancelar
          </Button>
                        <Button type='submit' color="primary"  >
                            Guardar
          </Button>
          </div>
                        
          </form>

                    </DialogContent>
                    <DialogActions>
                       
                    </DialogActions>
                    
                </Dialog>


      </div>



    )
  }
}
function handleClickOpen() {
  this.setState({unidades_fabricar:this.state.itemsped.unidades});
  
  
  axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto/ref/`+this.state.itemsped.referencia)
  .then(res => {
    const productos = res.data;

    this.setState({ unidades_dia: productos[0].unidades_turno });
    console.log(this.state.datos);
    // setPersonsState(PersonState=persona);
var diasop = this.state.unidades_fabricar/this.state.unidades_dia;

this.setState({dias_operario:diasop});
this.setState({dias_totales:this.state.dias_operario/this.state.Nummaquina});
  })
  
  
  this.setState({

    //datos: [],
    open: true,
   // items:[]
  });
}
function guardar(event) {

  event.preventDefault();
 
  const datoGuardarinv = {
    productos_id: this.state.valores.productos_id,
    cantidad_mov:-parseFloat(this.state.formControls.cantidad_despachada.value),
    valor:parseFloat(this.state.formControls.valor.value),
    foto: this.state.valores.foto,
    observaciones:this.state.formControls.observaciones.value,
    
    
    
};


axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Inventario_seg`, (datoGuardarinv))
.then(res => {
        
    console.log(res);
    console.log(res.data.id);
    //this.reset();

    this.componentDidMount();

    
})
.catch((error) => {
    console.log(error);
})

  this.setState({
      open: false
  });
}

function handleClose() {
  this.setState({ open: false });
}


function Nuevoboton(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}





export default Salida_segunda;

