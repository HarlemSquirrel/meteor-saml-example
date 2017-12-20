# Meteor SAML Example

## About

This is a sample [Meteor]() app with SAML login using the [accounts-saml2 package](https://github.com/signmeup/accounts-saml2).

## Getting started

#### Install Meteor

OSX/Linux

```
curl https://install.meteor.com/ | sh
```

Windows

```
choco install meteor
```

#### Install project dependencies

```
npm install
```

#### Set the SAML settings

Copy `settings.json.template` as `settings.json` and replace the `CHANGE-ME` pieces with your SAML entryPoint, issuer, and cert. Make sure SAML is setup correctly on the remote server.

#### Run the server

```
npm run start
```

#### Take her for a test drive

Visit http://localhost:3000 and click "Log in". You should be presented with a popup where you can log in with your credentials. After a successful login the popup should close and you should see a greeting with your name just below the "Log in" link.
