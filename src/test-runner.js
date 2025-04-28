import fs from 'fs';
import path from 'path';
import { TrumplangInterpreter } from './interpreter/index.js';
import debugModule from 'debug';
const debug = debugModule('trumplang:test-runner');

/**
 * Test runner for Trumplang - the "EXTREME VETTING" process
 */
class TestRunner {
  constructor() {
    debug('Creating test runner');
    this.interpreter = new TrumplangInterpreter();
    debug('Interpreter created');
    this.passedTests = 0;
    this.failedTests = 0;
  }

  /**
   * Run a single test file
   */
  runTestFile(filePath) {
    console.log(`\nEXTREME VETTING: ${filePath}`);

    try {
      // Check if the file exists
      if (!fs.existsSync(filePath)) {
        console.error(`THIS TEST IS FAKE NEWS! ${filePath} DOESN'T EXIST!`);
        this.failedTests++;
        return false;
      }

      // Check if it has the correct extension
      if (!filePath.endsWith('.TEST.MAGA')) {
        console.error(`THIS FILE IS A DISASTER! NEEDS TO END WITH .TEST.MAGA!`);
        this.failedTests++;
        return false;
      }

      // Read the file
      const input = fs.readFileSync(filePath, 'utf8');

      // Run the test
      const result = this.interpreter.interpret(input);

      if (result === 'PASSED BIGLY') {
        console.log(
          `${path.basename(filePath)} PASSED BIGLY! TREMENDOUS SUCCESS!`,
        );
        this.passedTests++;
        return true;
      } else {
        console.error(`${path.basename(filePath)} TOTALLY RIGGED! SAD!`);
        this.failedTests++;
        return false;
      }
    } catch (error) {
      debug(error);
      console.error(`TEST FAILED BADLY: ${error.message}`);
      this.failedTests++;
      return false;
    }
  }

  /**
   * Run all tests in a directory
   */
  runTestDirectory(dirPath) {
    console.log(`\nEXTREME VETTING DIRECTORY: ${dirPath}`);

    try {
      // Check if the directory exists
      if (!fs.existsSync(dirPath)) {
        console.error(`THIS DIRECTORY IS FAKE NEWS! ${dirPath} DOESN'T EXIST!`);
        return false;
      }

      // Get all test files
      const files = fs
        .readdirSync(dirPath)
        .filter((file) => file.endsWith('.TEST.MAGA'))
        .map((file) => path.join(dirPath, file));

      if (files.length === 0) {
        console.log(`NO TESTS FOUND IN ${dirPath}. SAD!`);
        return true;
      }

      // Run each test
      let allPassed = true;
      for (const file of files) {
        const passed = this.runTestFile(file);
        allPassed = allPassed && passed;
      }

      return allPassed;
    } catch (error) {
      debug(error);
      console.error(`DIRECTORY VETTING FAILED: ${error.message}`);
      return false;
    }
  }

  /**
   * Run all tests in the project
   */
  runAllTests() {
    console.log('EXTREME VETTING ALL TESTS!');

    try {
      // Reset counters
      this.passedTests = 0;
      this.failedTests = 0;

      // Get all test directories - assumes test files are in test/ and its subdirectories
      // Use import.meta.url instead of __dirname for ES modules
      const currentFilePath = new URL(import.meta.url).pathname;
      const currentDir = path.dirname(currentFilePath);
      const testDir = path.join(currentDir, '..', 'test');
      this.runTestDirectory(testDir);

      // Recursively get subdirectories
      const getSubdirs = (dir) => {
        return fs
          .readdirSync(dir, { withFileTypes: true })
          .filter((dirent) => dirent.isDirectory())
          .map((dirent) => path.join(dir, dirent.name));
      };

      // Run tests in all subdirectories
      const subdirs = getSubdirs(testDir);
      for (const subdir of subdirs) {
        this.runTestDirectory(subdir);
      }

      // Print summary
      console.log('\nTEST SUMMARY:');
      console.log(`PASSED: ${this.passedTests} - TREMENDOUS!`);
      console.log(`FAILED: ${this.failedTests} - SAD!`);

      return this.failedTests === 0;
    } catch (error) {
      debug(error);
      console.error(`ALL TESTS VETTING FAILED: ${error.message}`);
      return false;
    }
  }
}

export { TestRunner };
