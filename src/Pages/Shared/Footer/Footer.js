import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div>
                        <span class="logo">CarShop</span>
                </div>

                <div class="row">
                        <div class="col-3">                
                            <div class="link-cat" onclick="footerToggle(this)">
                                <span class="footer-toggle"></span>
                                <span class="footer-cat">Solution</span>
                            </div>
                            <ul class="footer-cat-links">
                                <li><a href="##"><span>Repair Cars and Sell</span></a></li>
                                <li><a href="##"><span>Secure the Car</span></a></li>
                                <li><a href="##"><span>Provide better Solution</span></a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <div class="link-cat" onclick="footerToggle(this)">
                                <span class="footer-toggle"></span>
                                <span class="footer-cat">Industries</span>
                            </div>
                            <ul class="footer-cat-links">
                                <li><a href="##"><span>Sports</span></a></li>
                                <li><a href="##"><span>MAnual</span></a></li>
                                <li><a href="##"><span>Family</span></a></li>
                                <li><a href="##"><span>Officials</span></a></li>
                                <li><a href="##"><span>Decent</span></a></li>
                            </ul>
                        </div>
                        <div class="col-3">
                            <div class="link-cat" onclick="footerToggle(this)">
                                <span class="footer-toggle"></span>
                                <span class="footer-cat">Quick Links</span>
                            </div>
                            <ul class="footer-cat-links">
                                <li><a href="##"><span>Reviews</span></a></li>
                                <li><a href="##"><span>Terms & Condition</span></a></li>
                                <li><a href="##"><span>Disclaimer</span></a></li>
                                <li><a href="##"><span>Site Map</span></a></li>
                            </ul>
                        </div>
                        <div class="col-3" id="newsletter">
                            <span>Stay Connected</span>
                            <form id="subscribe">
                                <input type="email" id="subscriber-email" placeholder="Enter Email Address"/>
                                <input type="submit" value="Subscribe" id="btn-scribe"/>
                            </form>
                            
                            <div class="social-links social-2">
                                <a href="https://www.facebook.com/amotin.74"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/MDABDUL79113085"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com/in/motin74/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.instagram.com/amotin74/"><i class="fab fa-instagram"></i></a>
                                <a href="##"><i class="fab fa-tumblr"></i></a>
                                <a href="##"><i class="fab fa-reddit-alien"></i></a>
                            </div>

                            <div id="address">
                                <span>Office Location</span>
                                <ul>
                                    <li>
                                        <i class="far fa-building"></i>
                                        <div>Los Angeles<br/>
                                        Office 9B, Sky High Tower, New A Ring Road, Los Angeles</div>
                                    </li>
                                    <li>
                                        <i class="fas fa-gopuram"></i>
                                        <div>Dhaka<br/>
                                        Office 150B, Behind Mothizeel City Center, Station Road, Dhaka</div>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                        <div class="social-links social-1 col-6">
                            <a href="##"><i class="fab fa-twitter"></i></a>
                            <a href="##"><i class="fab fa-linkedin-in"></i></a>
                            <a href="##"><i class="fab fa-instagram"></i></a>
                            <a href="##"><i class="fab fa-tumblr"></i></a>
                            <a href="##"><i class="fab fa-reddit-alien"></i></a>
                        </div>
                </div>
                <div id="copyright">
                    &copy; All Rights Reserved 2021-2080
                </div>
                <div id="owner">
                    <span>
                        Designed by <a href="https://www.facebook.com/amotin.74">KHAN</a>
                    </span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;