export class ClickAndHold {
  constructor(target, callback) {
    this.target = target;
    this.callback = callback;
    this.isHeld = false;
    this.activeHoldTimeoutId = null;

    ["mousedown", "touchstart"].forEach((eventType) => {
      this.target.addEventListener(eventType, this._onHoldStart.bind(this));
    });
    ["mouseup", "mouseleave", "mouseout", "touchend", "touchcancel"].forEach(
      (eventType) => {
        this.target.addEventListener(eventType, this._onHoldEnd.bind(this));
      }
    );
  }

  _onHoldStart() {
    this.isHeld = true;

    this.activeHoldTimeoutId = setTimeout(() => {
      if (this.isHeld) {
        this.callback();
      }
    }, 500);
  }
  _onHoldEnd() {
    this.isHeld = false;

    clearTimeout(this.activeHoldTimeoutId);
  }

  static apply(target, callback) {
    new ClickAndHold(target, callback);
  }
}
