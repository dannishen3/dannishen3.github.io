import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ siteTitle }) => (
    <footer>
        <div class="wrapper">
            <nav class="footer-nav" id="footer" role="navigation" aria-label="Footer">
                <ul class="footer-links">
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" >
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----"/>
                        <button class="fake-anchor" type="submit" value="checkout" border="0" name="Checkout" alt="PayPal - The safer, easier way to pay online!">Checkout</button>
                        <img class="paypal-pixel" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
                    </form>
                </li>
                </ul>
                <ul class="social-links">
                    {/* <li><a href="{{ theme.twitter_url }}" aria-label="Twitter" title="Twitter"><svg class="twitter-icon" height="36" width="36" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg></a></li> */}

                    {/* <li><a href="{{ theme.facebook_url }}" aria-label="Facebook" title="Facebook"><svg class="facebook-icon" height="36" width="36" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></a></li> */}

                    {/* eslint-disable-next-line */}
                    <li><a href="https://www.instagram.com/nu.classics/" aria-label="Instagram" title="Instagram"><svg class="instagram-icon" height="36" width="36" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.84 503.84"><path fill="currentColor" d="M251.92 45.39c67.27 0 75.23.26 101.8 1.47 24.56 1.12 37.9 5.22 46.78 8.67a78 78 0 0129 18.85 78 78 0 0118.85 29c3.45 8.88 7.55 22.22 8.67 46.78 1.21 26.57 1.47 34.53 1.47 101.8s-.26 75.23-1.47 101.8c-1.12 24.56-5.22 37.9-8.67 46.78a83.51 83.51 0 01-47.81 47.81c-8.88 3.45-22.22 7.55-46.78 8.67-26.56 1.21-34.53 1.47-101.8 1.47s-75.24-.26-101.8-1.47c-24.56-1.12-37.9-5.22-46.78-8.67a78 78 0 01-29-18.85 78 78 0 01-18.85-29c-3.45-8.88-7.55-22.22-8.67-46.78-1.21-26.57-1.47-34.53-1.47-101.8s.26-75.23 1.47-101.8c1.12-24.56 5.22-37.9 8.67-46.78a78 78 0 0118.85-29 78 78 0 0129-18.85c8.88-3.45 22.22-7.55 46.78-8.67 26.57-1.21 34.53-1.47 101.8-1.47m0-45.39c-68.42 0-77 .29-103.87 1.52S102.92 7 86.92 13.22a123.68 123.68 0 00-44.64 29.06 123.68 123.68 0 00-29.06 44.64c-6.22 16-10.48 34.34-11.7 61.15S0 183.5 0 251.92s.29 77 1.52 103.87 5.48 45.13 11.7 61.13a123.68 123.68 0 0029.06 44.62 123.52 123.52 0 0044.64 29.07c16 6.23 34.34 10.49 61.15 11.71s35.45 1.52 103.87 1.52 77-.29 103.87-1.52 45.11-5.48 61.11-11.71a128.74 128.74 0 0073.69-73.69c6.23-16 10.49-34.34 11.71-61.15s1.52-35.45 1.52-103.87-.29-77-1.52-103.87-5.48-45.11-11.71-61.11a123.52 123.52 0 00-29.05-44.62 123.68 123.68 0 00-44.64-29.08c-16-6.22-34.34-10.48-61.15-11.7S320.34 0 251.92 0z"/><path fill="currentColor" d="M251.92 122.56a129.36 129.36 0 10129.36 129.36 129.35 129.35 0 00-129.36-129.36zm0 213.36a84 84 0 1184-84 84 84 0 01-84 84z"/><circle fill="currentColor" cx="386.4" cy="117.44" r="30.23"/></svg></a></li>

                    {/* <li><a href="{{ theme.pinterest_url }}" aria-label="Pinterest" title="Pinterest"><svg class="pinterest-icon" height="36" width="36" aria-hidden="true" focusable="false" role="img" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path></svg></a></li> */}

                    {/* <li><a href="{{ theme.tumblr_url }}" aria-label="Tumblr" title="Tumblr"><svg class="tumblr-icon" height="36" width="36" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"></path></svg></a></li> */}
                </ul>
            </nav>
        </div>
    </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
