class Main {

    constructor() {

        this.initDOM();
        this.initEvent();

        this.draw();
    }

    initDOM() {

        this.DOM = {};

        this.DOM.x = document.getElementById('X');
        this.DOM.y = document.getElementById('Y');

        this.DOM.to_x = document.getElementById('to_X');
        this.DOM.to_y = document.getElementById('to_Y');

        this.DOM.play = document.querySelector('.console--play');
        this.DOM.stop = document.querySelector('.console--stop');
        this.DOM.next = document.querySelector('.console--next');
    }

    initEvent() {

        this.DOM.x.addEventListener('change', this.onChange.bind(this));
        this.DOM.y.addEventListener('change', this.onChange.bind(this));

        this.DOM.play.addEventListener('click', this.onClickPlay.bind(this));
    }

    draw() {

        new Bolygone(this.DOM.x.value, this.DOM.y.value);
    }

    /**
     *
     * @listens change
     */
    onChange() {

        this.draw();
    }

    /**
     *
     * @listens click
     */
    onClickPlay() {

        const x_value = parseFloat(this.DOM.x.value);
        const y_value = parseFloat(this.DOM.y.value);

        const event = document.createEvent('HTMLEvents');
              event.initEvent('change', true, false);

        for (let i = x_value; i <= this.DOM.to_x.value; i += 0.01)
        {
            setTimeout(() => {

                this.DOM.x.value = i;

                this.draw();

            }, 0);
        }

    }
}
