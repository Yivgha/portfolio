import React from 'react';
import { Link } from 'react-scroll';
import handleScroll from '../../utils/handleScroll';

const Cookies = () => {
  return (
    <div className='privacyContainer' id='cookiesettings'>
      <h1 className="privacyTitle">Cookies Notice</h1>
      <br />
      <p className="privacyDescription">Last updated 5 December 2023</p>
      <br />
      <p className="privacyBoldSpan">Our website uses cookies so that we can provide you with the best possible user experience.</p>
      <br />
      <p>Without some of these cookies, the website simply would not work. Other cookies perform functions like recognising you each time you visit the site or helping our team to understand which parts of the site you find most interesting and useful.</p>
      <br />
      <div>
        <h3 className="privacySectionHeading">Table of contents</h3>
        <br />
        <ol>
          <li className="privacyOL"><Link
              to="whatAreCookies"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >What are cookies?</Link></li>
          <li className="privacyOL">
            <Link
              to="cookieTypes"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >Cookie types</Link></li>
          <li className="privacyOL"><Link
              to="theLaw"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >The law</Link></li>
          <li className="privacyOL">
            <Link
              to="turnOffCookies"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >Can I turn off cookies?</Link></li>
          <li className="privacyOL">
            <Link
              to="personalData"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >Cookies and personal data</Link></li>
        </ol>
        <div id="whatAreCookies">
          <h4 className="privacySectionHeading">1. What are cookies?</h4>
          <br />
          <p>Cookies are small text files that are placed on your computer, smartphone or tablet by websites that you visit. They are widely used to make websites work and to function more effectively. For example, they may be required to keep you logged in to a service, or to remember your user preferences or shopping cart contents. A cookie will typically contain a record of the web site which issued it, its own name, and a value which is often a randomly generated unique number. In most cases, cookies do not contain any personal data, however, they sometimes do and, when combined with other information about you, they may also constitute personal data.</p>
          <br />
          <p>A cookie will have a ‘lifetime’, which tells your browser when to delete it. Cookies can be set by the website domain itself, or by another domain, for example by Google Maps.</p>
        </div>
        <br />
        <div id="cookieTypes">
          <h4 className="privacySectionHeading">2. Cookie types</h4>
          <br />
          <p>There are several different types of cookie. These are the most common ones:</p>
          <ul>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Strictly necessary cookie.</span> These cookies are essential for the basic functioning of a website. They are typically used for features like user login, shopping carts, and other essential functions. Strictly necessary cookies do not require user consent.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Session cookie.</span> These cookies are temporary and are stored on a user's device only during their browsing session. They are deleted once the user closes the browser. Session cookies are used to maintain user session information and enable website functionality during a specific visit.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Persistent cookie.</span> Unlike session cookies, persistent cookies remain on a user's device even after they close the browser. These cookies have an expiration date set, and they are used to remember user preferences and settings across multiple sessions.A persistent cookie will outlast user sessions. If a persistent cookie has its maximum age set to 1 year, then, within the year, the initial value set in that cookie would be sent back to the server every time the user visited the server. This could be used to record a piece of information such as how the user initially came to this website. For this reason persistent cookies are also called tracking cookies.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Secure cookie.</span> A secure cookie is only used when a browser is visiting a server via HTTPS, ensuring that the cookie is always encrypted when transmitting from client to server.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">First-party cookie.</span> First-party cookies are set by the website domain that the user is currently visiting. They are used to store information specific to that website and are often used for essential website functions and user authentication.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Third-party cookie.</span> Third-party cookies are set by domains other than the one the user is currently visiting. These cookies are placed by external services, such as advertisers or analytics providers, to track user behavior across different websites and deliver targeted advertisements.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Performance cookie.</span> Performance cookies, also known as analytics cookies, collect information about how users interact with a website. They help website owners understand how visitors use the site, identify areas for improvement, and measure the effectiveness of marketing campaigns.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Functionality cookie.</span> Functionality cookies enable a website to remember user preferences and settings, such as language preferences and customized layouts. They enhance the user experience by providing personalized content.</li>
            <li className="privacyListStyle"><span className="privacyBoldSpan">Targeting or advertising cookie.</span> These cookies are used to track users' browsing behavior and interests. They are used by advertisers to deliver personalized ads and measure the effectiveness of advertising campaigns.</li>
          </ul>
        </div>
        <br />
        <div id="theLaw">
          <h4 className="privacySectionHeading">3. The law</h4>
          <br />
          <p>The principal law which governs how websites use cookies and similar technologies when storing information on a user’s equipment, such as their computer or mobile device, is the Privacy and Electronic Communications (EC Directive) Regulations. The regulations were amended on 9 January 2019.</p>
          <br />
          <p>Regulation 6 covers the use of electronic communications networks to store information (e.g. cookies) or to gain access to information stored in the terminal equipment of a subscriber or user. The change in the law was prompted by concerns about online tracking of individuals and is intended to protect the privacy of users by requiring their knowledge and agreement to the use of cookies, even where the information collected is not directly personally identifiable.</p>
        </div>
        <br />
        <div id="turnOffCookies">
          <h4 className="privacySectionHeading">4. Can i turn off cookies?</h4>
          <br />
          <p>You can change your cookie preferences at any time by clicking on the ‘ ’Cookie icon. You can then adjust the available sliders to ‘On’ or ‘Off’, then clicking ‘Save and close’. You may need to refresh your page for your settings to take effect.</p>
          <br />
          <p>Alternatively, most web browsers allow some control of most cookies through the browser settings.</p>
        </div>
        <br />
        <div id='personalData'>
          <h4 className="privacySectionHeading">5. Cookies and personal data</h4>
          <br />
          <p>We do not use cookies to store personal information about you, and will make no attempt to identify you through use of cookies.</p>
        </div>
      </div>
    </div>
  )
}

export default Cookies