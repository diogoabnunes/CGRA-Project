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
    display() {
            // face 1: "front" face
            this.scene.pushMatrix();
            this.scene.translate(0, 0, 0.5);
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
            if (this.scene.linear)
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
            else 
                this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.face.display();
            this.scene.popMatrix();
    }
}