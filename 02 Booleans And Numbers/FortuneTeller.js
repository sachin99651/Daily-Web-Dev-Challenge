const fortune1="1. Your cat will look very cuddly today."
const fortune2="2. The weather will be nice tomorrow."
const fortune3="3. Be cautious of your new neighbors."
const fortune4="4. You will find a new hobby soon."
const fortune5="5. It would be wise to avoid the color red today."
const randomNumber=Math.floor(Math.random()*(5-0)+1)
let selectedFortune
if(randomNumber==1){
  selectedFortune=fortune1
}else if(randomNumber==2){
  selectedFortune=fortune2
}else if(randomNumber==3){
  selectedFortune=fortune3
}else if(randomNumber==4){
  selectedFortune=fortune4
}else{
  selectedFortune=fortune5
}
console.log(selectedFortune)