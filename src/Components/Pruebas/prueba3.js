import React, { useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

function createData(id, nombre, tipo, precio, upodated_at) {

  return { id, nombre, tipo, precio, upodated_at};

}

export default function Productos(props) {
  const classes = useStyles();
   
const [rows, setRows] = useState({...props});
//   React.useEffect(() => {
//       setRows(props);
//   }, [props])
// console.log(rows);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow key={props.id}>
              <TableCell component="th" scope="row">
                {props.name}
              </TableCell>
              <TableCell align="right">{props.tipo}</TableCell>
              <TableCell align="right">{props.precio}</TableCell>
              <TableCell align="right">{props.update_at}</TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </Paper>
  );
}