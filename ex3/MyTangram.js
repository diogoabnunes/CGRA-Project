/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials(this.scene);

        this.greenSquare = new MyDiamond(this.scene);
        this.yellowParallelogram = new MyParallelogram(this.scene);
        this.pinkTriangle = new MyTriangle(this.scene);
        this.blueBigTriangle = new MyTriangleBig(this.scene);
        this.orangeBigTriangle = new MyTriangleBig(this.scene);
        this.redSmallTriangle = new MyTriangleSmall(this.scene);
        this.purpleSmallTriangle = new MyTriangleSmall(this.scene);
    }
    initMaterials(scene) {

        // Green
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0.1,0.1,0.1,1.0);
        this.green.setDiffuse(0, 1, 0, 1);
        this.green.setSpecular(0, 1, 0, 1);
        this.green.setShininess(10);

        // Yellow
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(0.1,0.1,0.1,1.0);
        this.yellow.setDiffuse(1, 1, 0, 1);
        this.yellow.setSpecular(1, 1, 0, 1);
        this.yellow.setShininess(10);

        // Pink
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(0.1,0.1,0.1,1.0);
        this.pink.setDiffuse(1, 1/2.0, 1/2.0, 1);
        this.pink.setSpecular(1, 1/2.0, 1/2.0, 1);
        this.pink.setShininess(10);

        // Blue
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0.1,0.1,0.1,1.0);
        this.blue.setDiffuse(0, 188/255.0, 1, 1);
        this.blue.setSpecular(0, 188/255.0, 1, 1);
        this.blue.setShininess(10);

        // Orange
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(0.1,0.1,0.1,1.0);
        this.orange.setDiffuse(1, 138/255.0, 0, 1);
        this.orange.setSpecular(1, 138/255.0, 0, 1);
        this.orange.setShininess(10);

        // Red
        this.red = new CGFappearance(scene);
        this.red.setAmbient(0.1,0.1,0.1,1.0);
        this.red.setDiffuse(1, 0, 0, 1);
        this.red.setSpecular(1, 0, 0, 1);
        this.red.setShininess(10);

        // Purple
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0.1,0.1,0.1,1.0);
        this.purple.setDiffuse(212/255.0, 0, 1, 1);
        this.purple.setSpecular(212/255.0, 0, 1, 1);
        this.purple.setShininess(10);
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
        //this.green.apply();
        this.greenSquare.display();
        this.scene.popMatrix();

        // yellowParallelogram
        this.scene.pushMatrix();
        this.scene.translate(0, -1, 0);
        this.scene.rotate(90 * Math.PI/180, 0, 0, 1);
        this.scene.scale(1, -1, 1);
        this.yellow.apply();
        this.yellowParallelogram.display();
        this.scene.popMatrix();
        
        // pinkTriangle
        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), -1, 0);
        this.scene.rotate(-135 * Math.PI/180, 0, 0, 1);
        this.pink.apply();
        this.pinkTriangle.display();
        this.scene.popMatrix();

        // blueBigTriangle
        this.scene.pushMatrix();
        this.scene.translate(-2.75, -1, 0);
        this.blue.apply();
        this.blueBigTriangle.display();
        this.scene.popMatrix();

        // orangeBigTriangle
        this.scene.pushMatrix();
        this.scene.translate(-1, -1, 0);
        this.scene.rotate(180 * Math.PI/180, 0, 0, 1);
        this.orange.apply();
        this.orangeBigTriangle.display();
        this.scene.popMatrix();
        
        // redSmallTriangle
        this.scene.pushMatrix();
        this.scene.translate(1, 2.5, 0);
        this.scene.rotate(-90 * Math.PI/180, 0, 0, 1);
        this.red.apply();
        this.redSmallTriangle.display();
        this.scene.popMatrix();

        // purpleSmallTriangle
        this.scene.pushMatrix();
        this.scene.translate(3.5, -1, 0);
        this.scene.rotate(180 * Math.PI/180, 0, 0, 1);
        this.purple.apply();
        this.purpleSmallTriangle.display();
        this.scene.popMatrix();
    }  
    
    enableNormalViz() {
        this.greenSquare.enableNormalViz();
        this.yellowParallelogram.enableNormalViz();
        this.pinkTriangle.enableNormalViz();
        this.blueBigTriangle.enableNormalViz();
        this.orangeBigTriangle.enableNormalViz();
        this.redSmallTriangle.enableNormalViz();
        this.purpleSmallTriangle.enableNormalViz();
    }

    disableNormalViz() {
        this.greenSquare.disableNormalViz();
        this.yellowParallelogram.disableNormalViz();
        this.pinkTriangle.disableNormalViz();
        this.blueBigTriangle.disableNormalViz();
        this.orangeBigTriangle.disableNormalViz();
        this.redSmallTriangle.disableNormalViz();
        this.purpleSmallTriangle.disableNormalViz();
    }

    updateBuffers(complexity) {
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}