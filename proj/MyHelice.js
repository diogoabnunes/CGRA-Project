/**
 * MyHelice
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyHelice extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.triangle = new MyTriangle(scene);
        this.sphere = new MySphere(scene, 16, 8);
        this.initBuffers();
    }

    display() {

        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 0.5);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(0 * Math.PI/180.0, 0, 0, 1);
        this.scene.translate(-0.5,-0.25,0);
        this.scene.rotate(22.5 * Math.PI/180.0, 0, 1, 0);
        this.scene.translate(1,-1,0);
        this.triangle.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(180 * Math.PI/180.0, 0, 0, 1);
        this.scene.translate(-0.5,-0.25,0);
        this.scene.rotate(22.5 * Math.PI/180.0, 0, 1, 0);
        this.scene.translate(1, -1, 0);
        this.triangle.display();
        this.scene.popMatrix();
    }
} 