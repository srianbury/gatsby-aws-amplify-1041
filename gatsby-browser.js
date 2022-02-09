/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import * as React from "react"
import { useState, useEffect } from "react"
import Amplify, { Auth } from "aws-amplify"
import { Authenticator } from "@aws-amplify/ui-react"
import awsExports from "./src/aws-exports"
import "@aws-amplify/ui-react/styles.css"

Amplify.configure(awsExports)

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
const wrapRootElement = ({ element }) => <Root element={element} />

const Root = ({ element }) => {
  const [state, setState] = useState(false)

  useEffect(() => {
    /*
      Having another issue related to the amplify's Router commponent
      logging out first thing seems to fix the issue enough so I can test the xstate issue
    */
    Auth.signOut()
    setState(true)
  }, [])

  return !state ? <div>Loading...</div> : <>{element}</>
}

export { wrapRootElement }
