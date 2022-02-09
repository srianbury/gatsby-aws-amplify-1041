import * as React from "react"
import { Link } from "gatsby"
import { Authenticator } from "@aws-amplify/ui-react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Authenticator />
  </Layout>
)

export default SecondPage
