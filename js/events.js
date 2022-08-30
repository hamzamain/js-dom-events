function sum(number){
    if(number == 1){
        return 1;
    }
    return number + sum(number - 1);
}

// option : 1
{/* <button onclick="document.body.style.backgroundColor = 'gray'">
      make gray
    </button> */}


// option : 2
{/* <button onclick="makeRed()">make red</button> */}

function makeRed() {
    document.body.style.backgroundColor = "red";
  }
  // option : 3 A
  const makeBlueBtn = document.getElementById("make-blue");
  makeBlueBtn.onclick = makeBlue;

  function makeBlue() {
    document.body.style.backgroundColor = "blue";
  }

  // option : 3 B
  const purpleBtn = document.getElementById("make-purple");
  console.log(purpleBtn);
  purpleBtn.onclick = function () {
    document.body.style.backgroundColor = "purple";
  };

  //practice 

  const makeGreenBtn = document.getElementById('make-green');
  makeGreenBtn.onclick = function makeGreen(){
    document.body.style.backgroundColor = 'green'
  }

  function makeBrown(){
    document.body.style.backgroundColor = 'brown'
  }
//   option : 4A

const makePinkBtn = document.getElementById('make-pink');
makePinkBtn.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink'
}

//   option : 4B
const makeTomato = document.getElementById('make-tomato');
// console.log(makeTomato)
makeTomato.addEventListener('click', function makeTomato(){
    document.body.style.backgroundColor = 'tomato'
})

//option : 4C
document.getElementById('make-goldenrod').addEventListener('click', function(){
  document.body.style.backgroundColor = 'goldenrod'
})