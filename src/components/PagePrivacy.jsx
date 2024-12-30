import React from 'react';

const PagePrivacy = () => {
  return (
      <div className="min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
      {/* Main Content Section */}
      <main >
        <section>
        <h1 className="text-3xl font-bold text-center text-indigo-900">Privacy Policy</h1>

          <p className="mb-8 mt-12" >
            Welcome to Capture texture Photography. Your privacy is important to us, and this privacy policy
            explains how we collect, use and safeguard your information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Personal identification information (name, email, phone number, etc.)</li>
            <li>Non-personal data such as browser type and usage statistics</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>To provide and improve our services</li>
            <li>To communicate with you</li>
            <li>To ensure the security of our platform</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Third-Party Sharing</h2>
          <p className="mb-6">
            We do not share your personal information with third parties except as necessary to
            provide our services or comply with legal obligations.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Your Data Rights</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Right to access and update your data</li>
            <li>Right to request deletion of your data</li>
            <li>Right to withdraw consent</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Security Measures</h2>
          <p className="mb-6">
            We implement robust security measures to protect your data. However, no method of
            transmission over the internet is completely secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
          <p className="mb-6">
            We may update this privacy policy periodically. Changes will be communicated through
            our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns, please contact us at
            <a
              href="mailto:capturetexturephotography@gmail.com"
              className="text-blue-950 underline ml-1">
              capturetexturephotography@gmail.com
            </a>.
          </p>
        </section>
      </main>
    </div>
    </div>
  );
};

export default PagePrivacy;