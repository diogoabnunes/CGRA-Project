/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene) {
        super(scene);
		this.initBuffers();
	}
	initBuffers() {

        this.vertices = [
            // Face x positivo
            0.5, 0.5, 0.5,       // 0
            0.5, 0.5, -0.5,      // 1
            0.5, -0.5, -0.5,     // 2
            0.5, -0.5, 0.5,      // 3
            // Face y positivo
            -0.5, 0.5, -0.5,     // 4
            0.5, 0.5, -0.5,      // 5
            0.5, 0.5, 0.5,       // 6
            -0.5, 0.5, 0.5,      // 7
            // Face z positivo
            -0.5, 0.5, 0.5,      // 8
            0.5, 0.5, 0.5,       // 9
            0.5, -0.5, 0.5,      // 10
            -0.5, -0.5, 0.5,     // 11
            // Face x negativo
            -0.5, 0.5, -0.5,     // 12
            -0.5, 0.5, 0.5,      // 13
            -0.5, -0.5, 0.5,     // 14
            -0.5, -0.5, -0.5,    // 15
            // Face y negativo
            -0.5, -0.5, 0.5,     // 16
            0.5, -0.5, 0.5,      // 17
            0.5, -0.5, -0.5,     // 18
            -0.5, -0.5, -0.5,    // 19
            // Face z negativo
            0.5, 0.5, -0.5,      // 20
            -0.5, 0.5, -0.5,     // 21
            -0.5, -0.5, -0.5,    // 22
            0.5, -0.5, -0.5,     // 23
        ];
        this.indices = [
            // Face x positivo
            0, 1, 2,
            0, 2, 3,
            // Face y positivo
            4, 5, 6,
            4, 6, 7,
            // Face z positivo
            8, 9, 10,
            8, 10, 11,
            // Face x negativo
            12, 13, 14,
            12, 14, 15,
            // Face y negativo
            16, 17, 18, 
            16, 18, 19,
            // Face z negativo
            20, 21, 22, 
            20, 22, 23
        ];
        this.normals = [
            // Face x positivo
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            // Face y positivo
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            // Face z positivo
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            // Face x negativo
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            // Face y negativo
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            // Face z negativo
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ];
        this.texCoords = [
            // Face x positivo -> "Direita"
            0.75, 0.34,
            0.50, 0.34,
            0.50, 0.66,
            0.75, 0.66,
            // Face y positivo -> "Topo"
            0.25, 0.33,
            0.50, 0.33,
            0.50, 0.00,
            0.25, 0.00,
            // Face z positivo -> "Trás"
            1.00, 0.34,
            0.75, 0.34,
            0.75, 0.66,
            1.00, 0.66,
            // Face x negativo -> "Esquerda"
            0.25, 0.34,
            0.00, 0.34,
            0.00, 0.66,
            0.25, 0.66,
            // Face y negativo -> "Fundo"
            0.25, 1.00,
            0.50, 1.00, 
            0.50, 0.66,
            0.25, 0.66,
            // Face z negativo -> "Frente"
            0.50, 0.34,
            0.25, 0.34,
            0.25, 0.66,
            0.50, 0.66
        ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

    updateBuffers() {
        this.initBuffers();
        this.initNormalVizBuffers();
    }

    display() {
        this.scene.setGlobalAmbientLight(1, 1, 1, 1);
        this.scene.setDiffuse(0, 0, 0);
        this.scene.setSpecular(0, 0, 0, 0);
        this.scene.setAmbient(1, 1, 1, 0);

        this.scene.pushMatrix();
        this.scene.scale(50, 50, 50);
        super.display();
        this.scene.popMatrix();
    }
}

