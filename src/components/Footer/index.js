import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 copyright">
          <p>Copyright &copy; 2018 Chase Moody</p>
        </div>
        <div className="col-sm-6 social">
          <ul>
            <li>
              <a href="https://github.com/cmoody" target="_blank"><i className="fa fa-github" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/chase44/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="https://twitter.com/chasethebits" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;