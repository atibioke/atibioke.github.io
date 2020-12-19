let userInput = '';

const displayClick = (input) =>{
    console.log(input);
    if (input !== '='){
        if (input === 'MC'){
            let userValue = document.getElementById('userInput');
            userValue.innerHTML = '';
            userInput = '';
        } else{
         userInput += input;
         let userValue = document.getElementById('userInput');
        userValue.innerHTML = userInput;
        console.log(userInput);
    }
} else {
        if (userInput === ''){
            let userValue = document.getElementById('userInput');
            userValue.innerHTML = 'error!';
        } else{
        let userValue = document.getElementById('userInput');
        userValue.innerHTML = `${userInput}<br> = ${eval(userInput)}`
    }; 
    };
};
