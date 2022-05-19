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
import Snackbar from '@material-ui/core/Snackbar';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SaveIcon from '@material-ui/icons/Save';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


class Gastomateriales extends Component {
    state = {
        fecha:new Date(),

        productos: [],
        open: false,
        Sopen: false,
        maquinas:[],
        operarios:[],
        materia_primas: [],
        pedido:[{pedido_item_id:'',pedido_id:'',unidades:0}],

        fechaactual: "2019-12-24",
        Colores: [{ porcentaje: "", rgblist: "#FFFF" }],
        MaterialesAdicionales: [{ cantidad: "", id: "", unidades: "",valoriva:"" }],
        Mater: [{ nombre: "", id: "", valor: "", cantidad: "", total: "", referencia: "", unidades: "",valoriva:"" }],
       
        precio_estimado: "",
        formControls: {
            cliente: {
                value: ''
            },
            nit: {
                value: ''
            },

            direccion: {
                value: ''
            },

            ciudad: {
                value: ''
            },
            telefono: {
                value: ''
            },
            observaciones: {
                value: ''
            },
            subtotal: {
                value: 0
            },
            iva: {
                value: 19
            },
            total: {
                value: 0
            },
            descuento: {
                value: 0
            },
            fecha_vencimiento: {
                value: ''
            },

        }
    };

    reset(){
        document.getElementById("form-inside-input").reset();
        this.setState({   

            maquina:'',
            operario:'',
            productos: [],
            open: false,
            items:[],
            Sopen: false,
           // maquinas:[],
            //operarios:[],
            pedido:[{pedido_item_id:'',pedido_id:'',unidades:0}],
    
            fechaactual: "2019-12-24",
            Colores: [{ porcentaje: "", rgblist: "#FFFF" }],
            MaterialesAdicionales: [{ cantidad: "", id: "", unidades: "",valoriva:"" }],
            Mater: [{ nombre: "", id: "", valor: "", cantidad: "", total: "", referencia: "", unidades: "",valoriva:"" }],
           
            precio_estimado: "",
            formControls: {
                cliente: {
                    value: ''
                },
                nit: {
                    value: ''
                },
    
                direccion: {
                    value: ''
                },
    
                ciudad: {
                    value: ''
                },
                telefono: {
                    value: ''
                },
                observaciones: {
                    value: ''
                },
                subtotal: {
                    value: 0
                },
                iva: {
                    value: 19
                },
                total: {
                    value: 0
                },
                descuento: {
                    value: 0
                },
                fecha_vencimiento: {
                    value: ''
                },
    
            }

             })

    }
    calcular = () => {
        var descuento =isNaN(parseFloat(this.state.formControls.descuento.value)) ? 0 : parseFloat(this.state.formControls.descuento.value);
       
        var subtotal = isNaN(Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0);
        var totaliva = isNaN(Object.values(this.state.MaterialesAdicionales).reduce((t, { valoriva }) => t + valoriva, 0)) ? 0 : Object.values(this.state.MaterialesAdicionales).reduce((t, { valoriva }) => t + valoriva, 0);
        var subtotaldesc = Math.round(subtotal * (1-(descuento/100)));
        this.setState({ subtotal: subtotaldesc })
        var iva = Math.round(totaliva* (1-(descuento/100)));//subtotaldesc * 0.19;
        this.setState({ iva: iva });

        var total = subtotaldesc + iva;
        this.setState({ total: total })
        console.log(this.state);
    }
    handleChangecombo(event) {
        this.setState({ ...this.state, [event.target.name]: Number(event.target.value) || '' });
    };
    handleDescuento(event){
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
    handleChangecombo_maquina (event)   {
        console.log(event);
        this.setState({maquina:event.target.value})
        console.log(this.state);

        var fecha = this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate();
            axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/pedido/`+event.target.value+'/'+fecha)
            .then(res => {
              const ms = res.data;
              if (ms.length ===0){alert("No hay produccion");
              this.reset();

              }else{
              this.setState({pedido:ms[0]});
                console.log(ms);


                axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto/foto/`+ms[0].referencia)
                .then(res2 => {
                  console.log(res2);
                 // const productos = res.data;
                  
                  this.setState({ items: res2.data[0].foto });
                  
                  // setPersonsState(PersonState=persona);
          
                }
                )
               
              }
            
        
           
          });

  };
  handlechangefecha_ini(event){
    this.reset();
    if (event===undefined){}
    else{
    console.log(event);
       this.setState({fecha:event});
      }}

    handleColorNameChangeMateriales = idx => evt => {
        const newMateriales = this.state.MaterialesAdicionales.map((Mate, sidx) => {
            //const val = evt.target.value - 1;
            var valor_metros = isNaN(parseFloat(this.state.Mater[idx].valor)) ? 0 : parseFloat(this.state.Mater[idx].valor);
            //var valor_metros =this.state.Mater[idx].valor;
            var cantidad = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value);
            var total_valor = Math.round(valor_metros * cantidad);
            var unidades = this.state.Mater[idx].unidades * cantidad;
            if (idx !== sidx) return Mate;
            return { ...Mate, unidades: unidades, cantidad: evt.target.value, id: "", total: total_valor,valoriva: ((this.state.Mater[idx].valoriva)/100)*total_valor}
        });

        this.setState({ MaterialesAdicionales: newMateriales }, this.calcular);

    };
    handleChangecomboprod = idx => evt => {

        const newMateriales = this.state.Mater.map((Mate, sidx) => {
            if (idx !== sidx) return Mate;
            console.log(evt);
            const val = evt.target.value - 1;
            //console.log(this.state.productos[val].precio_estimado);
            var productofind =(this.state.productos.find(valores => valores.id === evt.target.value));
            console.log(productofind);
            console.log(this.state.MaterialesAdicionales[sidx].cantidad);
            var valor_metros = Math.round(productofind.precio_estimado * productofind.unidades_por_mts);
            var unidades = productofind.unidades_por_mts;
            var total_valor = Math.round(valor_metros * this.state.MaterialesAdicionales[sidx].cantidad);
            if (evt.target.value === "") return { ...Mate, id: evt.target.value, valor: "" };
            return { ...Mate, unidades: unidades, referencia: productofind.referencia, id: evt.target.value, valor: valor_metros, cantidad: this.state.MaterialesAdicionales[sidx].cantidad, total: total_valor, nombre: productofind.nombre,valoriva:productofind.iva };
        });

        this.setState({ Mater: newMateriales });

        const newMateriales2 = this.state.MaterialesAdicionales.map((Mate, sidx) => {
            //const val = evt.target.value - 1;
          
            if (idx !== sidx) return Mate;
            return { ...Mate, unidades: "", cantidad: "", id: "", total: "",valoriva:"" }
        });

        this.setState({ MaterialesAdicionales: newMateriales2 }, this.calcular);

        console.log(this.state);
        /*     var costocolor = isNaN(Object.values(this.state.color).reduce((t, { valor }) => t + valor, 0)) ? 0 : Object.values(this.state.color).reduce((t, { valor }) => t + valor, 0);
            var costomaterial = isNaN(Object.values(this.state.Mater).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.Mater).reduce((t, { total }) => t + total, 0);
            var costooperario = isNaN(parseFloat(this.state.valor_operario.value)) ? 0 : parseFloat(this.state.valor_operario.value);
            console.log(costooperario);
            var costo = costocolor + costomaterial;
            costo = costo + costooperario;
            this.setState({ Costo_estimado: costo });
            var precio = ((parseFloat(this.state.formControls.margen.value) / 100) * costo) + costo;
            this.setState({ precio_estimado: precio });
            console.log(this.state);
            console.log(evt);
            */
        //  this.setState({rgblist:[...this.state.rgblist,this.state.colors[evt.target.value -1].rgb]});
        //console.log(this.state);


    };



    handleAddMat = () => {
        this.setState({
            Mater: this.state.Mater.concat([{ nombre: "", id: "", valor: "", cantidad: "", total: "", referencia: "", unidades: "" }]),
            MaterialesAdicionales: this.state.MaterialesAdicionales.concat([{ cantidad: "" }])
        });
        console.log(this.state);
    };

    handleRemoveMate = idx => () => {
        this.setState({
            MaterialesAdicionales: this.state.MaterialesAdicionales.filter((s, sidx) => idx !== sidx)
        },this.calcular);
    };
    

    diaactual() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }
        today = yyyy + '-' + mm + '-' + dd;

        this.setState({ fechaactual: today });
        return today;
    }



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
    componentDidUpdate() {



    }
    componentDidMount() {
        
    axios.get(process.env.REACT_APP_URL_LARAVEL + `/api/materia_prima`)
    .then(res4 => {
      const resultado4 = res4.data;

      this.setState({ materia_primas: resultado4 });

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
today (){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + '-' + mm + '-' + dd;
    this.setState({fecha_vencimiento:today})
}
    render() {
        

        return (

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
                          <InputLabel htmlFor="age-simple">Cliente {this.state.pedido.cliente}</InputLabel>
                          <br/>
                          <br/>
               <InputLabel htmlFor="age-simple">Escoge fecha real de fabricación</InputLabel>
  <DatePicker selected={this.state.fecha} onChange={this.handlechangefecha_ini.bind(this)}  />
  
  <br/>
                          <br/>
  
  <InputLabel htmlFor="age-simple">Máquina</InputLabel>
                          <Select
                              fullWidth
                              id="maquina"
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
                          <InputLabel htmlFor="age-simple">Materia prima</InputLabel>
                          <Select
                              fullWidth
                              id="materia_prima"
                              name="materia_prima"
                              value={Number(this.state.materia_prima)}
                              onChange={this.handleChangecombo.bind(this)}
                              input={<Input id="age-simple" />}
                          >
  
                              <MenuItem value="">
  
                                  <em>None</em>
                              </MenuItem>
                              
                              
                              {
                                  this.state.materia_primas.map((id, index) =>
                                  
                                  <MenuItem key={id.id} value={id.id}>{id.nombre} </MenuItem>
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
                              value={this.state.cantidad_usada} onChange={this.handleChange.bind(this)}
                              type="number"
                              required="true"
                              margin="dense"
                              
                              id="cantidad_usada"
                              label="Cantidad usada"
                              name="cantidad_usada"
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
          
          
       




              
            

        )
    }
}

function handleClose2() {
    this.setState({
        Sopen: false
    });
}






function handleClose() {
    this.setState({
        open: false
    });
}

function guardar(event) {
    console.log(this.state);
    event.preventDefault();
    // const datoGuardar = {
    //     mat_prim: this.state.materia_prima,
    //     val: -this.state.formControls.cantidad_usada.value
        
    // };

    const datoGuardarmov = {
        materia_prima_id:this.state.materia_prima,
        maquina_id: this.state.maquina,
        pedido_items_id: this.state.pedido.id,
        operarios_id:this.state.operario,
        cantidad: this.state.formControls.cantidad_usada.value,
        fecha: this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate(), 
   
        
        
        
    };
    //console.log(datoGuardar);
    console.log(this.state);
    axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_materiales`, (datoGuardarmov))
        .then(res => {
                
            console.log(res);
            console.log(res.data.id);
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

    // axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_materiales/inventario/`, (datoGuardar))
    //     .then(res => {

    //         console.log(res);
    //         console.log(res.data.id);

    //     })
    //     .catch((error) => {


    //         // Error
    //         if (error.response) {
    //             // The request was made and the server responded with a status code
    //             // that falls out of the range of 2xx
    //             console.log(error.response.data);
    //             console.log(error.response.status);
    //             console.log(error.response.headers);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             // `error.request` is an instance of XMLHttpRequest in the 
    //             // browser and an instance of
    //             // http.ClientRequest in node.js
    //             console.log(error.request);
    //         } else {
    //             // Something happened in setting up the request that triggered an Error
    //             console.log('Error', error.message);
    //         }
    //         this.setState({ Sopen: true });
    //         console.log(error.config);
    //     });

    // console.log(this.state.tipo);

    this.setState({
        open: false
    });
}




export default Gastomateriales;
