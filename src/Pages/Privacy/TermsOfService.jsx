import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import handleScroll from "../../utils/handleScroll";

const Terms = () => {
  const navigate = useNavigate()
  return (
    <div className='privacyContainer' id="termsofservice">
      <h1 className="privacyTitle">Terms Of Use</h1>
      <br />
      <p className="privacyDescription">Last updated 5 December 2023</p>
      <br />
      <div>
        <h2 className="privacyDivHeading">AGREEMENT TO TERMS</h2>
        <br />
        <p className="privacyDescription">We are independent web developer of My Potfolio, doing business as individual (<span className="privacyBoldSpan">“we,” “us,” or “our”</span>), located in Ukraine. We operate the website https://thriving-sorbet-830de0.netlify.app/#heroSection (<span className="privacyBoldSpan">the “Website”</span>) through which we provide you our services, (collectively, <span className="privacyBoldSpan">the “Services”</span> which include the provision and use of the Website).</p>
        <br />
        <p>You can contact us by email at the main page of our site in Contact Me section by filling in little form.</p>
        <br />
        <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (<span className="privacyBoldSpan">“you”</span>) and concerning your access to and use of the Website and the Services. You agree that by accessing the Services, you have read, understood, and agree to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
        <br />
        <p>Supplemental terms and conditions or documents that may be posted on the Website from time to time are hereby expressly incorporated herein by reference. We reserve the right to make changes or modifications to these Terms of Use from time to time. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Terms of Use to stay informed as each time you access the Services, you will be subject to, and will be deemed to have been made aware of and to have accepted, the then applicable Terms of Use.</p>
        <br />
        <p>The Services are intended for business users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.</p>
      </div>
      <br />
      <div>
        <h3 className="privacySectionHeading">Table of contents</h3>
        <ol>
          <li className="privacyOL">
            <Link
              to="aboutWebsite"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >OUR WEBSITE AND SERVICES
          </Link></li>
          <li className="privacyOL">
            <Link to="intellectualProperty" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}>INTELLECTUAL PROPERTY RIGHTS</Link></li>
          <li className="privacyOL">
            <Link to="userRepresentations" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}>USER REPRESENTATIONS</Link></li>
          
          <li className="privacyOL">
            <Link to="prohibitedActivities" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}>PROHIBITED ACTIVITIES</Link></li>
          <li className="privacyOL">
             <Link to="thirdParty" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}>THIRD-PARTY WEBSITES AND CONTENT</Link></li>
          
          <li className="privacyOL">
            <Link to="servicesManagement" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}>SERVICES MANAGEMENT</Link></li>
          
          <li className="privacyOL">
             <Link to="ourPrivacy" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}>PRIVACY NOTICE</Link></li>
 
          <li className="privacyOL"><Link to="disclaimer" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
            onScroll={handleScroll}>DISCLAIMER</Link></li>
          
          <li className="privacyOL">
            <Link to="liabilityLimitations" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
            onScroll={handleScroll}>LIMITATIONS OF LIABILITY</Link></li>
          <li className="privacyOL">
            <Link to="userData" target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
            onScroll={handleScroll}>USER DATA</Link></li>
        </ol>
        <br />
        <div id="aboutWebsite">
<h4 className="privacySectionHeading">1. OUR WEBSITE AND SERVICES</h4>
           <br />
          <p className="boldDescription">We are not lawyers nor a law firm, but we help you with compliance in relation to your privacy and contractual obligations. </p>
           <br />
          <p>
            We provide a software (<span className="privacyBoldSpan">the “Software”</span>), that you can review and test to get knowledge about our abilities to create web applications. The information, provided when using the Services are not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
          </p>
           <br />
          <p>The Services are not tailored to comply with industry-specific regulations (including Health Insurance Portability and Accountability Act (HIPAA), Federal Information Security Management Act (FISMA), etc.), so if your interactions would be subjected to such laws, you may not use these Services. You may not use the Services in a way that would violate the Gramm-Leach-Bliley Act (GLBA).</p>
        </div>
        <br />
        <div id="intellectualProperty">
          <h4 className="privacySectionHeading">2. INTELLECTUAL PROPERTY RIGHTS</h4>
          <br />
          <p>Unless otherwise indicated, we retain all right, title, and interest in and to the Software and the Website, including without limitation all graphics, user interfaces, databases, functionality, software, website designs, audio, video, text, photographs, graphics, logos, and trademarks or service marks reproduced through the System. These Terms of Use do not grant you any intellectual property license or rights in or to the Software and the Website or any of its components, except to the limited extent that these Terms of Use specifically sets forth your license rights to it. You recognize that the Software and the Website and their components are protected by copyright and other laws.</p>
        </div>
        <br />
        <div id="userRepresentations">
          <h4 className="privacySectionHeading"> 3. USER REPRESENTATIONS</h4>
          <br />
          <p>By using the Services, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Services for any illegal or unauthorized purpose; and (7) your use of the Services will not violate any applicable law or regulation.</p>
          <br />
          <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>
        </div>
        <br />
        <div id="prohibitedActivities">
          <h4 className="privacySectionHeading">4. PROHIBITED ACTIVITIES</h4>
          <br />
          <p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
          <br />
          <p>As a user of the Services, you agree not to:</p>
          <ul>
            <li className="privacyListStyle">Systematically retrieve data, Forms, or other Content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
            <li className="privacyListStyle">Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.</li>
            <li className="privacyListStyle">Use the Services to advertise or offer to sell goods and services.</li>
            <li className="privacyListStyle">Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.</li>
            <li className="privacyListStyle">Engage in unauthorized framing of or linking to the Services.</li>
            <li className="privacyListStyle">Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
            <li className="privacyListStyle">Make improper use of our support services or submit false reports of abuse or misconduct.</li>
            <li className="privacyListStyle">Engage in any automated use of the Website or Services, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
            <li className="privacyListStyle">Attempt to impersonate another user or person or use the username of another user.</li>
            <li className="privacyListStyle">Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
          </ul>
        </div>
        <div id="thirdParty">
          <h4 className="privacySectionHeading">5. THIRD-PARTY WEBSITES AND CONTENT</h4>
          <br />
          <p>The Services may contain (or you may be sent via the Services) links to other websites (<span className="privacyBoldSpan">“Third-Party Websites”</span>) as well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information, applications, software, and other content or items belonging to or originating from third parties (<span className="privacyBoldSpan">“Third-Party Content”</span>). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content posted on, available through, or installed from the Services, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other policies of or contained in the Third-Party Websites or the Third-Party Content. </p>
          <br />
          <p>Inclusion of, linking to, or permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply approval or endorsement thereof by us. If you decide to leave the Services and access the Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of Use no longer govern.</p>
          <br />
          <p>You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services or relating to any applications you use or install from the Services. Any purchases you make through Third-Party Websites will be through other websites and from other companies, and we take no responsibility whatsoever in relation to such purchases which are exclusively between you and the applicable third party. You agree and acknowledge that we do not endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any contact with Third-Party Websites.</p>
        </div>
        <br />
        <div id="servicesManagement">
          <h4 className="privacySectionHeading">6. SERVICES MANAGEMENT</h4>
          <br />
          <p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Terms of Use; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>
        </div>
        <br />
        <div id="ourPrivacy">
          <h4 className="privacySectionHeading">7. PRIVACY NOTICE</h4>
          <br />
          <p>We care about data privacy and security. Please review our <Link target="_blank"
            rel="noreferrer noopener"
            to="privacypolicy"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
            onScroll={handleScroll} onClick={() => { navigate("/privacypolicy") }}>Privacy Notice</Link> to understand our use of your personal information. You acknowledge that you have reviewed and understand our Privacy Notice.</p>
          <br />
          <p>Please be advised the Services is hosted in Ukraine. If you access the Services from any other region of the world with laws or other requirements governing personal data collection, use, or disclosure that differ from applicable laws in Ukraine, then through your continued use of the Services you agree to have your data transferred to and processed in Ukraine.</p>
        </div>
        <br />
        <div id="disclaimer">
          <h4 className="privacySectionHeading">8. DISCLAIMER</h4>
          <br />
          <p>THE SERVICES ARE PROVIDED ON AN “AS-IS” AND “AS-AVAILABLE” BASIS. YOU AGREE THAT YOUR USE OF OUR SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SOFTWARE OR THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
          <br />
          <p>WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES, THE CONTENT OR ANY THIRD-PARTY CONTENT AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.</p>
          <br />
          <p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD-PARTY WEBSITE AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>
        </div>
        <br />
        <div id="liabilityLimitations">
          <h4 className="privacySectionHeading">9. LIMITATIONS OF LIABILITY</h4>
          <br />
          <p>IN NO EVENT WILL WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, OR ANY (DIRECT OR INDIRECT): (A) LOSS OF DATA, (B) LOST PROFIT, OR (C) LOST REVENUE OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
        </div>
        <br />
        <div id="userData">
          <h4 className="privacySectionHeading">10. USER DATA</h4>
          <br />
          <p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services</p>
          <br />
          <p>You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby agree that you shall independently back up all your data and waive any right of action against us arising from any such loss or corruption of such data.</p>
        </div>
        <br />
      </div>
    </div>
  )
}

export default Terms