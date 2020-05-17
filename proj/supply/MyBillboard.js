/**
* MyBillboard
* @method constructor
* @param scene - Reference to MyScene object
*/

class MyBillboard extends CGFobject {
    constructor(scene){
        super(scene);

        this.baseBoard = new MyPlane(this.scene, 20, true);
        //this.backBoard = new MyPlane(this.scene, 20);
        this.progressBar = new MyPlane(this.scene, 20);
        this.beam = new MyDoubleSidedQuad(this.scene);

        this.nDeliveredSupplies = 0;


        this.initTextures();
    }

    initTextures(){
        this.frontBaseTexture = new CGFappearance(this.scene);
        this.frontBaseTexture.setAmbient(0.9, 0.9, 0.9, 1);
        this.frontBaseTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.frontBaseTexture.setSpecular(0.2, 0.2, 0.2, 1);
        this.frontBaseTexture.setShininess(10.0);
        this.frontBaseTexture.loadTexture('images/billboard.jpg');
        this.frontBaseTexture.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.backBaseTexture = new CGFappearance(this.scene);
        this.backBaseTexture.setAmbient(0.9, 0.9, 0.9, 1);
        this.backBaseTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.backBaseTexture.setSpecular(0.2, 0.2, 0.2, 1);
        this.backBaseTexture.setShininess(10.0);
        this.backBaseTexture.loadTexture('images/billboard_back.jpg');
        this.backBaseTexture.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        
        this.beamTexture = new CGFappearance(this.scene);
        this.beamTexture.setAmbient(0.5, 0.5, 0.5, 1);
        this.beamTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.beamTexture.setSpecular(0.2, 0.2, 0.2, 1);
        this.beamTexture.setShininess(10.0);
        this.beamTexture.loadTexture('images/beam.jpg');
        this.beamTexture.setTextureWrap('REPEAT', 'REPEAT');


        this.progressBarShader = new CGFshader(this.scene.gl, "shaders/progressBar.vert", "shaders/progressBar.frag");
        this.progressBarShader.setUniformsValues({nDeliveredSupplies: 0});
    }

    update(supplies) {
        this.progressBarShader.setUniformsValues({nDeliveredSupplies: supplies});
    }

    reset() {
        this.progressBarShader.setUniformsValues({nDeliveredSupplies: 0});
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(-2,0.5,-2);
        this.scene.rotate(Math.PI/4, 0,1,0);

        //base board (front)
        this.scene.pushMatrix();
        this.frontBaseTexture.apply();
        this.scene.translate(0,1,-3);
        this.scene.scale(2,1,1);
        this.baseBoard.display();
        this.scene.popMatrix();

        //base board (back)
        this.scene.pushMatrix();
        this.backBaseTexture.apply();
        this.scene.translate(0,1,-3.001);
        this.scene.scale(2,1,1);
        this.baseBoard.display();
        this.scene.popMatrix();

        //progress bar
        this.scene.pushMatrix();
        this.scene.setActiveShader(this.progressBarShader);
        this.scene.translate(0,0.9,-2.99);
        this.scene.scale(1, 0.5, 0.2);
        this.progressBar.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();

        //beam1
        this.scene.pushMatrix();
        this.beamTexture.apply();
        this.scene.translate(-0.95,0,-3.002);
        this.scene.scale(0.10, 2.99, 1);
        this.beam.display();
        this.scene.popMatrix();

        //beam2
        this.scene.pushMatrix();
        this.beamTexture.apply();
        this.scene.translate(0.95,0,-3.002);
        this.scene.scale(0.10, 2.99, 1);
        this.beam.display();
        this.scene.popMatrix();

        this.scene.popMatrix();
    }
}