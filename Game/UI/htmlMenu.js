

class HtmlMenu {

    constructor() {
        this._state = 0;
        this._createStateFuncs = {};
        this._currentStateContent = {
            id: undefined,
            container: undefined,
            elements: []
        };
        this._mainContainer = document.createElement("div");
        this._mainContainer.className = "mainContainer";
        document.body.appendChild(this._mainContainer);

        this.create();

        this.state = this.defaultState();
    }

    create()
    {

    }

    defaultState()
    {
        return 0;
    }

    destroy()
    {
        this._removeAll();
        document.body.removeChild(this._mainContainer);
        this._state = 0;
    }

    addState(id, createFunc)
    {
        this._createStateFuncs[id] = createFunc;
    }

    add(elementTag, options, to = this._currentStateContent.container)
    {
        let element = document.createElement(elementTag);
        for (let key in options)
        {
            element[key] = options[key];
        }
        this._currentStateContent.elements.push(element);
        to.appendChild(element);
        return element;
    }

    get state()
    {
        return parseInt(this._state);
    }

    set state(value)
    {
        if (!Object.keys(this._createStateFuncs).includes(value.toString())) return;

        this._state = value.toString();
        this._removeAll();
        this._createContainer();
        this._currentStateContent.id = value.toString();
        this._createStateFuncs[value.toString()]();
    }

    // Private

    _createContainer()
    {
        this._currentStateContent.container = document.createElement("div");
        this._currentStateContent.container.className = "stateContainer";
        this._mainContainer.appendChild(this._currentStateContent.container);
    }

    _removeAll()
    {
        if (this._currentStateContent.container == null) return;
        this._mainContainer.removeChild(this._currentStateContent.container);
        this._currentStateContent.container = undefined;
        this._currentStateContent.elements = [];
    }

}