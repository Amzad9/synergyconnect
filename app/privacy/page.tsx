import Image from 'next/image'

export const metadata = {
  title: 'Privacy Policy | Synergy Connect',
  description: 'Privacy Policy for Synergy Connect cloud communication solutions.',
}

export default function PrivacyPage() {
  return (
    <div role="document" aria-label="Privacy Policy – Synergy Connect">
      {/* Hero */}
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="privacy-heading"
      >
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2074&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-slate-900/80 via-blue-900/70 to-slate-900/80" aria-hidden="true" />
        </div>
        <div className="relative z-10 w-full container px-3 sm:px-3 lg:px-0 mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 flex flex-col items-center justify-center text-center">
          <h1 id="privacy-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white px-2">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-2xl px-2">
            How we collect, use, and protect your information.
          </p>
        </div>
      </header>

      {/* Content */}
      <section
        className="relative py-16 sm:py-20 md:py-16 bg-linear-to-b from-gray-50 to-white"
        aria-labelledby="privacy-content"
      >
        <div className="container px-3 sm:px-3 lg:px-0 mx-auto max-w-6xl">
          <h2 id="privacy-content" className="text-xl font-semibold text-slate-900 mt-0 mb-4">
            Synergy Connect
          </h2>
          <p className="text-slate-700 mb-4">
            Synergy Connect operates the www.synergyconnect.org website. This page is used to inform
            website visitors regarding our policies with the collection, use, and disclosure of Personal
            Information if anyone decided to use our Service.
          </p>
          <p className="text-slate-700 mb-4">
            If you choose to use our Service, then you agree to the collection and use of information in
            relation with this policy. The Personal Information that we collect are used for providing and
            improving the Service. We will not use or share your information with anyone except as described
            in this Privacy Policy.
          </p>
          <p className="text-slate-700 mb-4">
            The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions,
            which is accessible at{' '}
            <a
              href="https://voiptel4u.com/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              voiptel4u.com/terms-conditions
            </a>
            , unless otherwise defined in this Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Information Collection and Use
          </h2>
          <p className="text-slate-700 mb-4">
            For a better experience while using our Service, we may require you to provide us with certain
            personally identifiable information, including but not limited to your name, phone number, and
            postal address. The information that we collect will be used to contact or identify you.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Log Data
          </h2>
          <p className="text-slate-700 mb-4">
            We want to inform you that whenever you visit our Service, we collect information that your
            browser sends to us that is called Log Data. This Log Data may include information such as your
            computer&apos;s Internet Protocol (&quot;IP&quot;) address, browser version, pages of our Service that you
            visit, the time and date of your visit, the time spent on those pages, and other statistics.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Cookies
          </h2>
          <p className="text-slate-700 mb-4">
            Cookies are files with small amount of data that is commonly used an anonymous unique
            identifier. These are sent to your browser from the website that you visit and are stored on
            your computer&apos;s hard drive.
          </p>
          <p className="text-slate-700 mb-4">
            Our website uses these &quot;cookies&quot; to collection information and to improve our Service. You have
            the option to either accept or refuse these cookies and know when a cookie is being sent to
            your computer. If you choose to refuse our cookies, you may not be able to use some portions of
            our Service.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Service Providers
          </h2>
          <p className="text-slate-700 mb-4">
            We may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p className="text-slate-700 mb-4">
            We want to inform our Service users that these third parties have access to your Personal
            Information. The reason is to perform the tasks assigned to them on our behalf. However, they
            are obligated not to disclose or use the information for any other purpose.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Security
          </h2>
          <p className="text-slate-700 mb-4">
            We value your trust in providing us your Personal Information, thus we are striving to use
            commercially acceptable means of protecting it. But remember that no method of transmission
            over the internet, or method of electronic storage is 100% secure and reliable, and we cannot
            guarantee its absolute security.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Links to Other Sites
          </h2>
          <p className="text-slate-700 mb-4">
            Our Service may contain links to other sites. If you click on a third-party link, you will be
            directed to that site. Note that these external sites are not operated by us. Therefore, we
            strongly advise you to review the Privacy Policy of these websites. We have no control over,
            and assume no responsibility for the content, privacy policies, or practices of any third-party
            sites or services.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Changes to This Privacy Policy
          </h2>
          <p className="text-slate-700 mb-4">
            We may update our Privacy Policy from time to time. Thus, we advise you to review this page
            periodically for any changes. We will notify you of any changes by posting the new Privacy Policy
            on this page. These changes are effective immediately, after they are posted on this page.
          </p>

          <h2 className="text-xl font-semibold text-slate-900 mt-8 mb-4">
            Contact Us
          </h2>
          <p className="text-slate-700 mb-4">
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us
            at: <a href="tel:609-350-5800" className="text-blue-600 hover:underline">609-350-5800</a> or
            email us:{' '}
            <a href="mailto:info@synergyconnect.org" className="text-blue-600 hover:underline">
              info@synergyconnect.org
            </a>
          </p>
        </div>
      </section>
    </div>
  )
}
