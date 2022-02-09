/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import * as React from "react"
import Amplify, { Auth } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsExports from "./src/aws-exports"
import "@aws-amplify/ui-react/styles.css"

Amplify.configure(awsExports)

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
const wrapRootElement = ({ element }) => (
  <div>
    <Top />
    <Authenticator>{element}</Authenticator>
  </div>
)

const Top = () => {
  async function signIn() {
    try {
      const response = await Auth.signIn("username", "password")
      console.log("signIn", { response })
    } catch (e) {
      console.log("signIn", { e })
    }
  }

  return (
    <div>
      <div>wrapRootElement</div>
      <button type="button" onClick={signIn}>
        Sign In
      </button>
    </div>
  )
}

export { wrapRootElement }
