const questions=[
    {
        category:"Physics",
        question:"Who invented the formula E=mc^2?",
        choices:["Albert Einstein","Issac Newton","Max Planks"],
        answer:"Albert Einstein"
    },
    {
        category:"Chemistry",
        question:"what is the chemical symbol of Mercury element?",
        choices:["Au","Ag","Hg"],
        answer:"Hg"
    },
    {
        category:"General Knowledge",
        question:"Who is the first person to land on moon?",
        choices:["Neil Armstrong","Peter Waker","Shikhar Wagle"],
        answer:"Neil Armstrong"
    },
    {
        category:"Politics",
        question:"Who is the current Prime Minister of Nepal?",
        choices:["Sher Bahadur Deuba","K.P. Sharma Oli","Prachanda Dahal"],
        answer:"K.P. Sharma Oli"
    },
    {
        category:"Network",
        question:"In which layer do TCP and UDP protocol occurs?",
        choices:["Transport Layer","Application Layer","Internet Layer"],
        answer:"Transport Layer"
    }   
];


function getRandomQuestion(question){
    const randomIndex=Math.floor(Math.random()*question.length);
    return question[randomIndex];
}


function getRandomComputerChoice(choices){
    const randomIndex= Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

function getResults(quesObj,computerChoice){
    if (computerChoice === quesObj.answer){
        return "The computer's choice is correct!";
    }
    else{
        return `The computer's choice is wrong. The correct answer is: ${quesObj.answer}`;
    }
}