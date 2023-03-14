//excerise2

//part1
const greetingFriend = (name1,name2,name3) =>{
  let text = `Welcome ${name1}, ${name2}, ${name3}`
  return text
}

console.log(greetingFriend("tony","john","mark"))

//part2
const ageCalculator = (bornYear) =>{
  let presentYear = 2023
  let age = presentYear-bornYear
  return age
}

console.log(ageCalculator(1999))

//part3
const groupGreeting = (name1, name2, name3, age1, age2, age3) =>{
  let text = `Welcome ${name1}, you are ${age1}. Welcome ${name2}, you are ${age2}. Welcome ${name3}, you are ${age3}.`
  return text
}

console.log(groupGreeting("tony","john","mark", 10, 20, 30))
