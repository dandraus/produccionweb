
    if (text === 'Productos'){
     axios.get(process.env.REACT_APP_URL_LARAVEL+`/api/products`)
      .then(res => {
        const productos = res.data;
       
      setDatos(productos);
        console.log(productos);
       // setPersonsState(PersonState=persona);
       
      })}