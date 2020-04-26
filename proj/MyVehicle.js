/**
* MyVehicle
* @constructor
*/
class MyVehicle extends CGFobject {
    constructor(scene, slices) {
        super(scene);
        this.scene = scene;
        this.vehicle = new MyVehicleModel(this.scene);
        this.angle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    
    update() {
        this.x += this.speed * Math.sin(this.angle * Math.PI / 180);
        this.z += this.speed * Math.cos(this.angle * Math.PI / 180);
    }

    turn(val) {
        if (this.angle == 360) this.angle = 0;
        else if (this.angle == -360) this.angle = 0;
        else this.angle += val;
    }

    accelerate(val) {
        this.speed += val;
    }

    reset() {
        this.angle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    display() {
        this.scene.pushMatrix();

        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.angle * Math.PI / 180, 0, 1, 0);
        //this.translate(0, 10, 0);
        this.vehicle.display();
        this.scene.popMatrix();
    }
}