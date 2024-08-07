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

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));


class Pedido_gantt extends Component {
  state = {

    Maquinasadicionales: [{ fecha_final: "", id: "", fecha_maquina: ""}],
    Maqui:[{fecha_final: "", id: "", fecha_maquina: ""}],
    datos: [],
    maquinas:[],
    pedido_guardar:[],
    guardarMaq:[],
    Nummaquina:1,
    fecha_final:'',
    fecha_maquina:new Date(),
    startDate:new Date(),
    dias_totales:0,
    open: false,
    items:[],
    itemsped:[],
    select:true,
    tipo: '',
    operarios:[],
    fecha_min:"",
    maquina:[],
    unidades_dia:'',
    unidades_fabricar:'',
    dias_operario:'',
    Sopen: false,
    formControls: {
        nombre: {
            value: ''
        },
        apellido: {
            value: ''
        },
        operario: {
            value: ''
        },
        maquina: {
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
  
  handleAddMat = () => {
    this.setState({
        Maqui: this.state.Maqui.concat([{id: "",fecha_final:"",fecha_maquina:""}]),
        
  //      MaterialesAdicionales: this.state.MaterialesAdicionales.concat([{ cantidad: "" }])
    });
    var nmaq = this.state.Nummaquina + 1;
    this.setState({Nummaquina:nmaq} );
    this.setState({dias_totales:this.state.dias_operario/nmaq});


    
    console.log(this.state);
    console.log(nmaq);
  //  this.setState({dias_totales:this.state.dias_operario/this.state.Nummaquina});
};
handleRemoveMate = idx => () => {
  console.log(idx);
  this.setState({
    Maqui: this.state.Maqui.filter((s, sidx) => idx !== sidx)
  });
};

  HandleItems = (item) => {


   

  
    console.log(item);
      if (item[0] !== undefined){
        console.log(item[0].id);
        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Cotizacion_items/`+item[0].id)
        .then(res => {
          console.log(res);
         // const productos = res.data;
          if (res.data===""){console.log("no hay nada")}else{
          this.setState({ items:res.data });
          }
          // setPersonsState(PersonState=persona);
  
        }
        )
        
 
  
       console.log(item[0]);
   // this.setState({ items: item[0].cotizacion_items });
    this.setState({pedido_guardar:item[0]});
    console.log(this.state);
    this.setState({select:false})
  }
    
    else{
      console.log('prueba');
        this.setState({ items:[]})
       
    }

    console.log(this.state);
    


  };

  HandleItemscot = (item) => {
    console.log(item);
    this.setState({ itemsped: item});


    this.setState({unidades_fabricar:item.unidades});
  
  
    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto/ref/`+item.referencia)
    .then(res => {
      const productos = res.data;
  
      this.setState({ unidades_dia: productos[0].unidades_turno });
      console.log(this.state.datos);
      // setPersonsState(PersonState=persona);
  var diasop = this.state.unidades_fabricar/this.state.unidades_dia;
  
  this.setState({dias_operario:diasop});
  this.setState({dias_totales:this.state.dias_operario/this.state.Nummaquina});
    })
    
    
    this.setState({
  
      //datos: [],
      open: true,
     // items:[]
    });


    // if (item[0] !== undefined){
    //   this.setState({ itemsped: item[0]  },
    //   console.log(this.state));
// console.log(item);
//     }
  
};

  componentDidMount() {


    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Cotizacionsin`)
      .then(res => {
        const productos = res.data;

        this.setState({ datos: productos });
        console.log(this.state.datos);
        // setPersonsState(PersonState=persona);

      })

      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina`)
      .then(res => {
        const ms = res.data;

        this.setState({ maquinas: ms });
        console.log(this.state.maquinas);
        // setPersonsState(PersonState=persona);

      })
      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Operarios`)
      .then(res => {
        const ms = res.data;

        this.setState({ operarios: ms });
        console.log(this.state.operarios);
        // setPersonsState(PersonState=persona);

      })
  }


   

  handleChangecombo(event) {
    this.setState({ ...this.state, [event.target.name]: Number(event.target.value) || '' });
  };
  handlechangefecha = idx => event => {
    console.log(event);
    const newMateriales = this.state.Maqui.map((Maqui, sidx) => {
     console.log(event);
     console.log(this.state);
     this.setState({fecha_maquina:event});
     console.log(this.state);
     var fecha_finales = new Date();
     var dias_op = Math.ceil(this.state.dias_totales);
     fecha_finales.setTime( event.getTime() + dias_op * 86400000 );
this.setState({fecha_final:fecha_finales});

 console.log(fecha_finales);
 if (idx !== sidx) return Maqui;
 return { ...Maqui, fecha_maquina: event, id:idx,fecha_final:fecha_finales}
            

});
console.log(newMateriales);

this.setState({ Maqui: newMateriales });
  };


  handlechangefechafinal= idx => event => {
    console.log("daniel");
    const newMateriales = this.state.Maqui.map((Maqui, sidx) => {
    console.log(event);
    console.log(this.state);
    this.setState({fecha_final:event});
    console.log(this.state);
    if (idx !== sidx) return Maqui;
    return { ...Maqui, fecha_final: event}
    
 }
 
    )
    this.setState({ Maqui: newMateriales });
  };

  handleChangecombo_maquina  = idx => event =>  {
console.log("daniel");
var newMaquinas=[{fecha_final: "", id: "", fecha_maquina: ""}];
    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Maquina_asignacion/fecha/`+event.target.value)
    .then(res => {
      const ms = res.data;
      if (ms.length ===0){
        this.setState({ fecha_maquina:new Date() });
        //console.log(this.state.fecha_maquina);
        // setPersonsState(PersonState=persona);
        var fecha_finales = new Date();
        var dias_op = Math.ceil(this.state.dias_totales);
        fecha_finales.setTime( new Date().getTime() + dias_op * 86400000 );
    this.setState({fecha_final:fecha_finales});
      //  alert("No hay produccion");
      //this.reset();
          console.log(this.state);
      }else{
      this.setState({ fecha_maquina:new Date(ms[0].fecha_inicial) });
      console.log(this.state.fecha_maquina);
      // setPersonsState(PersonState=persona);
      var fecha_finales = new Date();
      var dias_op = Math.ceil(this.state.dias_totales);
      fecha_finales.setTime( new Date(ms[0].fecha_inicial).getTime() + dias_op * 86400000 );
  this.setState({fecha_final:fecha_finales});
}
  console.log(fecha_finales);
   newMaquinas = this.state.Maqui.map((Maq, sidx) => {
    if (idx !== sidx) return Maq;
    return { ...Maq,  id: event,fecha_maquina:this.state.fecha_maquina,fecha_final:fecha_finales} 
  
    })
 
    this.setState({ Maqui: newMaquinas });
    console.log(this.state.Maqui);    
    console.log(this.state);    
    
    
      
   
  });

 
  };
  
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
           options={{
            pageSize: 5
        }}
          columns={[
            
            {
                title: 'id',
                field: 'id',
                // render: rowData => (
                // <h6>{rowData.id }
                // <a href={"http://ec2-18-144-28-190.us-west-1.compute.amazonaws.com:8080/jasperserver/rest_v2/reports/reports/cotizacion2.pdf?Cotizacionid="+rowData.id} target="_blank">   PDF</a>
                // </h6>
                // ),
              },
            // { title: 'id', field: 'id' },
            { title: 'Cliente', field: 'cliente' },
            { title: 'Nit', field: 'nit' },
            {
              title: 'Subtotal', field: 'subtotal', type: 'currency',
              currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 }
            },
            {
              title: 'Total', field: 'total', type: 'currency',
              currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 },
            },


            { title: 'Creado', field: 'created_at' },
            // { title: 'Actulizado', field: 'updated_at' }

          ]}
          data={this.state.datos}
          title="Pedidos"
          options={{
            selection: this.state.select,

          }}
          onSelectionChange={(rows) => this.HandleItems(rows)}
        
        />


<MaterialTable
           options={{
            pageSize: 5
        }}
          columns={[
            
            {
                title: 'Cotización ID',
                field: 'cotizacion_id',
                // render: rowData => (
                // <h6>{rowData.id }
                // <a href={"http://ec2-18-144-28-190.us-west-1.compute.amazonaws.com:8080/jasperserver/rest_v2/reports/reports/cotizacion2.pdf?Cotizacionid="+rowData.id} target="_blank">   PDF</a>
                // </h6>
                // ),
              },
           {
                title: 'Foto',
                field: 'foto',
                render: rowData => (
  
                  <img
                    style={{ height: 100, }}//borderRadius: '50%' }}
                    src={process.env.REACT_APP_URL_LARAVEL +"uploads/"+ rowData.producto.foto}
                  />
                ),
              },
            // { title: 'id', field: 'id' },
            { title: 'Descripción', field: 'descripcion' },
            { title: 'Referencia', field: 'referencia' },
            {
              title: 'Unidades', field: 'unidades'
             
            },
            {
              title: 'Total', field: 'total', type: 'currency',
              currencySetting: { minimumFractionDigits: 0, maximumFractionDigits: 0 },
            },


            { title: 'Creado', field: 'created_at' },
            // { title: 'Actulizado', field: 'updated_at' }

          ]}
          data={this.state.items}
          title="Cotizaciones items"
       
          actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick:  (event, rowData) => this.HandleItemscot(rowData)
            }
         
          ]}
          //onSelectionChange={(rows) => this.HandleItemscot(rows)}
        //   detailPanel={[
        //     {
        //       tooltip: 'Items',
        //       render: rowData => {
        //         return (
        //           <div
        //             style={{
        //               fontSize: 20,
        //               textAlign: 'center',
        //               //  color: 'white',
        //               //  backgroundColor: '#43A047',
        //             }}
        //           >
        //             {rowData.cotizacion_items.map((items, index) =>
        //               <div
        //                 style={{
        //                   fontSize: 20,
        //                   textAlign: 'center',
        //                  //  color: rowData.colores[index].colores.rgb,
        //                   //  backgroundColor: '#43A047',
        //                 }}
        //               >


        //                 {"Referencia   " +items.referencia} <br></br>{ " Descripcion    " + items.descripcion + "   Cantidad   "+ items.cantidad_m2 + "     Total     $" + items.total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
        //                 <br></br>
                        
                        


        //               </div>
        //             )}



        //           </div>
        //         )
        //       },
        //     },
       

        //   ]}
        />
            {/* <Fab color="primary" aria-label="add" className={'daniel'} onClick={handleClickOpen.bind(this)}>
                    <AddIcon />
                </Fab> */}

<Dialog open={this.state.open} onClose={handleClose.bind(this)} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Orden de producción</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                        Información importante, no se está teniendo en cuenta la disponibilidad de puestos ni de operarios 
          </DialogContentText>
          <form
          id="form-inside-input"
          className="form-inside-input"
          onSubmit={guardar.bind(this)}
          fullWidth
        >
          

          <InputLabel htmlFor="age-simple">Unidades por dia operario {this.state.unidades_dia} </InputLabel>
          <InputLabel htmlFor="age-simple">#ID cotizacion item {this.state.itemsped.id} </InputLabel>
          <InputLabel htmlFor="age-simple">Unidades a fabricar {this.state.unidades_fabricar} </InputLabel>
          <InputLabel htmlFor="age-simple"># Maquinas  {this.state.Nummaquina} </InputLabel>
           <InputLabel htmlFor="age-simple">Dias máquina  {this.state.dias_operario} </InputLabel>
           <InputLabel htmlFor="age-simple">Dias totales  {this.state.dias_totales} </InputLabel>
          <br/>
                         
                         {this.state.Maqui.map((Maqui, idx) => (  
                                                   <div style={{ justifyContent: 'right' }}>

                        
                        

                        <br/>  <br/>
                   
                   <InputLabel htmlFor="age-simple">Escoge fecha de inicio</InputLabel>
                   <DatePicker selected={Maqui.fecha_maquina} onChange={this.handlechangefecha(idx)}  minDate={Maqui.fecha_maquina} 
                   />
                   <br/>  <br/>
                 

                   <InputLabel htmlFor="age-simple">Escoge fecha final</InputLabel>
                   <DatePicker selected={Maqui.fecha_final} onChange={this.handlechangefechafinal(idx)}  minDate={Maqui.fecha_final} 
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
                                                 
                     
       
                       



                       

         <br/>  <br/>  <br/>  <br/>
                  
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
  this.setState({unidades_fabricar:this.state.itemsped.unidades});
  
  
  axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/producto/ref/`+this.state.itemsped.referencia)
  .then(res => {
    const productos = res.data;

    this.setState({ unidades_dia: productos[0].unidades_turno });
    console.log(this.state.datos);
    // setPersonsState(PersonState=persona);
var diasop = this.state.unidades_fabricar/this.state.unidades_dia;

this.setState({dias_operario:diasop});
this.setState({dias_totales:this.state.dias_operario/this.state.Nummaquina});
  })
  
  
  this.setState({

    //datos: [],
    open: true,
   // items:[]
  });
}
function guardar(event) {

  event.preventDefault();
 
  const datoGuardar = {
    cotizacion_id: this.state.pedido_guardar.id,
      fecha_vencimiento: this.state.pedido_guardar.fecha_vencimiento,
      cliente: this.state.pedido_guardar.cliente,
      nit: this.state.pedido_guardar.nit,
      direccion:this.state.pedido_guardar.direccion,
      ciudad:this.state.pedido_guardar.ciudad,
      telefono:this.state.pedido_guardar.telefono,
      observaciones:this.state.pedido_guardar.observaciones,
      subtotal:this.state.pedido_guardar.subtotal,
      iva:this.state.pedido_guardar.iva,
      total:this.state.pedido_guardar.total,

  };
  




  axios.post(process.env.REACT_APP_URL_LARAVEL + `/api/Pedido/`, datoGuardar)
      .then(res => {

          console.log(res);
          console.log(res.data.id);
          const datoPedidoitem = ({
            pedido_id:res.data.id,
            referencia:this.state.itemsped.referencia,
            descripcion:this.state.itemsped.descripcion,
            cantidad_m2:this.state.itemsped.cantidad_m2,
            cantidad_ml:this.state.itemsped.cantidad_ml,
            unidades:this.state.itemsped.unidades,
            valor_m:this.state.itemsped.valor_m,
            iva:this.state.itemsped.iva,
            total:this.state.itemsped.total,
          });

          axios.post(process.env.REACT_APP_URL_LARAVEL +'/api/Cotizacionestado/'+this.state.itemsped.id )
          .then(res6 => {
           //var reporteurl = "ec2-18-144-28-190.us-west-1.compute.amazonaws.com:8080/jasperserver/rest_v2/reports/reports/cotizacion2.pdf?Cotizacionid=" + idprod;
              console.log(res6);
              console.log(res6.data.id);
              
          });
        

          axios.post(process.env.REACT_APP_URL_LARAVEL + `/api/Pedido_items`, (datoPedidoitem))
          .then(res6 => {
           //var reporteurl = "ec2-18-144-28-190.us-west-1.compute.amazonaws.com:8080/jasperserver/rest_v2/reports/reports/cotizacion2.pdf?Cotizacionid=" + idprod;
              console.log(res6);
              console.log(res6.data.id);
              const datoGuardar_estado = {
                ped_id: res6.data.id,
                val: this.state.itemsped.unidades,
                pri:0,
                seg: 0,
                ter:0,
                des:0
                
            };




            axios.post(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_inventario`, (datoGuardar_estado))
            .then(res => {
            
                console.log(res);
                console.log(res.data.id);})



              this.setState({ guardarMaq: [] });
             var newprod= this.state.Maqui.map((value, index) => {

              console.log(value);
              var fec_ini = value.fecha_maquina.getFullYear()+   "-" + ( value.fecha_maquina.getMonth() + 1) + "-" + value.fecha_maquina.getDate();
              var fec_fin = value.fecha_final.getFullYear()+   "-" + ( value.fecha_final.getMonth() + 1) + "-" + value.fecha_final.getDate();
              


               //var newProductos = this.state.guardarMaq.concat({ maquina_id: value.target.value, fecha_inicio: value.fecha_maquina, fecha_fin: value.fecha_final, pedido_item_id:res6.data.id })
                this.setState({
                    guardarMaq: [...this.state.guardarMaq, {  fecha_inicio:fec_ini, fecha_fin: fec_fin, pedido_item_id:res6.data.id }],
                })

                console.log(this.state);
                

              });
              const gmaq = ([{
                maquina_id:'1',
                fecha_inicio: '2020-01-01', fecha_fin: '2020-02-02', pedido_item_id:'32'
              },
              {
                maquina_id:'2',
                fecha_inicio: '2020-01-01', fecha_fin: '2020-02-02', pedido_item_id:'31'
              }]);
              console.log(this.state.guardarMaq);
              axios.post(process.env.REACT_APP_URL_LARAVEL + `/api/Pedido_asignacion/`, this.state.guardarMaq)
              .then(res7 => {
               
                  console.log(res7);
                 // console.log(res7.data.id);
                  
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
          })
            




           //   window.open(reporteurl, '_blank');
              //this.reset();
              //this.componentDidMount();

              // console.log(this.state.datos);
          // })
          // .catch((error) => {


          //     // Error
          //     if (error.response) {
          //         // The request was made and the server responded with a status code
          //         // that falls out of the range of 2xx
          //         console.log(error.response.data);
          //         console.log(error.response.status);
          //         console.log(error.response.headers);
          //     } else if (error.request) {
          //         // The request was made but no response was received
          //         // `error.request` is an instance of XMLHttpRequest in the 
          //         // browser and an instance of
          //         // http.ClientRequest in node.js
          //         console.log(error.request);
          //     } else {
          //         // Something happened in setting up the request that triggered an Error
          //         console.log('Error', error.message);
          //     }
          //     this.setState({ Sopen: true });
          //     console.log(error.config);
          // });


          // this.componentDidMount();

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
    


  this.setState({
      open: false,
      items:[]
  });

}

function handleClose() {
  this.setState({ open: false });
}


function Nuevoboton(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}
export default Pedido_gantt;

