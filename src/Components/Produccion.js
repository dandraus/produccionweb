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

import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';




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
       datos: [],
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

        
            axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/pedido/`+event.target.value)
            .then(res => {
              const ms = res.data;
              this.setState({pedido:ms[0]});
                console.log(ms);
             
            
        
           
          });

  };

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
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_inventario`)
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
                    pageSize: 20
                }}
                    columns={[
                        { title: 'Pedido ', field: 'pedido_items.pedido_id'},
                        { title: 'Referencia', field: 'pedido_items.referencia'},
                        { title: 'Total pedido', field: 'total' },
                        { title: '# Primera', field: 'primera' },
                        { title: '# Segunda', field: 'segunda' },
                        { title: '# Tercera', field: 'tercera' },
                        { title: '# Despachado', field: 'despachado' },
                       
                        { title: 'Creado', field: 'created_at', editable: 'never' },
                        { title: 'Actualizado', field: 'updated_at', editable: 'never' }

                    ]}
                    data={this.state.datos}
                    title="Inventario pedidos"
                    


                />

                <Fab color="primary" aria-label="add" className={'daniel'} onClick={handleClickOpen.bind(this)}>
                    <AddIcon />
                </Fab>


                <Dialog open={this.state.open} onClose={handleClose.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Ingreso de producción</DialogTitle>
                    <DialogContent>

               
                     
               
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          
        >

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
                            
                            id="cantidad_fabricada"
                            label="Cantidad fabricada"
                            name="cantidad_fabricada"
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
        open: false
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

    event.preventDefault();
    const datoGuardar = {
        ped_id: this.state.pedido.id,
        val: this.state.pedido.unidades,
        pri: this.state.formControls.cantidad_fabricada.value,
        seg: 0,
        ter:0,
        des:0
        
    };

    const datoGuardarmov = {
        pedido_items_id: this.state.pedido.id,
        total: this.state.formControls.cantidad_fabricada.value,
        tipo:'Primera' ,
        maquina_id: this.state.maquina,
        operarios_id:this.state.operario,
        
        
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

            this.componentDidMount();

            console.log(this.state.datos);
            this.reset();
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




export default Produccion;

