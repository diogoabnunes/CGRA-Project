/**
 * MyCubeMap
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCubeMap extends CGFobject {
	constructor(scene, texture) {
        super(scene);
        this.texture = texture;
		this.initBuffers();
	}
	initBuffers() {
        this.desktop = new CGFappearance(this.scene);
        this.desktop.setAmbient(1, 1, 1, 1);
        this.desktop.setEmission(1, 1, 1, 1);
        this.desktop.setTexture(this.texture);
        this.desktop.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

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
            0.75, 0.33,
            0.50, 0.33,
            0.50, 0.67,
            0.75, 0.67,
            // Face y positivo -> "Topo"
            0.25, 0.33,
            0.50, 0.33,
            0.50, 0.00,
            0.25, 0.00,
            // Face z positivo -> "Trás"
            1.00, 0.33,
            0.75, 0.33,
            0.75, 0.67,
            1.00, 0.67,
            // Face x negativo -> "Esquerda"
            0.25, 0.33,
            0.00, 0.33,
            0.00, 0.67,
            0.25, 0.67,
            // Face y negativo -> "Fundo"
            0.25, 1.00,
            0.50, 1.00, 
            0.50, 0.67,
            0.25, 0.67,
            // Face z negativo -> "Frente"
            0.50, 0.33,
            0.25, 0.33,
            0.25, 0.67,
            0.50, 0.67
        ];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

        this.initGLBuffers();
    }

    display() {
        this.desktop.apply();
        this.scene.pushMatrix();
        this.scene.scale(5, 5, 5);
        super.display();
        this.scene.popMatrix();
    }
}

