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

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Chart from "react-google-charts";


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


class Gantt extends Component {
  state = {
    fecha:new Date(),
    datos: [],
    materia_primas:[],
    proveedores:[],
    operarios:[],
    maquinas:[],
 pedido:[{pedido_item_id:'',pedido_id:'',unidades:0}],
     open: false,
     open2: false,
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

         

     },
      resultado:[],
      infogantt:[[
        { type: 'number', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'string', label: 'Resource' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duration' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' },
     ],
     [
       '2014Spring',
       'Spring 2014',
       'spring',
       new Date(2014, 2, 22),
       new Date(2014, 5, 20),
       null,
       100,
       null,
     ]]

  }
  reset(){
    document.getElementById("form-inside-input").reset();
    this.setState({   
        fecha:new Date(),
        maquina:'',
        operario:'',
        productos: [],
        
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
          }
        
    
       
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
      var datodefault = [
        [
          { type: 'string', label: 'Task ID' },
          { type: 'string', label: 'Task Name' },
          { type: 'string', label: 'Resource' },
          { type: 'date', label: 'Start Date' },
          { type: 'date', label: 'End Date' },
          { type: 'number', label: 'Duration' },
          { type: 'number', label: 'Percent Complete' },
          { type: 'string', label: 'Dependencies' },
        ],
        [
          '2014Spring',
          'Spring 2014',
          'spring',
          new Date(2014, 2, 22),
          new Date(2014, 5, 20),
          null,
          100,
          null,
        ],
        [
          '2014Summer',
          'Summer 2014',
          'summer',
          new Date(2014, 5, 21),
          new Date(2014, 8, 20),
          null,
          100,
          null,
        ],
        [
          '2014Autumn',
          'Autumn 2014',
          'autumn',
          new Date(2014, 8, 21),
          new Date(2014, 11, 20),
          null,
          100,
          null,
        ],
        [
          '2014Winter',
          'Winter 2014',
          'winter',
          new Date(2014, 11, 21),
          new Date(2015, 2, 21),
          null,
          100,
          null,
        ],
        [
          '2015Spring',
          'Spring 2015',
          'spring',
          new Date(2015, 2, 22),
          new Date(2015, 5, 20),
          null,
          50,
          null,
        ],
        [
          '2015Summer',
          'Summer 2015',
          'summer',
          new Date(2015, 5, 21),
          new Date(2015, 8, 20),
          null,
          0,
          null,
        ],
        [
          '2015Autumn',
          'Autumn 2015',
          'autumn',
          new Date(2015, 8, 21),
          new Date(2015, 11, 20),
          null,
          0,
          null,
        ],
  
     



   


      ];

this.setState({default:datodefault});
this.setState({infogantt:datodefault});

       axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/gantt`)
      .then(res => {
        const ms = res.data;

        this.setState({ resultado: ms });
        console.log(this.state.resultado);
        // setPersonsState(PersonState=persona);
   
var data = 

    [[
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
   ]];

      
   ms.map((value, index) =>{
   
      
      data=[...data,[
        value.pedido_item_id,
        value.descripcion,
        value.fecha_incial + ' --  ' +value.fecha_final,
        new Date(value.fecha_incial),
        new Date(value.fecha_final),
        null,
        Math.round(value.cumplido),
        null,
       
      ]]
      
    //   data={
      
    //   labels:[value.maquina] ,
    //   series: [[value.cantidad]]
 
   // setmaqdata(maqdata => [...maqdata, data])
  }
 
  
  
)

this.setState({infogantt:data});
console.log(this.state.infogantt);
console.log(this.state.default);
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
      <Chart
  width={'100%'}
  height={'400px'}
  chartType="Gantt"
  loader={<div>Loading Chart</div>}
  data={this.state.infogantt}
  options={{
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>

<Button  variant="primary"    onClick={handleClickOpen2.bind(this)}   >
                            Disminuir dias
          </Button>
                        <Button  color="primary"   onClick={handleClickOpen.bind(this)} >
                            Agregar dias 
          </Button>



        

          <Dialog open={this.state.open} onClose={handleClose.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Agregar Dias de producción</DialogTitle>
                    <DialogContent>

               
                     
               
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          
        >
  <br/>
                          <br/>
  <InputLabel htmlFor="age-simple">Escoge fecha a partir de añadir los dias</InputLabel>
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
                            value={this.state.dias_adicionales} onChange={this.handleChange.bind(this)}
                            type="number"
                            required="true"
                            margin="dense"
                            
                            id="dias_adicionales"
                            label="Dias adicionales"
                            name="dias_adicionales"
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

                       



                <Dialog open={this.state.open2} onClose={handleClose3.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="restadias">Restar Dias de producción</DialogTitle>
                    <DialogContent>

               
                     
               
          <form
          id="restadiasgantt"
          className="form-inside-input"
          onSubmit={guardar2.bind(this)}
          
        >
  <br/>
                          <br/>
  <InputLabel htmlFor="age-simple">Escoge fecha a partir de añadir los dias</InputLabel>
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
                            value={this.state.dias_adicionales} onChange={this.handleChange.bind(this)}
                            type="number"
                            required="true"
                            margin="dense"
                            
                            id="dias_adicionales"
                            label="Dias disminuir"
                            name="dias_adicionales"
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
function handleClickOpen2() {
    this.setState({
        open2: true
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
function handleClose3() {
    this.setState({
        open2: false
    });
}

function guardar(event) {

    event.preventDefault();
console.log(this.state);
var fecha = this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate();
axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/sumardias/`+this.state.maquina+'/'+fecha+'/'+this.state.formControls.dias_adicionales.value)
.then(res => {
    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/gantt`)
    .then(res => {
      const ms = res.data;

      this.setState({ resultado: ms });
      console.log(this.state.resultado);
      // setPersonsState(PersonState=persona);
 
var data = 

  [[
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
 ]];

    
 ms.map((value, index) =>{
 
    
    data=[...data,[
      value.pedido_item_id,
      value.descripcion,
      'pedido completo',
      new Date(value.fecha_incial),
      new Date(value.fecha_final),
      null,
      Math.round(value.cumplido),
      null,
     
    ]]
    
  //   data={
    
  //   labels:[value.maquina] ,
  //   series: [[value.cantidad]]

 // setmaqdata(maqdata => [...maqdata, data])
}



)

this.setState({infogantt:data});
console.log(this.state.infogantt);
console.log(this.state.default);
})



});
this.setState({
    open: false
});


}
function guardar2(event) {

    event.preventDefault();
console.log(this.state);
var fecha = this.state.fecha.getFullYear()+   "-" + ( this.state.fecha.getMonth() + 1) + "-" + this.state.fecha.getDate();
axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/restardias/`+this.state.maquina+'/'+fecha+'/'+this.state.formControls.dias_adicionales.value)
.then(res => {
    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/gantt`)
    .then(res => {
      const ms = res.data;

      this.setState({ resultado: ms });
      console.log(this.state.resultado);
      // setPersonsState(PersonState=persona);
 
var data = 

  [[
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
 ]];

    
 ms.map((value, index) =>{
 
    
    data=[...data,[
      value.pedido_item_id,
      value.descripcion,
      'pedido completo',
      new Date(value.fecha_incial),
      new Date(value.fecha_final),
      null,
      Math.round(value.cumplido),
      null,
     
    ]]
    
  //   data={
    
  //   labels:[value.maquina] ,
  //   series: [[value.cantidad]]

 // setmaqdata(maqdata => [...maqdata, data])
}



)

this.setState({infogantt:data});
console.log(this.state.infogantt);
console.log(this.state.default);
})



});
this.setState({
    open2: false
});


}

export default Gantt;

