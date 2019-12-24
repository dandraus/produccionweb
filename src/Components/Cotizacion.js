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



const useStyles = makeStyles(theme => ({
    fab: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));


class Producto_crear extends Component {
    state = {
    
        productos: [],
        open: false,
        Sopen: false,

        fechaactual:"2019-12-24", 
        Colores: [{ porcentaje: "", rgblist: "#FFFF" }],
        MaterialesAdicionales: [{ cantidad: "", id: "",unidades:"" }],
        Mater: [{ nombre: "", id: "", valor: "", cantidad: "", total: "",referencia:"",unidades:"" }],

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
            fecha_vencimiento: {
                value: ''
            },

        }
    };

    
    calcular = () => {

        var subtotal = isNaN(Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0);
        this.setState({ subtotal: subtotal })
        var iva = subtotal * 0.19;
        this.setState({ iva: iva })

        var total = subtotal + iva;
        this.setState({ total: total })
        console.log(this.state);
    }
    handleColorNameChangeMateriales = idx => evt => {
        const newMateriales = this.state.MaterialesAdicionales.map((Mate, sidx) => {
            //const val = evt.target.value - 1;
            var valor_metros = isNaN(parseFloat(this.state.Mater[idx].valor)) ? 0 : parseFloat(this.state.Mater[idx].valor);
            //var valor_metros =this.state.Mater[idx].valor;
            var cantidad = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value);
            var total_valor = Math.round(valor_metros * cantidad);
            var unidades = this.state.Mater[idx].unidades * cantidad;
            if (idx !== sidx) return Mate;
            return { ...Mate, unidades:unidades,cantidad: evt.target.value, id: "", total: total_valor }
        });

        this.setState({ MaterialesAdicionales: newMateriales }, this.calcular);

    };
    handleChangecomboprod = idx => evt => {

        const newMateriales = this.state.Mater.map((Mate, sidx) => {
            if (idx !== sidx) return Mate;
            console.log(evt);
            const val = evt.target.value - 1;
            console.log(this.state.productos[val].precio_estimado);
            console.log(this.state.MaterialesAdicionales[sidx].cantidad);
            var valor_metros = Math.round(this.state.productos[val].precio_estimado * this.state.productos[val].unidades_por_mts);
            var unidades =this.state.productos[val].unidades_por_mts;
            var total_valor = Math.round(valor_metros * this.state.MaterialesAdicionales[sidx].cantidad);
            if (evt.target.value === "") return { ...Mate, id: evt.target.value, valor: "" };
            return { ...Mate,unidades:unidades,referencia:this.state.productos[val].referencia , id: evt.target.value, valor: valor_metros, cantidad: this.state.MaterialesAdicionales[sidx].cantidad, total: total_valor,nombre:this.state.productos[val].nombre};
        });

        this.setState({ Mater: newMateriales });
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
            Mater: this.state.Mater.concat([{ nombre: "", id: "", valor: "", cantidad: "", total: "" ,referencia:"",unidades:""}]),
            MaterialesAdicionales: this.state.MaterialesAdicionales.concat([{ cantidad: "" }])
        });
        console.log(this.state);
    };

    handleRemoveMate = idx => () => {
        this.setState({
            MaterialesAdicionales: this.state.MaterialesAdicionales.filter((s, sidx) => idx !== sidx)
        });
    };
   
 diaactual(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+dd
    } 
    
    if(mm<10) {
        mm = '0'+mm
    } 
    today = yyyy + '-' + mm + '-' + dd;
    
    this.setState({fechaactual:today});
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
     

        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto`)
            .then(res4 => {
                const resultado4 = res4.data;

                this.setState({ productos: resultado4 });
                console.log(this.state);
                // setPersonsState(PersonState=persona);

            })




    }

    render() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        } 
        today = yyyy + '-' + mm + '-' + dd;
        
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




                {/* <Fab color="primary" aria-label="add" className={'daniel'} onClick={handleClickOpen.bind(this)}>
                    <AddIcon />
                </Fab> */}

                <TextField
                    name="cliente"
                    value={this.state.cliente} onChange={this.handleChange.bind(this)}
                    label="Cliente"
                    fullWidth

                />

                <TextField
                    name="nit"
                    value={this.state.nit} onChange={this.handleChange.bind(this)}
                    label="Nit"
                    fullWidth

                />


                <TextField
                    name="direccion"

                    value={this.state.direccion} onChange={this.handleChange.bind(this)}
                    label="Direccion"
                    fullWidth
                />



                <TextField
                    name="ciudad"
                    //type="number"
                    label="Ciudad"
                    value={this.state.ciudad} onChange={this.handleChange.bind(this)}
                    fullWidth

                />



                <TextField
                    name="telefono"
                    //   type="number"
                    label="Telefono"
                    value={this.state.telefono} onChange={this.handleChange.bind(this)}
                    fullWidth

                />
                <TextField
                    name="observaciones"
                    multiline
                    label="Observaciones"
                    value={this.state.observaciones} onChange={this.handleChange.bind(this)}
                    fullWidth
                />

                <TextField
                    name="fecha_vencimiento"
                    type='date'
                    defaultValue={today}
                    label="Fecha de vencimiento"
                    value={this.state.fecha_vencimiento} onChange={this.handleChange.bind(this)}
                    fullWidth
                />


                <hr></hr>

                {this.state.MaterialesAdicionales.map((Mater, idx) => (
                    <div style={{ justifyContent: 'right' }}>
                        <Select
                            style={{ width: 200 }}
                            id="producto"
                            name="producto"
                            //value={Mate.name}
                            //style={{backgroundColor:this.state.color[idx].rgblist}}
                            onChange={this.handleChangecomboprod(idx)}
                            input={<Input id="producto" />}
                        >

                            <MenuItem value="">

                                <em>None</em>
                            </MenuItem>

                            {console.log(this.state)}
                            {
                                this.state.productos.map((id, index) =>

                                    <MenuItem

                                        key={id.id} value={id.id}>  <div><img src={process.env.REACT_APP_URL_LARAVEL +"uploads/"+ id.foto} height="30px" width="30px"/> {id.nombre} </div> </MenuItem>
                                )}


                        </Select>

                        <TextField
                            defaultValue="Cantidad"
                            label="Cantidad"
                            value={Mater.cantidad}
                            onChange={this.handleColorNameChangeMateriales(idx)}
                        />
                        <TextField

                            label="Valor mts"
                            defaultValue="Valor mts"

                            value={this.state.Mater[idx].valor}

                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        <TextField

                            label="Valor total"
                            defaultValue="Valor total"

                            value={this.state.MaterialesAdicionales[idx].total}

                            InputProps={{
                                readOnly: true,
                            }}
                        />

                        <Button
                            color="primary"
                            size="large"
                            variant="contained"
                            onClick={this.handleAddMat}
                            className={useStyles}

                        >
                            +
        </Button>
                        <Button
                            color="primary"
                            size="large"
                            variant="contained"
                            onClick={this.handleRemoveMate(idx)}
                            className={useStyles}

                        >
                            -
        </Button>

                        {/* <InputLabel htmlFor="age-simple">Color</InputLabel> */}




                    </div>
                ))}





                <hr></hr>
                <TextField

                    label="Subtotal"
                    defaultValue="Subtotal"
                    type="currency"
                    fullWidth
                    value={
                        this.state.subtotal
                    }
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />

                <TextField

                    label="IVA"
                    defaultValue="IVA"
                    fullWidth
                    type="currency"
                    value={
                        this.state.iva
                    }
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField

                    label="TOTAL"
                    defaultValue="TOTAL"
                    fullWidth
                    type="currency"
                    value={
                        this.state.total
                    }
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />


                <hr>

                </hr>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={useStyles}
                    startIcon={<SaveIcon />}
                    onClick={guardar.bind(this)}
                >
                    Guardar
      </Button>


            </div>


        )
    }
}

function handleClose2() {
    this.setState({
        Sopen: false
    });
}








function guardar(event) {



            event.preventDefault();
            var idprod = '';
            const datoGuardar = {
                fecha_vencimiento: this.state.formControls.fecha_vencimiento.value,
                cliente: this.state.formControls.cliente.value,
                nit: this.state.formControls.nit.value,
                direccion: this.state.formControls.direccion.value,
                ciudad: this.state.formControls.ciudad.value,
                telefono: this.state.formControls.telefono.value,
                observaciones: this.state.formControls.observaciones.value,
                subtotal: this.state.subtotal,
                iva: this.state.iva,
                total: this.state.total,
                

            };
            

            console.log(datoGuardar);
            console.log(this.state);
          

            axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Cotizacion`, datoGuardar)
        .then(res => {
            this.setState({ guardarprod: [] });
            idprod = res.data.id;
            var newprod = this.state.Mater.map((value, index) => {

                var newProductos = this.state.guardarprod.concat({ cotizacion_id: idprod, referencia:value.referencia, descripcion:value.nombre, cantidad_m2: this.state.MaterialesAdicionales[index].cantidad,cantidad_ml:0,unidades:this.state.MaterialesAdicionales[index].unidades,valor_m:value.valor,iva:19,total:this.state.MaterialesAdicionales[index].total })
        
                this.setState({
                    guardarprod: [...this.state.guardarprod, { cotizacion_id: idprod, referencia:value.referencia, descripcion: value.nombre, cantidad_m2: this.state.MaterialesAdicionales[index].cantidad,cantidad_ml:0,unidades:this.state.MaterialesAdicionales[index].unidades,valor_m:value.valor,iva:19,total:this.state.MaterialesAdicionales[index].total }],
                })
        
        
                //return newColores;
              });
              axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Cotizacion_items`, (this.state.guardarprod))
              .then(res6 => {
    
                console.log(res6);
                console.log(res6.data.id);
    
                //this.componentDidMount();
    
                // console.log(this.state.datos);
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
    
  
        
        
            console.log(res);
            console.log(res.data.id);

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




export default Producto_crear;

