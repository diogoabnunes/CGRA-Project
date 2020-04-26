/**
* MyEnvelope
* @constructor
*/
class MyEnvelope extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.envelope = new MySphere(scene, 16, 8);
    }

    display() {
        this.scene.pushMatrix();

        this.scene.scale(0.5, 0.5, 1);
        this.envelope.display();

        this.scene.popMatrix();
    }
}