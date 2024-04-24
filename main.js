const randomNumber = Math.round(Math.random() * 9)

let messages = [
  'A vida te dá o que você precisa, não o que você quer.',
  'Acredite nos seus sonhos e lute por eles todos os dias.',
  'O segredo da felicidade está em fazer o que se gosta.',
  'Cada dia é uma nova chance para ser feliz. Aproveite!',
  'Confie no universo e ele trará boas surpresas para você.',
  'Seja grato pelo que tem e mais coisas boas virão.',
  'A persistência é a chave para alcançar seus objetivos.',
  'Acredite no seu potencial e nada será impossível.',
  'Tudo na vida acontece no momento certo. Confie!',
  'Sorria sempre, pois a vida é feita de momentos felizes.',
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
];


let message = messages[randomNumber];
document.querySelector('#luckyMessage').innerText = message

function handleClick() {
  document.querySelector('.screen1').classList.add('hide')
  document.querySelector('.screen2').classList.remove('hide')
}

function returnHome() {
  location.reload()
}