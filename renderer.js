class Renderer {
    constructor (myGame) {
        this.game = myGame;
    }

    update () {

        this.game.update();
        this.game.bodies.forEach(function (b) {
            b.draw();
        });
    }
}
