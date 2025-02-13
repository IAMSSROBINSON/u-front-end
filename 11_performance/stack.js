function dolphins () {
    // stop here
    return 'llamas';
  }
  function rhinos () {
    var y = 'no';
    return penguins();
  }
  function penguins () {
    return camels();
  }
  function camels () {
    return dolphins();
  }
  
  rhinos()

  //  rhinos
  //  penguins();
  //  camels();
  //  dolphins();