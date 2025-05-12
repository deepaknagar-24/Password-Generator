// const passRangeInput = document.getElementById('passRangeInput');
// const passRangeValue = document.getElementById('passRangeValue');
// const genBtn = document.getElementById('genBtn');
// const passwordEle = document.querySelector('.password');

// let isUpperCase = false;
// let isNumbers = false;
// let isSymbols = false;

// let passwordLength = 8;

// passRangeInput.addEventListener('input', function(e){
//     passwordLength = e.target.value;
//     passRangeValue.innerHTML = passwordLength;
// });

// const genratePassword = (passlength)=>{
//     const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//     const upperCaseLetters = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
//     const numbers = isNumbers ? '0123456789' : '';
//     const symbols = isSymbols ? '!@#$%^&*()_+' : '';

//     const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;

//     let password = '';

//     for(let i = 0; i < passlength; i++){
//         const charIndex = Math.floor(Math.random() * passwordChar.length);

//         password += passwordChar[charIndex];
//     } 
//      return password;
// };

// genBtn.addEventListener('click', function(){

//     const upperCaseCheckEl = document.getElementById('uppercase');
//     const numbersCheckEl = document.getElementById('numbers');
//     const symbolsCheckEl = document.getElementById('symbols');

//     isUpperCase = upperCaseCheckEl.checked;
//     isNumbers = numbersCheckEl.checked;
//     isSymbols = symbolsCheckEl.checked;

//    const password = genratePassword(passwordLength);
//    passwordEle.innerHTML = password;
//    console.log('radhe')
// });

// passwordEle.addEventListener('click', function(e){
//      navigator.clipboard.writeText(passwordEle.innerText).then(()=>{
//           alert('Copied to clipboard')
//      }).catch((err)=>{
//         alert('cloud not copy')
//      })
// })

const passwordEle = document.querySelector('.password');
const passRangeValue = document.getElementById('passRangeValue');
const passRangeInput = document.getElementById('passRangeInput');
const genBtn = document.getElementById('genBtn');
const upperCaseCheckEl = document.getElementById('uppercase');
const numbersCheckEl = document.getElementById('numbers');
const symbolsCheckEl = document.getElementById('symbols');

let passwordLength = 8;

let isUpperCase = false;
let isNumbers = false;
let isSymbols = false;

passRangeInput.addEventListener('input', function(e){
     passwordLength = +e.target.value;
     passRangeValue.innerHTML = passwordLength;
});

const genratePassword = (passlength)=>{

       const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
       const upperCaseLetters = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
       const numbers = isNumbers ? '0123456789': '';
       const symbols = isSymbols ? '!@#$%z^&*()_+' : '';

       const passwordChar = lowerCaseLetters + upperCaseLetters + numbers + symbols;
       
       let password = '';

       for(let i= 0; i < passlength; i++){
            const charIndex = Math.floor(Math.random()* passwordChar.length);
            password += passwordChar[charIndex];
       }

       return password;

}

genBtn.addEventListener('click', function(){
    
   isUpperCase =  upperCaseCheckEl.checked
   isNumbers =  numbersCheckEl.checked;
   isSymbols =  symbolsCheckEl.checked;

    const password = genratePassword(passwordLength);
    passwordEle.innerHTML = password;
    console.log('password', password)
});

passwordEle.addEventListener('click', function(e){
   if(e.target.innerText.length > 0){
    navigator.clipboard.writeText(passwordEle.innerHTML).then(()=>{
        alert('Copied to clipboard');
     }).catch((error)=>{
         alert('could not copy')
     })
   }
})