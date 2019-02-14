import Character from "../models/character.js";
import Target from "../models/target.js";
import Item from "../models/item.js";
import Attack from "../models/attack.js";

//PRIVATE
let _state = {
  characters: [
    new Character({ name: 'Pikachu', health: 100, img: 'assets/images/pika-sprite.png' })
  ],
  targets: [
    new Target({ name: 'vulpix', health: 100, attack: 30, img: 'assets/images/vulpix-sprite.png' })
  ],
  items: [
    new Item({ name: 'potion', modifier: 30 }),
    new Item({ name: 'restore', modifier: '+100 health' }),
    new Item({ name: 'pokeball', modifier: 'change img' }),
    new Item({ name: 'candy', modifier: 'atk*1.5' })
  ],
  attacks: [
    new Attack({ name: 'thundershock', modifier: 5 }),
    new Attack({ name: 'quick attack', modifier: 10 }),
    new Attack({ name: 'thunderbolt', modifier: 20 })
  ]
}

let _subscribers = {
  characters: [],
  targets: [],
  items: [],
  attacks: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn());
}





//PUBLIC
export default class GameService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Characters() {
    return _state.characters.map(character => new Character(character))
  }

  get Targets() {
    return _state.targets.map(target => new Target(target))
  }

  get Items() {
    return _state.items.map(item => new Item(item))
  }

  get Attacks() {
    return _state.attacks.map(attack => new Attack(attack))
  }

}