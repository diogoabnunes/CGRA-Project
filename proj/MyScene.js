/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.texture = null;
        this.appearance = null;

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
            new MyCilinder(this, 16),
            new MyCubeMap(this),
        ];

        this.objectList = {'Sphere': 0, 'Cilinder': 1, /*'Cube Map': 2*/};
        this.selectedObject = 2;

        this.vehicle = new MyVehicle(this, 4);


        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;
        this.displayTextures = false;
        this.displayObjects = false;
        this.displayVehicle = true;

        this.scaleFactor = 1;
        this.speedFactor = 1;
    }

    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;

        // Check for key codes e.g. in https://keycode.info/
        if (this.gui.isKeyPressed("KeyW")) {
            this.vehicle.accelerate(0.01*this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyS")) {
            this.vehicle.accelerate(-0.01*this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyA")) {
            this.vehicle.turn(15);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyD")) {
            this.vehicle.turn(-15);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.vehicle.reset();
            keysPressed = true;
        }

        if (keysPressed) {
            console.log("Angle: %d\n", this.vehicle.angle);
            console.log("Speed: %d\n", this.vehicle.speed);
            this.vehicle.update();
        }

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
        this.cubeMaps= ['images/cubemap.png', 'images/desert.jpg', 'images/windows.jpg'];
        this.textureList = {'Sky': 0, 'Desert': 1, 'Windows': 2};
        this.selectedTexture = 0;
        this.cubeMap = new MyCubeMap(this, new CGFtexture(this, this.cubeMaps[this.selectedTexture]));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    
    onSelectedTexture() {
        this.cubeMap.texture = new CGFtexture(this, this.cubeMaps[this.selectedTexture]);
    }

    update(t) {
        this.checkKeys();
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
        if (this.displayAxis) 
            this.axis.display();

        if (this.displayNormals) this.objects[this.selectedObject].enableNormalViz();
        else this.objects[this.selectedObject].disableNormalViz();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        
        //Allow Objects Earth & Cylinder to be displayed
        if(this.displayObjects)
            this.objects[this.selectedObject].display();
        
        //Display Vehicle
        if (this.displayVehicle) {
            this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
            this.vehicle.display();
    }
        this.cubeMap.display();

        this.popMatrix();
        // ---- END Primitive drawing section
    }
}