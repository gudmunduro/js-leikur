

class HtmlMenu {

    constructor() {
        this._state = 0;
        this._createStateFuncs = {};
        this._currentStateContent = {
            id: null,
            container: null,
            elements: []
        };
        this.create();
    }

    create()
    {

    }

    addState(id, createFunc)
    {
        this._createStateFuncs = {id: createFunc};
    }

    add(elementTag, options, to = this._currentStateContent.container)
    {
        let element = document.createElement(elementTag);
        for (let key in options)
        {
            element[key] = options[key];
        }
        this._currentStateContent.elements.push(element);
        this._currentStateContent.container.appendChild(element);
        return element;
    }

    get state()
    {
        return this._state;
    }

    set state(value)
    {
        this._state = value;
        this._removeAll();
        this._createContainer();
        this._currentStateContent.id = value;
        this._createStateFuncs[value]();
    }

    // Private

    _createContainer()
    {
        this._currentStateContent.container = document.createElement("div");
    }

    _removeAll()
    {
        this._currentStateContent.container.parentNode.removeChild(this._currentStateContent.container);
        this._currentStateContent.elements = [];
    }

}