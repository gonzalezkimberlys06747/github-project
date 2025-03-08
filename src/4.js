  const generateRandomJSCode = () => {
    let result = '';
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Use the random number to generate a random code snippet
    if (randomNumber % 2 === 0) {
      result += `console.log("Random even number: ${randomNumber}");`;
    } else {
      result += `console.log("Random odd number: ${randomNumber}");`;
    }
  
    // Return the generated code snippet
    return result;
  };
  console.log(generateRandomJSCode());