class MyBox extends CGFobject {
	constructor(scene) {
        super(scene);

        this.initMaterials();
        this.quad = new MyQuad(scene);
    }

    initMaterials() {
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient (204/255, 204/255, 204/255, 1.0);
        this.material.setDiffuse (100/255, 100/255, 100/255, 1.0);
        this.material.setSpecular(255/255, 255/255, 255/255, 1.0);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/box.jpg');
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        
        this.scene.translate(0, 0.5, 0);
        this.material.apply(); 

        // Front
        this.scene.pushMatrix(); 
        this.scene.translate(0, 0, 0.5);
        this.quad.display();
        this.scene.popMatrix();

        // Back
        this.scene.pushMatrix(); 
        this.scene.translate(0, 0, -0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        // Bottom
        this.scene.pushMatrix(); 
        this.scene.translate(0, -0.5, 0);
        this.scene.rotate(Math.PI/2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
        
        // Top
        this.scene.pushMatrix(); 
        this.scene.translate(0, 0.5, 0);
        this.scene.rotate(-Math.PI/2, 1.0, 0, 0);
        this.quad.display();
        this.scene.popMatrix();
    
        // Left
        this.scene.pushMatrix(); 
        this.scene.translate(-0.5, 0, 0);
        this.scene.rotate(-Math.PI/2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();
        
        // Right
        this.scene.pushMatrix(); 
        this.scene.translate(0.5, 0, 0);
        this.scene.rotate(Math.PI/2, 0.0, 1.0, 0);
        this.quad.display();
        this.scene.popMatrix();

    }
}