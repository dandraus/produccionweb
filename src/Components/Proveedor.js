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

class Proveedor extends Component {
    state = {
        datos: [],
       
        open: false,
        Sopen: false,
        formControls: {
            razon_social: {
                value: ''
            },
            nit: {
                value: ''
            },
            direccion: {
                value: ''
            },
            telefono: {
                value: ''
            }

        }
    };
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
    componentDidUpdate() {



    }
    componentDidMount() {
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Proveedor`)
        .then(res2 => {
            const resultado2 = res2.data;

            this.setState({ datos: resultado2 });
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
                        { title: 'Razón social', field: 'razon_social'},
                        { title: 'Nit', field: 'nit' },
                        { title: 'Dirección', field: 'direccion' },
                        { title: 'Teléfono', field: 'telefono' },                     
                        { title: 'Creado', field: 'created_at', editable: 'never' },
                        { title: 'Actualizado', field: 'updated_at', editable: 'never' }

                    ]}
                    data={this.state.datos}
                    title="Proveedor"
                    editable={{
                        onRowAdd: console.log('agrege row'),
                        onRowUpdate: (newData, oldData) =>

                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    // eslint-disable-next-line no-lone-blocks
                                    {
                                        actualizar(newData);
                                        let data = this.state.datos;
                                        const index = data.indexOf(oldData);
                                        data[index] = newData;
                                        this.setState({ data }, () => resolve());

                                    }
                                    resolve()
                                }, 1000)
                            }),
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
                    <DialogTitle id="form-dialog-title">Proveedor</DialogTitle>
                    <DialogContent>

                        <DialogContentText>
                            Crear proveedor
          </DialogContentText>
                     
               
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          
        >

                   
                    
                                 <TextField
                            value={this.state.razon_social} onChange={this.handleChange.bind(this)}
                            required="true"
                            margin="dense"
                            id="razon_social"
                            label="Razón social"
                            name="razon_social"
                            fullWidth
                        />
                                <TextField
                            value={this.state.nit} onChange={this.handleChange.bind(this)}
                            required="true"
                            margin="dense"
                            id="nit"
                            label="Nit"
                            name="nit"
                            fullWidth
                        />
                                <TextField
                            value={this.state.direccion} onChange={this.handleChange.bind(this)}
                            required="true"
                            margin="dense"
                            id="direccion"
                            label="Dirección"
                            name="direccion"
                            fullWidth
                        />
                        <TextField
                            value={this.state.telefono} onChange={this.handleChange.bind(this)}
                            type='number'
                            margin="dense"
                            id="telefono"
                            label="Telefono"
                            name="telefono"
                            required="true"
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

    axios.delete(process.env.REACT_APP_URL_LARAVEL+`/api/Proveedor/${nuevodato.id}`)
        .then(res => {

            console.log(res.data.id);

        })

}


function actualizar(nuevodato) {

    axios.put(process.env.REACT_APP_URL_LARAVEL+`/api/Proveedor/${nuevodato.id}`, nuevodato)
        .then(res => {

            console.log(res.data.id);

        })

}

function guardar(event) {

    event.preventDefault();
    const datoGuardar = {
       
        razon_social: this.state.formControls.razon_social.value,
        nit: this.state.formControls.nit.value,
        direccion: this.state.formControls.direccion.value,
        telefono: this.state.formControls.telefono.value,

       
        
    };
    console.log(datoGuardar);
    console.log(this.state);

    axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Proveedor`, (datoGuardar))
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




export default Proveedor;

