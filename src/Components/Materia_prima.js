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

class Materia_prima extends Component {
    state = {
        datos: [],
        tipos_unidades: [],
        open: false,
        Sopen: false,
        formControls: {
            nombre: {
                value: ''
            },
            unidad: {
                value: ''
            },
            tipo_unidad: {
                value: ''
            },
            valor: {
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

        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/materia_prima`)
            .then(res => {
                const resultado = res.data;

                this.setState({ datos: resultado });
                console.log(this.state.datos);
                // setPersonsState(PersonState=persona);

            })

        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/tipo_unidades`)
            .then(res2 => {
                const resultado2 = res2.data;

                this.setState({ tipos_unidades: resultado2 });
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
                    columns={[
                        { title: 'id', field: 'id', editable: 'never' },
                        { title: 'Nombre', field: 'nombre' },
                        { title: 'Unidad', field: 'unidad' },
                        { title: 'Tipo Unidad', field: 'tipo_unidad.nombre' },
                        { title: 'Valor', field: 'valor',  type: 'currency',
                        currencySetting:{  minimumFractionDigits: 0, maximumFractionDigits: 0 },
                        editComponent: props => (
                            <input
                              type="numeric"
                              value={props.value}
                              onChange={e => props.onChange(e.target.value)}
                            />
                          )
                     },
                        { title: 'Creado', field: 'created_at', editable: 'never' },
                        { title: 'Actualizado', field: 'updated_at', editable: 'never' }

                    ]}
                    data={this.state.datos}
                    title="Materia prima"
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
                    <DialogTitle id="form-dialog-title">Crear materia prima</DialogTitle>
                    <DialogContent>

                        <DialogContentText>
                            Caracterizar materia prima
          </DialogContentText>
                        <TextField
                            value={this.state.nombre} onChange={this.handleChange.bind(this)}
                            autoFocus
                            margin="dense"
                            id="nombre"
                            label="Nombre"
                            name="nombre"
                            fullWidth
                        />
                        <TextField
                            value={this.state.unidad} onChange={this.handleChange.bind(this)}

                            margin="dense"
                            id="unidad"
                            label="Unidad"
                            name="unidad"
                            fullWidth
                        />
                        <TextField
                            value={this.state.valor} onChange={this.handleChange.bind(this)}

                            margin="dense"
                            id="valor"
                            label="Valor"
                            name="valor"
                            fullWidth
                        />
                        <InputLabel htmlFor="age-simple">Tipo de unidad</InputLabel>
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
                            {console.log(this.state.tipos_unidades)}
                            {this.state.tipos_unidades.map((id, index) =>
                                
                                <MenuItem key={id.id} value={id.id}>{id.nombre}</MenuItem>
                            )}

                          
                        </Select>

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose.bind(this)} variant="primary">
                            Cancelar
          </Button>
                        <Button onClick={guardar.bind(this)} color="primary">
                            Guardar
          </Button>
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

    axios.delete(process.env.REACT_APP_URL_LARAVEL+`/api/materia_prima/${nuevodato.id}`)
        .then(res => {

            console.log(res.data.id);

        })

}


function actualizar(nuevodato) {

    axios.put(process.env.REACT_APP_URL_LARAVEL+`/api/materia_prima/${nuevodato.id}`, nuevodato)
        .then(res => {

            console.log(res.data.id);

        })

}

function guardar(event) {

    event.preventDefault();
    const datoGuardar = {
        nombre: this.state.formControls.nombre.value,
        unidad: this.state.formControls.unidad.value,
        tipo_unidad_id: this.state.tipo_unidad,
        valor:this.state.formControls.valor.value,
    };
    console.log(datoGuardar);
    console.log(this.state);

    axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/materia_prima`, (datoGuardar))
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




export default Materia_prima;

