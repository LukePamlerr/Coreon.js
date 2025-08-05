import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './docs.css';

const Docs = () => {
    return (
        <div className="docs-container">
            <Navbar />
            <main className="docs-content">
                <h1>Coreon.js Documentation</h1>
                <p>Welcome to the Coreon.js documentation. Here you will find all the information you need to get started with the framework.</p>
                
                <section>
                    <h2>Getting Started</h2>
                    <p>To begin using Coreon.js, follow the installation instructions below:</p>
                    <pre>
                        <code>
                            npm install coreon.js
                        </code>
                    </pre>
                </section>

                <section>
                    <h2>Features</h2>
                    <ul>
                        <li>Advanced Middleware Support</li>
                        <li>Robust API Integrations</li>
                        <li>Real-time WebSocket Communication</li>
                        <li>Custom Plugin System</li>
                        <li>Comprehensive Error Handling</li>
                        <li>And much more...</li>
                    </ul>
                </section>

                <section>
                    <h2>Examples</h2>
                    <p>Here are some examples of how to use Coreon.js:</p>
                    <pre>
                        <code>
                            // Example of a simple API endpoint
                            const express = require('express');
                            const app = express();
                            const coreon = require('coreon.js');

                            app.get('/api/example', (req, res) => {
                                res.send('Hello from Coreon.js!');
                            });
                        </code>
                    </pre>
                </section>

                <section>
                    <h2>Additional Resources</h2>
                    <p>For more information, check out the following resources:</p>
                    <ul>
                        <li><a href="https://github.com/microsoft/vscode-extension-samples/blob/main/nodefs-provider-sample">GitHub Repository</a></li>
                        <li><a href="https://coreon.js/docs">Official Documentation</a></li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Docs;