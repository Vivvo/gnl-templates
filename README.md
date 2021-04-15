# # MyGovNL - templates



|Module | Screen | Link |QA  | 
|----------------|---------------|---------------|------------------------|
|    Login       |Login Screen                                    |http://localhost:9000/                                            |:heavy_check_mark: |
|`email`         | Your MyGovNL account has been locked (email 203)|assets/email-templates/0203-AccountLockoutNotification.html      | | 
|Account Creation|Intro Screen                                    |N/A                                                               | | 
|                |Create Account                                  |http://localhost:9000/create-account.html                         |:heavy_check_mark: | 
|                |Teerms and Conditions                           |http://localhost:9000/includes/terms.html                         |:heavy_check_mark: | 
|                |Cancel Registration                             |N/A                                                               | | 
|                |Check Your Email                                |http://localhost:9000/pages/check-your-email.html                 | | 
|                |Check your email (email server is down)         |     ?                                                            | | 
|`email`         |Account Activation email (204)                  |assets/email-templates/0204-VerifyEmailAddress.html               | | 
|                |Account verification link expired               |http://localhost:9000/pages/account-verification-link-expired.html| | 
|                |You're done success screen                      |http://localhost:9000/pages/registration-verified.html            | | 
|Forgot Password |Forgot Password                                 |http://localhost:9000/pages/reset-password.html                   |:heavy_check_mark: | 
|                |An email has been sent                          |http://localhost:9000/pages/reset-password-confirmation.html      | | 
|`email`         |Reset your password (email- 200)                |assets/email-templates/0200-ResetPasswordRequest.html             | | 
|                |Create new password                             |http://localhost:9000/pages/create-new-password.html              | | 
|                |Password updated screen                         |http://localhost:9000/pages/create-new-password-confirmation.html http://localhost:9000/pages/password-updated.html | | 
|                |Link Expired screen                             |http://localhost:9000/pages/verified-link-expired.html            | | 
|`email`         |Password has been updated (email - 201)         |assets/email-templates/0201-ResetPasswordConfirmation.html        | | 
|Contact Us      |Contact Us Screen                               |http://localhost:9000/includes/terms.html                         |:heavy_check_mark: | 
|Landing Page    |Landing Page                                    |http://localhost:9000/pages/dashboard.html                        |:heavy_check_mark: | 
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
|Change Email    |Your email addresses                            |http://localhost:9000/pages/change-email.html                     |:heavy_check_mark: |
|                |Primary email address                           |http://localhost:9000/pages/change-email-primary.html             |:heavy_check_mark: |
|                |Your primary email address has been updated     |http://localhost:9000/pages/change-email-primary-updated.html     |:heavy_check_mark: |
|                |Your email address has been verified and updated|http://localhost:9000/pages/change-email-verified.html            |:heavy_check_mark: | 
|                |Add another email address                       |http://localhost:9000/pages/change-email-add.html                 |:heavy_check_mark: |
|                |We've emailed you a verification link           |http://localhost:9000/pages/change-email-verify.html              |:heavy_check_mark: |
|                |Expired link                                    |http://localhost:9000/pages/change-email-expired.html             | |              
|                |Are you sure you want to remove email address   |http://localhost:9000/pages/change-email-remove.html| :heavy_check_mark:       
|`email`         |Verify your MyGovNL account email address (email - 204) |assets/email-templates/0204-VerifyEmailAddress.html       | |        
|`email`         |Your primary email address has changed (email - 207-1) |assets/email-templates/0207-1-PrimaryEmailAddressChangeRequestSendToOriginalAccount.html|     
|`email`         |Your email address has been removed (email - 207-2) |assets/email-templates/0207-2-EmailAddressDeleteRequestSendToOriginalAccount.html| |     
|`email`         |An email address has been added to your MyGovNL account (email - 207-3)k|assets/email-templates/0207-3-NewEmailAddressAddRequestSendToOriginalAccount.html                                                                                  | |        
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



Prototype: https://wzrk3d.axshare.com/#id=bfgm1l&p=services&g=1 

Notifications: https://wzrk3d.axshare.com/#id=yalax7&p=main-notifications&g=1

Linking: https://wzrk3d.axshare.com/#id=bfgm1l&p=services&g=1

https://wzrk3d.axshare.com/#id=lyzyxj&p=link_overview_4&g=1

Your emails

Account profile - https://wzrk3d.axshare.com/#id=979jn8&p=account-profile--w-multiple-emails&g=1

Your email addresses - https://wzrk3d.axshare.com/#id=nzygly&p=your_email_addresses&g=1

Remove email - https://wzrk3d.axshare.com/#id=n2nr90&p=remove-email&g=1

Add alternate email

Add another - https://wzrk3d.axshare.com/#id=gn734b&p=add_another_email&g=1

Verification sent - https://wzrk3d.axshare.com/#id=rqukdr&p=verification-sent&g=1

Verified - https://wzrk3d.axshare.com/#id=ijrcev&p=verified&g=1

Expired - https://wzrk3d.axshare.com/#id=rh51g1&p=expired-verification-link&g=1

Primary

Change primary - https://wzrk3d.axshare.com/#id=ij8cjq&p=change_primary&g=1

Primary email changed - https://wzrk3d.axshare.com/#id=zycp18&p=primary_changed&g=1

