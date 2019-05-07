// function showDetail(name, lastname, Nickname){
//   return `name: ${name}, lastname: ${lastname}, Nickname: ${Nickname}`;
// } 

const showDetailarrow = (name, lastname, Nickname)=>{
  return `name: ${name}, lastname: ${lastname}, Nickname: ${Nickname}`;
};

// const result0 = showDetail('Altron','Stark','jack');
// const result1 = showDetail('Altron','Stark');
// const result2 = showDetail('Altron');
// const result3 = showDetail();

// console.log('Test',result0);
// console.log('result1',result1);
// console.log('result2',result2);
// console.log('result3',result3);

function TestNa(_Game, _Play, _Pro){
  return `Game: ${_Game} Play: ${_Play} Pro: ${_Pro}`;
} 
console.log(TestNa('Lost','7year','High'))

const width = 10;
const long = 10;
const high = 10;
function TestNa2(_wigth, _long, _high){
  if(_wigth && _long && _high){
  return _wigth*_long*_high;
  }else{
    return 0 ;
  }
}
console.log(`HI ${TestNa2(width,long,high)}`)

const t = '';
let y;
const u = null;
const i = 0;
if(!y){
console.log('in if')
}
//ข้อหนึ่ง
function findArea(x,y){
  return x*y;
}

const findArea2 = (x,y)=>{
  return x*y;
};

console.log(findArea2(20,20))
//ข้อสอง
function recArea(x,y,z){
  const result = x*y*2+z;
  return result;
}
const recArea2 = (x,y,z)=>{
  const result = x*y*2+z;
  return result;
};

console.log(recArea2(10,20,20))