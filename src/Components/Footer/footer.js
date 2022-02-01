import React from "react";
import './footer.css';

export const Footer = () => {
    return(
        <footer className="footer">
            <span>
                Created by: {'Phinehas Sersah'}
                <a className="Footer-link"
                href="https://phinehas.netlify.app/"
                target='_blank'
                rel="noopener noreferrer"
                title="github profile">

                </a>
            </span>

        </footer>
    )
    }

    export default Footer;