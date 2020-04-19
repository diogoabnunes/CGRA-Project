/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.texture = null;
        this.appearance = null;
        this.scaleFactor = 1;
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.initCubeMap();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        
        this.objects = [
            new MySphere(this, 16, 8),
            new MyCilinder(this, 16)
        ];
        this.objectList = {
            'Sphere': 0,
            'Cilinder': 1
        };
        this.selectedObject = 0;

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayTextures = false;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    initCubeMap() {
        this.cubeMaps= [
            'images/cubemap.png'
        ];
        this.cubeMapsList = {
            'CubeMap': 0
        };
        this.selectedCubeMap = 0;
        this.cubeMap = new MyCubeMap(this, new CGFtexture(this, this.cubeMaps[this.selectedCubeMap]));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        //To be done...
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);
        
        // Draw axis
        this.cubeMap.display();
        if (this.displayAxis) this.axis.display();

        if (this.displayNormals) this.objects[this.selectedObject].enableNormalViz();
        else this.objects[this.selectedObject].disableNormalViz();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        
        this.objects[this.selectedObject].display();

        // ---- END Primitive drawing section
    }
}