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
    }

    initEvent() {

        this.DOM.x.addEventListener('change', this.onChange.bind(this));
        this.DOM.y.addEventListener('change', this.onChange.bind(this));
    }

    draw() {
        new App.Bolygone(this.DOM.x.value, this.DOM.y.value);
    }

    /**
     *
     * @fires change
     */
    onChange() {

        this.draw();
    }
}