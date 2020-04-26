import Head from "next/head";
import {
  ScaleButton,
  ScaleCard,
  ScaleLink,
  ScaleTag
} from "@scaleds/scale-react";
import React from "react";
const { useTheme } = require("@scaleds/components/dist/theme");

export default function Home({ title = "Welcome to Next.js!" }) {
  useTheme({
    shape: {
      borderRadius: 0
    }
  });
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>React App</h1>
        <h3>Alert</h3>
        <ScaleLink href="http://example.com" target="_blank" variant="success">
          Success
        </ScaleLink>
        <h3>Button</h3>
        <ScaleButton variant="primary">Click!</ScaleButton>
        <ScaleButton
          styles={{
            "button--variant-custom": {
              background: "pink",
              borderColor: "pink"
            }
          }}
          variant="custom"
        >
          Pink Button
        </ScaleButton>
        <h3>Card</h3>
        <ScaleCard>A title</ScaleCard>
        <h3>Tag</h3>
        <ScaleTag
          dismissable
          size="small"
          onClose={event => console.log(event)}
        >
          A title
        </ScaleTag>
      </main>
    </>
  );
}
