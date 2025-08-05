// Utility functions for the CLI
const fs = require('fs');
const path = require('path');

// Function to read a file
const readFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf-8');
};

// Function to write to a file
const writeFile = (filePath, data) => {
    fs.writeFileSync(filePath, data, 'utf-8');
};

// Function to list files in a directory
const listFiles = (dirPath) => {
    return fs.readdirSync(dirPath).map(file => path.join(dirPath, file));
};

// Function to check if a path is a directory
const isDirectory = (source) => {
    return fs.lstatSync(source).isDirectory();
};

// Function to create a directory if it doesn't exist
const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

// Exporting utility functions
module.exports = {
    readFile,
    writeFile,
    listFiles,
    isDirectory,
    createDirectory
};