/**
 * Environment class for Trumplang runtime
 * Provides variable scope and management
 */
class Environment {
    constructor(parent = null) {
        this.values = {};
        this.parent = parent;
    }

    // Define a variable in the current scope
    define(name, value, type) {
        this.values[name] = { value, type };
        return value;
    }

    // Assign a value to an existing variable (in any scope)
    assign(name, value) {
        if (this.values.hasOwnProperty(name)) {
            this.values[name].value = value;
            return value;
        }

        if (this.parent) {
            return this.parent.assign(name, value);
        }

        throw new Error(`NOBODY KNOWS WHAT ${name} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
    }

    // Get a variable from any scope
    get(name) {
        if (this.values.hasOwnProperty(name)) {
            return this.values[name].value;
        }

        if (this.parent) {
            return this.parent.get(name);
        }

        throw new Error(`NOBODY KNOWS WHAT ${name} IS. YOU NEED TO DECLARE IT FIRST, BELIEVE ME!`);
    }

    // Check if a variable exists in any scope
    has(name) {
        if (this.values.hasOwnProperty(name)) {
            return true;
        }

        if (this.parent) {
            return this.parent.has(name);
        }

        return false;
    }
}

module.exports = {
    Environment
};