import React from 'react'
import { Container } from 'semantic-ui-react'
import PriceList from '../PriceList/PriceList'
import "./Agreement.css"
const agreement = () => {
  return (
    <div className="wrapper_comp">
      <h1>| Agreement |</h1>
      <Container>
        <p className="container">EsayClub does not serve users under the age of 18. By using the Services the customer represents that he is 18 years of age or older.<br></br>
      The customer undertakes that he is a living and real (human) person. Automatic methods or "robots" are not allowed to create accounts and / or use the services.<br></br>
Please read this agreement carefully. This Agreement sets out your access to and use of the Services. You must obtain this agreement before using the Services. By using and / or <br></br>
viewing the Services (including all content and services available on the Site), you agree to both this Agreement and the EsayClub Privacy Policy, available at http: // localhost: 3000 / agreement (the "Privacy Policy"). <br></br>
Changes may be made to this Agreement from time to time without prior notice. Any change and / or new addition that increases or improves the current services, including changes due to changes in regulation, and / or <br></br>
the release and accessibility of new tools and resources, will be subject to this agreement. Your continued use of the Services after any such change will constitute your consent to such changes.<br></br>
If you do not agree to any provisions in this Agreement, please terminate this Agreement and do not use the Services.</p>
        <PriceList></PriceList>
        <h3>Registration</h3>
        <p className="container">
          When the customer completes the registration process, the customer creates an account. Your account allows you to participate in certain services, subject to this agreement and <br></br>
the Privacy Policy. EsayClub reserves the exclusive right to refuse to open an account to the user, at its sole discretion To open an account, you must select a subdomain, username and password. Your username is your primary identity.<br></br>
You will not be able to select a subdomain that is used by another user, and the subdomain and username must not infringe any legal right of another, in any form and / or way. Your subdomain and username must not be in violation of this agreement.<br></br>
When creating the account and during the registration process, you undertake to provide accurate and genuine information. In addition, you must indemnify EsayClub, for any claim resulting from false and / or inaccurate information provided by you.<br></br>
Do not disclose your password to other users. EsayClub will not ask you to reveal your password. If you forget your password, you can request a new password which will be sent to the e-mail address you provided, using the link "Forgot your username / password?" <br></br>
On the landing page. You are aware that sharing your account information with any third party will expose your account and your account will be at risk of misuse. Your account is subject to closure by EsayClub if you or anyone else who uses your account violates <br></br>
this agreemen You agree to notify EsayClub immediately of any unauthorized use of your account by sending an email to support@getpose.com. You are the sole and sole responsibility for the security of your computer system, and you are the sole and sole responsibility<br></br>
for all operations performed on your account, even if not performed by you. EsayClub will not be liable for any damages caused as a result of unauthorized use of your account. If Pose is sued, you undertake to indemnify Pose for any claim arising from improper or<br></br>
 illegal use of your account, including any mail sent through your account, any charge, duty or tax. This indemnification involves the illegal or improper use by a person who has received permission from you to use your account. Pose is not the police, nor can it guarantee<br></br>
 דthat you can learn or prevent, improper use of the Services
If you are a direct competitor of EsayClub, you may not register for the use of the Services without the express written consent of EsayClub.Trial period and account activation
EsayClub offers a free 30-day trial, which includes two modes
1. "Trial Period" - During the "Trial Period" you will not be able to generate real receipts. Receipts in the "trial period" will have the caption "trial" added. A number of features will not work during the "trial period", such as: (i) entering a custom receipt number, (ii) using credit cards, (iii) adding additional cash registers, and more.
2. "Active mode" - In this mode you can choose to activate your account at any time and will not be charged until the 30 days are over. Once your account has been activated (that is, after a valid credit card has been entered), all transactions and receipts created during the "trial period" will be automatically deleted. You can choose to delete the customers and inventory created during the "trial period". You can also cancel your appointment at any time and as long as the cancellation is made before the end of the 30-day "trial period", you will not be charged.
As stated, the trial period will begin immediately upon creation of the account and will last for 30 days. After 30 days, if no activation has taken place (ie no valid credit card has been entered), your account will be suspended. After the suspension you will not be able to access the system or retrieve your data, so be sure to export your data in advance before the end of the trial period.
Once your account is suspended you will have an additional 30 days to reactivate your account. Then, if no reactivation has taken place, your account will be permanently deleted along with all the information. In this case, the subdomain will be vacated and released for the benefit of other new users.</p>
      </Container>
    </div>

  )
}
export default agreement

