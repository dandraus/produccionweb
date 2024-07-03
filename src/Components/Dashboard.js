import React, { useState } from 'react';

// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Button from '@material-ui/core/Button'
// core components
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Table from "./Table/Table.js";
import Tasks from "./Tasks/Tasks.js";
import CustomTabs from "./CustomTabs/CustomTabs.js";
import Danger from "./Typography/Danger.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardIcon from "./Card/CardIcon.js";
import CardBody from "./Card/CardBody.js";
import CardFooter from "./Card/CardFooter.js";
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


const useStyles = makeStyles(styles);



const  BACKEND_URL ='https://proyectos-6addd-default-rtdb.firebaseio.com';
const  BACKEND_URL2 ='http://produccionplastico.ddns.net:1337/'; 
const  BACKEND_URL3 ='http://produccionplastico.ddns.net:1337/api/referencias'; 

const token ="03cebb70b0058c438dfd565adb2a174e86455d68438c4a31b5f94ec2d16686dbe74c1bc4229ec966a3b7d8bdcb7e7617735dd02eefc7309a40b4012592f6784697fdf1bc1fbab2af89e51692a63a1712bd315b09b6b2b398ed8f7995b1144a9d0fe2de5a4a3031ae5e7d28ade474816e012c01f44141198f0e44187bd64aeb1e"
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};



export default function Dashboard() {
  const [fecha_ini, setfecha_ini] = useState(new Date());
  const [fecha_fin, setfecha_fin] = useState(new Date());
  const [maqdata,setmaqdata] = useState([]);
  const [despachados,setdespachados] = useState([]);
  const [pedidosmes,setdpedidosmes] = useState([]);
  const classes = useStyles();
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



      function handle_actualizar(){


        var fec_inicial = fecha_ini.getFullYear()+   "-" + ( fecha_ini.getMonth() + 1) + "-" + fecha_ini.getDate();
        var fec_final = fecha_fin.getFullYear()+   "-" + ( fecha_fin.getMonth() + 1) + "-" + fecha_fin.getDate();

     


        axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/Pedido_inventario_mov/cantidad/`+fec_inicial+'/'+fec_final)
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
              labels:[value.maquina] ,
              series: [[value.cantidad]]
            };
            
          //   data={
            
          //   labels:[value.maquina] ,
          //   series: [[value.cantidad]]
          // };
        }else{
      data={
            labels:[...data.labels,value.maquina] ,
            series: [[...data.series[0],value.cantidad]]
          };
         // setmaqdata(maqdata => [...maqdata, data])
        }
       console.log(value.cantidad);
       
        }
        
      )
      console.log(data);
      console.log(dailySalesChart.data);
      setmaqdata(data);
      console.log(maqdata);
        // setPersonsState(PersonState=persona);

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

  return (
    
    <div>
       <div style={divStyle}>
         <div style={{flex: 1, flexDirection: 'row'}}>
    <InputLabel htmlFor="age-simple">Escoge fecha de inicio</InputLabel>
                   <DatePicker popperModifiers={{
    offset: { enabled: true, offset: '5px, 10px' },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: 'viewport'
    }
  }}
  
  className="form-control" fixedHeight={true} selected={fecha_ini} onChange={handlechangefecha_ini.bind(this)}  
                   /> </div>
                   <div style={{flex: 1, flexDirection: 'row'}}>
            <InputLabel htmlFor="age-simple">Escoge fecha de fin</InputLabel>
                   <DatePicker popperModifiers={{
    offset: { enabled: true, offset: '5px, 10px' },
    preventOverflow: {
      enabled: true,
      escapeWithReference: false,
      boundariesElement: 'viewport'
    }
  }}
  
  className="form-control" fixedHeight={true} selected={fecha_fin} onChange={handlechangefecha_fin.bind(this)}  
                   /> 
                </div>
                <Button
                                color="primary"
                                size="large"
                                variant="contained"
                                onClick={handle_actualizar.bind(this)}
                                className={useStyles}

                            >
                                Actualizar
        </Button>
                   </div>   
 <br></br>
 <br></br>


      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
      
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={maqdata}
              //data={dailySalesChart.data}
                type="Bar"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
                
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Fabricado por máquina</h4>
              <p className={classes.cardCategory}>
                {/* <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> %
                </span>{" "} */}
                {/* Inc */}
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                {/* <AccessTime /> updated 4 minutes ago */}
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={despachados}
                type="Bar"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Baldosas despachadas  por mes</h4>
              <p className={classes.cardCategory}>12 Meses</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
        
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={pedidosmes}
                type="Bar"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Pedidos mes</h4>
              <p className={classes.cardCategory}>Ventas en Millones</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> 12 meses
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
  
    </div>
  );
}
