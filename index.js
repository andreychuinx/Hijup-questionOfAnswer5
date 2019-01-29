console.time('test')

const primes = number => {
  if (number <= 1) return []
  const numbers = new Array(number + 1)
  numbers.fill(true)
  numbers[0] = numbers[1] = false
  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++) {
      numbers[i * j] = false
    }
  }
  return numbers.reduce((acc, cur, idx) => {
    return cur ? acc.concat(idx) : acc
  }, [])
}

function getCombinations(num) {
  let combinations = []
  if (num <= 1) return [[]]
  let primeArr = primes(num)
  let f = (prefix, primeArr) => {
    let sumPrefix = prefix.reduce((a,b) => {
      return a + b
    }, 0)
    if (sumPrefix === num) {
      combinations.push(prefix)
    }
    if (sumPrefix + primeArr[0] > num){
      primeArr = []
    }
    for (let i = primeArr.length - 1; i >= 0; i--) {
      f(prefix.concat(primeArr[i]), primeArr.slice(i + 1))
    }
  }
  f([], primeArr)
  return combinations
}
console.log('getCOMBINASI', getCombinations(100))
console.timeEnd('test')
