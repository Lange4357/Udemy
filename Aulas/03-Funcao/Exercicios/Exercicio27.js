function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    let anos = 0;
  
    if (altura1 === altura2) {
      if (taxa1 > taxa2) {
        return `A primeira criança será maior em ${anos} anos.`;
      } 
      else if(taxa2 > taxa1){
        return `A segunda criança será maior em ${anos} anos.`;
      } 
      else{
        return "As crianças terão sempre a mesma altura.";
      }
    } else{
      if (altura1 < altura2) {
        [altura1, altura2] = [altura2, altura1];
        [taxa1, taxa2] = [taxa2, taxa1];
      }
  
      while (altura1 > altura2) {
        altura1 += altura1 * (taxa1 / 100);
        altura2 += altura2 * (taxa2 / 100);
        anos++;
      }
  
      return `A segunda criança será maior em ${anos} anos.`;
    }
  }
  
  console.log(calcularCrescimento(120, 5, 130, 4));