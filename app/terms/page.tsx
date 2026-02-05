import Image from 'next/image'

export const metadata = {
  title: 'Terms of Service | Synergy Connect',
  description: 'Terms of Service for Synergy Connect cloud communication solutions.',
}

const contentClass = 'text-gray-600 leading-relaxed mb-4'
const sectionTitleClass = 'text-xl font-bold text-gray-900 mt-10 mb-3'
const subsectionTitleClass = 'text-lg font-semibold text-gray-900 mt-6 mb-2'

export default function TermsPage() {
  return (
    <div role="document" aria-label="Terms & Conditions – Synergy Connect">
      {/* Hero */}
      <header
        className="relative min-h-[35vh] sm:min-h-[40vh] flex flex-col items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="terms-heading"
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
          <h1 id="terms-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white px-2">
            Terms & Conditions
          </h1>
          <p className="text-sm sm:text-base text-gray-300 mt-2 max-w-2xl px-2">
            SYNERGY CONNECT TERMS AND CONDITIONS OF VOICE SERVICES
          </p>
        </div>
      </header>

      {/* Content */}
      <section
        className="relative py-16 sm:py-20 md:py-16 bg-linear-to-b from-gray-50 to-white"
        aria-labelledby="terms-content"
      >
        <div className="container px-3 sm:px-3 lg:px-0 mx-auto max-w-6xl">
          <div id="terms-content" className="prose prose-gray prose-lg max-w-none">
            <p className={contentClass}>
              These Terms of Service constitute the agreement (&quot;Agreement&quot;) between SYNERGY CONNECT, Inc. (&quot;Carrier&quot;, &quot;we,&quot; &quot;us&quot; or &quot;SYNERGY CONNECT&quot;) and the End User (&quot;You&quot;, &quot;Your&quot; or &quot;Customer&quot;) of SYNERGY CONNECT&apos;s Business VOIP Services (&quot;Service&quot;, &quot;Services&quot;). Customer and SYNERGY CONNECT may be collectively referred to herein as the &quot;Parties&quot;, and individually as &quot;Party&quot;. This Agreement governs the Service as well as use of SYNERGY CONNECT-supplied hardware, and any other IP-PSTN device used in conjunction with the Service. By signing the SYNERGY CONNECT Services Quote to activate SYNERGY CONNECT services, you acknowledge that you have read, understand, and agree to the Terms and Conditions of this Agreement, and are of legal age to enter into this Agreement.
            </p>

            <h2 className={sectionTitleClass}>1. SERVICE</h2>

            <h3 className={subsectionTitleClass}>1.1 START OF SERVICE, BILLING DATES, AND PRORATING</h3>
            <p className={contentClass}>
              You agree to fulfill the Contract Term designated on the General Information Form of the SYNERGY CONNECT Services Quote that you signed. You will be placed on a Billing Cycle for the selected Contract Term. For Standard Billing Cycles, Monthly Service Term begins on the first day of the month and ends on the last day of the month. Billing is processed during the first week of each month. For high volume customers, the Billing Date is determined by SYNERGY CONNECT based on Contract Term/billing cycle with SYNERGY CONNECT. The Account Activation Date is the date that your account is set up on SYNERGY CONNECT. The Service Activation Date is the date that Services become usable by you. Invoices will be generated at the start of the billing cycle nearest to your Account Activation Date. The first invoice includes charges for prorated Monthly Recurring Charges (MRCs) as well as Non-Recurring Fees (NRCs), plus usage charges. Prorated charges are based on the number of days in the month in which Service was activated and are for each day of Service up to the first day of the next billing cycle. MRCs or other charges are billed to your account and processed during the first week of each month, or on another date as determined by your Contract Term and billing cycle arrangement with SYNERGY CONNECT.
            </p>

            <h3 className={subsectionTitleClass}>1.2 CONTRACT TERMS AND USE OF SERVICES</h3>
            <p className={contentClass}>
              The Contract Term refers to the initial length of the Term (in months) of Service that you ordered from SYNERGY CONNECT and appears on the General Information Form of the SYNERGY CONNECT Services Quote. SYNERGY CONNECT offers month-to-month, 12 (twelve), 24 (twenty-four) and 36 (thirty-six), 48 (forty-eight), 60 (sixty), 72 (seventy-two), and 84 (eighty-four) month Contract Terms. The Contract Terms renew automatically without action by either Party. If you terminate Service prior to the end of your Contract Term, you will be responsible for the remaining Monthly Recurring Charges on all subscribed-to Services for each billable month left in your Contract Term, plus any applicable Cancellation/Disconnection Fees, a Cancellation Fee of $39.95 per SIP trunk, plus any other unbilled charges, all of which become immediately due and payable upon termination or cancellation of Service/Contract. Expiration or Termination of a Contract Term does not free you from paying any and all unpaid charges to SYNERGY CONNECT. Any unused free months or minutes on special promotional offerings will not be credited to your account should you request an early cancellation of Services. The Customer must maintain at least 50% of their initial agreed upon service contract throughout the remainder of their contract term.
            </p>

            <h3 className={subsectionTitleClass}>1.3 BUSINESS SERVICES – LIMITATIONS OF USE OF SERVICE(S) AND IAD IADS(S); PROHIBITION OF RESALE</h3>
            <p className={contentClass}>
              If you have subscribed to SYNERGY CONNECT Services, the Services are provided to you as a normal business user. This means that you must not resell or transfer the Services to any other person/entity for any purpose, without express written permission from SYNERGY CONNECT. You understand that subscribing to SYNERGY CONNECT Services does not grant you the right to use the Services for high volume applications such as auto-dialing, continuous or extensive call forwarding, telemarketing, polling, charitable or political solicitation, fax broadcasting, or fax blasting unless prior approval was given to you by SYNERGY CONNECT to use the Services in such a way. SYNERGY CONNECT offers Metered Services, which may be used for a variety of high-volume applications. If you have subscribed to SYNERGY CONNECT Services such as hosted PBX, SIP Trunks, audio conferencing, IP fax, or other Services, you are permitted to use the Services at the agreed upon rates and/or applicable Monthly Recurring Charges as described in your original Services Quote Packet. SYNERGY CONNECT reserves the right to immediately modify and/or terminate the Services and/or Pricing, if SYNERGY CONNECT determines that your use of the Services exceeds the stated Limitations of Use for the Services that you have subscribed to.
            </p>

            <h3 className={subsectionTitleClass}>1.4 LAWFUL USE OF SYNERGY CONNECT SERVICES(S) AND EQUIPMENT, PROHIBITED USES, UNAUTHORIZED USAGE</h3>
            <p className={contentClass}>
              You agree to use the Service(s) only for lawful purposes. This means that you will not use them for transmitting or receiving any communication(s) or material(s) of any kind when in SYNERGY CONNECT&apos;s sole judgment the transmission, receipt, or possession of such communication(s) or material(s) (i) would constitute a criminal offense, create a civil liability, or violate any applicable local, state, national or international law or (ii) encourages conduct or activities that would constitute a criminal offense, give rise to a civil liability, or otherwise violate any applicable local, state, national or international law. SYNERGY CONNECT reserves the right to terminate your Service immediately and without advance notice if SYNERGY CONNECT, in its sole discretion, believes you have violated any of the restrictions noted above. Upon termination, you are immediately responsible for the full month&apos;s charges plus any unbilled or past-due charges accrued up to the end of the current Month-to-Month Term. You are liable for any and all use of the Service(s) and/or IAD(s) by yourself and by any person making use of the Service(s) or IAD(s) provided to you, and by accepting these Terms & Conditions, you agree to indemnify and hold harmless SYNERGY CONNECT against any and all liability for any such use. If SYNERGY CONNECT, in its sole discretion believes that you have violated the above restrictions, SYNERGY CONNECT may forward the objectionable material, as well as your SYNERGY CONNECT communication records and your personally identifiable information to the appropriate local, state, national, or international authorities for investigation and prosecution and you hereby consent to such forwarding.
            </p>
            <p className={contentClass}>
              If your IAD or a SYNERGY CONNECT-issued IAD is stolen, or you become aware that your SYNERGY CONNECT Services are being stolen or fraudulently used by a third party (either directly, or through your own IAD/PBX equipment as in the case of SIP Trunking customers), you must notify SYNERGY CONNECT immediately by calling the SYNERGY CONNECT Customer Support Line (609)-350-5800) or emailing support@synergyconnect.org. When you contact SYNERGY CONNECT to report the problem, provide your SYNERGY CONNECT account number and a description of the alleged theft or fraudulent use of Services. Until SYNERGY CONNECT receives notification of the theft or fraudulent use, unauthorized traffic and usage charges will continue to accumulate and will be automatically charged to your SYNERGY CONNECT account. You will be liable for all fraudulent use of the Services and/or device(s) stolen from you, and charges will be applied to your account. Notwithstanding anything to the contrary, SYNERGY CONNECT will not issue credits for charges resulting from fraudulent use that arises out of third parties hacking into your equipment, the internet, or your Services. This hacking includes, but is not limited to, modem hijacking, wireless hijacking or other fraud arising out a failure of your internal/corporate procedures. Fraudulent continental USA calls will be billed at the rate of $0.0290 per minute outbound and $0.0290 inbound. International Calls will be billed per the International Rates associated with your SYNERGY CONNECT account. Failure to contact SYNERGY CONNECT as described above may result in termination of your Services.
            </p>

            <h3 className={subsectionTitleClass}>1.5 USE OF SERVICE(S) AND IAD(S) BY CUSTOMERS OUTSIDE THE UNITED STATES</h3>
            <p className={contentClass}>
              SYNERGY CONNECT encourages you to use the Service(s) and provides live and/or email technical support for the Services within the United States. If you take the IAD to a foreign country and use the Service from there, you do so at your own risk, including the risk that such activity violates the local or national laws in the country where you choose to do so. You are liable for any use of the Service(s) and/or IAD(s) by yourself or any person making use of the Service(s) or IAD(s) provided to you and you agree to indemnify and hold harmless SYNERGY CONNECT against any and all liability for such use. Should the removal from the United States or Canada of the IAD violate any export control law or regulation, you will be solely liable for such violation and agree to indemnify and hold harmless SYNERGY CONNECT against any and all liability for such violation. SYNERGY CONNECT reserves the right to terminate your Service immediately and without advance notice if it determines that you are using it outside the United States or Canada.
            </p>

            <h3 className={subsectionTitleClass}>1.6 LOSS OF CARRIER SERVICE(S) DUE TO POWER FAILURE, ISP OR BROADBAND OUTAGE, OR ACCOUNT SUSPENSION</h3>
            <p className={contentClass}>
              You acknowledge and understand that the SYNERGY CONNECT Service does not function in the event of power failure. You also understand that the Service is delivered to you through a broadband Internet connection, which is not provided by or managed by SYNERGY CONNECT. In the event of a power or service outage, or unavailability of service from your Internet service provider (&quot;ISP&quot;), SYNERGY CONNECT Service will not function. The Service will not function again until power is restored, or the ISP outage is cured. You may have to reset or reconfigure SYNERGY CONNECT equipment or IADs prior to utilizing the Service again after a power failure or other ISP or broadband service interruption. During such outages, you will continue to be billed for the Service unless and until you or SYNERGY CONNECT may terminate the Service in accordance with this Agreement. If your account was suspended by SYNERGY CONNECT for non-payment, you must pay any outstanding invoices, plus a Re-connection Fee of $39.95 per SIP Trunk before Service is restored by SYNERGY CONNECT.
            </p>

            <h3 className={subsectionTitleClass}>1.7 COPYRIGHT, TRADEMARK, UNAUTHORIZED USAGE OF SOFTWARE, HARDWARE, OR IAD(S)</h3>
            <p className={contentClass}>
              The SYNERGY CONNECT Service(s) any SYNERGY CONNECT-issued hardware or software used to deliver the Service to you, plus all Services, information, documents and materials on SYNERGY CONNECT&apos;s website(s) are protected by trademark, copyright, or other intellectual property laws and/or international treaty provisions. All websites, corporate names, service marks, trademarks, trade names, logos and domain names (collectively &quot;marks&quot;) of SYNERGY CONNECT are the exclusive property of SYNERGY CONNECT and nothing in this Agreement grants you the right to use any such marks. You acknowledge that you are not given license to use the SYNERGY CONNECT-issued hardware or software, other than as a nontransferable, revocable license in object code form (without making any modification thereto) strictly in accordance with the terms of this Agreement. You agree that the IAD is exclusively for use in connection with the Service and that SYNERGY CONNECT will not provide any passwords, codes, or other information that would enable you to use the IAD for any other purpose. Do not reverse compile, disassemble, engineer, or otherwise manipulate the hardware or software. If you use the Service through an IAD not provided by SYNERGY CONNECT, you warrant and represent that you possess all required rights, including software and/or hardware licenses, to use the IAD with the Service and you will indemnify and hold harmless SYNERGY CONNECT against any and all liabilities due to your use of such IAD with SYNERGY CONNECT Service.
            </p>

            <h3 className={subsectionTitleClass}>1.8 TAMPERING WITH SERVICE(S) OR SYNERGY CONNECT ISSUED IAD(S)</h3>
            <p className={contentClass}>
              If SYNERGY CONNECT has issued you an IAD device, you may not change the electronic serial number or equipment identifier of the IAD, or perform factory reset of the IAD. SYNERGY CONNECT reserves the right to terminate your Service(s) if you tamper with the IAD, leaving you responsible for the remaining charges to the end of the agreed-to service term, plus any unbilled charges, plus applicable Cancellation Fee(s) all of which become due and payable and will immediately be charged to your credit card or account. Further, you agree not to hack or disrupt the Service or make any use of the Service that is inconsistent with its intended purpose.
            </p>

            <h3 className={subsectionTitleClass}>1.9 TRIAL PERIOD, RETURN OF IAD, AND DAMAGED PACKAGES</h3>
            <p className={contentClass}>
              SYNERGY CONNECT provides a fourteen (14) day Trial Period during which time you may decide if you wish to continue the Services through the end of the Contract Term. Hardware may be returned to SYNERGY CONNECT may for a refund of the net purchase price and the Services may be cancelled without penalty within fourteen (14) days of your Service Activation Date. You are responsible for all usage charges accrued during the Trial Period and must pay these charges immediately after the hardware IAD(s) has been returned to SYNERGY CONNECT. Any hardware IAD that you purchased from SYNERGY CONNECT may be returned provided that the return package is received by SYNERGY CONNECT within 10 (ten) days of the end of the Trial Period. If you wish to return any hardware, you must first call the SYNERGY CONNECT Customer Care Line to obtain a Return Shipment Authorization Code, which must be displayed on the return package. Returned hardware must be received in the original and complete condition and packaging that it was originally sent in, meaning that all parts, accessories, documentation and materials are included with the return package. Upon receipt and inspection of the return package, SYNERGY CONNECT will issue a credit for the original purchase amount of the equipment to your account or credit card. You are responsible for all cost and risks associated with the return shipment of the hardware. In the event that a SYNERGY CONNECT package arrives to you in a visibly damaged condition, you must note the damage on the freight bill and retain a copy for your records. In such event, you must keep the original carton, all packing materials and parts intact in the same condition in which they were received from the carrier and contact SYNERGY CONNECT&apos; Customer Care Department immediately. To obtain a return authorization number, you must contact billing@synergyconnect.org or (609)-350-5800.
            </p>

            <h3 className={subsectionTitleClass}>1.10 NUMBER RELEASE ON SERVICE TERMINATION</h3>
            <p className={contentClass}>
              Upon termination of Service, SYNERGY CONNECT may release a telephone number that you ported to SYNERGY CONNECT from a previous service provider and used in connection with the Service. At your request, the number may be released to your new service provider, provided that your SYNERGY CONNECT account is current including payment for any and all outstanding charges (including any outstanding Monthly Recurring Charges that remain on your Contract Term) and any applicable Cancellation Fees. To request a Number Release, you must submit a LOA (Letter of Agency) to your new telephone/telephony service provider. Upon satisfaction of the above stated requirements for Number Release, SYNERGY CONNECT will release your number to your new service provider.
            </p>

            <h3 className={subsectionTitleClass}>1.11 TELEPHONE & ENHANCED TELEPHONY SERVICE DISTINCTIONS</h3>
            <p className={contentClass}>
              You understand that the Service is not a traditional telephone service, but an Enhanced Telephony Service. Distinctions exist between traditional telephone service and the Enhanced Telephony Service provided by SYNERGY CONNECT. The Service is subject to different regulatory treatment than telephone service. This treatment may affect your rights of redress before Federal, State or Provincial telecommunications regulatory agencies.
            </p>

            <h3 className={subsectionTitleClass}>1.12 OWNERSHIP AND RISK OF LOSS</h3>
            <p className={contentClass}>
              You are the owner of the Service/IAD and bear all risk of loss of, theft, or damage to the Service/IAD, from the time it is shipped to you and/or activated by SYNERGY CONNECT until the time it is cancelled by you.
            </p>

            <h3 className={subsectionTitleClass}>1.13 411 SERVICES</h3>
            <p className={contentClass}>
              SYNERGY CONNECT supports 411 Standard and Enhanced 411 Information Services. All 411 calls are billed at $0.85 per call.
            </p>

            <h3 className={subsectionTitleClass}>1.14 NO 0+ CALLING/NO TRADITIONAL FAX SERVICE</h3>
            <p className={contentClass}>
              SYNERGY CONNECT Service does not support 0+ calling (collect, third party billing, or calling card calls). SYNERGY CONNECT does not support Traditional Fax Service at this time. SYNERGY CONNECT instead offers SYNERGY CONNECT IP FAX – an Internet faxing solution.
            </p>

            <h3 className={subsectionTitleClass}>1.15 LNP (PORTING)</h3>
            <p className={contentClass}>
              You may request that phone numbers be ported to the SYNERGY CONNECT by submitting a completed LOA (Letter of Agency) and a current bill copy (less than thirty days old) from your current service provider. No port shall be accepted or submitted without this information. Pricing for porting DIDs to SYNERGY CONNECT is $30.00 Per Number. Standard porting time is ten (10) to forty-five (45) days. You should specify the desired port date in the appropriate section of the LOA. SYNERGY CONNECT will attempt to honor this date and will let you know the actual port date. Once the LOA and bill copy are received by SYNERGY CONNECT shall initiate the port request and shall obtain a FOC (Firm Order Commitment) date. You will be provided with a FOC (Firm Order Commitment) date informing you when numbers are scheduled to be ported to SYNERGY CONNECT. The fees for cancelling or changing a port of a DID to SYNERGY CONNECT are determined by how soon before or after the FOC date a port is cancelled. Fees for cancelling a port are as follows:
            </p>
            <div className="overflow-x-auto my-6">
              <table className="min-w-full border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left font-semibold text-gray-900">PORT CANCELLATION/CHANGE FEE – PER DID WITH CANCELLATION</th>
                    <th className="border border-gray-300 px-3 py-2 text-right font-semibold text-gray-900">FEE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">OCCURRING 48 HOURS OR MORE BEFORE SCHEDULED PORT FOC DATE</td>
                    <td className="border border-gray-300 px-3 py-2 text-right">$30.00</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">OCCURRING 6 HOURS BEFORE OR AT ANYTIME AFTER SCHEDULED PORT FOC DATE</td>
                    <td className="border border-gray-300 px-3 py-2 text-right">$175.00</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">OCCURRING LESS THAN 6 HOURS BEFORE OR WITHIN 24 OR MORE HOURS AFTER THE SCHEDULED PORT FOC DATE (AS IN A &quot;SNAP-BACK&quot;)</td>
                    <td className="border border-gray-300 px-3 py-2 text-right">$400.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={contentClass}>
              SYNERGY CONNECT shall assign the appropriate cancellation fees (as displayed above) to your SYNERGY CONNECT account for any port cancellation that you request. Payment for cancellation fees occurring within a given month shall be payable within ten (10) days of your receipt of the invoice displaying the port cancellation fee(s).
            </p>

            <h2 className={sectionTitleClass}>2. EMERGENCY CALLING SERVICES- 911 DIALING</h2>

            <h3 className={subsectionTitleClass}>2.1 AVAILABILITY OF 911/EMERGENCY DIALING SERVICES</h3>
            <p className={contentClass}>
              In compliance with the Federal Communications Commission (FCC) WC Docket No. 05-196, SYNERGY CONNECT, Inc. hereby advises all current retail SYNERGY CONNECT customers that enhanced E911/911 calling services are available at this time, but may not be available in all service areas and may/or may not function the same as traditional 911 Services.
            </p>

            <h3 className={subsectionTitleClass}>2.2 911 SERVICEABLE AREAS</h3>
            <p className={contentClass}>
              Presently, SYNERGY CONNECT offers E911/911 Services via underlying third party providers. 911 Services are available only within the Continental United States and Canada. SYNERGY CONNECT routes 911 calls originating in the United States via 10-digit routing to PSAPs (Public Safety Answering Points) as well as via Selective Routers (where available). Selective Routers automatically recognize where a call is originating from based on the CLID (Caller ID) information and deliver the call to the most appropriate local PSAP. Presently, most 911 calls are routed via Selective Routers to the 911 Trunks of the PSAPS (where available). Services are not available in countries other than the Continental U.S. and Canada.
            </p>

            <h3 className={subsectionTitleClass}>2.3 REGISTERED LOCATION AND E911/User Management Portal and 911 UPDATES</h3>
            <p className={contentClass}>
              SYNERGY CONNECT must have a 911 Registered Location Address on file for your phone number(s) in order to provide test or actual VOIP Services and/or 911 Emergency Calling Services to you. At the time your account is provisioned, SYNERGY CONNECT will register one (1) phone number in the 911 databases for you. The Registered Location for your account is obtained from the Registered Location information that you provided on the E911 Services tab of the Services Quote Packet that you completed and supplied to SYNERGY CONNECT for provisioning of test or actual Services. The Registered Location Information is then tied to the E911 CID field (911 Caller ID) display of your registered phone number. Please note that no 911 services are available for toll free phone numbers. You will be informed which of your phone number is registered and enabled for 911 Services in the SYNERGY CONNECT E911 database.
            </p>
            <p className={contentClass}>
              IMPORTANT: You understand that E911 Calls are routed to PSAPS based on the E911 CLID field associated with your phone number. If you change the number that you use for 911 calling, your 911 Services may not be available to you and/or may operate differently than normal. If you change the phone number that you use for 911 calling, you must register the new E911 CLID number and its associated address with SYNERGY CONNECT in order to enable 911 capabilities for the number. Failure to do so may result in 911 services not being available to you when using an unregistered phone number. If the 911 call does not complete, it will be automatically routed to a National Emergency Call Center and you will be asked to verify your number and provide your physical location to the operator. There is a $150.00 charge for each 911 call placed from an unregistered phone number on the SYNERGY CONNECT network. To register additional numbers or to manage your 911 Registered Location, please contact SYNERGY CONNECT at (609)-350-5800. NOTE: If the information that you supply for your Registered Location is incorrect or incomplete, Services may not be available to you. For help with problems updating your E911/911 Registered Location Information please contact SYNERGY CONNECT at (609)-350-5800 or support@synergyconnect.org. You may also use the following methods to update your E911 CID and Registered Location information: Contact SYNERGY CONNECT Customer Service at (609)-350-5800 during normal business hours (MONDAY-FRIDAY 8:00am TO 6:00pm EST). Email info@synergyconnect.org during normal business hours. NOTE: CONTACTING SYNERGY CONNECT BY PHONE OR EMAIL MAY RESULT IN A DELAY OF UP TO 72 HOURS OF YOUR E911 UPDATE INFORMATION.
            </p>

            <h3 className={subsectionTitleClass}>2.4 ROUTING OF E911/911 CALLS</h3>
            <p className={contentClass}>
              E911/911Calls are routed based on the E911CID field for your User within the SYNERGY CONNECT User Management Portal. If you have subscribed to a standard SYNERGY CONNECT Service Plan or IP Trunk Plan with a phone number, the main phone number on your SYNERGY CONNECT account will automatically be registered in the E911/911 database prior to release to you (unless you specify otherwise and/or request additional numbers to be registered). If you change the number that you use for 911 Calling purposes and fail to register the number for 911 via the User Management Portal, your phone number(s) will not be recognized when placing an E911/911 call, resulting in the call failing or being sent to a National Emergency Call Center Operator, who will require you to supply your current address information. Calls from all non-registered numbers will result in a charge of $120.00 per call.
            </p>

            <h3 className={subsectionTitleClass}>2.5 PSAP LIMITATIONS AND THE HANDLING OF E911/911 CALLS</h3>
            <p className={contentClass}>
              Presently, SYNERGY CONNECT routes E911/911 calls from Registered DIDs to Emergency Services Operators at the various PSAPs (Public Safety Answering Points). You understand that occasionally there may be instances where the limitations of the PSAPs determine the level of E911/911 services that you receive. For instance, E911/911 PSAP operators may or may not be able to access the ALI Database in order to automatically retrieve information pertaining to a registered DID, such as caller name and address, and so in such instances, you may be required to verbally provide this information to the PSAP operator at the time the call is placed. For this reason, SYNERGY CONNECT can make no guarantees about the consistency of the E911/911 services, with regard to PSAP operators being able to automatically retrieve and view caller information.
            </p>

            <h3 className={subsectionTitleClass}>2.6 INSTANCES WHERE E911/911 SERVICES MAY NOT BE AVAILABLE</h3>
            <p className={contentClass}>
              You understand that while the SYNERGY CONNECT-provided VOIP service closely approximates traditional 911 services, there may be instances in which the E911/911 Services may function differently from traditional 911 services, or may not be available. Additionally, there may be circumstances in which the E911/911 Services may be delayed or may not be available to you. Such circumstances may include, but are in no way limited to the following:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-1">
              <li>Electrical Power Outage and/or Broadband Internet Service Provider (ISP) outage or unavailability;</li>
              <li>Suspension or Termination of Customer&apos;s account(s) or VOIP service(s);</li>
              <li>Relocation of Customer&apos;s VOIP IAD(s) to an address other than the one given at activation, without updating the E911 Registered Address Location with SYNERGY CONNECT;</li>
              <li>Unsuitable broadband internet connection such as satellite internet; Malfunction, Failure, and/or Improper Configuration of Subscribers&apos; VOIP IAD(s) and/or using an unapproved or unsupported VOIP or IAD(s);</li>
              <li>Deficits or limitations of the PSAP, National Emergency Call Center, Emergency Services Operators or Personnel systems and/or equipment;</li>
              <li>Unforeseen congestion on the SYNERGY CONNECT VOIP network or network design factors which delay or prohibit Services;</li>
              <li>Incorrect Customer-supplied Registered Location Information;</li>
              <li>Customer or User tampering with the VOIP IAD(s), producing changes which prohibit utilization of the E911/911 services;</li>
              <li>E911 location updates to the SYNERGY CONNECT database will generally be available within forty-eight (48) hours or less. However, SYNERGY CONNECT cannot guarantee that this will always be the case, especially if the E911/911 Registered Location Address update provided by customer is lacking and/or incongruent with the parameters of the SYNERGY CONNECT customer portal/database and subsequently produces a rejection of the Registered Location Address update;</li>
              <li>Any other unspecified circumstances which affect the use of the E911/911 services.</li>
            </ul>

            <h3 className={subsectionTitleClass}>2.7 ALTERNATIVE 911 OR EMERGENCY DIALING ARRANGEMENTS</h3>
            <p className={contentClass}>
              You acknowledge that SYNERGY CONNECT does not offer alternate primary line or lifeline services. It is strongly recommended that you always have an alternative means of accessing traditional 911 or Emergency Dialing Services.
            </p>

            <h2 className={sectionTitleClass}>3. ACCEPTANCE OF ELECTRONIC SIGNATURES & COMMUNICATION OF OFFICIAL BUSINESS</h2>
            <p className={contentClass}>
              When you visit SYNERGY CONNECT&apos;s websites or portals, send email or fax, or engage in IM (Instant Messenger) conversations, you are communicating with SYNERGY CONNECT electronically and understand that all such communication between you and SYNERGY CONNECT shall constitute official communication which is legally binding. You also consent to receive communications from us electronically and/or by traditional mail. You understand that all agreements, notices, disclosures, and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. By initialing this document, you acknowledge that you have read and agree to the terms & conditions contained herein.
            </p>

            <h2 className={sectionTitleClass}>4. CHANGES TO THIS AGREEMENT</h2>
            <h3 className={subsectionTitleClass}>4.1 CHANGES OF THE TERMS AND CONDITIONS AGREEMENT AND CHANGES TO PRICING</h3>
            <p className={contentClass}>
              SYNERGY CONNECT may change the Terms and Conditions of this Agreement and/or Pricing at any time. Changes to the Agreement or Pricing will be considered effective as of the date that notice of such change is conveyed to you via email or other means. Changes are binding from the date sent from SYNERGY CONNECT to you without further notice by SYNERGY CONNECT.
            </p>

            <h2 className={sectionTitleClass}>5. CHARGES / PAYMENTS / DEFAULT / TAXES / TERMINATION</h2>
            <h3 className={subsectionTitleClass}>5.1 BILLING</h3>
            <p className={contentClass}>
              You must provide SYNERGY CONNECT with a valid credit card number (Visa, MasterCard, Discover, American Express) at the time the Service is activated. Any other payment method must be approved by SYNERGY CONNECT. SYNERGY CONNECT reserves the right to stop accepting credit card payments at any time. If the credit card on file for you expires, a credit card account is closed, billing address changes, or the card is cancelled and replaced due to loss or theft, you must immediately advise SYNERGY CONNECT. All Monthly Recurring Charges, applicable taxes and surcharges, are billed monthly in advance (except for overage charges, which are billed monthly in arrears) to your credit card, along with Activation Fees, Monthly, International Usage Charges, Advanced Feature Charges, Equipment Purchases, Cancellation Fees and Shipping & Handling Charges. SYNERGY CONNECT retains the right to change Pricing Plans and/or bill at more frequent intervals if the Usage Amount (not including the Monthly Recurring Charge) due to SYNERGY CONNECT at any time exceeds $100.00. Any usage charges will be billed in increments that are rounded up to the nearest minute except as otherwise set forth in the rate schedules found on SYNERGY CONNECT website.
            </p>
            <h3 className={subsectionTitleClass}>5.2 BILLING DISPUTES</h3>
            <p className={contentClass}>
              If you dispute any SYNERGY CONNECT charges appearing on your statement, you must make SYNERGY CONNECT aware of the dispute in writing (email or otherwise) with fourteen (14) days after receiving your SYNERGY CONNECT statement. If charges are not disputed with fourteen (14) days, SYNERGY CONNECT assumes that the charges are acceptable to you and valid. Billing disputes should be notified to: Customer Care Billing Department, SYNERGY CONNECT, 209 POPLAR ST., TURNERSVILLE, NJ 08012, or email billing@synergyconnect.org.
            </p>
            <h3 className={subsectionTitleClass}>5.3 PAYMENT</h3>
            <p className={contentClass}>
              SYNERGY CONNECT accepts payments by check, credit card, PayPal, or bank wire transfer. Your use of the Service authorizes SYNERGY CONNECT to charge the account or credit card number on file with SYNERGY CONNECT, including any changed information given SYNERGY CONNECT if the has card expires or is replaced, or if you substitute a different card, for SYNERGY CONNECT charges. This authorization will remain valid until 30 days after SYNERGY CONNECT receives your written notice terminating SYNERGY CONNECT&apos;S authority to charge your credit card, whereupon SYNERGY CONNECT will charge you the disconnect fee and any other outstanding charges and terminate the Service. SYNERGY CONNECT may terminate your Service at any time in its sole discretion, if any charge to your credit card on file with SYNERGY CONNECT is declined or reversed, your credit card expires and you have not provided SYNERGY CONNECT with a valid replacement credit card, or in case of any other non-payment of account charges. There is a $30.00 charge for checks returned for NSF (non-sufficient funds). Termination of Service for declined or expired card, checks returned for NSF, reversed charges, or non-payment leaves you FULLY LIABLE to SYNERGY CONNECT for ALL CHARGES ACCRUED BEFORE TERMINATION as well as any other fees pertaining to remaining contractual obligations and for all costs incurred by SYNERGY CONNECT in collecting such amounts, such as (but not limited to) collection costs and attorney&apos;s fees..
            </p>
            <h3 className={subsectionTitleClass}>5.4 PREPAID ACCOUNTS</h3>
            <p className={contentClass}>
              SYNERGY CONNECT may offer or require certain accounts to be prepaid. Service types subject to prepayment may include, but may not be limited to: Calling Card, Call Center, IVR, Customers Not Paying By Credit Card, or any other application as determined by SYNERGY CONNECT. Prepayment is normally based one (1) month&apos;s estimated usage, plus a setup fee. The prepayment shall be applied to your account and will be drawn down against usage, monthly recurring or non-recurring fees. You will be notified by SYNERGY CONNECT when the only twenty percent (20%) of the prepayment amount remains on the account. At that time, you will be asked to replenish the prepayment amount so that Services may be continued. Failure to replenish the prepayment amount with SYNERGY CONNECT before the prepayment funds are depleted will result in cessation of Services. Services may be continued when prepayment funds are received by SYNERGY CONNECT.
            </p>
            <h3 className={subsectionTitleClass}>5.5 TERMINATION/DISCONTINUATION OF SERVICE</h3>
            <p className={contentClass}>
              SYNERGY CONNECT reserves the right to suspend or discontinue the Service, or to terminate your Service, at any time in its sole discretion. If SYNERGY CONNECT discontinues providing the Service, or terminates your Service in its discretion without a stated reason, you will only be responsible for charges accrued through the date of termination, including a pro-rated portion of the final months&apos; charges or the remaining Monthly Recurring Charges (MRCs) in your agreed-to Service Term. If your Service is terminated for any stated reason, or because of improper use of the Service or IAD, you will be responsible for the full month&apos;s charges to the end of the current term and any remaining MRCs in your agreed-to Contract Term, plus a disconnection fee of $39.95 per SIP trunk, all of which immediately become due and payable.
            </p>
            <h3 className={subsectionTitleClass}>5.6 TAXES</h3>
            <p className={contentClass}>
              You are responsible for, and shall pay, any applicable federal, state, provincial, municipal, local or other governmental sales, use, excise, value-added, personal property, public utility or other taxes, fees or charges now in force or enacted in the future, that arise from or as a result of your subscription or use or payment for the Service or a IAD. Such amounts are in addition to payment for the Service or IADs and will be billed to your credit card as set forth in this Agreement. If you are exempt from payment of such taxes, you shall provide SYNERGY CONNECT with an original certificate that satisfies applicable legal requirement attesting to tax-exempt status. Tax exemption will only apply from and after the date SYNERGY CONNECT receives such certificate.
            </p>
            <h3 className={subsectionTitleClass}>5.7 TERMINTAION OF SERVICES & DISCONNECTION FEES</h3>
            <p className={contentClass}>
              If you terminate Services prior to the end of your original Contract Term, you will be responsible for the remaining Monthly Recurring Plan Charges for each billable month left in your Contract Term, plus a cancellation fee of $39.95 per IP trunk, a $5.00 cancellation fee per DID, plus any other unbilled charges, all of which become immediately due and payable upon termination or cancellation of Service/Contract. If you are on a month-to-month Contract Term, you will be charged a disconnect fee of $39.95 per SIP trunk upon disconnection or service termination. You will not be subject to a disconnection fee if you fulfill your agreed-to Contract Term. The disconnect fees become due and payable immediately upon Service disconnection/termination and will billed directly to your account and/or credit card.
            </p>
            <h3 className={subsectionTitleClass}>5.8 PAYPHONE CHARGES</h3>
            <p className={contentClass}>
              If you make use of SYNERGY CONNECT Toll Free Services you acknowledge and agree that SYNERGY CONNECT is entitled to recover from you any charges imposed on SYNERGY CONNECT by payphone owners or operators, either directly or indirectly through SYNERGY CONNECT&apos;s suppliers in connection with toll free calls made to your number, or any charges imposed upon SYNERGY CONNECT by its suppliers to recover such costs. SYNERGY CONNECT may recover these amounts by means of a per-call charge, rounded up to the next cent, or in such other fashion, as SYNERGY CONNECT deems appropriate for the recovery of these costs.
            </p>
            <h3 className={subsectionTitleClass}>5.9 INTERNATIONAL & DOMESTIC RATES</h3>
            <p className={contentClass}>
              SYNERGY CONNECT makes every attempt to keep the domestic and international per minute rates the consistent. From time to time, however, it may be necessary to increase or decrease the rates due to changes in underlying wholesale costs or legislation enactments that are not under the control of SYNERGY CONNECT. In the event that there must be change to SYNERGY CONNECT&apos;s domestic or international rates, you will be notified in writing within twenty-four (24) hours of such change. The rate change will become effective immediately upon delivery of notice to you and will be reflected on your SYNERGY CONNECT bill from the delivery of notice date forward.
            </p>

            <h2 className={sectionTitleClass}>6. WARRANTY OF SERVICES, LIMITATION OF LIABILITY AND INDEMNIFICATION</h2>
            <h3 className={subsectionTitleClass}>6.1 AVAILABILITY OF SERVICES</h3>
            <p className={contentClass}>
              SYNERGY CONNECT makes no warranties or claims, nor guarantees regarding the reliability or availability of the Services. Additionally, SYNERGY CONNECT is not liable for any delay or failure to provide the VOIP/E911/911 services including, at any time or from time to time, or any interruption or degradation of voice quality that is caused by, but in no way limited to, any of the following events: 1.) Act of an underlying carrier, service provider, vendor or other third party; 2.) Equipment, network or facility failure, upgrade, or modification; 3.) Events such as (but not limited to) natural disasters, acts of god, power outages; strikes; fire; war; riot; government actions; 4.) Equipment, network or facility shortage or relocation; 5.) Service, equipment, network or facility failure caused by loss of power; 8) Outage of Customer&apos;s ISP or broadband service provider; 9) Act of Customer or any person using the Service or IAD provided to Customer; or 10) Any other cause that is beyond SYNERGY CONNECT&apos; direct control, including without limitation a failure of or defect of IAD, failure of a communication, the inability of communications (including without limitation 411, E911/911, or Fax dialing) to be completed, or degradation of voice quality. SYNERGY CONNECT&apos;s liability for (i) any failure or mistake; (ii) any claim with respect to SYNERGY CONNECT&apos; performance or nonperformance hereunder or (iii) any SYNERGY CONNECT act or omission in connection with the subject matter hereof shall in no event exceed Service charges with respect to the affected time period.
            </p>
            <h3 className={subsectionTitleClass}>6.2 DISCLAIMER OF DAMAGES</h3>
            <p className={contentClass}>
              IN no event shall SYNERGY CONNECT&apos;s officers, affiliates, directors, employees, affiliates, or agents or any other service providers who furnishes underlying services in connection with the delivery of SYNERGY CONNECT Services be liable for any direct, indirect, incidental, special, punitive, exemplary, or consequential damages, or for any other damages, including, but not limited to loss of life, profit, revenue, data, or any other damages associated with the use or inability to use the Service, including inability to dial fax, )+, 411, 911 or access other emergency service personnel through the Service. The limitations set forth herein apply to claims founded in breach of contract, breach of warranty, product liability, tort and any and all other theories of liability and apply whether or not SYNERGY CONNECT was informed likelihood of any particular type of damages.
            </p>
            <h3 className={subsectionTitleClass}>6.3 INDEMNIFICATION AND LIMITATION OF LIABILITY</h3>
            <p className={contentClass}>
              By agreeing to these Terms and Conditions, you agree to indemnify, defend, and hold harmless SYNERGY CONNECT, its directors, officers, employees, affiliates, agents, partners, technicians, and/or underlying service or database providers, from any and all direct, indirect, consequential, or special losses, damages or claims of any kind (including, but not limited to, attorney fees, third party claims, loss of life, loss of business or profits, loss of customers, and/or damage to reputation or goodwill) sustained by you, household family members, colleagues, coworkers, employees, partners and/or affiliates, and end, circumstantial, or third party users of the Service, due to or resulting from any failure in or breakdown of the Service, facilities, or systems associated with providing the Service, or for any delay, interruption or degradation of the Services whatsoever shall be the cause or duration thereof, or for any other cause or claim arising under the Term of Service.
            </p>
            <h3 className={subsectionTitleClass}>6.4 NO WARRANTIES ON SERVICE</h3>
            <p className={contentClass}>
              SYNERGY CONNECT makes no warranties (express or implied and without limitation), any implied warranties of merchantability, fitness of the Services for a particular purpose, title or non-infringement or any warranty arising by usage or trade, course, or dealing or course of performance or any warranty that the Services will meet your expectations or requirements. Without limiting the foregoing, SYNERGY CONNECT does not warrant that the Service will be without failure, delay, interruption, error, and degradation of voice quality or loss of content, data or information. Neither SYNERGY CONNECT nor its officers, directors, employees, affiliates, agents or any other service provider or vendor who furnishes services or products which are used to deliver the Services, will be liable for unauthorized access to SYNERGY CONNECT or Customer&apos;s or Vendor&apos;s transmission facilities or premise equipment for unauthorized access to or alternation, theft, or destruction of your data files, information, programs, procedures, software or hardware through accident, fraudulent means or IADs or any other method, regardless or whether such damage occurs as a result of SYNERGY CONNECT&apos;s or its underlying service providers or vendors negligence. Statements and descriptions concerning the Service or IAD, if any, by SYNERGY CONNECT or SYNERGY CONNECT&apos;s employees, agents, installers or technicians are informational and are not given as warranty.
            </p>
            <h3 className={subsectionTitleClass}>6.5 NO WARRANTIES, OR LIMITED WARRANTIES, FOR IADS (IADS)</h3>
            <p className={contentClass}>
              If you received a new IAD from SYNERGY CONNECT and it included a limited manufacturer&apos;s warranty at the time of receipt, you should refer to the warranty documentation provided with the IAD for information on the rights, disclaimers, and limitations afforded to you as a purchaser of the IAD. If your IAD did not include a limited warranty at the time of receipt, you accept the IAD &quot;as is&quot; and understand that you are not entitled to a replacement or refund in the event of any defect or failure. SYNERGY CONNECT makes no warranties (express or implied) of any kind for the IAD other than the warranties expressly set forth in the documentation provided with the IAD. SYNERGY CONNECT specifically disclaims any warranty of merchantability, fitness of the IAD for a particular purpose, title or non-infringement, or any warranty arising by usage or trade, course of dealing, or course of performance or any warranty that the IAD or any hardware or software is &quot;error free&quot; or will meet your expectations or requirements. The foregoing will not be deemed to limit any disclaimer or limitation of warranty set forth in the documentation provided with the IAD.
            </p>
            <h3 className={subsectionTitleClass}>6.6 CONTENT</h3>
            <p className={contentClass}>
              You are responsible for any liability arising out of the content transmitted by or to you or your user* when using the Services. You must assure that your or your user&apos;s use of the Services will at all times comply with all applicable laws, regulations and written and electronic instructions for use. SYNERGY CONNECT reserves the right to terminate or suspend affected Services, and/or remove your content from the Services, if SYNERGY CONNECT determines that such use or content does not conform with the requirements set forth in this Agreement or interferes with SYNERGY CONNECT&apos;s ability to provide Services to you or others, or receives notice that your use or content may violate any laws or regulations. SYNERGY CONNECT&apos;s actions or inaction under this Section shall not constitute review or approval of your use of the Services or your content. You agree to indemnify and hold SYNERGY CONNECT harmless against any and all liability arising from the content transmitted by or to you or your user while using the Services. * A &quot;USER&quot; MEANS ANY PERSON, WHETHER AUTHORIZED OR UNAUTHORIZED, USING THE SERVICE AND/OR IAD PROVIDED TO THE SYNERGY CONNECT CUSTOMER.
            </p>

            <h2 className={sectionTitleClass}>7. GOVERNING LAW / RESOLUTION OF DISPUTES/ASSIGNMENT</h2>
            <h3 className={subsectionTitleClass}>7.1 WAIVER OF TRIAL BY JURY</h3>
            <p className={contentClass}>
              Both Parties hereby knowingly, irrevocably, and voluntarily and intentionally waive any rights to a trial by jury in respect of any action proceeding, or counterclaim based on this Agreement or the SYNERGY CONNECT Service(s), or any course of conduct, course of dealing, statements, (verbal or written) or action of any Party hereto. This provision is a material inducement for SYNERGY CONNECT and the Customer entering into the subject transaction. You understand that this section 7.1. constitutes a waiver of any right to a trial by jury.
            </p>
            <h3 className={subsectionTitleClass}>7.2 GOVERNING LAW</h3>
            <p className={contentClass}>
              The Agreement and the relationship between you and SYNERGY CONNECT shall be governed by the laws of the State of California, with venue in San Diego, California without regard to conflict of law provisions. If court action is initiated to enforce an arbitration award or for any other reason, you and SYNERGY CONNECT agree to submit to the personal and exclusive jurisdiction of the courts located within the State of California, with venue in San Diego County, California and hereby waive any objection as to venue. SYNERGY CONNECT&apos;s failure to exercise any right or provision of the Agreement shall not constitute a waiver of such right or provision. If any provision of the Agreement is found by a court of competent jurisdiction to be invalid, the parties nevertheless agree that the court should endeavor to give effect to the parties&apos; intentions as reflected in the provision, and the other provisions of the Agreement remain in full force and effect. You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of the Service or the Agreement must be filed within one (1) year after such claim or cause of action arose or be forever barred.
            </p>
            <h3 className={subsectionTitleClass}>7.3 ENTIRE AGREEMENT</h3>
            <p className={contentClass}>
              This Agreement, any Rate Schedule and applicable Services Quote paperwork signed by the Parties constitutes the entire agreement between the Parties and governs your use of the Service and/or IAD. This entire agreement supersedes any prior agreements between the Parties and any and all prior or contemporaneous statements, understandings, writings, commitments, or representations concerning its subject matter. No amendment to this Agreement shall be binding upon SYNERGY CONNECT unless and until posted in accordance with Section 3 hereof.
            </p>
            <h3 className={subsectionTitleClass}>7.4 SEVERABILITY</h3>
            <p className={contentClass}>
              If any part of this Agreement is ever legally declared invalid, all other parts of this Agreement are still valid and enforceable. Such invalidity or non- enforceability will not invalidate or render unenforceable any other portion of this Agreement.
            </p>
            <h3 className={subsectionTitleClass}>7.5 ASSIGNMENT</h3>
            <p className={contentClass}>
              This Agreement is personal to the Parties and may not be assigned or transferred by either Party without the prior written consent of the other Party which consent shall not be unreasonably withheld; except that SYNERGY CONNECT may assign this Agreement without consent to any affiliated entity or to any successor in interest whether by merger, reorganization or transfer of all or substantially all of its assets or otherwise. Except as provided herein, any assignment in contravention of the above shall be void and ineffective.
            </p>

            <h2 className={sectionTitleClass}>8. PRIVACY</h2>
            <p className={contentClass}>
              SYNERGY CONNECT Service utilizes the public Internet and various third party networks to transmit voice communications. SYNERGY CONNECT is not liable for any invasion of privacy experienced by Customer with regard to the Service.
            </p>

            <h2 className={sectionTitleClass}>9. ACCEPTANCE OF DIGITAL SIGNATURES</h2>
            <p className={contentClass}>
              BY SIGNING THE SYNERGY CONNECT SERVICES QUOTE, I ACKNOWLEDGE THAT I HAVE READ AND AGREE TO THE TERMS AND CONDITIONS CONTAINED IN THIS TERMS & CONDITIONS DOCUMENT. I UNDERSTAND THAT MY DIGITAL OR WRITTEN SIGNATURE ON THE SYNERGY CONNECT SERVICES QUOTE SERVES AS MY ACCEPTANCE OF THE SYNERGY CONNECT TERMS AND CONDITIONS AS OUTLINED IN THIS DOCUMENT.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
