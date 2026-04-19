let count=0;
const cardCounter=(card)=>{
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
    break;
    case 10:
    case "A":
    case "J":
    case "Q":
    case "K":
    count--;
    break;
    }
    let action= count>0?"Bet":"Hold"
    return `${count} ${action}`
  
}
console.log(cardCounter(5))