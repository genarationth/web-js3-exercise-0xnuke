//challenge

const rubricGrading = (score) =>{
  if (score > 11){
    console.log("max score is 11")
  }else if(score===11){
    console.log("Perfect")
  }else if(score>8){
    console.log("Exellent")
  }else if(score>5){
    console.log("Pass")
  }else {
    return false
  }
}

console.log(rubricGrading())
