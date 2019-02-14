export default class Attack {
  constructor(data) {
    this.name = data.name
    this.modifier = data.modifier
  }
  getTemplate() {
    return `
	  <div class="col-6">
			<button type="button" class="btn btn-outline-dark w-100 mt-1"
				onclick="attack(${this.modifier})">${this.name.toUpperCase()}</button>
		</div>
    `
  }
}
