let ques = [
    {
        "que":"Operation Muskaan’, which was seen in the news, was implemented in which city?",
        "optA":"Indore",
        "optB":"Mumbai",
        "optC":"Ahmedabad",
        "optD":"Guwahati",
    },
    {
        "que":"Archaeologists have unearthed 3,000-year-old priestly tomb in which country?",
        "optA":"Peru",
        "optB":"Argentina",
        "optC":"Greece",
        "optD":"Japan",

    },
    {
        "que":"Muhammed Anas and Amoj Jacob, who were in the news, are associated with which sports?",
        "optA":"Russia",
        "optB":"China",
        "optC":"Ukraine",
        "optD":"USA",

    },
    {
        "que":"Simone Biles, who was seen in the news, is a popular gymnast of which country?",
        "optA":"Peru",
        "optB":"Argentina",
        "optC":"Greece",
        "optD":"Japan",

    },
    {
        "que":"Archaeologists have unearthed 3,000-year-old priestly tomb in which country?",
        "optA":"Peru",
        "optB":"Argentina",
        "optC":"Greece",
        "optD":"Japan",

    },
    {
        "que":"Archaeologists have unearthed 3,000-year-old priestly tomb in which country?",
        "optA":"Peru",
        "optB":"Argentina",
        "optC":"Greece",
        "optD":"Japan",

    },
    {
        "que":"Archaeologists have unearthed 3,000-year-old priestly tomb in which country?",
        "optA":"Peru",
        "optB":"Argentina",
        "optC":"Greece",
        "optD":"Japan",

    }


];
let ans=["Mumbai", "Peru","Relay","USA","Peru","Relay","USA"]
let current_question = 0;
let q = document.getElementById("question");
let optA = document.getElementById("optA");
let optB = document.getElementById("optB");
let optC = document.getElementById("optC");
let optD = document.getElementById("optD");
q.innerHTML = ques[current_question]["que"]
optA.innerHTML = ques[current_question]["optA"]
optB.innerHTML = ques[current_question]["optB"]
optC.innerHTML = ques[current_question]["optC"]
optD.innerHTML = ques[current_question]["optD"]
optA.setAttribute("onclick", "check_answer(this)");
optB.setAttribute("onclick", "check_answer(this)");
optC.setAttribute("onclick", "check_answer(this)");
optD.setAttribute("onclick", "check_answer(this)");
function next(){
    current_question++;
    if(current_question < ques.length){
        q.innerHTML = ques[current_question]["que"]
        optA.innerHTML = ques[current_question]["optA"]
        optB.innerHTML = ques[current_question]["optB"]
        optC.innerHTML = ques[current_question]["optC"]
        optD.innerHTML = ques[current_question]["optD"]

        // optA.setAttribute("onclick", "check_answer(this)");
        // optB.setAttribute("onclick", "check_answer(this)");
        // optC.setAttribute("onclick", "check_answer(this)");
        // optD.setAttribute("onclick", "check_answer(this)");

        optA.style.removeProperty('background-color');
        optB.style.removeProperty('background-color');
        optC.style.removeProperty('background-color');
        optD.style.removeProperty('background-color');
        
    }else{
        current_question--;
        alert("Already at last question.")
    }
    
}

function check_answer(user_answer){
    if(user_answer.innerHTML == ans[current_question]){
        user_answer.style.backgroundColor  = "green";
    }else{
        user_answer.style.backgroundColor  = "red";
    }

}

