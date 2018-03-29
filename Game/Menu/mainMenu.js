
class MainMenu extends HtmlMenu {

    create() {
        this.cars = [
            { name: "Truck", class: Truck, image: "Game/Assets/Img/Cars/truck/preview.png" },
            { name: "Sports car", class: SportsCar, image: "Game/Assets/Img/Cars/spr_vintage/preview.png" },
            { name: "Box dude car", class: BoxDudeCar, image: "Game/Assets/Img/Cars/box_dude_car/preview.png" }
        ];

        this.maps = [
            { name: "Map1", class: Map1, image: "Game/Assets/Img/Maps/Road/preview.png" },
            { name: "Map2", class: Map2, image: "Game/Assets/Img/Maps/Mountain/preview.png" }
        ];

        this.currentCar = 0;
        this.currentMap = 0;

        let self = this;

        // Start screen
        this.addState(1, function () {

            self.add("h1", {
                innerText: "Main Menu",
                className: "MenuTitle",
            });
            self.add("a", {
                innerText: "Start",
                className: "MainMenuStartButton",
                onclick: function () {
                    self.state++;
                }
            });
        });

        // Select map menu
        this.addState(2, function () {

            self.add("h1", {
                innerText: "Select map",
                className: "MenuTitle"
            });

            let selectionDiv = self.add("div", {
                className: "SelectionDiv"
            });
            self.add("a", {
                innerText: "<-",
                className: "leftArrow",
                onclick: function () {
                    if (self.currentMap <= 0) self.currentMap = self.maps.length - 1;
                    else self.currentMap--;

                    img.src = self.maps[self.currentMap].image;
                }
            }, selectionDiv);
            let img = self.add("img", {
                src: self.maps[self.currentMap].image,
                className: "selectionImage"
            }, selectionDiv);
            self.add("a", {
                innerText: "->",
                className: "rightArrow",
                onclick: function () {
                    if (self.currentMap >= self.maps.length - 1) self.currentMap = 0;
                    else self.currentMap++;

                    img.src = self.maps[self.currentMap].image;
                }
            }, selectionDiv);

            self.add("a", {
                innerText: "Next",
                className: "nextButton",
                onclick: function () {
                    self.state++;
                }
            });
        });

        // Select car menu
        this.addState(3, function () {

            self.add("h1", {
                innerText: "Select car",
                className: "MenuTitle"
            });

            let selectionDiv = self.add("div", {
                className: "SelectionDiv"
            });
            self.add("a", {
                innerText: "<-",
                className: "leftArrow",
                onclick: function () {
                    if (self.currentCar <= 0) self.currentCar = self.cars.length - 1;
                    else self.currentCar--;

                    img.src = self.cars[self.currentCar].image;
                }
            }, selectionDiv);
            let img = self.add("img", {
                src: self.cars[self.currentCar].image,
                className: "selectionImage"
            }, selectionDiv);
            self.add("a", {
                innerText: "->",
                className: "rightArrow",
                onclick: function () {
                    if (self.currentCar >= self.cars.length - 1) self.currentCar = 0;
                    else self.currentCar++;

                    img.src = self.cars[self.currentCar].image;
                }
            }, selectionDiv);

            self.add("a", {
                innerText: "Play",
                className: "nextButton",
                onclick: function () {
                    let car = self.cars[self.currentCar].class;
                    let map = self.maps[self.currentMap].class
                    main.startGame(car, map);
                }
            });
        });
    }

    defaultState()
    {
        return 1;
    }

}