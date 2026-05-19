const sumAll=(arr)=>{
    let total=0;
    const min=Math.min(arr[0],arr[1]);
    const max=Math.max(arr[0],arr[1]);
    for(let i=min;i<=max;i++){
        total+=i;
    }
    return total;
}
