/**
* MyVehicleModel
* @constructor
*/
class MyVehicleModel extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;
        this.initMaterials(scene);
        this.envelope = new MySphere(scene, 16, 8);
        this.gondola = new MyGondola(scene);
        this.leme = new MyLeme(scene);
        this.motor = new MySphere(scene, 16, 8);
        this.helice = new MyHelice(scene);
    }

    initMaterials(scene) {
        this.prozisTexture = new CGFappearance(scene);
        this.prozisTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.prozisTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.prozisTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.prozisTexture.setShininess(10.0);
        this.prozisTexture.loadTexture('images/prozis.png');
        this.prozisTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.white = new CGFappearance(scene);
        this.white.setAmbient(0.1, 0.1, 0.1, 1);
        this.white.setDiffuse(0.9, 0.9, 0.9, 1);
        this.white.setSpecular(0.1, 0.1, 0.1, 1);
        this.white.setShininess(10.0);
        this.white.loadTexture('images/white.png');
        this.white.setTextureWrap('REPEAT', 'REPEAT');

        this.black = new CGFappearance(scene);
        this.black.setAmbient(0.1, 0.1, 0.1, 1);
        this.black.setDiffuse(0.9, 0.9, 0.9, 1);
        this.black.setSpecular(0.1, 0.1, 0.1, 1);
        this.black.setShininess(10.0);
        this.black.loadTexture('images/black.png');
        this.black.setTextureWrap('REPEAT', 'REPEAT');

        this.red = new CGFappearance(scene);
        this.red.setAmbient(0.1, 0.1, 0.1, 1);
        this.red.setDiffuse(0.9, 0.9, 0.9, 1);
        this.red.setSpecular(0.1, 0.1, 0.1, 1);
        this.red.setShininess(10.0);
        this.red.loadTexture('images/red.png');
        this.red.setTextureWrap('REPEAT', 'REPEAT');
    }

    display(autopilot) {
        
        // Envelope
        this.prozisTexture.apply();
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.envelope.display();
        this.scene.popMatrix();

        // Gondola
        this.black.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.scale(0.1, 0.1, 0.1);
        this.gondola.display();
        this.scene.popMatrix();

        // Leme estático esquerdo
        this.white.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.25, 0, -0.5);
        this.scene.rotate(90 * Math.PI/180.0, 0, 0, 1);
        this.scene.scale(0.15, 0.15, 0.15);
        this.leme.display();
        this.scene.popMatrix();

        // Leme estático direito
        this.white.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.25, 0, -0.5);
        this.scene.rotate(90 * Math.PI/180.0, 0, 0, 1);
        this.scene.scale(0.15, 0.15, 0.15);
        this.leme.display();
        this.scene.popMatrix();

        // Leme movível de cima
        this.white.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.25, -0.5);
        if (!autopilot) {
            if (this.scene.gui.isKeyPressed("KeyA"))
                this.scene.rotate(- 5 * Math.PI/180.0, 0, 1, 0);
            else if (this.scene.gui.isKeyPressed("KeyD"))
                this.scene.rotate(5 * Math.PI/180.0, 0, 1, 0);
        }
        this.scene.scale(0.15, 0.15, 0.15);
        this.leme.display();
        this.scene.popMatrix();

        // Leme movível de baixo
        this.white.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.25, -0.5);
        if (!autopilot) {
            if (this.scene.gui.isKeyPressed("KeyA"))
                this.scene.rotate(- 5 * Math.PI/180.0, 0, 1, 0);
            else if (this.scene.gui.isKeyPressed("KeyD"))
                this.scene.rotate(5 * Math.PI/180.0, 0, 1, 0);
        }
        this.scene.scale(0.15, 0.15, 0.15);
        this.leme.display();
        this.scene.popMatrix();

        // Motor direito
        this.red.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.1, -0.55, -0.3)
        this.scene.scale(0.05,0.05,0.1);
        this.motor.display();
        this.scene.popMatrix();

        // Motor esquerdo
        this.red.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.1, -0.55, -0.3)
        this.scene.scale(0.05,0.05,0.1);
        this.motor.display();
        this.scene.popMatrix();

        // Helice direita
        this.black.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.1, -0.55, -0.40);
        this.scene.rotate(this.scene.vehicle.heliceangle, 0, 0, 1);
        this.scene.scale(0.02, 0.02, 0.02);
        this.helice.display();
        this.scene.popMatrix();

        // Helice esquerda
        this.black.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.1, -0.55, -0.40);
        this.scene.rotate(this.scene.vehicle.heliceangle, 0, 0, 1);
        this.scene.scale(0.02, 0.02, 0.02);
        this.helice.display();
        this.scene.popMatrix();
    }
}