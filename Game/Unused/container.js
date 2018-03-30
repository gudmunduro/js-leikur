
class Container {

    constructor()
    {
        this.views = [];
        this.create();
    }

    create() {

    }

    addView(view) {
        this.views.push(view);
    }

    destroy() {
        console.log("!2");
        for (let view of this.views) {
            view.destroy();
        }
        console.log("!");
    }

}