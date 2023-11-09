let res = document.getElementsByName("display")[0];

  function calculate(number){
    res.value+=number;
 }
 let Result=()=>{
  try{
res.value=eval(res.value);
  }
  catch(err){
    res.value = 'Error';
  }
 }
 function clr(){
  res.value=" ";
 }
 function deletee(){
  res.value=res.value.slice(0,-1);
 }