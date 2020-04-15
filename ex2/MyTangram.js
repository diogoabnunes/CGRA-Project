/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);

        this.greenSquare = new MyDiamond(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.blueBigTriangle = new MyTriangleBig(this.scene);
        this.orangeBigTriangle = new MyTriangleBig(this.scene);
        this.redSmallTriangle = new MyTriangleSmall(this.scene);
        this.purpleSmallTriangle = new MyTriangleSmall(this.scene);
    }
    display() {

        // greenSquare
        this.scene.pushMatrix();
        var tra = [
            Math.cos(35 * Math.PI/180), Math.sin(35 * Math.PI/180), 0, 0,
            -Math.sin(35 * Math.PI/180), Math.cos(35 * Math.PI/180), 0, 0,
            0, 0, 1, 0,
            -2.5, 1.66, 0, 1
        ];
        this.scene.multMatrix(tra);
        this.scene.setDiffuse(0, 1, 0); // green
        this.greenSquare.display();
        this.scene.popMatrix();

        // yellowParallelogram
        this.scene.pushMatrix();
        this.scene.translate(0, -1, 0);
        this.scene.rotate(90 * Math.PI/180, 0, 0, 1);
        this.scene.scale(1, -1, 0);
        this.scene.setDiffuse(1, 1, 0); // yellow
        this.yellowParallelogram.display();
        this.scene.popMatrix();
        
        // pinkTriangle
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), -1, 0);
        this.scene.rotate(-135 * Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(1, 1/2.0, 1/2.0); // pink
        this.pinkTriangle.display();
        this.scene.popMatrix();

        // blueBigTriangle
        this.scene.pushMatrix();
        this.scene.translate(-2.75, -1, 0);
        this.scene.setDiffuse(0, 188/255, 1); // blue
        this.blueBigTriangle.display();
        this.scene.popMatrix();

        // orangeBigTriangle
        this.scene.pushMatrix();
        this.scene.translate(-1, -1, 0);
        this.scene.scale(1, -1, 0);
        this.scene.setDiffuse(1, 138/255, 0); // orange
        this.orangeBigTriangle.display();
        this.scene.popMatrix();
        
        // redSmallTriangle
        this.scene.pushMatrix();
        this.scene.translate(1, 2.5, 0);
        this.scene.rotate(-90 * Math.PI/180, 0, 0, 1);
        this.scene.setDiffuse(1, 0, 0); // red
        this.redSmallTriangle.display();
        this.scene.popMatrix();

        // purpleSmallTriangle
        this.scene.pushMatrix();
        this.scene.translate(3.5, -1, 0);
        this.scene.scale(1, -1, 0);
        this.scene.setDiffuse(212/255, 0, 1); // purple
        this.purpleSmallTriangle.display();
        this.scene.popMatrix();
    }    
}