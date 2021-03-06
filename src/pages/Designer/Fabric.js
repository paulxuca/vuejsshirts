const FabricJS = require('fabric').fabric;

export default class Fabric {
  constructor(fabric) {
    this.fabric = fabric;
    this.addImage = this.addImage.bind(this);
    this.deleteActiveElement = this.deleteActiveElement.bind(this);
    this.sendBack = this.sendBack.bind(this);
    this.sendForward = this.sendForward.bind(this);
    this.addText = this.addText.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  addImage(imageUrl) {
    FabricJS.util.loadImage(imageUrl, (img) => {
      this.fabric.add(new FabricJS.Image(img, {
        width: img.width / 2,
        height: img.height / 2,
        lockUniScaling: true,
      }));
    });
  }

  deleteActiveElement() {
    const activeObject = this.fabric.getActiveObject();
    const activeObjectGroup = this.fabric.getActiveGroup();

    this.fabric.discardActiveGroup();
    if (activeObject) return this.fabric.remove(activeObject);
    if (activeObjectGroup) {
      return activeObjectGroup.getObjects().forEach(each => this.fabric.remove(each));
    }
    return null;
  }

  sendBack() {
    const object = this.fabric.getActiveObject();
    if (object) {
      object.sendBackwards();
      this.fabric.renderAll();
    }
  }

  sendForward() {
    const object = this.fabric.getActiveObject();
    if (object) {
      object.bringForward();
      this.fabric.renderAll();
    }
  }

  addText(text, family) {
    const textObj = new FabricJS.Text(text, {
      fontFamily: family,
      fontSize: 20,
      lockUniScaling: true,
    });
    this.fabric.add(textObj);
    this.fabric.renderAll();
  }

  changeColor(newColor) {
    const object = this.fabric.getActiveObject();
    if (object) {
      object.set('fill', newColor);
      this.fabric.renderAll();
    }
  }

  methods() {
    return {
      addImg: this.addImage,
      deleteActive: this.deleteActiveElement,
      sendBack: this.sendBack,
      sendForward: this.sendBackwards,
      addText: this.addText,
      changeColor: this.changeColor,
    };
  }
}
