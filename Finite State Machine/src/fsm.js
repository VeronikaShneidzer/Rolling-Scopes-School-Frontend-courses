class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
      if (!config) throw new Error;
      this.config = config;
      this.currState = this.config.initial;
      this.prevState = null;
      this.nextState = null;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
      return this.currState;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
      let states = this.config.states;

      if (states.hasOwnProperty(state)) {
        this.prevState = this.currState;
        this.currState = state;
      }
      else throw new Error;
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
      let states = this.config.states;

      if (states[this.currState].transitions[event] != undefined) {
        this.prevState = this.currState;
        this.currState = states[this.currState].transitions[event];
      }
      else throw new Error;
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
      this.currState = this.config.initial;
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
      let states = this.config.states;
      let stack = [];

      if (event == undefined) return Object.keys(states);
      for (let value in states) {
        if (states[value].transitions.hasOwnProperty(event)) stack.push(value);
      }

      return stack;
    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
      if (this.prevState == null) return false;
      else {
        this.nextState = this.currState;
        this.currState = this.prevState;
        this.prevState = null;
        return true;
      }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
      if (this.nextState == null) return false;
      else {
        this.currState = this.nextState;
        this.nextState = null;
        return true;
      }
    }

    /**
     * Clears transition history
     */
    clearHistory() {
      this.prevState = null;
      this.nextState = null;
    }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
