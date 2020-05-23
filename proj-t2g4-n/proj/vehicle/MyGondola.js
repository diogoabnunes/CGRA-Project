/**
* MyGondola
* @constructor
*/
class MyGondola extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.side = new MyCilinder(this.scene, 16);
        this.border = new MySphere(this.scene, 16, 8);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -3);
        this.scene.scale(1, 1, 6);
        this.scene.rotate(90 * Math.PI / 180, 1, 0, 0);
        this.side.display();
        this.scene.popMatrix();
    
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 2.8);
        this.border.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -2.8);
        this.border.display();
        this.scene.popMatrix();
    }
}