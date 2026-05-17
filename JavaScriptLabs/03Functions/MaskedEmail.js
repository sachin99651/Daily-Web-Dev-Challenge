const email="sachinpal@google.com";
function maskEmail(email){
  const atIndex=email.indexOf("@");
  const domain=email.slice(atIndex)
  const username=email.slice(0,atIndex)
  const firstChar=username[0]
  const lastChar=username[username.length-1]
  const maskedLength=username.length-2
  const maskedSection= "*".repeat(maskedLength)
  return `${firstChar}${maskedSection}${lastChar}${domain}`
}
console.log(maskEmail(email))