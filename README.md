
  # Consultancy Firm Landing Page

  This is a code bundle for Consultancy Firm Landing Page. The original project is available at https://www.figma.com/design/sueFHW8jwWRE6pfjkjJ2XV/Consultancy-Firm-Landing-Page.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Firebase Hosting Deployment

  This repo includes Firebase Hosting configuration for the `net1io` project (`.firebaserc`, `firebase.json`). To deploy the production build:

  1. Install the Firebase CLI if needed: `npm install -g firebase-tools`
  2. Authenticate once: `firebase login`
  3. Confirm the active project is `net1io`: `firebase use net1io`
  4. Build the site: `npm run build`
  5. Deploy: `firebase deploy --only hosting`

  Optional: preview locally with `firebase emulators:start --only hosting` or use `firebase hosting:channel:deploy <channel-name>` for temporary preview channels.
  
