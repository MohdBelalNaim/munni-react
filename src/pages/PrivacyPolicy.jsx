import React,{useEffect} from "react";
import Navigation from "../components/NavigationBar";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    
  return (
    <>
      <Navigation></Navigation>
      <div className="lg:px-36 px-4">
        <div className="text-5xl font-bold text-center pt-8 pb-4">
          Privacy Notice
        </div>
        <div className="pb-8">
          <div className="text-2xl font-semibold py-2">INTRODUCTION</div>
          <div className="text-xl py-2">
            Welcome to Milaap&apos;s “Privacy Notice”.
          </div>
          <div className="pb-2">
            Milaap respects your privacy and is committed to protecting your
            personal data. This Privacy Notice will inform you as to how we look
            after your personal data when you visit our website (regardless of
            where you visit it from) and tell you about your privacy rights and
            how the law protects you.
          </div>
          <div className="py-2">
            This Privacy Notice applies to all/any user accessing or availing
            the services on the Platform. You may also download a complete
            version of the Privacy Notice here. Please also use the Glossary to
            understand the meaning of some of the terms used in this privacy
            notice.
          </div>

          <div>
            <div className="text-xl font-bold text-center pt-8">WHO WE ARE </div>
            <div className="pt-8 pb-2 text-lg font-semibold">
              THE PURPOSE OF THIS PRIVACY NOTICE :{" "}
            </div>
            <div>
              This Privacy Notice aims to give you information on how Milaap
              collects and processes your personal data through your use of the
              Milaap website and connected services (the website and connected
              services are collectively referred to as “Platform” in this
              Privacy Notice). The Platform is not intended for children and we
              do not knowingly collect data relating to children.It is important
              that you read this Privacy Notice together with any other privacy
              notice or fair processing notice we may provide on specific
              occasions when we are collecting or processing personal data about
              you so that you are fully aware of how and why we are using your
              data. This Privacy Notice supplements the other notices and is not
              intended to override them.
            </div>
            <div className="pt-8 pb-2 text-lg font-semibold">CONTROLLERS : </div>
            <div>
              {" "}
              The Milaap Group is made up of different legal entities, details
              of which can be found here. This Privacy Notice is issued on
              behalf of the Milaap Group so when we mention “Milaap”, “we”, “us”
              or “our” in this Privacy Notice, we are referring to the relevant
              company in the Milaap Group responsible for processing your data.
              Milaap Social Ventures Pte Ltd is the controller and responsible
              for this website. We have appointed a data privacy manager who is
              responsible for overseeing questions in relation to this Privacy
              Notice. If you have any questions about this Privacy Notice,
              please contact the date privacy manager using the details set out
              below.{" "}
            </div>
            <div className="py-2 w-1/3 pl-14">
              <div className="text-lg font-semibold">Contact Details: </div>
              <div>Milaap Social Ventures India Private Limited </div>
              <div>
                Name of Data Privacy Manager: Manya Sharma, Product Manager
              </div>
              <div> Email address: product@milaap.org</div>
              <div>
                Address: Milaap Social Ventures India Pvt. Ltd. ClayWorks Create
                – building,11th KM Create Campus, Arakere Bannerghatta Rd,
                Bangalore, Karnataka, India 560076
              </div>
              <div>Telephone number: 080 26587080 </div>
            </div>
            <div className="pt-8 pb-2 text-lg font-semibold">
              CHANGES TO THE PRIVACY NOTICE AND YOUR DUTY TO INFORM US OF
              CHANGES :
            </div>
            <div>
              This version of the Privacy Notice was last updated on 9th
              November 2021 and previous versions can be obtained by contacting
              us.It is important that the personal data we hold about you is
              accurate and current. Please keep us informed if your personal
              data changes during your relationship with us.{" "}
            </div>
            <div className="pt-8 pb-2 text-lg font-semibold">THIRD-PARTY LINKS :</div>
            <div>
              The Platform may include links to third-party websites, plug-ins
              and applications. Clicking on those links or enabling those
              connections may allow third parties to collect or share data about
              you. We do not control these third-party websites and are not
              responsible for their privacy statements. When you leave our
              Platform, we encourage you to read the privacy notice of every
              website you visit.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
