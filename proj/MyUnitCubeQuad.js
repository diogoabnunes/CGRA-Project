/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends MyQuad {
    constructor(scene) {
        super(scene);

        this.face = new MyQuad(this.scene);
    }    
    display(state) {
        if (state == 1) {
            // face 1: "front" face
            this.scene.pushMatrix();
            this.scene.translate(0, 0, 0.5);
            this.face.display();
            this.scene.popMatrix();

            // face 2: "back" face
            this.scene.pushMatrix();
            this.scene.translate(0, 0, -0.5);
            this.scene.rotate(Math.PI, 1, 0, 0); // 180º
            this.face.display();
            this.scene.popMatrix();

            // face 3: "top" face
            this.scene.pushMatrix();
            this.scene.translate(0, 0.5, 0);
            this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
            this.face.display();
            this.scene.popMatrix();

            // face 4: "base" face
            this.scene.pushMatrix();
            this.scene.translate(0, -0.5, 0);
            this.scene.rotate(90 * Math.PI/180, 1, 0, 0);
            this.face.display();
            this.scene.popMatrix();

            // face 5: "left" face
            this.scene.pushMatrix();
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-90 * Math.PI/180, 0, 1, 0);
            this.face.display();
            this.scene.popMatrix();

            // face 6: "right" face
            this.scene.pushMatrix();
            this.scene.translate(0.5, 0, 0);
            this.scene.rotate(90 * Math.PI/180, 0, 1, 0);
            this.face.display();
            this.scene.popMatrix();
        }
        else if (state == 2) {
            this.scene.pushMatrix();
            this.scene.translate(1, -0.5, 0);
            this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
            this.face.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(-1, -0.5, 0);
            this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
            this.face.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, -0.5, 1);
            this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
            this.face.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(0, -0.5, -1);
            this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
            this.face.display();
            this.scene.popMatrix();
        }
    }
}