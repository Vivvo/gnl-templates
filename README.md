# # MyGovNL - templates

|Module | Screen | Link |  | 
|----------------|---------------|---------------|------------------------|
|    Login       |Login Screen                                    |http://localhost:9000/                                            | |
|`email`         | Your MyGovNL account has been locked (email 203)|assets/email-templates/0203-AccountLockoutNotification.html       | | 
|Account Creation|Intro Screen                                    |                                                                  | | 
|                |Create Account                                  |http://localhost:9000/create-account.html                         | | 
|                |Teerms and Conditions                           |http://localhost:9000/includes/terms.html                         | | 
|                |Cancel Registration                             |                                                                  | | 
|                |Check Your Email                                |http://localhost:9000/pages/check-your-email.html                 | | 
|                |Check your email (email server is down)         |               |                        | 
|`email`         |Account Activation email (204)                  |assets/email-templates/0204-VerifyEmailAddress.html               | | 
|                |Account verification link expired               |http://localhost:9000/pages/verified-link-expired.html            | | 
|                |You're done success screen                      |http://localhost:9000/pages/registration-verified.html            | | 
|Forgot Password |Forgot Password                                 |http://localhost:9000/pages/reset-password.html                   | | 
|                |An email has been sent                          |http://localhost:9000/pages/reset-password-confirmation.html      | | 
|`email`         |Reset your password (email- 200)                |assets/email-templates/0200-ResetPasswordRequest.html             | | 
|                |Create new password                             |http://localhost:9000/pages/create-new-password.html              | | 
|                |Password updated screen                         |http://localhost:9000/pages/create-new-password-confirmation.html | | 
|                |Link Expired screen                             |http://localhost:9000/pages/verified-link-expired.html            | | 
|`email`         |Password has been updated (email - 201)         |assets/email-templates/0201-ResetPasswordConfirmation.html        | | 
|Contact Us      |Contact Us Screen                               |http://localhost:9000/includes/terms.html                         | | 
|Landing Page    |Landing Page                                    |http://localhost:9000/pages/dashboard.html                        | | 
|Service Pages   |Service Page - Actions - Unlinked               |               |                        | 
|                |Service Page - Actions - Linked                 |               |                        |
|                |Service Page - Notifications                    |               |                        |
|                |Service Page - Terms of Use                     |               |                        |
|Notifications   |Notifications (history)                         |               |                        |
|Account         |Account - Profile                               |http://localhost:9000/pages/profile.html                          | |
|                |Account - Security                              |http://localhost:9000/pages/profile.html                          | |
|                |Account - Notification Settings                 |N/A|                        |
|Maintenance     |Maintenance message                             |                                                                  | |
|Change Password |Change your password                            |http://localhost:9000/pages/change-password.html                  | |
|                |Your Password has been updated                  |http://localhost:9000/pages/password-updated.html                 | |
|`email`         |Your Primary password has been updated (201)    |assets/email-templates/0201-ResetPasswordConfirmation.html        | |
|Change Email    |Your email addresses                            |http://localhost:9000/pages/change-email.html                     | |
|                |Primary email address                           |http://localhost:9000/pages/change-email-primary.html             | |
|                |Your primary email address has been updated     |http://localhost:9000/pages/change-email-primary-updated.html     | |
|                |Your email address has been verified and updated|http://localhost:9000/pages/change-email-verified.html            | |
|                |Add another email address                       |http://localhost:9000/pages/change-email-add.html                 | |
|                |We've emailed you a verification link           |http://localhost:9000/pages/change-email-verify.html              | |
|                |Expired link                                    |http://localhost:9000/pages/change-email-expired.html             | |              
|                |Are you sure you want to remove email address   |http://localhost:9000/pages/change-email-remove.html|        
|`email`         |Verify your MyGovNL account email address (email - 204) |assets/email-templates/0204-VerifyEmailAddress.html       | |        
|`email`         |Your primary email address has changed (email - 207-1) |assets/email-templates/0207-EmailAddressChangeRequestSendToOriginalAccount.html|     
|`email`         |Your email address has been removed (email - 207-2) |                                                      | |      
|`email`         |An email address has been added to your MyGovNL account (email - 207-3)k|                                   | |        
|Delete Account  |Delete account - first we need to verify it's you |http://localhost:9000/pages/delete-account.html                 | |      
|                |Are you sure you want to delete your MyGovNL account?|                                                             | |
|                |Are you sure you want to delete (transaction in queue)|                                                            | |
|                |Your MyGovNL account has been deleted|                                                                             | |
|`email`         |Your MyGovNL account has been deleted (email -  205)|assets/email-templates/0205-AccountDeleted.html               | |
|Linking         |Link MCP                                        |http://localhost:9000/pages/mcp-link-overview.html                | |
|                |Your MyGovNL MCP services have been temp locked |http://localhost:9000/pages/mcp-lockout.html                      | |
|`email`         | Your MCP services have been locked (email - 2001)|assets/email-templates/2001-MCPOnboardingLockout.html            | |
|                |Successfully linked MCP                         |http://localhost:9000/pages/mcp-link-success.html                 | |
|                |Link MRD                                        |                                                                  | |
|                |Your MyGovNL MRD services have been temp locked |                                                                  | |
|`email`         |Your MRD services have been locked (email - 1020)|assets/email-templates/1020-OnboardingLockout.html               | |
|                |Successfully linked MRD                         |                                                                  | |
|                |Link wood cutting                               |                                                                  | |
|                |You do not have a domestic wood cutting permit  |                                                                  | |
|                |Successful linking                              |                                                                  | |
|                |Linking for driver's permit                     |                                                                  | |


```yarn start```
1. Login
   * login page: http://localhost:9000/

2. Account create
   * account create: http://localhost:9000/create-account.html
   * terms and conditions: http://localhost:9000/includes/terms.html 
   * email sent: https://nldev.vivvocloud.com/en/email_sent
   * registration verified: http://localhost:9000/pages/registration-verified.html
   * verified link exparied: http://localhost:9000/pages/verified-link-expired.html

3. Forgot password
   * forgot password: http://localhost:9000/pages/reset-password.html
   * reset password confirmation:http://localhost:9000/pages/reset-password-confirmation.html
   * create new password: http://localhost:9000/pages/create-new-password.html
   * create new password confirmation: http://localhost:9000/pages/create-new-password-confirmation.html
   * verified link exparied: http://localhost:9000/pages/verified-link-expired.html
4. Verify device
   * verify device: http://localhost:9000/pages/verify-device.html
6. MCP
   * linking overview: http://localhost:9000/pages/mcp-link-overview.html
   * details: http://localhost:9000/pages/mcp-details.html
   * notificaiton settings: http://localhost:9000/pages/mcp-link-notifications.html
   * linking successfull: http://localhost:9000/pages/mcp-link-success.html
   * service is locked: http://localhost:9000/pages/mcp-lockout.html
7. Learner's Permit:
   * linking: http://localhost:9000/pages/learners-permit-linking.html
9. My Account 
   * profile: http://localhost:9000/pages/profile.html
   * security: http://localhost:9000/profile.html
      * change your password: http://localhost:9000/pages/change-password.html
      * We've emailed you a verification link: http://localhost:9000/pages/change-email-verify.html
      * password updated: http://localhost:9000/pages/password-updated.html
      * add another email: http://localhost:9000/pages/change-email-add.html
      * Delete account : http://localhost:9000/pages/delete-account.html
      * confirm account deletion: http://localhost:9000/pages/confirm-delete-account.html

# Email Templates 

Template #  | Subject Line
------------- | -------------
002  | Activate your MyGovNL account
200  | Reset your password
201  | Your MyGovNL password has been changed
202  | Your MyGovNL login email has been changed
203  | Your MyGovNL account has been temporarily locked for 24 hours
204  | Verify your MyGovNL account email address
205  | Your MyGovNL account has been deleted
207  | Your MyGovNL email address has been changed
1020  | {{FirstName}}, your MyGovNL driver and vehicle services have been locked
2001  | {{FirstName}}, your MyGovNL MCP services have been locked




