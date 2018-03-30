
class MainMenu extends HtmlMenu {

    create() {
        this.cars = [
            { name: "Truck", class: Truck, image: "Game/Assets/Img/Cars/truck/preview.png" },
            { name: "Sports car", class: SportsCar, image: "Game/Assets/Img/Cars/spr_vintage/preview.png" },
            { name: "Box dude car", class: BoxDudeCar, image: "Game/Assets/Img/Cars/box_dude_car/preview.png" }
        ];

        this.maps = [
            { name: "Road", class: Road, image: "Game/Assets/Img/Maps/Road/preview.png" },
            { name: "Map2", class: Mountain, image: "Game/Assets/Img/Maps/Mountain/preview.png" }
        ];

        this.currentCar = 0;
        this.currentMap = 0;

        let self = this;

        // Start screen
        this.addState(1, function () {

            self.add("h1", {
                innerText: "Main Menu",
                className: "menuTitle",
            });
            let buttonContainer = self.add("div", {
                className: "buttonContainer"
            });
            self.add("a", {
                innerText: "Start",
                className: "menuButton",
                onclick: function () {
                    self.state++;
                }
            }, buttonContainer);
        });

        // Select map menu
        this.addState(2, function () {

            self.add("h1", {
                innerText: "Select map",
                className: "menuTitle"
            });

            let selectionDiv = self.add("div", {
                className: "selectionDiv"
            });
            self.add("a", {
                innerHTML: "&#8592;",
                className: "arrow",
                onclick: function () {
                    if (self.currentMap <= 0) self.currentMap = self.maps.length - 1;
                    else self.currentMap--;

                    img.src = self.maps[self.currentMap].image;
                }
            }, selectionDiv);
            let imgContainer = self.add("div", {
                className: "imgContainer"
            }, selectionDiv);
            let img = self.add("img", {
                src: self.maps[self.currentMap].image,
                className: "selectionImage"
            }, imgContainer);
            self.add("a", {
                innerHTML: "&#8594;",
                className: "arrow",
                onclick: function () {
                    if (self.currentMap >= self.maps.length - 1) self.currentMap = 0;
                    else self.currentMap++;

                    img.src = self.maps[self.currentMap].image;
                }
            }, selectionDiv);

            self.add("a", {
                innerText: "Next",
                className: "menuButton",
                onclick: function () {
                    self.state++;
                }
            });
        });

        // Select car menu
        this.addState(3, function () {

            self.add("h1", {
                innerText: "Select car",
                className: "menuTitle"
            });

            let selectionDiv = self.add("div", {
                className: "selectionDiv"
            });
            self.add("a", {
                innerHTML: "&#8592;",
                className: "arrow",
                onclick: function () {
                    if (self.currentCar <= 0) self.currentCar = self.cars.length - 1;
                    else self.currentCar--;

                    img.src = self.cars[self.currentCar].image;
                }
            }, selectionDiv);
            let imgContainer = self.add("div", {
                className: "imgContainer"
            }, selectionDiv);
            let img = self.add("img", {
                src: self.cars[self.currentCar].image,
                className: "selectionImage"
            }, imgContainer);
            self.add("a", {
                innerHTML: "&#8594;",
                className: "arrow",
                onclick: function () {
                    if (self.currentCar >= self.cars.length - 1) self.currentCar = 0;
                    else self.currentCar++;

                    img.src = self.cars[self.currentCar].image;
                }
            }, selectionDiv);

            self.add("a", {
                innerText: "Play",
                className: "menuButton",
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