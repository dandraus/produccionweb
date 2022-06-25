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


class Salida_primera extends Component {
  state = {
    fecha:new Date(),
    maquina:'',
    operario:'',
    
    productos: [],
    open: false,
    Sopen: false,
    items:'',
    Cliente_es:[],
clientesnuevos:[],

   // maquinas:[],
    //operarios:[],
    pedido:[{pedido_item_id:'',pedido_id:'',unidades:0}],

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
   
    itemsped:[],
    select:true,
    tipo: '',
    operarios:[],
    fecha_min:"",
 
    unidades_dia:'',
    unidades_fabricar:'',
    dias_operario:'',

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

  reset() {
    document.getElementById("form-inside-input").reset();
    this.setState({
      fecha:new Date(),
    maquina:'',
    operario:'',
    
    productos: [],
    open: false,
    Sopen: false,
    items:'',
    Cliente_es:[],
clientesnuevos:[],

   // maquinas:[],
    //operarios:[],
    pedido:[{pedido_item_id:'',pedido_id:'',unidades:0}],

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
   
    itemsped:[],
    select:true,
    tipo: '',
    operarios:[],
    fecha_min:"",
 
    unidades_dia:'',
    unidades_fabricar:'',
    dias_operario:'',

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

  }
    }
    )
  }



  handleChangecombo_maquina (event)   {
    console.log(event);
    this.setState({maquina:event.target.value})
    console.log(this.state);

    /*var fecha = this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate();
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/pedido/`+event.target.value+'/'+fecha)
        .then(res => {
          const ms = res.data;
          if (ms.length ===0){alert("No hay produccion");
          this.reset();

          }else{
          this.setState({pedido:ms[0]});
          axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto/foto/`+ms[0].referencia)
          .then(res2 => {
            console.log(res2);
           // const productos = res.data;
            
            this.setState({ items: res2.data[0].foto });
            
            // setPersonsState(PersonState=persona);
    
          }
          )
          

            console.log(ms);
          }
        
    
       
      });
*/
};


handleChangecombo_cliente (event)   {
console.log(event.target.value);
this.setState({Cliente_es:event.target.value});
//this.setState({ pedido[0].pedido_id:event.target.value});
console.log(this.state);



axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/pedido_sin/`+event.target.value)
.then(res => {
  const ms = res.data;
  if (ms.length ===0){alert("No hay produccion");
  this.reset();

  }else{
  this.setState({pedido:ms[0]});
  axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto/foto/`+ms[0].referencia)
  .then(res2 => {
    console.log(res2);
   // const productos = res.data;
    
    this.setState({ items: res2.data[0].foto });
    
    // setPersonsState(PersonState=persona);

  }
  )
  

    console.log(ms);
  }



});


/* var fecha = this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate();
    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/pedido/`+event.target.value+'/'+fecha)
    .then(res => {
      const ms = res.data;
      if (ms.length ===0){alert("No hay produccion");
      this.reset();

      }else{
      this.setState({pedido:ms[0]});
      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto/foto/`+ms[0].referencia)
      .then(res2 => {
        console.log(res2);
       // const productos = res.data;
        
        this.setState({ items: res2.data[0].foto });
        
        // setPersonsState(PersonState=persona);

      }
      )
      

        console.log(ms);
      }
    

   
  });
  */

};

handlechangefecha_ini(event){
    this.reset();
   if (event===undefined){}
   else{
   console.log(event);
      this.setState({fecha:event});
     }}
     handleChangecombo(event) {
        this.setState({ ...this.state, [event.target.name]: Number(event.target.value) || '' });
    };

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


    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Inventario_primera`)
      .then(res => {
        const productos = res.data;

        this.setState({ datos: productos });
        console.log(this.state.datos);
        // setPersonsState(PersonState=persona);

      })
      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina`)
      .then(res3 => {
          const resultado3 = res3.data;

          this.setState({ maquinas: resultado3 });
          //   console.log(this.state.datos);
          // setPersonsState(PersonState=persona);

      })
      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Operarios`)
      .then(res4 => {
          const resultado4 = res4.data;
          console.log(resultado4);
          this.setState({ operarios: resultado4 });
          //   console.log(this.state.datos);
          // setPersonsState(PersonState=persona);

      })

      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Clientes`)
      .then(res5 => {
          const resultado5 = res5.data;
          console.log(resultado5);
        this.setState({ clientesnuevos: resultado5 });
         //   console.log(this.state.datos);
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
                title: 'Referencia',
                field: 'referencia',
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
            { title: 'Cantidad', field: 'total' },
           ]}
          data={this.state.datos}
          title="Inventario Primera"
       
          actions={[
            {
              icon: 'send',
              tooltip: 'Despachar',
              onClick:  (event, rowData) => this.HandleItemscot(rowData)
            }
         
          ]}

        />
         

<Dialog open={this.state.open} onClose={handleClose.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Inventario Primera</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
-------------------          </DialogContentText>
<form
            id="form-inside-input"
            className="form-inside-input"
            onSubmit={guardar.bind(this)}
            
          >
        <br/>
                          <br/>

                          {this.state.items ?  <img
                    style={{ height: 100, }}//borderRadius: '50%' }}
                    src={process.env.REACT_APP_URL_LARAVEL +"uploads/"+ this.state.items}
                  />
        :"No hay foto"      }
                         

                         <br/>
                          <br/>

                          <InputLabel htmlFor="age-simple">Escoge cliente</InputLabel>
                          <Select
                              fullWidth
                              id="Cliente_es"
                              name="Cliente_es"
                              value={this.state.Cliente_es}
                              required="true"

                             onChange={this.handleChangecombo_cliente.bind(this)}
                              input={<Input id="age-simple" />}
                          >
  
                              <MenuItem value="">
  
                                  <em>None</em>
                              </MenuItem>
                             
                              
                              {
                                  this.state.clientesnuevos.map((index) =>
                                  
                                  <MenuItem value={index.pedidonumero}>{index.cliente} - Pedido {index.pedidonumero} - Cotizacion {index.cotizacion_id} </MenuItem>
                              )}
  
                            
                          </Select>
  
                        
  <InputLabel htmlFor="age-simple">Escoge fecha real de fabricación</InputLabel>

  <DatePicker selected={this.state.fecha} onChange={this.handlechangefecha_ini.bind(this)}  />
  <br/>
                          <br/>
  <InputLabel htmlFor="age-simple">Máquina</InputLabel>
                          <Select
                              fullWidth
                              id="maquina"
                              required="true"

                              name="maquina"
                              value={Number(this.state.maquina)}
                             onChange={this.handleChangecombo_maquina.bind(this)}
                              input={<Input id="age-simple" />}
                          >
  
                              <MenuItem value="">
  
                                  <em>None</em>
                              </MenuItem>
                             
                              
                              {
                                  this.state.maquinas.map((id, index) =>
                                  
                                  <MenuItem key={id.id} value={id.id}>{id.nombre}</MenuItem>
                              )}
  
                            
                          </Select>
  
  
  
  
  
                          <InputLabel htmlFor="age-simple">Operario</InputLabel>
                          <Select
                              fullWidth
                              id="operario"
                              name="operario"
                              required="true"

                              value={Number(this.state.operario)}
                              onChange={this.handleChangecombo.bind(this)}
                              input={<Input id="age-simple" />}
                          >
  
                              <MenuItem value="">
  
                                  <em>None</em>
                              </MenuItem>
                              
                              
                              {
                                  this.state.operarios.map((id, index) =>
                                  
                                  <MenuItem key={id.id} value={id.id}>{id.nombre} {id.apellido}</MenuItem>
                              )}
  
                            
                          </Select>
                          <TextField
                              value={this.state.pedido.pedido_id} onChange={this.handleChange.bind(this)}
                              
                              required="true"
                              margin="normal"
                              defaultValue="Pedido  id"
                              id="pedido__id"
                              label="Pedido"
                              
                              name="valor_unitario"
                              InputProps={{
                                  readOnly: true,
                              }}
                              fullWidth
                          />
  
                          <TextField
                              value={this.state.pedido.pedido_item_id} onChange={this.handleChange.bind(this)}
                              
                              required="true"
                              margin="normal"
                              defaultValue="Pedido item id"
                              id="pedido_item_id"
                              label="Pedido item"
                              
                              name="valor_unitario"
                              InputProps={{
                                  readOnly: true,
                              }}
                              fullWidth
                          />
                       
                                            <TextField
                              value={this.state.pedido.referencia} onChange={this.handleChange.bind(this)}
                              
                              required="true"
                              margin="normal"
                              defaultValue="Pedido referencia"
                              id="pedido_referencia"
                              label="Referencia"
                              
                              name="pedido_referencia"
                              InputProps={{
                                  readOnly: true,
                              }}
                              fullWidth
                          />
  
  <TextField
                              value={this.state.pedido.unidades} onChange={this.handleChange.bind(this)}
                              
                              required="true"
                              margin="normal"
                              defaultValue="Unidades a fabricar"
                              id="unidades"
                              label="Unidades a fabricar"
                              
                              name="unidades"
                              InputProps={{
                                  readOnly: true,
                              }}
                              fullWidth
                          />
  
                          <TextField
                              value={this.state.cantidad_fabricada} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="cantidad_despachada"
                              label="Cantidada despachada"
                              name="cantidad_despachada"
                              fullWidth
                          />
                    
                                   {/* <TextField
                              value={this.state.cantidad} onChange={this.handleValor.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="cantidad"
                              label="Cantidad"
                              name="cantidad"
                              fullWidth
                          />
  
  
  
  
  
  
                              <TextField
                              value={this.state.valor} onChange={this.handleValor.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              id="valor"
                              label="Valor"
                              name="valor"
                              fullWidth
                          /> */}
  
  {/* 
                          <TextField
                              value={this.state.valor_unitario} onChange={this.handleChange.bind(this)}
                              
                              required="true"
                              margin="normal"
                              defaultValue="Valor Unitario"
                              id="valor_unitario"
                              label="Valor unitario"
                              
                              name="valor_unitario"
                              InputProps={{
                                  readOnly: true,
                              }}
                              fullWidth
                          />
   */}
  
                                  
                     
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
    const datoGuardar = {
        ped_id: this.state.pedido.id,
        val: this.state.pedido.unidades,
        pri:0,
        seg: 0,
        ter:0,
        des:this.state.formControls.cantidad_despachada.value
        
    };

    const datoGuardarmov = {
        pedido_items_id: this.state.pedido.id,
        total:parseFloat(this.state.formControls.cantidad_despachada.value),
        tipo:'Despachado' ,
        maquina_id: this.state.maquina,
        operarios_id:this.state.operario,
        fecha: this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate(), 
        
        
    };
    console.log(datoGuardar);
    console.log(this.state);

    axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_inventario`, (datoGuardar))
        .then(res => {

            console.log(res);
            console.log(res.data.id);
axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_inventario_mov`, (datoGuardarmov))
        .then(res => {
                
            console.log(res);
            console.log(res.data.id);
            alert("Guardado");
            this.reset();

            this.componentDidMount();

            console.log(this.state.datos);
        })
        .catch((error) => {


            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            this.setState({ Sopen: true });
            console.log(error.config);
        });

            this.componentDidMount();

            console.log(this.state.datos);
        })
        .catch((error) => {


            // Error
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the 
                // browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            this.setState({ Sopen: true });
            console.log(error.config);
        });

    console.log(this.state.tipo);

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





export default Salida_primera;

