export default class Item {
  constructor(data) {
    this.name = data.name
    this.modifier = data.modifier
  }
  getTemplate() {
    return `
	  <div class="col-6">
		  <button type="button" class="btn btn-outline-secondary w-100 mt-1" onclick="${this.name}()">${this.name.toUpperCase()}</button>
	  </div>
    `
  }
}
