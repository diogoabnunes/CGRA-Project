class MyCilinder extends CGFobject {
    /**
    * @method constructor
    * @param  {CGFscene} scene - MyScene object
    * @param  {integer} slices - number of slices around Y axis
    */
   constructor(scene, slices) {
       super(scene);
       this.slices = slices;
       this.initBuffers();
   }

   initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];

    // TODO
    var angulo = 0;
    var textura = 0;
    var delta = 2 * Math.PI / this.slices; // if 6 slices -> delta = 60
    var deltaTextura = 1 / this.slices;

    for (var i = 0; i <= this.slices; i++) {
        
        var x = Math.cos(angulo);
        var z = Math.sin(angulo);

        this.vertices.push(x, 0, -z);
        this.vertices.push(x, 1, -z);
        
        if (i > 0) {
            this.indices.push((i*2), (i*2+1), (i*2-1));
            this.indices.push((i*2), (i*2-1), (i*2-2));
        }

        this.normals.push(x, 0, -z);
        this.normals.push(x, 0, -z);

        this.texCoords.push(textura, 1);
        this.texCoords.push(textura, 0);

        angulo += delta;
        textura += deltaTextura;
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();
   }

   updateBuffers(complexity) {
       this.slices = complexity;
       this.initBuffers();
       this.initNormalVizBuffers();
   }
}