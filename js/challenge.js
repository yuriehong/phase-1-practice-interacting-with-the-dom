//accessing dom elements
const timer = document.getElementById("counter");
let count = 0;
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const like = document.getElementById("heart");
const pause =document.getElementById("pause");
const restart = document.getElementById("restart");
const submit = document.getElementById("submit")

//adding event listeners
like.addEventListener("click", likeDisplay);
minus.addEventListener("click", subtractTime) ;
plus.addEventListener("click", addTime);
pause.addEventListener("click", pauseTime);
submit.addEventListener("click", submitComment);

//functions
function likeDisplay(){
    let number = timer.textContent;
    if(document.getElementById(number) == null){
        const likedNum = document.createElement('li');
        let numLikes = 1;
        console.log(numLikes);
        likedNum.value = numLikes;
        likedNum.textContent = number + ` liked ${numLikes} time`;
        likedNum.id = number;
        document.querySelector("ul").append(likedNum);
    }
   else{
        let likedNumber =  document.getElementById(number);
        let numLikes = likedNumber.value + 1;
        likedNumber.value = numLikes;
        likedNumber.textContent = number + ` liked ${numLikes} times`;
   }
    
}

function submitComment(e){
    e.preventDefault();
    let comment = document.getElementById("comment-input").value;
    console.log(comment);
    let text = document.createElement("p");
    text.textContent = comment;
    const list = document.getElementById("list");
    list.append(text);
}

function subtractTime(){
    count -= 1;
    timer.textContent = count;
}

function addTime(){
    count += 1;
    timer.textContent = count;
}

function pauseTime(){
    if (pause.textContent == " pause "){
        console.log(pause.textContent)
        like.removeEventListener("click", likeDisplay);
        minus.removeEventListener("click", subtractTime) ;
        plus.removeEventListener("click", addTime);
        clearInterval(counter);
        pause.textContent = "resume";
  }
    else{
        console.log("resume")
        like.addEventListener("click", likeDisplay);
        minus.addEventListener("click", subtractTime) ;
        plus.addEventListener("click", addTime);
        pause.textContent = " pause "
        const timer = document.getElementById("counter");
        counter = setInterval(() => {
            count += 1;
            timer.textContent = count;
             }, 1000);;
    }
   
}
let counter = setInterval(() => {
    count += 1;
    timer.textContent = count ;
    }, 1000);

