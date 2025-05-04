/**
 * Environment utilities for Trumplang interpreter
 */

// Import the Environment class
import { Environment } from '../runtime/environment.js';

// Create a new environment
function createEnvironment(parent = null) {
  return new Environment(parent);
}

// Get a variable from environment
function getVariable(env, name) {
  if (env.values.hasOwnProperty(name)) {
    return env.values[name];
  }

  if (env.parent) {
    return getVariable(env.parent, name);
  }

  return null;
}

// Get a variable's value
function getValue(env, name) {
  const variable = getVariable(env, name);
  return variable ? variable.value : null;
}

// Set a variable's value
function setValue(env, name, value) {
  const variable = getVariable(env, name);
  if (variable) {
    variable.value = value;
    return true;
  }
  return false;
}

// Define a variable
function defineVariable(env, name, type, value) {
  env.values[name] = { type, value };
  return value;
}

export {
  createEnvironment,
  getVariable,
  getValue,
  setValue,
  defineVariable
};