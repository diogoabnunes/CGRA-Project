/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends MyQuad {
    constructor(scene) {
        super(scene);
        this.initMaterials(this.scene);

        this.face = new MyQuad(this.scene);
    }
    initMaterials(scene) {

        this.topTexture = new CGFappearance(scene);
        this.topTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.topTexture.setDiffuse(1, 1, 1, 1);
        this.topTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.topTexture.setShininess(10);
        this.topTexture.loadTexture('images/mineTop.png');
        this.topTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.sideTexture = new CGFappearance(scene);
        this.sideTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.sideTexture.setDiffuse(1, 1, 1, 1);
        this.sideTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.sideTexture.setShininess(10);
        this.sideTexture.loadTexture('images/mineSide.png');
        this.sideTexture.setTextureWrap('REPEAT', 'REPEAT');

        this.bottomTexture = new CGFappearance(scene);
        this.bottomTexture.setAmbient(0.1, 0.1, 0.1, 1);
        this.bottomTexture.setDiffuse(1, 1, 1, 1);
        this.bottomTexture.setSpecular(0.1, 0.1, 0.1, 1);
        this.bottomTexture.setShininess(10);
        this.bottomTexture.loadTexture('images/mineBottom.png');
        this.bottomTexture.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        // face 1: "front" face
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.sideTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else 
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        // face 2: "back" face
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 1, 0, 0); // 180º
        this.sideTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else 
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        // face 3: "top" face
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
        this.topTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else 
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        // face 4: "base" face
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90 * Math.PI/180, 1, 0, 0);
        this.bottomTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else 
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        // face 5: "left" face
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90 * Math.PI/180, 0, 1, 0);
        this.sideTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else 
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();

        // face 6: "right" face
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90 * Math.PI/180, 0, 1, 0);
        this.sideTexture.apply();
        if (this.scene.linear)
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else 
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        this.face.display();
        this.scene.popMatrix();
    }
}