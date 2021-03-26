# # MyGovNL - templates

Prototype: https://wzrk3d.axshare.com/#id=bfgm1l&p=services&g=1 

|Module | Screen | Link |  | 
|----------------|---------------|---------------|------------------------|
|    Login       |Login Screen                                    |http://localhost:9000/                                            | |
|`email`         | Your MyGovNL account has been locked (email 203)|assets/email-templates/0203-AccountLockoutNotification.html      | | 
|Account Creation|Intro Screen                                    |N/A                                                               | | 
|                |Create Account                                  |http://localhost:9000/create-account.html                         | | 
|                |Teerms and Conditions                           |http://localhost:9000/includes/terms.html                         | | 
|                |Cancel Registration                             |N/A                                                               | | 
|                |Check Your Email                                |http://localhost:9000/pages/check-your-email.html                 | | 
|                |Check your email (email server is down)         |     ?                                                            | | 
|`email`         |Account Activation email (204)                  |assets/email-templates/0204-VerifyEmailAddress.html               | | 
|                |Account verification link expired               |http://localhost:9000/pages/account-verification-link-expired.html| | 
|                |You're done success screen                      |http://localhost:9000/pages/registration-verified.html            | | 
|Forgot Password |Forgot Password                                 |http://localhost:9000/pages/reset-password.html                   | | 
|                |An email has been sent                          |http://localhost:9000/pages/reset-password-confirmation.html      | | 
|`email`         |Reset your password (email- 200)                |assets/email-templates/0200-ResetPasswordRequest.html             | | 
|                |Create new password                             |http://localhost:9000/pages/create-new-password.html              | | 
|                |Password updated screen                         |http://localhost:9000/pages/create-new-password-confirmation.html http://localhost:9000/pages/password-updated.html | | 
|                |Link Expired screen                             |http://localhost:9000/pages/verified-link-expired.html            | | 
|`email`         |Password has been updated (email - 201)         |assets/email-templates/0201-ResetPasswordConfirmation.html        | | 
|Contact Us      |Contact Us Screen                               |http://localhost:9000/includes/terms.html                         | | 
|Landing Page    |Landing Page                                    |http://localhost:9000/pages/dashboard.html                        | | 
|Service Pages   |Service Page - Actions - Unlinked               |http://localhost:9000/mrd-service-unlinked.html#  => include      | | 
|                |Service Page - Actions - Linked                 |http://localhost:9000/mrd-service-linked.html                     | |
|                |Service Page - Notifications                    |http://localhost:9000/mrd-service-linked.html#  => include        | |
|                |Service Page - Terms of Use                     |http://localhost:9000/mrd-service-unlinked.html# => include       | |
|Notifications   |Notifications (history)                         |  -                                                               | |
|Account         |Account - Profile                               |http://localhost:9000/pages/profile.html                          | |
|                |Account - Security                              |http://localhost:9000/pages/profile.html                          | |
|                |Account - Notification Settings                 |N/A                                                               | |
|Maintenance     |Maintenance message                             |http://localhost:9000/                                            | |
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
|`email`         |Your email address has been removed (email - 207-2) |    ?                                                         | |      
|`email`         |An email address has been added to your MyGovNL account (email - 207-3)k|                                          | |        
|Delete Account  |Delete account - first we need to verify it's you |http://localhost:9000/pages/delete-account.html                 | |      
|                |Are you sure you want to delete your MyGovNL account?|     ?                                                       | |
|                |Are you sure you want to delete (transaction in queue)|     ?                                                      | |
|                |Your MyGovNL account has been deleted           |                      ?                                           | |
|`email`         |Your MyGovNL account has been deleted (email -  205)|assets/email-templates/0205-AccountDeleted.html               | |
|Linking         |MCP Service unlinked                            |http://localhost:9000/mcp-service-unlinked.html#                  | |  
|                 |Link MCP                                        |http://localhost:9000/pages/mcp-link-overview.html                | |
|                |Your MyGovNL MCP services have been temp locked |http://localhost:9000/pages/mcp-lockout.html                      | |
|`email`         | Your MCP services have been locked (email - 2001)|assets/email-templates/2001-MCPOnboardingLockout.html           | |
|                |Successfully linked MCP                         |http://localhost:9000/pages/mcp-link-success.html                 | |
|                |                                                | http://localhost:9000/mcp-service-linked.html#                   | |
|                |                                                | http://localhost:9000/mcp-service-linked-no-reminders.html#      | |
|                |Link MRD                                        |     -                                                            | |
|                |Your MyGovNL MRD services have been temp locked |      -                                                           | |
|`email`         |Your MRD services have been locked (email - 1020)|assets/email-templates/1020-OnboardingLockout.html               | |
|                |Successfully linked MRD                         |     -                                                            | |
|                |Link wood cutting                               |http://localhost:9000/wcp-service-unlinked.html                   | |
|                |                                                |   http://localhost:9000/wcp-service-linked.html                  | |
|                |You do not have a domestic wood cutting permit  |       -                                                          | |
|                |Successful linking                              |        -                                                         | |
|                |Linking for driver's permit                     |         -                                                        | |



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




