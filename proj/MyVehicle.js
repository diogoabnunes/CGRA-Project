/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.scene = scene;

        this.vehicle = new MyVehicleModel(this.scene);
        //this.helice = MyHelice(this.scene);
        //this.leme = new MyLeme(this.scene);

        this.angle = 0;
        this.speed = 0;
        this.lemeRotate = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        
        this.autoPilot = false;
    }
    //-->
    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);
        this.vehicle.display();
        this.scene.popMatrix();
    }

    turn(val) {
        if (this.angle == 360) this.angle = 0;
        else if (this.angle == -360) this.angle = 0;
        else this.angle += val;
    }

    accelerate(val) {
        this.speed += val;
        if (this.speed < 0) this.speed = 0;
        //this.helice.update(this.speed, 1);
    }

    reset() {
        this.angle = 0;
        this.speed = 0;
        this.lemeRotate = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.autoPilot = false;
    }

    update() {
        if(this.autoPilot == false) {
            this.x += this.speed * Math.sin(this.angle * Math.PI / 180);
            this.z += this.speed * Math.cos(this.angle * Math.PI / 180);
        } else {
            this.turn(Math.PI/50);
            this.x += Math.PI/10 * Math.sin(this.angle);
            this.z += Math.PI/10 * Math.cos(this.angle);
        }
       // this.helice.update(this.speed, 0);
    }
}