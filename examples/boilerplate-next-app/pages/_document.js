import Document from "next/document";
import * as stencil from "@scaleds/components/hydrate";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    try {
      const initialProps = await Document.getInitialProps(ctx);
      return await stencil.renderToString(initialProps.html, {
        serializeToHtml: true
      });
    } catch (error) {
      console.error("stencil.renderToString failed", error);
    }
  }
}
