import React , { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import NameIcon from "@material-ui/icons/SupervisorAccount";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";

export const Form = props => {
	const {
		values: { tiempo_operario,referencia,nombre, unidades_por_caja,colores},
		errors,
		touched,
		handleSubmit,
		handleChange,
		isValid,
		setFieldTouched,
		setFieldValue
	} = props;
	console.table(props);


	
	const change = (name, e) => {
		e.persist();
		handleChange(e);
		setFieldTouched(name, true, false);
	};



	return (
		<form onSubmit={handleSubmit}>
            <TextField
                name="nombre"
                
				helperText={touched.nombre ? errors.nombre : ""}
				error={Boolean(errors.nombre)}
				label="Nombre"
				value={nombre}
				onChange={handleChange}
				fullWidth
			
			/>
            	<div>{Boolean(errors.nombre) ? errors.nombre : ""}</div>
             <TextField
                name="referencia"
                
				helperText={touched.referencia ? errors.referencia : ""}
				error={Boolean(errors.referencia)}
				label="Referencia"
				value={referencia}
				onChange={handleChange}
				fullWidth
			
			/>
            	<div>{Boolean(errors.referencia) ? errors.referencia : ""}</div>
			<TextField
                name="tiempo_operario"
                type="number"
				helperText={touched.tiempo_operario ? errors.tiempo_operario : ""}
				error={Boolean(errors.tiempo_operario)}
				label="Tiempo de operario"
				value={tiempo_operario}
				onChange={handleChange}
				fullWidth
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<NameIcon />
						</InputAdornment>
					)
				}}
			/>
            	<div>{Boolean(errors.tiempo_operario) ? errors.tiempo_operario : ""}</div>
               
                <TextField
                name="unidades_por_caja"
                type="number"
				helperText={touched.unidades_por_caja ? errors.unidades_por_caja : ""}
				error={Boolean(errors.tiempo_operario)}
				label="Unidades por caja"
				value={unidades_por_caja}
				onChange={handleChange}
				fullWidth
			
				
			/>
            	<div>{Boolean(errors.unidades_por_caja) ? errors.unidades_por_caja : ""}</div>
            
				{/* <TextField
                name="colores"
                type="number"
				helperText={touched.colores ? errors.colores : ""}
				error={Boolean(errors.colores)}
				label="Cantidad de colores"
				value={colores}
				onChange={handleChange}
				fullWidth
			
				
			/> */}




                {/* <input id="file" name="file" type="file" onChange={(event) => {
 				 setFieldValue("file", event.currentTarget.files[0]);
}} 
/> */}
  



{/*        
			
						<Button
				type="submit"
				fullWidth
				variant="raised"
				color="primary"
			//	disabled={!isValid}
			>
				Submit
			</Button> */}
		</form>
	);
};
