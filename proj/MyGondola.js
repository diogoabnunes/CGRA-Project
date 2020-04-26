/**
* MyGondola
* @constructor
*/
class MyGondola extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.gondola = new MyCilinder(scene, 16);
    }

    display() {
        this.scene.pushMatrix();

        this.scene.scale(0.5, 0.5, 1);
        this.gondola.display();

        this.scene.popMatrix();
    }
}