export default class Character {
  constructor(data) {
    this.name = data.name
    this.health = data.health
    this.img = data.img
  }
  getTemplate() {
    return `
    <div class="col-6">
						<img id="pikaimg" class="img-fluid" src="${this.img}" alt="">
					</div>
					<div class="col-6 pb-3 px-5 text-center yourhealth">
						<h2>${this.name.toUpperCase()}</h2>
						<div class="progress">
							<div id="myhealth" class="progress-bar progress-color" role="progressbar" style="width: ${this.health}%"
								aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
						</div>
						<h3 id="pikaHP" class="mt-2">HP: ${this.health}/100</h3>
					</div>
				</section>
    `
  }
}