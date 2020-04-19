/**
 * MyQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            -0.5, 0.5, 0, // A 0
            0.5, 0.5, 0, // B 1
            -0.5, -0.5, 0, // C 2
            0.5, -0.5, 0 // D 3
        ];
        this.indices = [
            0,2,1,
            1,2,3,
            //0,1,2,
            //1,3,2 // not efficient
        ];
        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}