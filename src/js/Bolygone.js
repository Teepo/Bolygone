export class Bolygone {

    constructor(x, y) {

        this.canvas = document.querySelector('canvas');
        this.ctx    = this.canvas.getContext('2d');

        this.clear();

        this.x = x;
        this.y = y;

        this.ctx.translate(this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.rotate(-Math.PI/2);
        this.ctx.translate(-this.canvas.width / 2, -this.canvas.height / 2);

        this.radius = (this.canvas.width / 2) - 20;

        this.drawCircle();
        this.drawCirclePoint();
        this.drawLine();
    }

    clear() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    drawCircle() {

        this.ctx.beginPath();
        this.ctx.arc(this.canvas.width / 2, this.canvas.width / 2, this.radius, 0, Math.PI * 2, true);

        this.ctx.stroke();
    }

    drawCirclePoint() {

        let _x = 0;
        var _y = 0;
        let angle = 0;

        for (let i = 0; i < this.x; i++)
        {
            angle = -(((360 / this.x) * i));

            _x = (this.canvas.width / 2) + this.radius * Math.cos(-angle*Math.PI/180);
            _y = (this.canvas.width / 2) + this.radius * Math.sin(-angle*Math.PI/180);

            this.ctx.beginPath();
            this.ctx.arc(_x, _y, 4, 0, Math.PI * 2, true);
            this.ctx.fill();

            //this.ctx.fillText(i, x + 10, y);
        }
    }

    drawLine() {

        const rayon = (Math.min(this.canvas.width, this.canvas.height) / 2.15);

        this.ctx.lineWidth = 2;
        this.ctx.beginPath();

        for (let i = 0; i < this.x; i++)
        {
            this.ctx.moveTo(this.canvas.width / 2 + rayon * Math.cos(2 * i * (1 / this.x) * Math.PI),
                            this.canvas.height / 2 + rayon * Math.sin(2 * i * (1 / this.x) * Math.PI));

            this.ctx.lineTo(this.canvas.width / 2 + rayon * Math.cos(2 * i * this.y * (1 / this.x) * Math.PI),
                            this.canvas.height / 2 + rayon * Math.sin(2 * i * this.y * (1 / this.x) * Math.PI));
        }

        this.ctx.stroke();

    }
}