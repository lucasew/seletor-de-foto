class ImageStore {
    constructor() {
        this.images = [];
        this.selected = undefined;
        this.observers = [];
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notify() {
        for (const observer of this.observers) {
            observer({ images: this.images, selected: this.selected });
        }
    }

    addImages(newImages) {
        this.images = [...this.images, ...newImages];
        this.notify();
    }

    setSelected(index) {
        this.selected = index;
        this.notify();
    }

    getImagesCount() {
        return this.images.length;
    }
}

const store = new ImageStore();
