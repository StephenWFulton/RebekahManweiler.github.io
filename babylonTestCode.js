/*test scene from babylon
				//set the scene and background color
				var scene = new BABYLON.Scene(engine);
				scene.clearColor = new BABYLON.Color3(0,0,0.2);
				
				//create camera
				var camera = new BABYLON.ArcRotateCamera("Camera", 1.0, 1.0, 12, BABYLON.Vector3.Zero(), scene);
				
				//attach camera to canvas
				camera.attachControl(canvas, false);
				
				//add a light 
				var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0,1,0), scene);
				
				//reflect light off the ground to light the mesh bottom 
				light.groundColor = new BABYLON.Color3(0.5, 0, 0.5);
				
				//create a built in shape
				var box = BABYLON.Mesh.CreateBox("mesh", 3, scene);
				box.showBoundingBox = true;
				
				//define a material
				var material = new BABYLON.StandardMaterial("std", scene);
				material.diffuseColor = new BABYLON.Color3(0.5, 0, 0.5);
				
				//apply the material 
				box.material = material;
				
				return scene;*/