import * as Dom from '../utils/dom.js';
import { ref, watch } from "vue";
import { showWholeGame } from '../utils/store.js';

watch(showWholeGame, () => {
    console.log(showWholeGame.value)
})
AFRAME.registerSystem('game-system', {
    schema: {
        enabled: { type: 'boolean', default: false },
    },

    init: function () {
        this.room = 0;
        this.rooms = Dom.getNodes('[data-role="room"]');
        this.handLeft = Dom.getNode('#hand-left');
        this.camera = Dom.getNode('[camera]');
        this.countdown = Dom.getNode("#countdown");
        this.cameraPos = new THREE.Vector3();
        this.cameraRig = Dom.getNode('#camera-rig')
        // console.log(this.camera);
        this.secondsRemaining = 90;
        this.timeOut = false;
        this.timerIsRunning = true;
        this.tick = AFRAME.utils.throttleTick(this.tick, 1000, this);
    },

    tick(elapsedTime, dt) {
        if (this.rooms.length == 0) {
            this.rooms = Dom.getNodes('[data-role="room"]');
        } else {
            if (this.secondsRemaining <= 15) {
                this.handLeft.emit("time-almost-out")
            }
            this.camera.object3D.getWorldPosition(this.cameraPos)
            for (const room of this.rooms) {
                const bbox = new THREE.Box3().setFromObject(room.object3D);
                if (bbox.containsPoint(this.cameraPos)) {

                    if (room.getAttribute('data-safe-room') !== "true") {
                        this.teleportCameraRig(0, 0, 10);
                        return;
                    }

                    if (room.getAttribute('data-visited') == "false") {
                        // start the timer
                        this.secondsRemaining = 30;
                        room.setAttribute('data-visited', "true");
                    }
                }
            }
        }
        if (this.timerIsRunning) {
            this.secondsRemaining = Math.round(this.secondsRemaining - dt / 1000);
            this.countdown.setAttribute('text', 'value', `${this.secondsRemaining} seconds`)
            if (this.secondsRemaining <= 0) {
                this.timeOut = true;
                this.timerIsRunning = false;
                this.countdown.setAttribute('text', 'value', "Timeout")
                this.teleportCameraRig(0, 0, 10)
                return;
            }
        }

    },

    // showWholeGame: function() {
    //     console.log("show the whole game")
    // },

    teleportCameraRig: function (x, y, z, rot = 0) {
        console.log(x, y, z)
        this.data = {};
        this.data.rig = Dom.getNode("#camera-rig")
        this.data.camera = Dom.getNode("#head")
        console.log(this.data)

        this.data.rig.object3D.position.x = x;
        this.data.rig.object3D.position.y = y;
        this.data.rig.object3D.position.z = z;
        // Put the camera at the centre of the rig
        this.data.camera.object3D.position.x = 0;
        this.data.camera.object3D.position.z = 0;
        // Rotate the rig if needed
        if (this.data.handleRotation) {
            // Take the camera quaternion
            const quaternion = new THREE.Quaternion();
            quaternion.setFromEuler(new THREE.Euler(0, this.data.camera.object3D.rotation.y, 0));
            // invert it to nullify the camera rotation
            quaternion.invert();
            // convert this.data.rot to a quaternion
            const quaternionToApply = new THREE.Quaternion();
            const rotRad = THREE.MathUtils.degToRad(rot);
            quaternionToApply.setFromEuler(new THREE.Euler(0, rotRad, 0));
            // combine the two quaternions and apply to the rig
            quaternion.multiply(quaternionToApply);
            this.data.rig.object3D.setRotationFromQuaternion(quaternion);
        }
    }

});