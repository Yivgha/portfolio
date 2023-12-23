import handleScroll from "../../utils/handleScroll";
import { Link } from "react-scroll";

const PrivacyPolicy = () => {
  return (
    <div className="privacyContainer" id="privacypolicy">
      <h1 className="privacyTitle">PRIVACY POLICY</h1>
      <p className="privacyDescription">Last updated 5 December 2023</p>
      <div>
        <p>
          This privacy notice for https://thriving-sorbet-830de0.netlify.app/#heroSection (
          <span className="privacyBoldSpan">"we", "us", "our</span>), describes
          how and why we might collect, store, use and/or share (
          <span className="privacyBoldSpan">"process"</span>) your information
          when you use our services (
          <span className="privacyBoldSpan">"Services"</span>), such as when
          you:
        </p>
        <ul>
          <li className="privacyListStyle">
            Visit our website as https://thriving-sorbet-830de0.netlify.app/#heroSection, or any website of ours that
            links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales,
            marketing, or events
          </li>
        </ul>
        <p>
          <span className="privacyBoldSpan">Questions or concerns?</span>{" "}
          Reading this privacy notice will help you unserstand your privacy
          rights and choices. If you do not agree with our policies and
          practices, please do not use our Services.
        </p>
      </div>
      <div>
        <h2 className="privacyDivHeading">Summary of key points</h2>
        <p className="privacyDescription">
          This summary provides key points from our privacy notice, but you can
          find our more details about any of these topics by clicking the link
          following each key point or by using our {" "}
          <Link
            to="tableOfContents"
            target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}
          >
            table of contents
          </Link> {" "}
          below to find the section you are looking for.
        </p>
        <p>
          <span className="privacyBoldSpan">
            What personal information do we process?
          </span>{" "}
          When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with us and the Services,
          the choices you make, and the products and features you use. Learn
          more about{" "}
          <Link
            to="personalInformation"
            target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}
          >
            personal information you disclose to us
          </Link>
          .
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">
            {" "}
            Do we process any sensitive personal information?
          </span>{" "}
          We do not process sensitive personal information.
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">
            Do we receive any information from third parties?
          </span>{" "}
          We do not receive any information from third parties.
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">
            How do we process your information?
          </span>{" "}
          We process your information to provide, improve and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent. We process your information only when we
          have a valid legal reason to do so. Learn more about{" "}
          <Link
            to="processInformation"
            target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}
          >
            how we process your information
          </Link>
          .
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">
            In what situation and with which types of parties do we share
            personal information?
          </span>{" "}
          We may share information in specific situations and with specific
          categories of third parties. Learn more about{" "}
          <Link
            to="whenWeShareInfo"
            target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}
          >
            when and with whom we share your personal information
          </Link>
          .
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">
            How do we keep your information safe?
          </span>{" "}
          We have organizational and technical processes and procedures in place
          to protect your personal information. However, no electronic
          transmission over the internet or onformation storage technology can
          be guaranteed to be 100% secure, so we cannot promise or guarantee
          that hackers, cybercriminals or other unauthorized thierd parties will
          not be able to defeat our security and improperly collect,access,
          steal or modify your information. Learn more about{" "}
          <Link
            to="howKeepSafe"
            target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}
          >
            how we keep your information safe
          </Link>
          .
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">What are your rights?</span>{" "}
          Depending on where you are located geographically, the applicable
          privacy law may mean you have certain rights regarding your personal
          information. Learn more about
          <Link
            to="privacyRights"
            target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}
          >
            your privacy rights
          </Link>.
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">
            How do you exercise your rights?
          </span>{" "}
          The easiest way to exercise your rights is by contacting us. We will
          consider and act upon any request in accordance with applicable data
          protection laws.
        </p>
        <br />
        <p>
          <span className="privacyBoldSpan">
            Want to learn more about what we do with any information we collect?
          </span>{" "}
          <Link
            to="tableOfContents"
            target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}
          >
            Review the privacy notice in full.
          </Link>
        </p>
      </div>
      <br />
      <div id="tableOfContents">
        <h3 className="privacySectionHeading">Table of contents</h3>
         <br />
        <ol>
          <li className="privacyOL">
            <Link
              to="personalInformation"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >
              What information do we collect?
            </Link>
          </li>
          <li className="privacyOL">
            <Link
              to="processInformation"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >How do we process your information?</Link></li>
          <li className="privacyOL">
             <Link
              to="legalBases"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >
            What legal bases do we rely on to process your personal information?</Link>
          </li>
          <li className="privacyOL">
            <Link
             to="whenWeShareInfo"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >
              When and with whom do we share your personal information?
              </Link>
          </li>
          <li className="privacyOL">
            <Link
             to="cookiesPolicy"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >
            Do we use cookes and other tracking technologies?</Link>
          </li>
          <li className="privacyOL">
            <Link
             to="keepingInfo"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >How long do we keep your information?</Link></li>
          <li className="privacyOL">
            <Link
             to="howKeepSafe"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >How do we keep your information safe?</Link></li>
          <li className="privacyOL">
            <Link
             to="minorsInfo"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >Do we collect information from minors?</Link></li>
          <li className="privacyOL">
            <Link
             to="privacyRights"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >What are your privacy rights?</Link></li>
          <li className="privacyOL">
            <Link
             to="doNotTrack"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >Controls for do-not-track features</Link></li>
          <li className="privacyOL">
            <Link
             to="updatesToNotice"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >Do we make updates to this notice?</Link></li>
          <li className="privacyOL">
            <Link
             to="contactMeNotice"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >
            How can you contact us about this notice?</Link>
          </li>
          <li className="privacyOL">
            <Link
             to="reviewData"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >
            How can you review, update, or delete the data we collect from you?</Link>
          </li>
        </ol>
        <br />
        <div id="personalInformation">
          <h4 className="privacySectionHeading">1. What information do we collect?</h4>
           <br />
          <p className="boldDescription">Pesonal information you disclose to us</p>
           <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: We collect personal information that you provide to us.
          </p>
          <br />
          <p>
            We collect personal information that you voluntarily provide to us
            when you express an interest in obtaining information about us or
            our products and Sercives, when you paticipate in activities on the
            Services, or otherwise when you contact us.
          </p>
          <br />
          <p>
            <span className="privacyBoldSpan">Personal information provided by You.</span>The personal information that
            we collect depends on the context of your interations with us and
            the Services, the choices you make and the products and features you
            use. The personal information we collect may include the following:
          </p>
          <br />
          <ul>
            <li className="privacyListStyle">names</li>
            <li className="privacyListStyle">phone numbers</li>
            <li className="privacyListStyle">email addresses</li>
          </ul>
          <br />
          <p><span className="privacyBoldSpan">Sensitive information</span>. We do not process sensitive information.</p>
          <br />
          <p>
            All personal information that you provide to us must be true,
            complete and accurate and you must notify us of any changes to such
            personal information.
          </p>
        </div>
        <br />
        <div id="processInformation">
          <h4 className="privacySectionHeading">2. How do we process your information?</h4>
          <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: We process your information to provide, improve, and
            administer our Services, communicate with you, for security and
            fraud preventions, and to comply with law. We may also process your
            information for other purposes with your consent.
          </p>
          <br />
          <p className="privacyBoldSpan">
           
            We process your personal information for a variety of reaasons,
            depending on how you interact with our Services, including:
          </p>
          <br />
          <ul>
            <li className="privacyListStyle">
               <span className="privacyBoldSpan">To enable user-to-user communications</span>. We may process your
              information if you choose to use any of our offerings that allow
              for communication with another user.
            </li>
            <li className="privacyListStyle">
             <span className="privacyBoldSpan">To save or protect an individual's vital interest</span>. We may process
              your information when necessary to save or protect an individual's
              vital interest, such as to prevent harm.
            </li>
          </ul>
        </div>
        <br />
        <div id="legalBases">
          <h4 className="privacySectionHeading">
            3. What legal bases do we rely on to process your information?
          </h4>
          <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: We only process your personal information when we believe
            it is necessary and we have a valid legal reason (i.e., legal basis)
            to do so under applicable law, like with your consent, to comply
            with laws, to provide you with services to enter into or fulfill our
            contractual obligations, to protect your rights, or to fulfill our
            legitimate business interests.
          </p>
          <br />
          <p>
            The General Data Protection Regulation (GDRP) and UK GDPR require us
            to explain the valid legal bases we rely on in order to process your
            personal information. As such, we may rely on the following legal
            bases to process your personal information:
          </p>
          <ul>
            <li className="privacyListStyle">
              <span className="privacyBoldSpan">Consent</span>. We process your information if you have given us
              permission (i.e., consent) to use your personal information for a
              specific purpose. You can withdraw your consent at any time. Learn
              more about <Link to="privacyRights" target="_blank"
            rel="noreferrer noopener"
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            className="privacyLink"
            onScroll={handleScroll}>withdrawing your consent</Link>.
            </li>
            <li className="privacyListStyle">
              <span className="privacyBoldSpan">Performance of a Contract</span>. We may process your personal
              information when we believe it is necessary to fulfill our
              contractual obligations to you, including providing our Services
              or at your request prior to entering into a contract with you.
            </li>
            <li className="privacyListStyle">
              <span className="privacyBoldSpan">Legal Obligations</span>. We may process your informaton where we believe
              it is necessary for compliance with our legal obligations, such as
              to cooperate with a law enforcement body or regulatiry agence,
              exercise or defend our legal rights, or disclose your information
              as evidence in litigation in which we are involved.
            </li>
            <li className="privacyListStyle">
              <span className="privacyBoldSpan">Vital interests</span>. We may process your information where we believe
              it is necessary to protect your vital interests or the vital
              interests of a third party, such as situations involving potential
              threats to the safety of any person.
            </li>
          </ul>
        </div>
        <br />
        <div id="whenWeShareInfo">
          <h4 className="privacySectionHeading">4. When and with whom do we share your personal information?</h4>
          <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: We may share information in specific situations described
            in this section and/or with the following categories of third
            parties.
          </p>
          <br />
          <p>
            <span className="privacyBoldSpan">Vendors, Consultants and other Third-Party Service Providers</span>. We may
            share your data with third-party vendors, service providers,
            contractors or agents (<span className="privacyBoldSpan">"third parties"</span>) who perform services for us
            or on our behalf and require access to such information to do that
            work. We have contracts in place iwth our third parties, which are
            designed to help safeguard your personal information. This means
            that they cannot do anything with your personal information unless
            we have instructed them to do it. They will also not share your
            personal information woth any organization apart from us. They also
            commit to protect the data they hold on our behalf and to reatain it
            for the period we instruct. The categories of third parties we may
            share personal information with are as follows:
          </p>
          <ul>
              <li className="privacyListStyle">
                <span className="privacyBoldSpan">Business Transfers</span>. We may share or transfer your information in
                connection with or during negotiations of any merger, sale of
                company assets, financing or acquisition of all or a portion of
                our business to another company.
              </li>
            </ul>
        </div>
        <br />
        <div id="cookiesPolicy">
          <h4 className="privacySectionHeading">5. Do we use cookies and other tracking technologies?</h4>
          <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: We may use cookies and other tracking technologies to
            collect and store your information.
          </p>
          <br />
          <p>
            We may use cookies and similar tracking technologies (like web
            beacons and pixels) to access or store information. Specific
            information about how we use such technologies and how you can
            refuse certain cookies is set in our Cookie Notice.
          </p>
        </div>
        <br />
        <div id="keepingInfo">
          <h4 className="privacySectionHeading">6. How long do we keep your information?</h4>
          <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: We keep your information for as long as necessary to
            fulfill the purposes outlined in this privacy notice unless
            otherwise required by law.
          </p>
          <br />
          <p>
            We will only keep your personal informaiton for as long as it is
            necessary for the purposes set out in this privacy notice, unless a
            longer retention period is required or permitted by law (such as
            tax, accounting or other legal requirements).
          </p>
          <br />
          <p>
            When we have no ongoing legitimate business need to process your
            personal informatio, we will either delete or anonymize such
            information or, if this is not possible (for exmplec, beause your
            personal informaton has been stored in backup archives), then we
            will securely store your personal information and isolate it from
            any further processing untill deletion is possible.
          </p>
        </div>
        <br />
        <div id="howKeepSafe">
          <h4 className="privacySectionHeading">7. How do we keep your informaiton safe?</h4>
          <br />
          <p className="italicDescription">
             <span className="privacyBoldSpan">In short</span>: We aim to protect your personal information through a
            system of organizational and technical security measures.
          </p>
          <br />
          <p>
            We have implemented appropriate and reasonable technical and
            organizational security measures designed to protect the security of
            any personal information we process. However, despite our safeguards
            and efforts to secure your information, no electionic transmission
            over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that
            hackers, cybercriminals or other unauthorized third parties will not
            be able to defeat our security and improperly collect, access, steal
            or modify your information. Although we will do our best to protect
            your personal information, transmission of personal information to
            and from our Services is at your own risk. You should only accesss
            the Services within a secure environment.
          </p>
        </div>
        <br />
        <div id="minorsInfo">
          <h4 className="privacySectionHeading">8. Do we collect information from minors?</h4>
          <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: We do not knowingly collect data from or market to
            children under 18 years of age.
          </p>
          <br />
          <p>
            We do not knowingly solicit data from or market to children under 18
            years of age. By using the Services, you represent that you are at
            least 18 or that your are the parent or guardian of such a minor and
            consent to such minor dependent's use of the Services. If we learn
            that personal information from users less than 18 yeaers of age has
            been collected, we will deactivate the account and take reasonable
            measures to promptly delete such data from our records. If you
            become aware of any data we may have collected from children under
            age 18, please contact us at contact form on the main page of the
            site.{" "}
          </p>
        </div>
        <br />
        <div id="privacyRights">
          <h4 className="privacySectionHeading">9. What are your privacy rights?</h4>
          <br />
          <p className="italicDescription">
            <span className="privacyBoldSpan">In short</span>: In some regions, such as the European Economic Area (EEA),
            United Kingdom (UK) and Switzerland, you have rights that allow you
            greater access to and control over your personal information. You
            may review, change or terminate your account at any time.
          </p>
          <br />
          <p>
            In some regions (like the EEA, UK and Switzerland), you have certain
            rights under applicable data protection laws. These may include the
            right (i) to request access and obtain a copy of your personal
            information, (ii) to request rectification or erasurel (iii) to
            restrict the processing of your personal information; (iv) if
            applicable, to data portability; and (v) not to be subject to
            automated decision-making. In certain circumstances, you may also
            have the right to object to the processing of your personal
            information. You can make such a request by contacting us by using
            the contact details provided in the secton{" "}
            <Link
             to="contactMeNotice"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</Link> below.
          </p>
          <br />
          <p>
            We will consider and act upon any request in accordance with
            applicable data protection laws.
          </p>
          <br />
          <p>
            If you are located in the EEA or UK and you believe we are
            unlawfully processing your personal information, you also have the
            right to complain to your{" "}
            <a
              href="https://ec.europa.eu/newsroom/article29/items/612080"
              target="_blank"
              rel="noopener noreferrer"
              className="outerLink"
            >
              Member State data protection authority
            </a>{" "}
            or{" "}
            <a
              href="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/"
              target="_blank"
              rel="noopener noreferrer"
              className="outerLink"
            >
              UK data protection authority
            </a>
            .
          </p>
          <br />
          <p>
            If you are located in Switlerland, you may contact the{" "}
            <a
              href="https://www.edoeb.admin.ch/edoeb/en/home.html"
              target="_blank"
              rel="noopener noreferrer"
              className="outerLink"
            >
              Federal Data Protection and Information Commissioner
            </a>
            .
          </p>
          <br />
          <p>
            <span className="underlineBoldText">Withdrawing your consent:</span> If we are relying on your consent to
            process your personal information, you have the right to withdraw
            your consent at any time. You can withdraw your consent at any time
            by contacting us by using the contact details provided in the
            section <Link
             to="contactMeNotice"
              target="_blank"
              rel="noreferrer noopener"
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              className="privacyLink"
              onScroll={handleScroll}
            >"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</Link> below.
          </p>
          <br />
          <p>
            However, please note that this will not affect the lawfulness of the
            processing before its withrawal nor, will it affect the processing
            of your personal informatiion conducted in reliance on lawful
            processing grounds other than consent.
          </p>
          <br />
          <p>
            <span className="underlineBoldText">Cookies and similar technologies:</span> Most Web browsers are set to
            accept cookies by default. If you prefer, you can usually choose to
            set your browser to remove cookies and to reject cookies. If you
            choose to remove cookes or reject cookies, this could affect certain
            features or services of our Services.
          </p>
        </div>
        <br />
        <div id="doNotTrack">
          <h4 className="privacySectionHeading">10. Controls for do-not-track features</h4>
          <br />
          <p>
            Most web browsers and some mobile operating systems and mobile
            applications include a Do-Not-Track("DNT") feature or setting you
            can activate to signal your privacy preference not to have data
            about your online browsing activities monitored and collected. At
            this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not
            currently respond to DNT browser signals or any other mechnism that
            automatically communicates your choice not to be tracked online. If
            a standard for online tracking is adopted that we must follow in the
            future, we will inform you about that practice in a revised version
            of this privacy notice.
          </p>
        </div>
        <br />
        <div id="updatesToNotice">
          <h4 className="privacySectionHeading">11. Do we make updates to this notice?</h4>
          <br />
          <p className="italicDescription">
           <span className="privacyBoldSpan">In short</span>: Yes, we will update this notice as necessary to stay
            compliant with relevant laws.
          </p>
          <br />
          <p>
            We may update this privacy notice from time to time. The updated
            version will be indicated by an updated "Revised" date and the
            updated version will be effective as soon as it is accessible. If we
            make material changes to this privacy notice, we may notify you
            either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this
            privacy notice frequently to be informed of how we are protecting
            your information.
          </p>
        </div>
        <br />
        <div id="contactMeNotice">
          <h4 className="privacySectionHeading">12. How can you contact us about this notice?</h4>
          <br />
          <p>
            If you have question or comments about this notice, you may contact
            us by email in the contact form on the main page of this site.
          </p>
        </div>
        <br />
        <div id="reviewData">
          <h4 className="privacySectionHeading">
            13. How can you review, update, or delete the data we collect from
            you?
          </h4>
          <br />
          <p>
            Based on the applucable laws of your country, you may have the right
            to request access to the personal information we collect from you,
            change that information or delete it. To request to review, update
            or delete your personal information, please visit the main page of
            this site and contact us via contact form.
          </p>
        </div>
        <br />
        <p>
          This privacy policy was created using Termly's Privacy Policy
          Generator.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
