let odd=0;
let even=0;
let nul=0;
let arr=[0,1,2,4,2,0,'null',3,0,'=',undefined];

let checkElemFromParity = (item) => {
  if ((typeof (+item) === 'number') && (!isNaN(+item))){
    +item%2 === 0? +item ===0 ?nul++ :even++ :odd++;
  }
}

arr.forEach(item=>{
  checkElemFromParity(item);
})

console.log('even',even, 'odd', odd, 'null', nul);
