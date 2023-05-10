class Tip {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.tx = [];
		this.ty = [];
		this.tpx = [];
		this.tpy = [];
		this.tr = [];
		for (let i = 0; i < 15; i++) {
			let rand = p5.Vector.random2D();
			rand.mult(random(4 * height / 566));
			let nx = rand.x;
			let ny = rand.y;
			this.tx.push(nx);
			this.ty.push(ny);
			this.tpx.push(nx);
			this.tpy.push(ny);
			this.tr.push((4 * height / 566) - rand.mag());
		}
	}
	show() {
		for (let i = 0; i < 15; i++) {
			let x1 = this.x + paper.width / 2 + this.tx[i];
			let y1 = this.y + height / 2 + this.ty[i];
			let x2 = this.tpx[i];
			let y2 = this.tpy[i];
			let r = this.tr[i];
			if (mouseIsPressed) {
				paper.strokeWeight(r);
				let sc = color(crayon.c);
				sc.setAlpha(random(50, 150));
				paper.stroke(sc);
				paper.line(x1, y1, x2, y2);
			}
			this.tpx[i] = x1;
			this.tpy[i] = y1;
		}
	}
}