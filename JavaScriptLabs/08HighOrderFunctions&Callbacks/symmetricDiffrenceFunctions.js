const diffArray=(arr1,arr2)=>{
  const onlyArr1=arr1.filter(items=>!arr2.includes(items))
  const onlyArr2=arr2.filter(items=>!arr1.includes(items))
  return onlyArr1.concat(onlyArr2)
}