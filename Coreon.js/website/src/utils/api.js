// This file contains utility functions for making API calls.

const API_BASE_URL = 'https://api.coreon.js'; // Base URL for the API

/**
 * Function to make GET requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} params - Query parameters to include in the request
 * @returns {Promise<object>} - The response data from the API
 */
export const get = async (endpoint, params = {}) => {
    const url = new URL(`${API_BASE_URL}/${endpoint}`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
};

/**
 * Function to make POST requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} data - The data to send in the request body
 * @returns {Promise<object>} - The response data from the API
 */
export const post = async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
};

/**
 * Function to make PUT requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} data - The data to send in the request body
 * @returns {Promise<object>} - The response data from the API
 */
export const put = async (endpoint, data) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
};

/**
 * Function to make DELETE requests
 * @param {string} endpoint - The API endpoint to call
 * @returns {Promise<object>} - The response data from the API
 */
export const del = async (endpoint) => {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
};