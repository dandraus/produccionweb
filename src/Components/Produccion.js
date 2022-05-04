import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Traffic from '@material-ui/icons/Traffic';
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
import Snackbar from '@material-ui/core/Snackbar';
import AssignmentLateRounded from '@material-ui/icons/AssignmentLateRounded'; 
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import DatePicker from 'react-datepicker'


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

class Produccion extends Component {
    state = {
        foto:'',
        cliente:'',
        pedido:'',
        referencia:'',
        total:'',
        primera:'',
        segunda:'',
        despachado:'',
       datos: [],
       openprimera: false,
       opensegunda: false,
       opendespacho: false,
       materia_primas:[],
       proveedores:[],
       operarios:[],
       maquinas:[],
    pedido:[{pedido_item_id:'',pedido_id:'',unidades:0}],
        open: false,
        Sopen: false,
        formControls: {
            materia_prima_id: {
                value: ''
            },
            maquina_id: {
                value: ''
            },
            cantidad: {
                value: ''
            },
            operario_id: {
                value: ''
            },
            valor_unitario: {
                value: ''
            },
            valor: {
                value: ''
            },
            proveedor_id: {
                value: ''
            },

            

        }
    };
    handleChangecombo(event) {
        this.setState({ ...this.state, [event.target.name]: Number(event.target.value) || '' });
    };

    handleChangecombo_maquina (event)   {
        console.log(event);
        this.setState({maquina:event.target.value})
        console.log(this.state);

        
          

  };

  handlechangefecha_ini(event){
   // this.reset();
   if (event===undefined){}
   else{
   console.log(event);
      this.setState({fecha:event});
     }}

  ingresoprimera = (item) => {
    
      console.log(item);
      this.setState({openprimera:true});
        console.log(this.state);
        console.log(process.env.REACT_APP_URL_LARAVEL +"uploads/"+ item.foto);
        this.setState({foto:item.foto});
        this.setState({cliente:item.cliente});
        this.setState({pedido:item.pedido_items_id});
        this.setState({referencia:item.referencia});
        this.setState({total:item.total});
        this.setState({primera:item.primera});
        this.setState({segunda:item.segunda});
        this.setState({despachado:item.despachado});
        
  }

  ingresosegunda = (item) => {
    
    console.log(item);
    this.setState({opensegunda:true});
      console.log(this.state);
      console.log(process.env.REACT_APP_URL_LARAVEL +"uploads/"+ item.foto);
      this.setState({foto:item.foto});
      this.setState({cliente:item.cliente});
      this.setState({pedido:item.pedido_items_id});
      this.setState({referencia:item.referencia});
      this.setState({total:item.total});
      this.setState({primera:item.primera});
      this.setState({segunda:item.segunda});
      this.setState({despachado:item.despachado});
      
}

ingresodespacho = (item) => {
    
    console.log(item);
    this.setState({opendespacho:true});
      console.log(this.state);
      console.log(process.env.REACT_APP_URL_LARAVEL +"uploads/"+ item.foto);
      this.setState({foto:item.foto});
      this.setState({cliente:item.cliente});
      this.setState({pedido:item.pedido_items_id});
      this.setState({referencia:item.referencia});
      this.setState({total:item.total});
      this.setState({primera:item.primera});
      this.setState({segunda:item.segunda});
      this.setState({despachado:item.despachado});
      
}
 
    handleValor(event){
        const name = event.target.name;
        const value = event.target.value;
        console.log(this.state);
        console.log(value);
        this.setState({
          formControls: {
            ...this.state.formControls,
            [name]: {
              ...this.state.formControls[name],
              value
            }
          }
        }, this.calcular);
    }
    calcular = () => {
        var valor =isNaN(parseFloat(this.state.formControls.valor.value)) ? 0 : parseFloat(this.state.formControls.valor.value);
       
        var cantidad = isNaN(parseFloat(this.state.formControls.cantidad.value)) ? 0 : parseFloat(this.state.formControls.cantidad.value);
        var valorunitario = valor/cantidad;
        
        this.setState({ valor_unitario: valorunitario })
        console.log(this.state);
    }


    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
//        console.log(this.state);
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
    componentDidUpdate() {



    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_estado`)
        .then(res2 => {
            const resultado2 = res2.data;

            this.setState({ datos: resultado2 });
            //   console.log(this.state.datos);
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

            this.setState({ operarios: resultado4 });
            //   console.log(this.state.datos);
            // setPersonsState(PersonState=persona);

        })

      

    }
    render() {
        return (


            <div style={{ maxWidth: '100%' }}>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.Sopen}
                    style={{ backgroundColor: 'blue' }}
                    autoHideDuration={4000}
                    onClose={handleClose2.bind(this)}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Error Guardando</span>}

                />



                <MaterialTable
                   options={{
                    pageSize: 20,
                    exportButton: true
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
                        { title: 'Cliente ', field: 'cliente'},
                        { title: 'Pedido ', field: 'pedido_items_id'},
                        { title: 'Ref', field: 'referencia'},
                        { title: 'Total pedido', field: 'total' },
                        { title: '# 1a', field: 'primera' },
                        { title: '# 2a', field: 'segunda' },
                    //    { title: '# 3a', field: 'tercera' },
                        { title: '# Despachado', field: 'despachado' },
                       
                        { title: 'Creado', field: 'created_at', editable: 'never' },
                        { title: 'Actualizado', field: 'updated_at', editable: 'never' }

                    ]}
                    data={this.state.datos}
                    actions={[
                        {
                          icon: 'P',
                          tooltip: 'Ingreso primera',
                          onClick:  (event, rowData) => this.ingresoprimera(rowData)
                        
                        },
                        {
                            icon: 'S',
                            tooltip: 'Ingreso segunda',
                            onClick: (event, rowData) => this.ingresosegunda(rowData)
                          
                          },
                          {
                            icon: 'D',
                            tooltip: 'Despacho',
                            onClick: (event, rowData) => this.ingresodespacho(rowData)
                          
                          }
                    
                    
                    ]}
                    title="Estado pedidos"
                    
                 

                />

          
<Dialog open={this.state.openprimera} onClose={handleClose.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Ingreso de primera</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Ingresando produccion de primera
          </DialogContentText>
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          fullWidth
        >
           {this.state.foto ?  <img
                    style={{ height: 100, }}//borderRadius: '50%' }}
                    src={process.env.REACT_APP_URL_LARAVEL +"uploads/"+ this.state.foto}
                  />
        :"No hay foto"      }
            <InputLabel htmlFor="age-simple">Cliente {this.state.cliente} </InputLabel>

            <InputLabel htmlFor="age-simple">Pedido {this.state.pedido} </InputLabel>

            <InputLabel htmlFor="age-simple">Referencia producto {this.state.referencia} </InputLabel>

            <InputLabel htmlFor="age-simple">Cantidad total a fabricar {this.state.total} </InputLabel>

            <InputLabel htmlFor="age-simple">Cantidad total fabricada de primera {this.state.primera} </InputLabel>
            <InputLabel htmlFor="age-simple">Cantidad total fabricada de segunda {this.state.segunda} </InputLabel>
            <InputLabel htmlFor="age-simple">Cantidad total despachada {this.state.despachado} </InputLabel>

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
                              value={this.state.cantidad_fabricada} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="cantidad_fabricada"
                              label="Cantidad fabricada"
                              name="cantidad_fabricada"
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

{/* DESPACHO */}

          
<Dialog open={this.state.opendespacho} onClose={handleClosedespacho.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Despacho</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Ingresando produccion despachada
          </DialogContentText>
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardardespachada.bind(this)}
          fullWidth
        >
           {this.state.foto ?  <img
                    style={{ height: 100, }}//borderRadius: '50%' }}
                    src={process.env.REACT_APP_URL_LARAVEL +"uploads/"+ this.state.foto}
                  />
        :"No hay foto"      }
            <InputLabel htmlFor="age-simple">Cliente {this.state.cliente} </InputLabel>

            <InputLabel htmlFor="age-simple">Pedido {this.state.pedido} </InputLabel>

            <InputLabel htmlFor="age-simple">Referencia producto {this.state.referencia} </InputLabel>

            <InputLabel htmlFor="age-simple">Cantidad total a fabricar {this.state.total} </InputLabel>

            <InputLabel htmlFor="age-simple">Cantidad total fabricada de primera {this.state.primera} </InputLabel>
            <InputLabel htmlFor="age-simple">Cantidad total fabricada de segunda {this.state.segunda} </InputLabel>
            <InputLabel htmlFor="age-simple">Cantidad total despachada {this.state.despachado} </InputLabel>

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
                              value={this.state.cantidad_despachada} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="cantidad_despachada"
                              label="Cantidad despachada"
                              name="cantidad_despachada"
                              fullWidth
                          />

  <div style={{display: 'flex', justifyContent: 'right'}}>
                          <Button onClick={handleClosedespacho.bind(this)} variant="primary"  >
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



{/* SEGUNDA */}



<Dialog open={this.state.opensegunda} onClose={handleClosesegunda.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Ingreso de segunda</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Ingresando produccion de segunda
          </DialogContentText>
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardarsegunda.bind(this)}
          fullWidth
        >
           {this.state.foto ?  <img
                    style={{ height: 100, }}//borderRadius: '50%' }}
                    src={process.env.REACT_APP_URL_LARAVEL +"uploads/"+ this.state.foto}
                  />
        :"No hay foto"      }
            <InputLabel htmlFor="age-simple">Cliente {this.state.cliente} </InputLabel>

            <InputLabel htmlFor="age-simple">Pedido {this.state.pedido} </InputLabel>

            <InputLabel htmlFor="age-simple">Referencia producto {this.state.referencia} </InputLabel>

            <InputLabel htmlFor="age-simple">Cantidad total a fabricar {this.state.total} </InputLabel>

            <InputLabel htmlFor="age-simple">Cantidad total fabricada de primera {this.state.primera} </InputLabel>
            <InputLabel htmlFor="age-simple">Cantidad total fabricada de segunda {this.state.segunda} </InputLabel>
            <InputLabel htmlFor="age-simple">Cantidad total despachada {this.state.despachado} </InputLabel>

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
                              value={this.state.cantidad_segunda} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="cantidad_segunda"
                              label="Cantidad segunda"
                              name="cantidad_segunda"
                              fullWidth
                          />
                                  <TextField
                              value={this.state.valor} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="valor"
                              label="Valor mts"
                              name="valor"
                              fullWidth
                          />
  <div style={{display: 'flex', justifyContent: 'right'}}>
                          <Button onClick={handleClosesegunda.bind(this)} variant="primary"  >
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
    this.setState({
        open: true
    });
}
function handleClose2() {
    this.setState({
        Sopen: false
    });
}
function handleClose() {
    this.setState({
        openprimera: false
    });
}
function handleClosedespacho() {
    this.setState({
        opendespacho: false
    });
}
function handleClosesegunda() {
    this.setState({
        opensegunda: false
    });
}

function eliminar(nuevodato) {

    axios.delete(process.env.REACT_APP_URL_LARAVEL+`/api/Compras/${nuevodato.id}`)
        .then(res => {

            console.log(res.data.id);

        })

}


function actualizar(nuevodato) {

    axios.put(process.env.REACT_APP_URL_LARAVEL+`/api/Compras/${nuevodato.id}`, nuevodato)
        .then(res => {

            console.log(res.data.id);

        })

}



function guardar(event) {

    console.log(this.state);
    if (this.state.maquina ==''|| this.state.operario ==''  ){
        alert("No se ha escogido cliente, maquina u operario");
        event.preventDefault();
    }else{
    
        event.preventDefault();
        const datoGuardar = {
            ped_id: this.state.pedido,
            val: this.state.total,
            pri: this.state.formControls.cantidad_fabricada.value,
            seg: 0,
            ter:0,
            des:0
            
        };
    
        const datoGuardarmov = {
            
            pedido_items_id: this.state.pedido,
            total: this.state.formControls.cantidad_fabricada.value,
            tipo:'Primera' ,
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
               // this.reset();
    
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
            openprimera: false
        });
     
    }
        
}


function guardardespachada(event) {

    console.log(this.state);
    if (this.state.maquina ==''|| this.state.operario ==''  ){
        alert("No se ha escogido cliente, maquina u operario");
        event.preventDefault();
    }else{
    
        event.preventDefault();
        const datoGuardar = {
            
            ped_id: this.state.pedido,
            val: this.state.total,
            pri:0,
            seg: 0,
            ter:0,
            des:this.state.formControls.cantidad_despachada.value
            
        };
    
        const datoGuardarmov = {
            
            pedido_items_id: this.state.pedido,
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
               // this.reset();
    
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
            opendespacho: false
        });
     
    }
        
}

function guardarsegunda(event) {
if (this.state.primera<this.state.formControls.cantidad_segunda.value)
{
    alert("No puede ser mayor el ingreso de segunda que lo producido de primera");
    event.preventDefault();
}else{
    console.log(this.state);
    if (this.state.maquina ==''|| this.state.operario ==''  ){
        alert("No se ha escogido cliente, maquina u operario");
        event.preventDefault();
    }else{
    
        event.preventDefault();
        const datoGuardar = {
            ped_id: this.state.pedido,
            val: this.state.total,
            pri: -this.state.formControls.cantidad_segunda.value,
            seg: this.state.formControls.cantidad_segunda.value,
            ter:0,
            des:0
            
        };
    
        const datoGuardarmov = {
        

            pedido_items_id: this.state.pedido,
            total:parseFloat(this.state.formControls.cantidad_segunda.value),
            tipo:'No primera' ,
            maquina_id: this.state.maquina,
            operarios_id:this.state.operario,
            fecha: this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate(),
            
            
        };

        const datoGuardarinv = {
            productos_id: this.state.referencia,
            cantidad_mov:parseFloat(this.state.formControls.cantidad_segunda.value),
            valor:parseFloat(this.state.formControls.valor.value),
            foto: this.state.foto,
            observaciones:"Ingreso de segunda",
            
            
            
        };


    axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Inventario_seg`, (datoGuardarinv))
    .then(res => {
            
        console.log(res);
        console.log(res.data.id);
        //this.reset();

        //this.componentDidMount();

        
    })
    .catch((error) => {
        console.log(error);
    })
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
               // this.reset();
    
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
            opensegunda: false
        });
     
    }
        
}}




export default Produccion;

