import * as React from "react"
import { Link } from "gatsby"
import Amplify, { Auth } from "aws-amplify"

import awsExports from "../aws-exports"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => {
  Amplify.configure(awsExports)

  async function signIn() {
    try {
      const response = await Auth.signIn("username", "password")
      console.log("signIn", { response })
    } catch (e) {
      console.log("signIn", { e })
    }
  }

  async function signUp() {
    try {
      const response = await Auth.signUp({
        username: "username",
        password: "password",
        attributes: {
          email: "user@something.com",
        },
      })
      console.log("signUp", { response })
    } catch (e) {
      console.log("signUp", { e })
    }
  }

  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
      <button type="button" onClick={signIn}>
        Sign In
      </button>

      <button type="button" onClick={signUp}>
        Sign Up
      </button>
    </Layout>
  )
}

export default SecondPage
