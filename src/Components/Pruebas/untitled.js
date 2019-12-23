
    if (text === 'Productos'){
     axios.get(`http://ec2-13-52-251-2.us-west-1.compute.amazonaws.com/dashroute/public/api/products`)
      .then(res => {
        const productos = res.data;
       
      setDatos(productos);
        console.log(productos);
       // setPersonsState(PersonState=persona);
       
      })}