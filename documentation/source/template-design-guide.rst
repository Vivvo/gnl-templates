#####################
Template design guide
#####################

| Feel free to include any style sheets or javascript for user experience purposes.
| They will be included in your application's front end.

Login
*****

This page must contain a form with the following inputs

    - Email or Username
    - Password

| This page often acts as the home/landing page.
| It usually also contains links to the ``Create Account`` and ``Forgot Password`` pages.


Create account
**************

This page must contain a form with the following inputs

    - First name
    - Last name
    - Username
    - Email
    - Password
    - Accepted Terms of use (checkbox)
    - csrf_token (hidden)


Sample request:

.. code-block:: JSON
   :linenos:

    {
        "csrf_token": "8c1807936b8753970dceb15a38850b35b4a909585bbdfa7181d4a6a9bda91b10",
        "FirstName": "Sherlock",
        "LastName": "Holmes",
        "UserName": "SherlockH",
        "EmailAddress": "sherlock@holmes.com",
        "ConfirmEmailAddress": "sherlock@holmes.com",
        "Password": "Elementary25!",
        "ConfirmPassword": "Elementary25!",
        "AcceptTermsAndConditions": "true"
    }


Sample form inputs:

.. code-block:: HTML
   :linenos:

    Hidden csrf token:
        <input id="csrfToken" type="hidden" name="csrf_token" value="{{ $token }}"/>
    Accept terms of use checkbox:
        <input type="checkbox" name="AcceptTermsAndConditions" value="Y" aria-label="Accept terms and conditions">
    Form field:
        <input type="text" maxlength="30" name="FirstName" value="" aria-label="First name">



As long as the form has nameattributes on each input, and the form's action is set to
``/registration/create``
, then our back end will populate the ``csrf_token`` input, and create an account with the given details on submit.





Email sent
**********

| After submitting the ``Create Account`` form, the user will be redirected here.
| This page generally directs users to check their emails for an invitation to the website.

This page can optionally display the email address that the invitation has been sent to, as well as other account details.


Email verified (optional)
*************************

| In the invitation in the email, you have the option of supplying a ``goto`` link.
| The user will be redirected to the ``goto`` link after verifying their account.

| This ``Email Verified`` page generally tells the user that their account has been verified successfully, and offers a link to the login page.
| You can also omit the ``Email Verified`` page, leave the ``goto`` link blank, and the user will land on ``Login`` instead.
