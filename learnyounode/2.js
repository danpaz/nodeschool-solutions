const sum =
  process.argv.slice(2)
  .map(num => parseInt(num))
  .reduce((sum, num) => {
    return sum+=num;
  }, 0);
console.log(sum);
