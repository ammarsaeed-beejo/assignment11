function getMax(Max){
    let largest=Max[0];
for(let i=0;i<Max.length;i++){
  if(largest<=Max[i]){
      largest=Max[i];
  }
}
 alert("The largest number"+largest);
}