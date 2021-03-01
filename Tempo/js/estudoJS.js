meuArray = [1,2,3,4,5,6,7,8,9,10]

resposta1 = []

for (item of meuArray){
    if(item % 2 === 0) {
        resposta1.push(item)
    }
}

console.log(resposta1)

resposta2 = []
for(item of meuArray){
  if (item > 5) 
        resposta2.push(item)
    }


console.log(resposta2)