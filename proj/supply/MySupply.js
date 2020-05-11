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
        this.earth = new MySphere(this.scene, 16, 8);
        this.supporter = new MyUnitCubeQuad(this.scene);
        this.state = SupplyStates.INACTIVE;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }
    initMaterials() {
        this.wood = new CGFappearance(this.scene);
        this.wood.setAmbient(0.1, 0.1, 0.1, 1);
        this.wood.setDiffuse(1, 1, 1, 1);
        this.wood.setSpecular(0.1, 0.1, 0.1, 1);
        this.wood.setShininess(10);
        this.wood.loadTexture('images/wood_fragile.jpg');
        this.wood.setTextureWrap('REPEAT', 'REPEAT');

        this.interior = new CGFappearance(this.scene);
        this.interior.setAmbient(0.1, 0.1, 0.1, 1);
        this.interior.setDiffuse(1, 1, 1, 1);
        this.interior.setSpecular(0.1, 0.1, 0.1, 1);
        this.interior.setShininess(10);
        this.interior.loadTexture('images/interior_box.jpg');
        this.interior.setTextureWrap('REPEAT', 'REPEAT');

        this.earthTex = new CGFappearance(this.scene);
        this.earthTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.earthTex.setDiffuse(1, 1, 1, 1);
        this.earthTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.earthTex.setShininess(10);
        this.earthTex.loadTexture('images/earth.jpg');
        this.earthTex.setTextureWrap('REPEAT', 'REPEAT');
    }
    display() {
        if (this.state == SupplyStates.FALLING) {
            this.wood.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.box.displayFalling();
            this.scene.popMatrix();
        }
        else if (this.state == SupplyStates.LANDED) {
            this.interior.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y, this.z);
            this.box.displayOnLanded();
            this.scene.popMatrix();

            this.interior.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y + 0.0625, this.z);
            this.scene.scale(1, 0.125, 1);
            this.supporter.display();
            this.scene.popMatrix();

            this.earthTex.apply();
            this.scene.pushMatrix();
            this.scene.translate(this.x, this.y + 0.375, this.z);
            this.scene.scale(0.3, 0.3, 0.3);
            this.earth.display();
            this.scene.popMatrix();
        }
    }
    update(t) {
        if (this.state == SupplyStates.FALLING) {
            this.y -= 0.2;
            if (this.y < 0.5) {
                this.land();
            }
        }
    }
    drop(vehicleX, vehicleY, vehicleZ) {
        this.x = vehicleX;
        this.y = vehicleY - 1;
        this.z = vehicleZ;
        this.state = SupplyStates.FALLING;
    }
    land() {
        this.state = SupplyStates.LANDED;
    }
}