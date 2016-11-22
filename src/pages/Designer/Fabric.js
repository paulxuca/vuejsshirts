const FabricJS = require('fabric').fabric;

export default class Fabric {
  constructor(fabric) {
    this.fabric = fabric;
    this.addImage = this.addImage.bind(this);
    this.deleteActiveElement = this.deleteActiveElement.bind(this);
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

  methods() {
    return {
      addImg: this.addImage,
      deleteActive: this.deleteActiveElement,
    };
  }
}
