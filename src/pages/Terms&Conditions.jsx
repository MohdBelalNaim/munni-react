import React,{useEffect} from "react";
import Navigation from "../components/NavigationBar";

const TermsConditions = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
  return (
    <>
      <Navigation></Navigation>
      <div className="lg:px-36 px-4 text-lg">
        <div className="pt-8 pb-4">
          milaap.org is a platform for giving and charitable donations. We do
          not provide any financial return in any form whatsoever, including but
          not limited to financial securities (debt or equity), interest,
          dividend, profit share, rewards in cash, to individuals who contribute
          on milaap.org.Any contribution on milaap.org, by an individual, should
          not be construed as an investment in any form whatsoever.
        </div>
        <div className="text-4xl font-semibold py-4">
          Consolidated terms of use and terms and conditions
        </div>
        <div className="py-2">
          Please read these Terms of Use/Terms and Conditions carefully before
          using http://www.milaap.org (the ‘website or the ‘Site’), owned by
          parent company Milaap Social Ventures Pte. Limited and its affiliated
          companies or entities (combined called as the ‘company’). This
          agreement sets forth the legally binding terms and conditions for your
          use of the website. By using the service/services in any manner,
          including, but not limited to, visiting or browsing the site or
          contributing content, information, or other materials or services to
          the site, you agree to be bound by this agreement. These terms and
          conditions apply in addition to any other terms and conditions that
          the Company or its affiliated organizations may ask you to sign at the
          time of making the contribution. The Company may ask you to sign
          specific terms and conditions at different point of activities on the
          website.
        </div>
        <div className="pb-8">
          <div>
            <div className="text-2xl font-semibold py-2">
              Summary of Service
            </div>
            <div className="py-2">
              Milaap is an online platform where certain users (‘Campaigners’)
              run campaigns to raise funds for their creative & innovative
              projects. They raise funds by asking for contributions from other
              users (‘contributors’ or ‘funders’) in return for tangible and
              intangible rewards. Through the Site, email, websites, and other
              media, the Company makes accessible various content, including,
              but not limited to, videos, photographs, images, artwork,
              graphics, audio clips, comments, data, text, software, scripts,
              projects, other material and information, and associated
              trademarks and copyrightable works (collectively, “Content”).
              Campaigners, contributors or funders, and other visitors
              (collectively, “Users”) may have the ability to contribute, add,
              create, upload, submit, distribute, facilitate the distribution
              of, collect, post, or otherwise make accessible (“Submit”)
              Content. “User Submissions” means any Content Submitted by Users.
              By creating a fundraising campaign on Milaap, you as the
              campaigner are offering the public the opportunity to enter into a
              contract with you. By funding or contributing fundraising campaign
              on Milaap, you as the funder/contributor accept that offer and the
              contract between the campaigner and the funder/contributor. Milaap
              is not a party to that agreement between the campaigner and the
              funder/contributor. All dealings are solely between Users.
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold py-2">
              Acceptance of Terms
            </div>
            <div className="py-2">
              The Service is offered subject to acceptance of all of the terms
              and conditions contained in these Terms of Use, including the
              Privacy Policy (that can be found on the website) mentioned in
              this document and all other operating rules, policies, and
              procedures that may be published on the Site, which are
              incorporated by reference and may be updated by the Site without
              notice to you. In addition, some Services offered through the Site
              may be subject to additional terms and conditions adopted by the
              Company. Your use of those services is subject to those additional
              terms and conditions, which are incorporated into these Terms of
              Use by this reference.The Services of the Site is available only
              to individuals who need their funds transferred to an Indian bank
              account. The Company may, in its sole discretion, refuse to offer
              the Site’s services to any person or entity and change its
              eligibility criteria at any time. This provision is void where
              prohibited by law and the right to access the Site’s services is
              revoked in those jurisdictions.
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold py-2">
              Modification of Terms of Use
            </div>
            <div className="py-2">
              The Company reserves the right, at its sole discretion, to modify
              or replace these Terms of Use, or change, suspend, or discontinue
              the Site and its services (including, but not limited to, the
              availability of any feature, database, or Content) at any time for
              any reason. The Company may also impose limits on certain features
              and services or restrict your access to parts or all of the
              website without notice or liability. It is your responsibility to
              check the Terms of Use periodically for changes. Your continued
              use of the website following the posting of any changes to the
              Terms of Use constitutes acceptance of those changes.
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold py-2">Registration</div>
            <div className="py-2">
              You may view Content on the Site without registering, but as a
              condition of using certain aspects of the Site, you may be
              required to register with the Company and it’s Site and create a
              User profile using a “User ID” and password. The Site also allows
              you to use your Facebook profile as your login preference;
              however, the Site does not post or publish anything on your
              Facebook profile without your permission. Also, please note that
              Facebook has a standard login procedure, which you must follow as
              a user; Milaap has no control over Facebook’s login procedure.
              Additionally, you shall provide accurate, complete, and updated
              registration information. Failure to do so shall constitute a
              breach of the Terms of Use, which may result in immediate
              termination of your account. You shall not use as a User ID,
              domain name, or project name, any name or term that (i) is the
              name of another person, with the intent to impersonate that
              person; (ii) is subject to any rights of another person, without
              appropriate authorization; or (iii) is offensive, vulgar, or
              obscene. The Company reserves the right in its sole discretion to
              refuse registration of or cancel a User ID, domain name, and
              project name. You are solely responsible for activity that occurs
              on your account and shall be responsible for maintaining the
              confidentiality of your password for the Site. You shall never use
              another User account without the other User’s expressed
              permission. You will immediately notify the Company in writing of
              any unauthorized use of your account, or other known
              account-related security breach.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TermsConditions;
