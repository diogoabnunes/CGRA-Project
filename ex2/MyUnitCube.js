/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
            0.5, -0.5, 0.5, // A 0
            0.5, 0.5, 0.5, // B 1
            0.5, -0.5, -0.5, // C 2
            0.5, 0.5, -0.5, // D 3

            -0.5, -0.5, 0.5, // E 4
            -0.5, 0.5, 0.5, // F 5
            -0.5, -0.5, -0.5, // G 6
            -0.5, 0.5, -0.5 // H 7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0,2,3,
            0,3,1, // ABCD

            4,5,6,
            5,7,6, // EFGH

            0,1,4,
            1,5,4, // ABEF

            2,6,7,
            2,7,3, // CDGH

            0,4,6,
            0,6,2, // ACEG

            1,3,7,
            1,7,5// BDFH
        ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }
}

