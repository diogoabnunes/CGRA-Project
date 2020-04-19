/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends MyQuad {
    constructor(scene) {
        super(scene);
        this.face = new MyQuad(this.scene);
        this.initTextures(this.scene);
    }

    initTextures(scene) {

        // "Front" Texture
        this.front = new CGFappearance(this.scene);
        this.front.setAmbient(0.9, 0.9, 0.9, 1);
        this.front.setDiffuse(0.0, 0.0, 0.0, 1);
        this.front.setSpecular(0.0, 0.0, 0.0, 1);
        this.front.setShininess(10.0);
        this.front.loadTexture('images/split_cubemap/front.png');
        this.front.setTextureWrap('REPEAT', 'REPEAT');

        // "Back" Texture
        this.back = new CGFappearance(this.scene);
        this.back.setAmbient(0.9, 0.9, 0.9, 1);
        this.back.setDiffuse(0.0, 0.0, 0.0, 1);
        this.back.setSpecular(0.0, 0.0, 0.0, 1);
        this.back.setShininess(10.0);
        this.back.loadTexture('images/split_cubemap/back.png');
        this.back.setTextureWrap('REPEAT', 'REPEAT');

        // "Top" Texture
        this.top = new CGFappearance(this.scene);
        this.top.setAmbient(0.9, 0.9, 0.9, 1);
        this.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.top.setShininess(10.0);
        this.top.loadTexture('images/split_cubemap/top.png');
        this.top.setTextureWrap('REPEAT', 'REPEAT');

        // "Base" Texture
        this.base = new CGFappearance(this.scene);
        this.base.setAmbient(0.9, 0.9, 0.9, 1);
        this.base.setDiffuse(0.9, 0.9, 0.9, 1);
        this.base.setSpecular(0.1, 0.1, 0.1, 1);
        this.base.setShininess(10.0);
        this.base.loadTexture('images/split_cubemap/bottom.png');
        this.base.setTextureWrap('REPEAT', 'REPEAT');

        // "Left" Texture
        this.left = new CGFappearance(this.scene);
        this.left.setAmbient(0.9, 0.9, 0.9, 1);
        this.left.setDiffuse(0.0, 0.0, 0.0, 1);
        this.left.setSpecular(0.0, 0.0, 0.0, 1);
        this.left.setShininess(10.0);
        this.left.loadTexture('images/split_cubemap/left.png');
        this.left.setTextureWrap('REPEAT', 'REPEAT');

        // "Right" Texture
        this.right = new CGFappearance(this.scene);
        this.right.setAmbient(0.9, 0.9, 0.9, 1);
        this.right.setDiffuse(0.0, 0.0, 0.0, 1);
        this.right.setSpecular(0.0, 0.0, 0.0, 1);
        this.right.setShininess(10.0);
        this.right.loadTexture('images/split_cubemap/right.png');
        this.right.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {

        this.scene.pushMatrix();

        // face 1: "front" face
        this.front.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        // face 2: "back" face
        this.back.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 1, 0, 0); // 180º
        this.face.display();
        this.scene.popMatrix();

        // face 3: "top" face
        this.top.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-90 * Math.PI/180, 1, 0, 0);
        this.face.display();
        this.scene.popMatrix();

        // face 4: "base" face
        this.base.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(90 * Math.PI/180, 1, 0, 0);
        this.face.display();
        this.scene.popMatrix();

        // face 5: "left" face
        this.left.apply();
        this.scene.pushMatrix();
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-90 * Math.PI/180, 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();

        // face 6: "right" face
        this.right.apply();
        this.scene.pushMatrix();
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(90 * Math.PI/180, 0, 1, 0);
        this.face.display();
        this.scene.popMatrix();
    }
}