
class MainMenu extends HtmlMenu {

    create() {
        // Start screen
        this.addState(1, function () {
            let inst = this;

            this.add("h1", {
                innerText: "Main Menu",
                className: "MenuTitle",
            });
            this.add("a", {
                innerText: "Start",
                className: "MainMenuStartButton",
                onClick: function () {
                    inst.state = 1;
                }
            });
        });

        // Select map menu
        this.addState(2, function () {
            let inst = this;

            this.add("h1", {
                innerText: "Select map",
                className: "MenuTitle"
            });

            let selectionDiv = this.add("div", {
                className: "SelectionDiv"
            });
            this.add("a", {
                className: "leftArrow"
            }, selectionDiv);
            


        });
    }

}