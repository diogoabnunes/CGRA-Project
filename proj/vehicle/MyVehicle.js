/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.scene = scene;
        this.vehicle = new MyVehicleModel(this.scene);
        //this.flag = new MyFlag(this.scene);
        this.angle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.heliceangle = 0;
        
        //autopilot
        this.Ox = 0;
        this.Oz = 0;
        
        this.autoPilot = false;
        this.pilotAngle = 0;

        this.previousTime = 0;
        this.deltaTime = 0;
        this.deltaAngle = 0;
        this.angularSpeed = 360/5.0;
    }
    
    startAutoPilot() {
        this.autoPilot = true;
        this.pilotAngle = (this.angle + 90) * Math.PI/180.0;

        this.Ox = this.x + 5*Math.sin(this.pilotAngle);
        this.Oz = this.z + 5*Math.cos(this.pilotAngle);
    }
    
    update(t) {
        if(this.previousTime == 0)
            this.previousTime = t;

        this.deltaTime = (t - this.previousTime)/1000;
        this.previousTime = t;

        if(this.autoPilot) {
            this.x = -5 * Math.cos(this.angle * Math.PI/180.0) + this.Ox;
            this.z = 5 * Math.sin(this.angle * Math.PI/180.0) + this.Oz;

            this.deltaAngle = this.deltaTime * this.angularSpeed;
            
            this.turn(this.deltaAngle);
            this.heliceangle += 5 * this.speed;
        } 
        else {
            this.x += this.speed * Math.sin(this.angle * Math.PI / 180);
            this.z += this.speed * Math.cos(this.angle * Math.PI / 180);
            this.heliceangle += 5 * this.speed;
        }
        //flag
        this.vehicle.updateFlag(this.speed, t);
    }

    turn(val) {
        if (this.angle == 360) this.angle = 0;
        else if (this.angle == -360) this.angle = 0;
        else this.angle += val;
    }

    accelerate(val) {
        this.speed += val;
        if (this.speed < 0) this.speed = 0;
    }

    reset() {
        this.angle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 10;
        this.z = 0;
        this.heliceangle = 0;
        this.autopilot = false;
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);
        this.vehicle.display(this.autopilot);
        this.scene.popMatrix();
    }
}