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
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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

class Operarios extends Component {
    state = {
        datos: [],
        open: false,
        tipo: '',
        tipos_operarios:[],
        Sopen: false,
        formControls: {
            nombre: {
                value: ''
            },
            apellido: {
                value: ''
            },
            tipo_operario: {
                value: ''
            },
            telefono: {
                value: ''
            },
            fecha_inicio: {
                value: ''
            },
            cumple: {
                value: ''
            },
            fecha_fin: {
                value: ''
            },
            identificacion: {
                value: ''
            },
            eps: {
                value: ''
            },
            arl: {
                value: ''
            },

        }
    }

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

        axios.get(process.env.REACT_APP_URL_LARAVEL + `/api/Operarios/`)
            .then(res => {
                const resultado = res.data;

                this.setState({ datos: resultado });
                console.log(this.state.datos);
                // setPersonsState(PersonState=persona);

            });

            axios.get(process.env.REACT_APP_URL_LARAVEL + `/api/tipo_operario/`)
            .then(res => {
                const resultado = res.data;

                this.setState({ tipos_operarios: resultado });
                console.log(this.state.datos);
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

                        { title: 'Tipo', field: 'tipo_operario.tipo' },
                        { title: 'Nombre', field: 'nombre' },
                        { title: 'Apellido', field: 'apellido' },
                        { title: 'Telefono', field: 'telefono' },
                        { title: 'Identificacion', field: 'identificacion' },
                        { title: 'EPS', field: 'eps' },
                        { title: 'ARL', field: 'arl' },
                        { title: 'Cumple', field: 'cumple' },
                        { title: 'Fecha Inicio', field: 'fecha_inicio' },
                        { title: 'Fecha Fin', field: 'fecha_fin' },



                    ]}
                    data={this.state.datos}
                    title="Operarios"
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
                    <DialogTitle id="form-dialog-title">Nuevo tipo de operario</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Caracterizar a los operarios por habilidad
          </DialogContentText>
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          
        >

                        <TextField
                            value={this.state.nombre} onChange={this.handleChange.bind(this)}
                            autoFocus
                            required="true"
                            margin="dense"
                            id="nombre"
                            label="Nombre"
                            name="nombre"
                            fullWidth
                        />
                        <TextField
                            value={this.state.apellido} onChange={this.handleChange.bind(this)}
                            required="true"
                            margin="dense"
                            id="apellido"
                            label="Apeliido"
                            name="apellido"
                            fullWidth
                        />
                                 <TextField
                            value={this.state.identificacion} onChange={this.handleChange.bind(this)}
                            required="true"
                            margin="dense"
                            id="identificacion"
                            label="Identificación"
                            name="identificacion"
                            fullWidth
                        />
                                <TextField
                            value={this.state.eps} onChange={this.handleChange.bind(this)}
                            required="true"
                            margin="dense"
                            id="eps"
                            label="EPS"
                            name="eps"
                            fullWidth
                        />
                                <TextField
                            value={this.state.arl} onChange={this.handleChange.bind(this)}
                            required="true"
                            margin="dense"
                            id="arl"
                            label="ARL"
                            name="arl"
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
                           <TextField
                            value={this.state.cumple} onChange={this.handleChange.bind(this)}
                            type='date'
                            margin="dense"
                            id="cumple"
                            label="Cumpleaños"
                            name="cumple"
                            fullWidth
                            required="true"
                        />
                          <TextField
                            value={this.state.fecha_inicio} onChange={this.handleChange.bind(this)}
                            type='date'
                            margin="dense"
                            id="fecha_inicio"
                            label="Fecha inicio"
                            name="fecha_inicio"
                            required="true"
                            fullWidth
                        />
                              {/* <TextField
                            value={this.state.fecha_fin} onChange={this.handleChange.bind(this)}
                            type='date'
                            margin="dense"
                            id="fecha_fin"
                            label="Fecha fin"
                            name="fecha_fin"
                            fullWidth
                        /> */}
                       
                        <InputLabel htmlFor="age-simple">Tipo de operario</InputLabel>
                        <Select
                            fullWidth
                            id="tipo_operario"
                            name="tipo_operario"
                            required="true"
                            value={Number(this.state.tipo_operario)}
                            onChange={this.handleChangecombo.bind(this)}
                            input={<Input id="age-simple" />}
                        >

                            <MenuItem value="">

                                <em>None</em>
                            </MenuItem>
                            {console.log(this.state.tipos_operarios)}
                            {this.state.tipos_operarios.map((id, index) =>

                                <MenuItem key={id.id} value={id.id}>{id.tipo}</MenuItem>
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

    axios.delete(process.env.REACT_APP_URL_LARAVEL + `/api/Operarios/${nuevodato.id}`)
        .then(res => {

            console.log(res.data.id);

        })

}


function actualizar(nuevodato) {

    axios.put(process.env.REACT_APP_URL_LARAVEL + `/api/Operarios/${nuevodato.id}`, nuevodato)
        .then(res => {

            console.log(res.data.id);

        })

}

function guardar(event) {

    event.preventDefault();
   
    const datoGuardar = {
      
        nombre: this.state.formControls.nombre.value,
        apellido: this.state.formControls.apellido.value,
        tipo_operario_id: this.state.tipo_operario,
        telefono:this.state.formControls.telefono.value,
        cumple:this.state.formControls.cumple.value,
        fecha_inicio:this.state.formControls.fecha_inicio.value,
        //fecha_fin:this.state.formControls.fecha_fin.value,
        fecha_fin:"",
        identificacion:this.state.formControls.identificacion.value,
        eps:this.state.formControls.eps.value,
        arl:this.state.formControls.arl.value,
    };

    axios.post(process.env.REACT_APP_URL_LARAVEL + `/api/Operarios/`, datoGuardar)
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




export default Operarios;

