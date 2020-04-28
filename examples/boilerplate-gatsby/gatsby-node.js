const glob = require("glob");
const fs = require("fs");
const { renderToString, hydrateDocument } = require('@scaleds/components/hydrate');
const useTheme = require('@scaleds/components/dist/theme').useTheme
const getTheme = require('@scaleds/components/dist/theme').getTheme

// function hydrateComponents(doc) {
//   return hydrateDocument(doc)
//     .then((hydrateResults) => {
//       // execute logic based on results
//       console.log(hydrateResults);
//       return hydrateResults;
//     });
// }

useTheme({
  shape: {
    borderRadius: 24
  }
})

exports.onPostBuild = async ({}, pluginOptions) => {
  const files = glob.sync("public/**/*.html");
  return Promise.all(
    files.map(async file => {
      try {
        const html = fs.readFileSync(file, "utf8");

        const result = await renderToString(html, {
          prettyHtml: true
        });
        fs.writeFileSync(file, result.html);

        // hydrateComponents(file)
        return result;
      } catch (e) {
        // Ignore error where path is a directory
        if (e.code === "EISDIR") {
          return;
        }

        throw e;
      }
    })
  );
};
