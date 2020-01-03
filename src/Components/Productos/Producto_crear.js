import React, { Component } from 'react'

import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import SaveIcon from '@material-ui/icons/Save';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
    openDialog: false,
    materia_primas: [],
    colors: [],
    operarios: [],
    open: false,
    Sopen: false,
    colorvalor: [{ valor: "", porcentaje: "" }],
    color: [{ nombre: "" }],
    Mater: [{ nombre: "", id: "", valor: "", cantidad: "", total: "" }],
    //guardarcolor: [{ productos_id: "", colores_id: "", porcentaje: ""}],
    Colores: [{ porcentaje: "", rgblist: "#FFFF" }],
    MaterialesAdicionales: [{ cantidad: "", id: "" }],
    Costo_estimado: "",
    precio_estimado: "",
    preciomt2:0,
    salario_operario: 1500000,
    valor_operario: "",
    tiempo_operario: "",
    tipo_operario_id: "",
    formControls: {
      nombre: {
        value: ''
      },
      referencia: {
        value: ''
      },

      unidades_por_caja: {
        value: ''
      },

      precio_estimado: {
        value: ''
      },
      margen_estimado: {
        value: ''
      },
      margen: {
        value: 0
      },

      producto_por_dia: {
        value: ''
      },
      unidades_por_mts2: {
        value: ''
      },
      imagen: {
        value: ''
      },
      iva: {
        value: 0
      },

    }
  };


  reset() {
    document.getElementById("form-inside-input").reset();
    this.setState({
      producto_por_dia: "",
      openDialog: false,
      materia_primas: [],
      colors: [],
      operarios: [],
      open: false,
      Sopen: false,
      colorvalor: [{ valor: "", porcentaje: "" }],
      color: [{ nombre: "" }],
      Mater: [{ nombre: "", id: "", valor: "", cantidad: "", total: "" }],
      //guardarcolor: [{ productos_id: "", colores_id: "", porcentaje: ""}],
      Colores: [{ porcentaje: "", rgblist: "#FFFF" }],
      MaterialesAdicionales: [{ cantidad: "", id: "" }],
      Costo_estimado: "",
      precio_estimado: "",
      salario_operario: 1500000,
      valor_operario: "",
      preciomt2:0,
      tiempo_operario: "",
      tipo_operario_id: "",
      formControls: {
        nombre: {
          value: ''
        },
        referencia: {
          value: ''
        },

        unidades_por_caja: {
          value: ''
        },

        precio_estimado: {
          value: ''
        },
        margen_estimado: {
          value: ''
        },
        margen: {
          value: 0
        },
        iva: {
          value: 0
        },


        producto_por_dia: {
          value: ''
        },
        unidades_por_mts2: {
          value: ''
        },
        imagen: {
          value: ''
        },

      }
    }
    )
  }


  calcular = () => {

   // console.log(this.state);
    var costocolor = isNaN(Object.values(this.state.Colores).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.Colores).reduce((t, { total }) => t + total, 0);
    var costomaterial = isNaN(Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0);
    var costooperario = isNaN(parseFloat(this.state.valor_operario)) ? 0 : parseFloat(this.state.valor_operario);
   // console.log(costooperario);
    var costo = costocolor + costomaterial;
    costo = costo + costooperario;
    this.setState({ Costo_estimado: costo });
    var precio = ((parseFloat(this.state.formControls.margen.value) / 100) * costo) + costo;
    this.setState({ precio_estimado: precio });
    var unidades_mts = isNaN(parseFloat(this.state.formControls.unidades_por_mts2.value)) ? 0 : parseFloat(this.state.formControls.unidades_por_mts2.value);
    var valormts = unidades_mts * precio;
    this.setState({preciomt2:valormts});
    // var subtotal = isNaN(Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.MaterialesAdicionales).reduce((t, { total }) => t + total, 0);
    // this.setState({ subtotal: subtotal })
    // var iva = subtotal * 0.19;
    // this.setState({ iva: iva })

    // var total = subtotal + iva;
    // this.setState({ total: total })
    // console.log(this.state);
  }
  // handleColorNameChangeMateriales = idx => evt => {
  //   const newMateriales = this.state.MaterialesAdicionales.map((Mate, sidx) => {
  //     //const val = evt.target.value - 1;
  //     var valor_metros = isNaN(parseFloat(this.state.Mater[idx].valor)) ? 0 : parseFloat(this.state.Mater[idx].valor);
  //     //var valor_metros =this.state.Mater[idx].valor;
  //     var cantidad = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value);
  //     var total_valor = Math.round(valor_metros * cantidad);

  //     if (idx !== sidx) return Mate;
  //     return { ...Mate, cantidad: evt.target.value, id: "", total: total_valor }
  //   });

  //   this.setState({ MaterialesAdicionales: newMateriales });

  // };
  handleColorNameChangeMateriales = idx => evt => {
   // console.log(evt.target.value);
    const newMateriales = this.state.MaterialesAdicionales.map((Mate, sidx) => {
      var valorunitario = isNaN(parseFloat(this.state.Mater[idx].valor)) ? 0 : parseFloat(this.state.Mater[idx].valor);
      var cantidad = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value);
      var total_valor = Math.round(valorunitario * cantidad);

      if (idx !== sidx) return Mate;
      return { ...Mate, cantidad: evt.target.value, id: "", total: total_valor }
    });
    this.setState({ MaterialesAdicionales: newMateriales }, this.calcular);





  };
  handleColorNameChange = idx => evt => {
    const newColores = this.state.Colores.map((Color, sidx) => {
      if (idx !== sidx) return Color;
      var valorunitario = isNaN(parseFloat(this.state.color[idx].valor)) ? 0 : parseFloat(this.state.color[idx].valor);
      var cantidad = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value);
      var total_valor = Math.round(valorunitario * (cantidad / 100));

      return { ...Color, porcentaje: evt.target.value, rgblist: this.state.colors[idx].rgb, total: total_valor }
    });

    this.setState({ Colores: newColores }, this.calcular);
    console.log(this.state);


  };

  handleChangecomboMate = idx => evt => {


    const newMateriales = this.state.Mater.map((Mate, sidx) => {
      if (idx !== sidx) return Mate;
     console.log(evt);
     console.log()
      // const val = evt.target.value - 1;
      var materiaprimaval = (this.state.materia_primas.find(valores => valores.id === evt.target.value));
      var total_valor = materiaprimaval.valor * this.state.MaterialesAdicionales[sidx].cantidad;

      console.log(materiaprimaval);
      if (evt.target.value === "") return { ...Mate, id: evt.target.value, valor: "" };
      return { ...Mate, id: evt.target.value, valor: materiaprimaval.valor, cantidad: this.state.MaterialesAdicionales[sidx].cantidad, total: total_valor };
    });

    this.setState({ Mater: newMateriales });

    const newMateriales2 = this.state.MaterialesAdicionales.map((Mate, sidx) => {
      // var valorunitario = isNaN(parseFloat(this.state.Mater[idx].valor)) ? 0 : parseFloat(this.state.Mater[idx].valor);
      // var cantidad = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value);
      // var total_valor = Math.round(valorunitario * cantidad);

      if (idx !== sidx) return Mate;
      return { ...Mate, cantidad: "", id: "", total: "" }
    });
    this.setState({ MaterialesAdicionales: newMateriales2 }, this.calcular);
    // var costocolor = isNaN(Object.values(this.state.color).reduce((t, { valor }) => t + valor, 0)) ? 0 : Object.values(this.state.color).reduce((t, { valor }) => t + valor, 0);
    // var costomaterial = isNaN(Object.values(this.state.Mater).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.Mater).reduce((t, { total }) => t + total, 0);
    // var costooperario = isNaN(parseFloat(this.state.valor_operario.value)) ? 0 : parseFloat(this.state.valor_operario.value);
    // console.log(costooperario);
    // var costo = costocolor + costomaterial;
    // costo = costo + costooperario;
    // this.setState({ Costo_estimado: costo });
    // var precio = ((parseFloat(this.state.formControls.margen.value) / 100) * costo) + costo;
    // this.setState({ precio_estimado: precio });
    // console.log(this.state);
    // console.log(evt);
    // //  this.setState({rgblist:[...this.state.rgblist,this.state.colors[evt.target.value -1].rgb]});
    //// console.log(this.state);
  };

  handleChangecombo = idx => evt => {


    axios.get(process.env.REACT_APP_URL_LARAVEL + `/api/Color/valor/${evt.target.value}`)
      .then(res3 => {

        const resultado3 = res3.data;

        this.setState({ colorvalor: resultado3 });
        console.log(this.state.colorvalor);

        var valtotal = Object.values(resultado3).reduce((t, { valor }) => t + valor, 0);//* (this.state.Colores[idx].porcentaje / 100);
        this.setState({ valtotalcolor: valtotal });
        console.log(valtotal);
        //// console.log(this.state.Colores[idx].porcentaje);
        const newColores2 = this.state.Colores.map((Color, sidx) => {
          if (idx !== sidx) return Color;
          // var valorunitario = isNaN(parseFloat( this.state.color[idx].valor)) ? 0 : parseFloat( this.state.color[idx].valor);
          // var cantidad = isNaN(parseFloat(evt.target.value)) ? 0 : parseFloat(evt.target.value);
          // var total_valor = Math.round(valorunitario * (cantidad/100));

          return { ...Color, porcentaje: "", rgblist: "", total: "" }
        });

        this.setState({ Colores: newColores2 }, this.calcular);
        const newColores = this.state.color.map((Color, sidx) => {
          if (idx !== sidx) return Color;
          console.log(evt);
          var coloresval = (this.state.colors.find(valores => valores.id === evt.target.value));
          const val = evt.target.value - 1;
          if (evt.target.value === "") return { ...Color, id: evt.target.value, rgblist: '#FFF' };
          return { ...Color, id: evt.target.value, rgblist: coloresval.rgb, valor: valtotal, porcentaje: this.state.Colores[idx].porcentaje };
        });

        this.setState({ color: newColores });


        // var costocolor = isNaN(Object.values(this.state.color).reduce((t, { valor }) => t + valor, 0)) ? 0 : Object.values(this.state.color).reduce((t, { valor }) => t + valor, 0);
        // var costomaterial = isNaN(Object.values(this.state.Mater).reduce((t, { total }) => t + total, 0)) ? 0 : Object.values(this.state.Mater).reduce((t, { total }) => t + total, 0);
        // var costooperario = isNaN(parseFloat(this.state.valor_operario.value)) ? 0 : parseFloat(this.state.valor_operario.value);
        // var costo = costocolor + costomaterial;
        // costo = costo + costooperario;
        // this.setState({ Costo_estimado: costo });
        // var precio = ((parseFloat(this.state.formControls.margen.value) / 100) * costo) + costo;
        // this.setState({ precio_estimado: precio });
        // console.log(this.state);
      })
    console.log(evt);
    //  this.setState({rgblist:[...this.state.rgblist,this.state.colors[evt.target.value -1].rgb]});
    //// console.log(this.state);


  };



  handleChangePhoto = event => {

    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })

  };

  handleChangeOperario(event) {
    this.setState({ ...this.state, [event.target.name]: Number(event.target.value) || '' });
  };





  handleAddMat = () => {
    this.setState({
      Mater: this.state.Mater.concat([{ nombre: "", id: "", valor: "", cantidad: "", total: "" }]),
      MaterialesAdicionales: this.state.MaterialesAdicionales.concat([{ cantidad: "" }])
    });
    console.log(this.state);
  };
  handleAddColor = () => {
    this.setState({
      Colores: this.state.Colores.concat([{ porcentaje: "" }]),
      color: this.state.color.concat([{ nombre: "" }])
    });
    console.log(this.state);
  };

  handleRemoveColor = idx => () => {
    this.setState({
      Colores: this.state.Colores.filter((s, sidx) => idx !== sidx)
    }, this.calcular);
  };

  handleRemoveMate = idx => () => {
    this.setState({
      MaterialesAdicionales: this.state.MaterialesAdicionales.filter((s, sidx) => idx !== sidx)
    }, this.calcular);
  };



  handleSalario(event) {
    var valor_oper = 0;
    // console.log(event);
    var tiempoop = isNaN(parseFloat(this.state.tiempo_operario)) ? 0 : parseFloat(this.state.tiempo_operario);
    var salario_operario = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);
    console.log(tiempoop);
    if (tiempoop !== 0) {
      valor_oper = (salario_operario / 200) * tiempoop;
    } else {
      valor_oper = 0;
    }
    this.setState({ salario_operario: event.target.value })
    this.setState({ valor_operario: valor_oper }, this.calcular)

  };
  handleProducto(event) {

    // console.log(event);
    var prodxdia = isNaN(parseFloat(event.target.value)) ? 0 : parseFloat(event.target.value);
    var tiempoop = 8 / prodxdia;
    var salario_operario = isNaN(parseFloat(this.state.salario_operario)) ? 0 : parseFloat(this.state.salario_operario);
    var valor_oper = (salario_operario / 200) * tiempoop;

    this.setState({ producto_por_dia: event.target.value });
    this.setState({ tiempo_operario: tiempoop });
    this.setState({ valor_operario: valor_oper }, this.calcular)
  };


  handleChangeMargen(event) {
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
    }, this.calcular);
  }
  handleCloseDialog(event) {
    this.setState({ openDialog: false });
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

    axios.get(process.env.REACT_APP_URL_LARAVEL + `/api/Color`)
      .then(res3 => {
        const resultado3 = res3.data;

        this.setState({ colors: resultado3 });


      })
    axios.get(process.env.REACT_APP_URL_LARAVEL + `/api/tipo_operario`)
      .then(res6 => {
        const resultado6 = res6.data;

        this.setState({ operarios: resultado6 });

        // setPersonsState(PersonState=persona);

      })




  }

  render() {
    return (

      <div style={{ maxWidth: '100%' }}>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleCloseDialog.bind(this)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Creando producto"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              El producto ha sido creado. Ahora se puede crear un nuevo producto o ir al menu para ver e listado
        </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseDialog.bind(this)} color="primary" autoFocus>
              OK
        </Button>

          </DialogActions>
        </Dialog>

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
        <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
        >
          <TextField
            required="true"
            name="nombre"
            value={this.state.nombre} onChange={this.handleChange.bind(this)}
            label="Nombre"
            fullWidth

          />

          <TextField
            required="true"
            name="referencia"
            value={this.state.referencia} onChange={this.handleChange.bind(this)}
            label="Referencia"
            fullWidth

          /><hr></hr>
          <h5>Imagen</h5>
          <input required="true" label="Imagen" type="file" accept="image/gif, image/jpeg, image/png" name="imagen" onChange={this.handleChangePhoto.bind(this)} />


          <TextField
            required="true"
            name="margen"
            type="number"
            value={this.state.margen} onChange={this.handleChangeMargen.bind(this)}
            label="Margen"
            fullWidth
          />
          <TextField
            required="true"
            name="iva"
            type="number"
            value={this.state.iva} onChange={this.handleChangeMargen.bind(this)}
            label="IVA"
            fullWidth
          />


          <InputLabel htmlFor="age-simple">Tipo de operario</InputLabel>
          <Select
            fullWidth
            required="true"
            id="tipo_operario"
            name="tipo_operario"
            value={Number(this.state.tipo_operario)}
            onChange={this.handleChangeOperario.bind(this)}
            input={<Input id="age-simple" />}
          >

            <MenuItem value="">

              <em>None</em>
            </MenuItem>

            {this.state.operarios.map((id, index) =>

              <MenuItem key={id.id} value={id.id}>{id.tipo}</MenuItem>
            )}


          </Select>

          {/* <CurrencyTextField
		label="Salario operario mes"
		variant="standard"
    value={this.state.salario_operario}
		currencySymbol="$"
		//minimumValue="0"
    outputFormat="string"
		decimalCharacter="."
    digitGroupSeparator=","
    decimalPlaces="0"
    onChange={this.handleSalario.bind(this)}
    textAlign="left"
    fullWidth
    /> */}
          <TextField
            name="salario_operario"
            required="true"
            type="number"
            label="Salario operario mes"
            value={this.state.salario_operario} onChange={this.handleSalario.bind(this)}
            fullWidth

          />



          <TextField
            name="producto_por_dia"
            required="true"
            type="number"
            label="Productos por dia"
            value={this.state.producto_por_dia} onChange={this.handleProducto.bind(this)}
            fullWidth

          />
          <TextField
            name="tiempo_operario"
            required="true"
            type="number"
            label="Tiempo de operario"
            value={this.state.tiempo_operario} onChange={this.handleChange.bind(this)}
            fullWidth
            InputProps={{
              readOnly: true,
            }}

          />

          <TextField
            name="valor_operario"
            required="true"
            type="number"
            label="Valor operario"
            value={this.state.valor_operario} onChange={this.handleChange.bind(this)}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />

          <TextField
            name="unidades_por_caja"
            required="true"
            type="number"
            label="Unidades por caja"
            value={this.state.unidades_por_caja} onChange={this.handleChange.bind(this)}
            fullWidth


          />
          <TextField
            name="unidades_por_mts2"
            required="true"
            type="number"
            label="Unidades por mt2 o lineal"
            value={this.state.unidades_por_caja} onChange={this.handleChangeMargen.bind(this)}
            fullWidth

          />
          <hr></hr>

          {this.state.MaterialesAdicionales.map((Mater, idx) => (
            <div className="Materiales">

              <Select

                id="materiaprima"
                required="true"
                name="materiaprima"
                //value={Mate.name}
                style={{ width: 200 }}
                //style={{backgroundColor:this.state.color[idx].rgblist}}
                onChange={this.handleChangecomboMate(idx)}
                input={<Input id="materialprima" />}
              >

                <MenuItem value="">

                  <em>None</em>
                </MenuItem>


                {
                  this.state.materia_primas.map((id, index) =>

                    <MenuItem

                      key={id.id} value={id.id}>{id.nombre}</MenuItem>
                  )}


              </Select>


              <TextField

                label="Cantidad por unidad"
                required="true"
                type='number'
                defaultValue="Cantidad por unidad"
                onChange={this.handleColorNameChangeMateriales(idx)}
                value={Mater.cantidad}


              />
              <TextField
                required="true"
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

            </div>
          ))}





          <hr></hr>


          {this.state.Colores.map((Color, idx) => (
            <div className="Color">
              <Select

                id="color"
                required="true"
                name="color"
                value={Color.name}
                style={{ backgroundColor: this.state.color[idx].rgblist, width: 200 }}
                onChange={this.handleChangecombo(idx)}
                input={<Input id="age-simple" />}
              >

                <MenuItem value="">

                  <em>None</em>
                </MenuItem>
          {/* console.log(this.state.colors)*/}

                {
                  this.state.colors.map((id, index) =>

                    <MenuItem
                      style={{ backgroundColor: id.rgb }}
                      key={id.id} value={id.id}>{id.nombre}</MenuItem>
                  )}


              </Select>


              <TextField

                label="Color Porcentaje"
                required="true"
                defaultValue="Color Porcentaje"
                type="number"
                onChange={this.handleColorNameChange(idx)}
                value={Color.name}
              />
              <TextField

                label="Valor total color"
                required="true"
                defaultValue="Valor total color"

                value={this.state.Colores[idx].total}


              />

              <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={this.handleAddColor}
                className={useStyles}

              >
                +
</Button>
              <Button
                color="primary"
                size="large"
                variant="contained"
                onClick={this.handleRemoveColor(idx)}
                className={useStyles}

              >
                -
</Button>


              {/* <InputLabel htmlFor="age-simple">Color</InputLabel> */}

            </div>
          ))}


          <hr>

          </hr>
          <MaterialTable
            columns={[


              { title: 'nombre', field: 'nombre' },
              { title: 'color', field: 'color' },
              { title: 'cantidad', field: 'cantidad', editable: 'never' },
              { title: 'valor', field: 'valor', type: "currency", currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 } },
              { title: 'valor_total', field: 'valor_total', type: "currency", currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 }, editable: 'never' },


              // { title: 'porcentaje', field:'porcentaje'},








            ]}
            data={this.state.colorvalor}
            title="Materiales colores"



          />


          <TextField

            label="Costo_estimado"
            required="true"
            defaultValue="Costo_estimado"
            fullWidth
            type="currency"
            value={
              this.state.Costo_estimado
            }
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />

          <TextField

            label="Precio estimado"
            required="true"
            defaultValue="Precio_estimado"
            fullWidth
            value={
              this.state.precio_estimado
            }
            margin="normal"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextField

            label="Precio MT2"
            required="true"
            defaultValue="Precio MT2"
            fullWidth
            value={
              this.state.preciomt2
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
            type='submit'
          //onClick={guardar.bind(this)}
          >
            Guardar
      </Button>
        </form>

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
  console.log(this.state);
  this.setState({ openDialog: true });
  const data = new FormData()
  data.append('file', this.state.selectedFile);

  axios.post(process.env.REACT_APP_URL_LARAVEL + "/api/upload", data, { // receive two parameter endpoint url ,form data 
  })
    .then(res => { // then print response status
     // console.log(res)
      this.setState({
        imagen: this.state.selectedFile.name
      });
console.log('danie');
      
      var idprod = '';
      const datoGuardar = {
        tiempo_operario: this.state.tiempo_operario,
        tipo_operario_id: this.state.tipo_operario,
        referencia: this.state.formControls.referencia.value,
        nombre: this.state.formControls.nombre.value,
        valor_operario: this.state.valor_operario,
        costo_estimado: this.state.Costo_estimado,
        margen_estimado: this.state.formControls.margen.value,
        precio_estimado: this.state.precio_estimado,
        foto: this.state.selectedFile.name,
        unidades_por_caja: this.state.formControls.unidades_por_caja.value,
        unidades_por_mts: this.state.formControls.unidades_por_mts2.value,
        iva: this.state.formControls.iva.value,

      };


      console.log(datoGuardar);
      console.log(this.state);

      axios.post(process.env.REACT_APP_URL_LARAVEL + `/api/producto`, (datoGuardar))
        .then(res => {

          console.log(res);
          console.log(res.data.id);
          idprod = res.data.id;
          console.log(this.state);
          this.setState({ guardarcolor: [] });
          this.setState({ guardarmater: [] });
          var newcolo = this.state.color.map((value, index) => {

            var newColores = this.state.guardarcolor.concat({ productos_id: idprod, colores_id: value.id, porcentaje: this.state.Colores[index].porcentaje })

            this.setState({
              guardarcolor: [...this.state.guardarcolor, { productos_id: idprod, colores_id: value.id, porcentaje: this.state.Colores[index].porcentaje }],
            })


            //return newColores;
          });




          axios.post(process.env.REACT_APP_URL_LARAVEL + `/api/producto_colores`, (this.state.guardarcolor))
            .then(res5 => {
              console.log("Daniel 0");

              console.log(this.state);
              var newmat = this.state.Mater.map((value2, index2) => {
                console.log(value2);
                var newMater = "dani";//this.state.guardarmater.concat({ productos_id: idprod, materiales_id: value2.id, porcentaje: value2.porcentaje })
                console.log("Daniel 1");
                this.setState({
                  guardarmater: [...this.state.guardarmater, { productos_id: idprod, materiales_id: value2.id, cantidad: this.state.MaterialesAdicionales[index2].cantidad }],
                });
                //return newMater;
              });






              console.log("Daniel 2");
              console.log(this.state.guardarmater);

              axios.post(process.env.REACT_APP_URL_LARAVEL + `/api/Producto_materiales`, (this.state.guardarmater))
                .then(res6 => {

                  console.log(res6);
                  console.log(res6.data.id);

                  //this.componentDidMount();

                  // console.log(this.state.datos);
                  //this.setState({openDialog:true});
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










              console.log(res5);
              console.log(res5.data.id);


              //       this.componentDidMount();

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








      this.setState({
        open: false
      });







    }).catch((error) => {


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

}




export default Producto_crear;

