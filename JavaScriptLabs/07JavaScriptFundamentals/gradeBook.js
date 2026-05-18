const getAverage=(score)=>{
  let sum=0;
  for(let i=0;i<score.length;i++){
     sum+=score[i];
  }
  return sum/score.length;
}
const getGrade = (score) => {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F"; 
}
const hasPassingGrade=(grades)=>{
  let grade=getGrade(grades);
  return grade!="F"
}

const studentMsg=(arr,score)=>{
  let average=getAverage(arr);
  let grade=getGrade(score);
  let passed=hasPassingGrade(score);
  if(passed){
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`
  } else {return `Class average: ${average}. Your grade: ${grade}. You failed the course.`}
}
