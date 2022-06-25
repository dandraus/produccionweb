import React, { useState,useEffect } from 'react';

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import MaterialTable from 'material-table'

import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { bugs, website, server } from "./variables/charts.js";
import axios from 'axios';
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "./variables/charts.js";

import styles from  "./../../src/assets/jss/material-dashboard-react/views/dashboardStyle.js"

import { useExcelDownloder } from 'react-xls';
import ReactExport from "react-export-excel";
import { JsonToTable } from "react-json-to-table";
import Input from '@material-ui/core/Input';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const useStyles = makeStyles(styles);





export default function Reportes_pedido() {
  const [fecha_ini, setfecha_ini] = useState(new Date());

  const [fecha_fin, setfecha_fin] = useState(new Date());
  const [maqdata,setmaqdata] = useState([]);

  const [info,setinfo] = useState([{
    info:''
  }]);
  const [infoexcel,setinfoexcel] = useState([{
    infoexcel:'',key:0
  }]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Clientes`)
    .then(res5 => {
        const resultado5 = res5.data;
        console.log(resultado5);
      setclientesnuevos(resultado5);
         console.log(clientesnuevos);
        // setPersonsState(PersonState=persona);

    })  

}, []);


const [Clientes_es,setClientes_es] = useState([""]);
const [clientesnuevos,setclientesnuevos] = useState([""]);

  const [reporte, setreporte] = useState("");
  const [despachados,setdespachados] = useState([]);
  const [pedidosmes,setdpedidosmes] = useState([]);
  const classes = useStyles();
  const { ExcelDownloder, Type } = useExcelDownloder();
  const data = {
    // Worksheet named animals
    animals: [
      { name: 'cat', category: 'animal' },
      { name: 'dog', category: 'animal' },
      { name: 'pig', category: 'animal' },
    ],
    // Worksheet named pokemons
    pokemons: [
      { name: 'pikachu', category: 'pokemon' },
      { name: 'Arbok', category: 'pokemon' },
      { name: 'Eevee', category: 'pokemon' },
    ],
  };
  const divStyle = {
    margin: '10px',
    display: 'flex',
    align:'left',
  

  };
  function handlechangefecha_ini(event){
    if (event===undefined){}
    else{
    console.log(event);
       setfecha_ini(event);
      }}


  function    handleChangecombo_maquina (event)   {
        console.log(event);
        setreporte(event.target.value);
               

       
  };


  
      function handle_actualizar(){
        setinfo(['']);
        setinfoexcel(['']);
      

console.log(Clientes_es);   

        axios.get(process.env.REACT_APP_URL_LARAVEL+'/api/Reporte/'+reporte+'/'+Clientes_es)
      .then(res => {
        const productos = res.data;
        console.log(productos);
        console.log(productos.length);
        if (productos.length === 0){
          alert('No hay datos');
       
        }else{
          setinfo(productos);
          setinfoexcel(productos);
          console.log(infoexcel);
          
        }

      })
      

      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/despachados/`)
      .then(res => {
        const productos = res.data;
        console.log(productos);
       var data = {
          labels: [],
          series: []
        };
        productos.map((value, index) =>{
          // data={
          //   labels:[...data.labels,value.maquina] ,
          //   series: [...data.series[0],value.cantidad]
          // };
          if (index===0){
            
            data={
              labels:[value.fecha] ,
              series: [[value.despachados]]
            };
            
          //   data={
            
          //   labels:[value.maquina] ,
          //   series: [[value.cantidad]]
          // };
        }else{
      data={
            labels:[...data.labels,value.fecha] ,
            series: [[...data.series[0],value.total]]
          };
         // setmaqdata(maqdata => [...maqdata, data])
        }
       console.log(value.cantidad);
       
        }
        
      )
      console.log(data);
      console.log(dailySalesChart.data);
      setdespachados(data);
      console.log(despachados);
        // setPersonsState(PersonState=persona);

      })
      


      axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/pedidosmes/`)
      .then(res => {
        const productos = res.data;
        console.log(productos);
       var data = {
          labels: [],
          series: []
        };
        productos.map((value, index) =>{
          // data={
          //   labels:[...data.labels,value.maquina] ,
          //   series: [...data.series[0],value.cantidad]
          // };
          if (index===0){
            
            data={
              labels:[value.fecha] ,
              series: [[value.total]]
            };
            
          //   data={
            
          //   labels:[value.maquina] ,
          //   series: [[value.cantidad]]
          // };
        }else{
      data={
            labels:[...data.labels,value.fecha] ,
            series: [[...data.series[0],value.total]]
          };
         // setmaqdata(maqdata => [...maqdata, data])
        }
       console.log(value.cantidad);
       
        }
        
      )
      console.log(data);
      console.log(dailySalesChart.data);
      setdpedidosmes(data);
     // console.log(despachados);
        // setPersonsState(PersonState=persona);

      })
      



      
      }
    

      

  function handlechangefecha_fin(event){
    if (event===undefined){}
    else{
    console.log(event);
       setfecha_fin(event);
      }}

     function handleChangecombo_cliente (event)   {
        console.log(event.target.value);
        setClientes_es(event.target.value);
        //this.setState({ pedido[0].pedido_id:event.target.value});
    
    
    
    
    };
    




  

  return (
    
    
    <div>
       <div style={divStyle}>
       <div style={{flex: 2, flexDirection: 'column'}}>
       <InputLabel htmlFor="age-simple">Reportes</InputLabel>
                          <Select
                              fullWidth
                              id="reporte"
                              required="true"

                              name="reporte"
                              value={reporte}

                              
                             onChange={handleChangecombo_maquina.bind(this)}
                              input={<Input id="age-simple" />}
                          >
  
                              <MenuItem value="">
  
                                  <em>None</em>
                              </MenuItem>
                             
                              <MenuItem value={'produccion'}>Reporte de desapacho</MenuItem>
                              {/*<MenuItem value={'materiales'}>Materiales por proyecto</MenuItem>
                              <MenuItem value={"pedido_estado"}>Estado de pedidos</MenuItem>
                              <MenuItem value={"ingreso_prod"}>Baldosas por operario y puesto</MenuItem>
  */}
                            
                          </Select>
  
  </div>
  
         <div style={{flex: 1, flexDirection: 'row'}}>
         
           
         <InputLabel htmlFor="age-simple">Escoge cliente-pedido</InputLabel>
                          <Select
                              fullWidth
                              id="Cliente_es"
                              name="Cliente_es"
                              value={Clientes_es}
                              required="true"

                             onChange={handleChangecombo_cliente.bind(this)}
                              input={<Input id="age-simple" />}
                          >
  
                       
                             
                              
                              {
                                  clientesnuevos.map((index) =>
                                  
                                  <MenuItem value={index.pedidonumero}>{index.cliente} - Pedido {index.pedidonumero} - Cotizacion {index.cotizacion_id} </MenuItem>
                              )}
  
                            
                          </Select>
                </div>
                <Button
                                color="primary"
                                size="large"
                                variant="contained"
                                onClick={handle_actualizar.bind(this)}
                                className={useStyles}

                            >                                Buscar
        </Button>




      <ExcelFile element={<Button color="primary"
                                size="large"
                                variant="contained"  className={useStyles}
                                >
                                  Excel
                                
                                </Button>}>
                <ExcelSheet data={infoexcel} name="Produccion">
                  {Object.entries(infoexcel[0]).map(([key,value])=>{
                    return(
                   <ExcelColumn label={key} value={key}/>
                    )
                  })}
                    
                  </ExcelSheet>

            </ExcelFile>
                   </div>   
 <br></br>
 <br></br>

 


<JsonToTable json={infoexcel} />

 <div style={{ maxWidth: '100%' }}>

          
      

 
</div>


    </div>




  );




  
}
