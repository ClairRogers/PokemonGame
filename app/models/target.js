export default class Target {
  constructor(data) {
    this.name = data.name
    this.health = data.health
    this.attacks = data.attack
    this.img = data.img
  }
  getTemplate() {
    return `
  <div class="col-6 px-5 mt-4">
		<h2>${this.name.toUpperCase()}</h2>
		<div class="progress">
			<div id="enemyhealth" class="progress-bar progress-color" role="progressbar" style="width: ${this.health}%"
			aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
		</div>
	  <h3 id="vulpixHP" class="mt-2">HP: ${this.health}/100</h3>
	</div>
<div class="col-6">
	<img id="vulpimg" class="mt-3 img-fluid" src="${this.img}" alt="">
</div>
    `
  }

}