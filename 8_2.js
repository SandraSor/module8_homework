let num=50;

let isPrimeNumber = (num) =>{
  if (num === 0 || num === 1){
    console.log('Число не простое');
    return 0;
  }
  for (let i=2; i<num; i++){
    if (num % i === 0){
      console.log('Число не простое');
      return 0;
    }
  }
  console.log('Число простое ))');
}

isPrimeNumber(num);
