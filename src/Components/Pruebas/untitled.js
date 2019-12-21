
    if (text === 'Productos'){
     axios.get(`http://dashroute.test/api/products`)
      .then(res => {
        const productos = res.data;
       
      setDatos(productos);
        console.log(productos);
       // setPersonsState(PersonState=persona);
       
      })}