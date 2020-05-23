/**
* MyTerrain
* @constructor
*/
class MyTerrain extends CGFobject {
    constructor(scene) {
        super(scene);
        this.scene = scene;

        this.terrain = new CGFshader(this.scene.gl, 'shaders/terrain.vert', 'shaders/terrain.frag');
        this.tex1 = new CGFtexture(this.scene, 'images/terrain.jpg');
        this.tex2 = new CGFtexture(this.scene, 'images/heightmap2.jpg');
        this.terrain.setUniformsValues({ uSampler1: 1});
        this.terrain.setUniformsValues({ uSampler2: 2});

        this.plane = new MyPlane(scene, 20);
    }
    display() {
        this.scene.setActiveShader(this.terrain);

        this.scene.pushMatrix();

        this.tex1.bind(1);
        this.tex2.bind(2);

        this.scene.rotate(-Math.PI / 2.0, 1, 0, 0);
        this.scene.scale(50, 50, 50);
        this.plane.display();

        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
    }
}