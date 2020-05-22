/**
 * MyLeme
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyLeme extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }
    initBuffers() {
        this.vertices = [
            0, 0, 0,	//0
            0, 1, -2,	//1
            0, 1, -4,	//2
            0, -1, -4,	//3
            0, -1, -2,	//4

            0, 0, 0,	//0
            0, 1, -2,	//1
            0, 1, -4,	//2
            0, -1, -4,	//3
            0, -1, -2,	//4

        ];

        //Counter-clockwise reference of vertices
        this.indices = [
            0, 4, 1,
            1, 4, 3,
            1, 3, 2,

            6, 9, 5,
            8, 9, 6,
            7, 8, 6,
        ];

        this.normals = [
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,

            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
        ];

        this.texCoords=[
            0, 0,
            0.5, 0,
            1, 0,
            1, 1,
            0, 1,

            0, 0,
            0.5, 0,
            1, 0,
            1, 1,
            0, 1,
        ];
        
        this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
} 