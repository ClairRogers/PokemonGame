import GameService from "./gameService.js";

let _gs = new GameService

function drawChars() {
  let characters = _gs.Characters
  let targets = _gs.Targets
  let templateChar = ''
  let templateTarg = ''
  characters.forEach(character => {
    templateChar += character.getTemplate()
  });
  targets.forEach(target => {
    templateTarg += target.getTemplate()
  });
  document.getElementById('character').innerHTML = templateChar
  document.getElementById('target').innerHTML = templateTarg
}

function drawBtn() {
  let items = _gs.Items
  let attacks = _gs.Attacks
  let templateItems = ''
  let templateAtk = ''
  items.forEach(item => {
    templateItems += item.getTemplate()
  });
  attacks.forEach(attack => {
    templateAtk += attack.getTemplate()
  });
  document.getElementById('attacks').innerHTML = templateAtk
  document.getElementById('items').innerHTML = templateItems
}


//PUBLIC
export default class GameController {
  constructor() {
    _gs.addSubscriber('characters', drawChars)
    _gs.addSubscriber('targets', drawChars)
    _gs.addSubscriber('items', drawBtn)
    _gs.addSubscriber('attacks', drawBtn)
    drawChars()
    drawBtn()
  }
}