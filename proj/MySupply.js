const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};

class MySupply extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initMaterials();
        this.box = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.LANDED;
        this.location = 0;
    }
    initMaterials() {
        this.wood = new CGFappearance(this.scene);
        this.wood.setAmbient(0.1, 0.1, 0.1, 1);
        this.wood.setDiffuse(1, 1, 1, 1);
        this.wood.setSpecular(0.1, 0.1, 0.1, 1);
        this.wood.setShininess(10);
        this.wood.loadTexture('images/wood.jpg');
        this.wood.setTextureWrap('REPEAT', 'REPEAT');

        this.interior = new CGFappearance(this.scene);
        this.interior.setAmbient(0.1, 0.1, 0.1, 1);
        this.interior.setDiffuse(1, 1, 1, 1);
        this.interior.setSpecular(0.1, 0.1, 0.1, 1);
        this.interior.setShininess(10);
        this.interior.loadTexture('images/interior_box.jpg');
        this.interior.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        this.wood.apply();
        this.scene.pushMatrix();
        this.scene.translate(0, 5, 0);
        this.box.display();
        this.scene.popMatrix();
        
        
    }
    update(time) {

    }
    drop(vehicleX, vehicleY, vehicleZ) {

    }
    land() {

    }
}