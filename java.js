let num1 = document.querySelector('.num1').innerHTML = Math.floor(Math.random() * 20)
let num2 = document.querySelector('.num2').innerHTML = Math.floor(Math.random() * 20)


let startBtn = document.querySelector('#startBtn')
let father = document.querySelector('.container-fluid')
let input = document.querySelector('#inp')
let StepAlert = document.querySelector('.alert ')
let StepAlertText = document.querySelector('.stepAlert h3')

input.setAttribute('disabled', 'true');
input.classList.add('cursor');


// Achkolar
let ball = 0;
// Progress bar
let progressBar = document.querySelector('.ball .progress-bar ')
// Progress bar vaqt
let progressBar2 = document.querySelector('.time-bar .progress-bar ')

// Vaqt uchun schotchik va o'yinni boshlash uchun start tugma
startBtn.onclick = function () {
  startBtn.setAttribute('disabled', 'true');
  input.removeAttribute('disabled');
  input.classList.remove('cursor');
  startBtn.style.opacity = '.5'
  let i = 100;
  
  if (i !== 0) {
    time = setInterval(() => {
      i--
      progressBar2.style.width = `${i}%`
      progressBar2.innerHTML = `${i}second`
      if (i == -1) {
        clearInterval(time)
        input.setAttribute('disabled', 'true')
        
        // Ballni ekranga chiqarish
        document.querySelector('.wrap').style.opacity = '.6'
        alert(`Your Score : ${ball + 0}`);
      }
    }, 1000)
  }
}
// Javob Yo'llash sistemasi 
document.querySelector('#inp').addEventListener('change', (e) => {

  
  let random = Math.floor(Math.random() * 10 + 30);

  let inp = document.querySelector('#inp').value

  let res = calc(num1, num2)
  
  let tex = document.querySelector('.text')
  let achko = document.querySelector('.achko')
  
  if (inp == res) {
    
    ball++
    achko.innerHTML = ball + `-ball`;
    progressBar.style.width = `${ball}%`;

    tex.style.color = 'green'
    tex.innerHTML = `To'g'ri &#128522 &#9989`
    setTimeout(text, 2000)
  } else {

    if (ball !== 0) {
      ball--
      achko.innerHTML = ball + `-ball`;
    }
    
    tex.style.color = 'red'
    tex.innerHTML = `Noto'g'ri &#128544 &#10060 (${res})`
    setTimeout(text, 2000)
  }
  
  
  if (ball <= 8) {
    num1 = document.querySelector('.num1').innerHTML = Math.floor(Math.random() * 25)
    num2 = document.querySelector('.num2').innerHTML = Math.floor(Math.random() * 25)
    // Modalniy oyna chiqadi
    if(ball == 5){
      StepAlertText.innerHTML = 'You Step 1'
      StepAlert.classList.add('alertActive')
      setTimeout(alertStep , 2500)
    }
    
  } else if (ball > 8 && ball <= 15) {
    num1 = document.querySelector('.num1').innerHTML = Math.floor(Math.random() * 20 + 20)
    num2 = document.querySelector('.num2').innerHTML = Math.floor(Math.random() * 15 + 20)
    // Modalniy oyna chiqadi
    if(ball == 9){
      StepAlertText.innerHTML = 'You Step 2'
      StepAlert.classList.add('alertActive')
      setTimeout(alertStep , 2500)
    }
  }
  else if (ball > 15 && ball <= 25) {
    num1 = document.querySelector('.num1').innerHTML = Math.floor(Math.random() * 40 + 20)
    num2 = document.querySelector('.num2').innerHTML = Math.floor(Math.random() * 45 + 20)
    // Modalniy oyna chiqadi
    if(ball == 15){
      StepAlertText.innerHTML = 'You Step 3'
      StepAlert.classList.add('alertActive')
      setTimeout(alertStep , 2500)
    }
    
  }
  else if (ball > 25) {
    num1 = document.querySelector('.num1').innerHTML = Math.floor(Math.random() * 50 + 100)
    num2 = document.querySelector('.num2').innerHTML = Math.floor(Math.random() * 50 + 80)
    // Modalniy oyna chiqadi
    if(ball == 25){
      StepAlertText.innerHTML = 'You Step 4'
      StepAlert.classList.add('alertActive')
      setTimeout(alertStep , 2500)
    }
    
  }
  else if (ball > 55) {
    num1 = document.querySelector('.num1').innerHTML = Math.floor(Math.random() * 300)
    num2 = document.querySelector('.num2').innerHTML = Math.floor(Math.random() * 500)
    // Modalniy oyna chiqadi
    if(ball == 55){
      StepAlertText.innerHTML = 'You Step 5'
      StepAlert.classList.add('alertActive')
      setTimeout(alertStep , 2500)
    }

  }
  plus()
  reset()
})


function reset() {
  document.querySelector('input').value = ''
}

//arifmetik sxema 
function calc(a, b) {
  if (num1 <= 10 || num2 <= 10) {
    return a * b
  } else if (num1 < num2) {
    return a + b
  } else if (num1 > num2 || num1 == num2) {
    return a - b
  }

}
// Input tozalaydi
function text() {
  document.querySelector('.text').innerHTML = ``
}

//Arifmetik belgi qo'yish uchun xizmat qiladi
let plusMinus = document.querySelector('#PlusMinus')

function plus() {
  if (num1 <= 10 || num2 <= 10) {
    plusMinus.innerHTML = '*'
  } else if (num1 > num2 || num1 == num2) {
    plusMinus.innerHTML = '-'
  } else if (num1 < num2) {
    plusMinus.innerHTML = '+'
  }
}

plus()

// Refresh function
function refresh() {
  document.location.reload(true)
}

// Modalniy oyna
function alertStep() {
  StepAlert.classList.remove('alertActive')
  }
