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

class Compras extends Component {
    state = {
       datos: [],
       materia_primas:[],
       proveedores:[],
       tipo_unidades:[],
    
        open: false,
        Sopen: false,
        formControls: {
            materia_prima_id: {
                value: ''
            },
            cantidad: {
                value: ''
            },
            tipo_unidades_id: {
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
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Compras`)
        .then(res2 => {
            const resultado2 = res2.data;

            this.setState({ datos: resultado2 });
            //   console.log(this.state.datos);
            // setPersonsState(PersonState=persona);

        })
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/materia_prima`)
        .then(res => {
            const resultado = res.data;

            this.setState({ materia_primas: resultado });
            //   console.log(this.state.datos);
            // setPersonsState(PersonState=persona);

        })
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Proveedor`)
        .then(res3 => {
            const resultado3 = res3.data;

            this.setState({ proveedores: resultado3 });
            //   console.log(this.state.datos);
            // setPersonsState(PersonState=persona);

        })
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/tipo_unidades`)
        .then(res4 => {
            const resultado4 = res4.data;

            this.setState({ tipo_unidades: resultado4 });
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
                        { title: 'Materia prima', field: 'materia_prima.nombre'},
                        { title: 'Cantidad', field: 'cantidad' },
                        { title: 'tipo_unidades', field: 'tipo_unidades.nombre' },
                        { title: 'Valor Unit', field: 'valor_unitario',  type: 'currency',
                        currencySetting:{  minimumFractionDigits: 0, maximumFractionDigits: 0 },
                        editComponent: props => (
                            <input
                              type="numeric"
                              value={props.value}
                              onChange={e => props.onChange(e.target.value)}
                            />
                          ) },                    
                        { title: 'Valor', field: 'valor',  type: 'currency',
                        currencySetting:{  minimumFractionDigits: 0, maximumFractionDigits: 0 },
                        editComponent: props => (
                            <input
                              type="numeric"
                              value={props.value}
                              onChange={e => props.onChange(e.target.value)}
                            />
                          ) },                     
                        { title: 'Proveedor', field: 'proveedor.razon_social' },                     
                        { title: 'Creado', field: 'created_at', editable: 'never' },
                        { title: 'Actualizado', field: 'updated_at', editable: 'never' }

                    ]}
                    data={this.state.datos}
                    title="Compras"
                    editable={{
                     
                     
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        eliminar(oldData);
                                        let data = this.state.datos;
                                        const index = data.indexOf(oldData);
                                        data.splice(index, 1);
                                        this.setState({ data }, () => resolve());
                                    }
                                    resolve()
                                }, 1000)
                            }),
                    }}


                />

                <Fab color="primary" aria-label="add" className={'daniel'} onClick={handleClickOpen.bind(this)}>
                    <AddIcon />
                </Fab>


                <Dialog open={this.state.open} onClose={handleClose.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Compras</DialogTitle>
                    <DialogContent>

                        <DialogContentText>
                            Compras
          </DialogContentText>
                     
               
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          
        >

<InputLabel htmlFor="age-simple">Materia Prima</InputLabel>
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
                                
                                <MenuItem key={id.id} value={id.id}>{id.nombre}</MenuItem>
                            )}

                          
                        </Select>

                    
                                 <TextField
                            value={this.state.cantidad} onChange={this.handleValor.bind(this)}
                            type="number"
                            required="true"
                            margin="dense"
                            
                            id="cantidad"
                            label="Cantidad"
                            name="cantidad"
                            fullWidth
                        />

<InputLabel htmlFor="age-simple">Tipo unidad</InputLabel>
                        <Select
                            fullWidth
                            id="tipo_unidad"
                            name="tipo_unidad"
                            value={Number(this.state.tipo_unidad)}
                            onChange={this.handleChangecombo.bind(this)}
                            input={<Input id="age-simple" />}
                        >

                            <MenuItem value="">

                                <em>None</em>
                            </MenuItem>
                            
                            
                            {
                                this.state.tipo_unidades.map((id, index) =>
                                
                                <MenuItem key={id.id} value={id.id}>{id.nombre}</MenuItem>
                            )}

                          
                        </Select>
                            <TextField
                            value={this.state.valor} onChange={this.handleValor.bind(this)}
                            type="number"
                            required="true"
                            margin="dense"
                            id="valor"
                            label="Valor"
                            name="valor"
                            fullWidth
                        />


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

<InputLabel htmlFor="age-simple">Proveedor</InputLabel>
                        <Select
                            fullWidth
                            id="proveedor"
                            name="proveedor"
                            value={Number(this.state.proveedor)}
                            onChange={this.handleChangecombo.bind(this)}
                            input={<Input id="age-simple" />}
                        >

                            <MenuItem value="">

                                <em>None</em>
                            </MenuItem>
                           
                            
                            {
                                this.state.proveedores.map((id, index) =>
                                
                                <MenuItem key={id.id} value={id.id}>{id.razon_social}</MenuItem>
                            )}

                          
                        </Select>

                                
                   
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
        materia_prima_id: this.state.materia_prima,
        cantidad: this.state.formControls.cantidad.value,
        tipo_unidades_id: this.state.tipo_unidad,
        valor_unitario: this.state.valor_unitario,
        valor: this.state.formControls.valor.value,
        proveedor_id: this.state.proveedor,
        
    };
    console.log(datoGuardar);
    console.log(this.state);

    axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Compras`, (datoGuardar))
        .then(res => {

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




export default Compras;

