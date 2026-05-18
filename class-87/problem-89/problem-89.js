// Author: Cristian Camilo Cortes Ortiz <Cristianco9>

// Parent class
class SmartDevice {

    constructor(deviceName, brand, isOnline) {
        this.deviceName = deviceName;
        this.brand = brand;
        this.isOnline = isOnline;
    }

    // Protected method (convention)
    _connectToNetwork() {
        return "Device connected to secure network.";
    }
}

// Child class
class secureCamera extends SmartDevice {

    constructor(deviceName, brand, isOnline, cameraResolution, recording) {
        super(deviceName, brand, isOnline);
        this.cameraResolution = cameraResolution;
        this.recording = recording;
    }

    // Private method
    #validateStorageSpace() {
        return true;
    }

    // Public method
    startRecording() {
        const networkStatus = this._connectToNetwork();

        if (!this.#validateStorageSpace()) {
            return "Insufficient storage space.";
        } else {
            this.recording = true;
            return `${networkStatus} Recording started successfully.`;
        }
    }

    // Public method
    stopRecording() {
        this.recording = false;
        return "Recording stopped successfully.";
    }

    // Public method
    showCameraInformation() {
        return {
            deviceName: this.deviceName,
            brand: this.brand,
            isOnline: this.isOnline,
            cameraResolution: this.cameraResolution,
            recording: this.recording
        };
    }

    // Static method
    static convertResolution(width, height) {
        return width * height;
    }
}

// Object creation
const lobbyCamera = new secureCamera("Lobby Camera", "Samsung", true, "4K");

console.log("******************************************");
console.log(typeof(lobbyCamera));
console.log(lobbyCamera);
console.log("******************************************");
console.log(lobbyCamera.startRecording());
console.log("******************************************");
console.log(lobbyCamera.showCameraInformation());
console.log("******************************************");
console.log(lobbyCamera.stopRecording());
console.log("******************************************");
console.log(lobbyCamera.showCameraInformation());
console.log("******************************************");
console.log(secureCamera.convertResolution(1920, 1080)," Pixels");