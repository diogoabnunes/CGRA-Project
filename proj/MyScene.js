/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
        this.texture = null;
        this.appearance = null;
        this.globalScaleFactor = 1;
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(60);
        
        this.enableTextures(true);

        //Initialize scene objects

        this.cubeMap = new MyCubeMap(this);
        this.axis = new CGFaxis(this);
        this.vehicle = new MyVehicle(this, 4);
        this.terrain = new MyTerrain(this);
        this.billboard = new MyBillboard(this);
        this.supplies = [];
        for (var i = 0; i < 5; i++) {
            this.supplies.push(new MySupply(this));
        }
        this.nSuppliesDelivered = 0;
        this.deltaLaunch = 10000;

        this.material = new CGFappearance(this);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/earth.jpg');
        this.material.setTextureWrap('REPEAT', 'REPEAT');

        this.textures = [
            new CGFtexture(this, 'images/cubemaps/cubemap.png'),
            new CGFtexture(this, 'images/cubemaps/windows.jpg'),
            new CGFtexture(this, 'images/cubemaps/testCubeMap.jpg')
        ];
        this.textureList = {
            'Default': 0,
            'Windows': 1,
            'TestCubeMap': 2
        };
        this.selectedTexture = 0;

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayTextures = false;
        this.displayVehicle = true;

        // Vehicle
        this.scaleFactor = 1;
        this.speedFactor = 1;
    }

    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;

        if(this.vehicle.autoPilot == false) {
            // Check for key codes e.g. in https://keycode.info/
    
                if (this.gui.isKeyPressed("KeyW")) {
                    this.vehicle.accelerate(0.01 * this.speedFactor);
                    keysPressed = true;
                }
    
                if (this.gui.isKeyPressed("KeyS")) {
                    this.vehicle.accelerate(-0.01 * this.speedFactor);
                    keysPressed = true;
                }   
    
                if (this.gui.isKeyPressed("KeyA")) {
                    this.vehicle.turn(5);
                    keysPressed = true;
                }
    
                if (this.gui.isKeyPressed("KeyD")) {
                    this.vehicle.turn(-5);
                    keysPressed = true;
                }
    
                if (this.gui.isKeyPressed("KeyR")) {
                    this.vehicle.reset();
                    this.billboard.reset();
                    this.nSuppliesDelivered = 0;
                    for (var i = 0; i < 5; i++) {
                        this.supplies[i].state = SupplyStates.INACTIVE;
                    }
                    keysPressed = true;
                }
    
                if (this.gui.isKeyPressed("KeyP")) {
                    this.vehicle.startAutoPilot();
                    keysPressed = true;
                }

                if (this.gui.isKeyPressed("KeyL")) {
                    if (this.nSuppliesDelivered < 5 && this.deltaLaunch >= 800) {
                        this.supplies[this.nSuppliesDelivered].drop(this.vehicle.x, this.vehicle.y, this.vehicle.z);
                        this.nSuppliesDelivered += 1;
                        this.deltaLaunch = 0;
                        this.billboard.update(this.nSuppliesDelivered);
                    }
                    keysPressed = true;
                }
    
                if (keysPressed) {
                    console.log("Angle: %d\n", this.vehicle.angle);
                    console.log("Speed: %f\n", this.vehicle.speed);
                    console.log("SuppliesDelivered: %d\n", this.nSuppliesDelivered);
                }
            } 
    
            else {
    
                if (this.gui.isKeyPressed("KeyP")) {
                    this.vehicle.autoPilot = false;
                    keysPressed = true;
                }
    
                if (this.gui.isKeyPressed("KeyR")) {
                    this.vehicle.reset();
                    this.billboard.reset();
                    keysPressed = true;
                }
    
                if (keysPressed) {
                    console.log("Angle: %d\n", this.vehicle.angle);
                    console.log("Speed: %d\n", this.vehicle.speed);
                    console.log("SuppliesDelivered: %d\n", this.nSuppliesDelivered);
                }
            }
    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(1, 0.1, 500, vec3.fromValues(20, 15, 20), vec3.fromValues(0, 5, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        this.checkKeys();
        this.vehicle.update(t);
        for (var i = 0; i < 5; i++) {
            this.supplies[i].update(t);
        }
        this.deltaLaunch += 60;
    }

    updateTextureChanged() {
        this.material.setTexture(this.textures[this.selectedTexture]);
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

        var sca = [this.globalScaleFactor, 0.0, 0.0, 0.0,
            0.0, this.globalScaleFactor, 0.0, 0.0,
            0.0, 0.0, this.globalScaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);
        this.setDefaultAppearance();

        if (this.displayAxis) this.axis.display();

        // ---- BEGIN Primitive drawing section
        
        this.material.apply();
        this.updateTextureChanged();
        this.pushMatrix();
        this.translate(0, 25, 0); // may need to change
        this.cubeMap.display();
        this.popMatrix();
        
        if (this.displayVehicle) {
            this.pushMatrix();
            this.translate(this.vehicle.x, 10, this.vehicle.z);
            this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
            this.translate(-this.vehicle.x, -10, -this.vehicle.z);
            this.vehicle.display();
            this.popMatrix();
        }

        for (var i = 0; i < 5; i++) {
            this.supplies[i].display();
        }

        this.material.apply();
        this.terrain.display();
        this.billboard.display();
        // ---- END Primitive drawing section
    }
}