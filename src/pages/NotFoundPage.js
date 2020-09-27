import React from 'react';
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";



const NotFoundPage = () => (
    <div id="error-page">
    <h1>404: Page Not Found</h1>
    <h5>Go hard, or</h5>
    <Link to="/">
        <Button variant="primary">Go Home</Button>
    </Link>
    </div>
);

export default NotFoundPage;