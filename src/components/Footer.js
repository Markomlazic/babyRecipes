import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer container-fluid mt-3">
        <div className="pt-5 pb-1 footer">
          <div className="container">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <h2>React-Babyrezepte</h2>
                <h6>Developed by MML</h6>
                <p>
                  <span className="span-element">
                    <a href="https://www.linkedin.com/in/marko-lazic-74583a170/">
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </span>

                  <span className="span-element">
                    <a href="https://twitter.com/MarkoLa16617366">
                      <i className="fa fa-twitter-square"></i>
                    </a>
                  </span>
                  <span className="span-element">
                    <a href="mailto: marko.m.lazic@gmail.com?subject=Babyrezepte React App">
                      <i className="fa fa-envelope-square mr-3"></i>
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
