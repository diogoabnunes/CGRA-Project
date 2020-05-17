/**
 * MyFlag
 * @constructor
 * @param scene - Reference to MyScene object
 */

 class MyFlag extends CGFobject {
     constructor(scene) {
         super(scene);
         this.flagFront = new MyPlane(this.scene, 50, true);
         this.flagBack = new MyPlane(this.scene, 50, true);
         this.haste = new MyDoubleSidedQuad(this.scene);
         
         this.previousTime = 0;
         this.phase = 0;

         this.initTextures();
     }

     initTextures() {
        
        //this.flagTexture = new CGFtexture(this.scene, 'images/vehicle_textures/ad.png');
/**/ 
        this.flagTexture = new CGFappearance(this.scene);
        this.flagTexture.setAmbient(0.5, 0.5, 0.5, 1);
        this.flagTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.flagTexture.setSpecular(0.0, 0.0, 0.0, 1);
        this.flagTexture.setShininess(10.0);
        this.flagTexture.loadTexture('images/vehicle_textures/ad.png');
        this.flagTexture.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.hasteTexture = new CGFappearance(this.scene);
        this.hasteTexture.setAmbient(0.5, 0.5, 0.5, 1);
        this.hasteTexture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.hasteTexture.setSpecular(0.2, 0.2, 0.2, 1);
        this.hasteTexture.setShininess(10.0);
        this.hasteTexture.loadTexture('images/vehicle_textures/black.png');
        this.hasteTexture.setTextureWrap('REPEAT', 'REPEAT');


        this.shaderFront = new CGFshader(this.scene.gl, "shaders/frontFlag.vert", "shaders/flag.frag");
        this.shaderFront.setUniformsValues({ uSampler1: 0});
        this.shaderFront.setUniformsValues({ phase: 0});

        this.shaderBack = new CGFshader(this.scene.gl, "shaders/backFlag.vert", "shaders/flag.frag");
        this.shaderBack.setUniformsValues({ uSampler1: 0});
        this.shaderBack.setUniformsValues({ phase: 0});
 }

    update(speed, time) {
        if(this.previousTime == 0)
        this.previousTime = time;

        var deltaTime = (time-this.previousTime)/1000;
        this.previousTime = time;

        var deltaX = deltaTime*speed+1.0;
        this.phase += deltaX;

        this.shaderFront.setUniformsValues({phase: this.phase});
        this.shaderBack.setUniformsValues({phase: this.phase});
    }

    display() {
        //flag
        this.scene.setActiveShader(this.shaderFront);
        this.flagTexture.apply();

        this.scene.pushMatrix();
        this.scene.translate(0, 0,-2.5);
        this.scene.scale(0.05, 0.5, 1.5);
        this.scene.rotate(Math.PI/2, 0, 1, 0);
        this.flagFront.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        this.scene.setActiveShader(this.shaderBack);
        this.scene.pushMatrix();
        this.scene.translate(0, 0,-2.5);
        this.scene.scale(0.05, 0.5, 1.5);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.flagBack.display();
        this.scene.popMatrix();
        this.scene.setActiveShader(this.scene.defaultShader);

        
        //haste cima
        this.scene.pushMatrix();
        this.hasteTexture.apply();
        this.scene.translate(0, 0.245,-1.6);
        this.scene.scale(1, 0.01, 0.3);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.haste.display();
        this.scene.popMatrix();

        //haste baixo
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.pushMatrix();
        this.hasteTexture.apply();
        this.scene.translate(0, -0.245,-1.6);
        this.scene.scale(1, 0.01, 0.3);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.haste.display();
        this.scene.popMatrix();

        //haste meio
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.pushMatrix();
        this.hasteTexture.apply();
        this.scene.translate(0, 0,-1);
        this.scene.scale(1, 0.01, 0.6);
        this.scene.rotate(-Math.PI/2, 0, 1, 0);
        this.haste.display();
        this.scene.popMatrix();

        //haste ligação cima

        //haste ligação baixo

    }
}