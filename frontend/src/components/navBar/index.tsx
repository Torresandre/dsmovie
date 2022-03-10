

import  {  MarkGithubIcon } from '@primer/octicons-react'

import './style.css'

function NavBar() {
    return(
        <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/Torresandre" target="_blank" rel="noreferrer">
                    <div className="dsmovie-contact-container">
                        
                        <MarkGithubIcon/>
                        <p className="dsmovie-contact-link">/Torresandre</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default NavBar;