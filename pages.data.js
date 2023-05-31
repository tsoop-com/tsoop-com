import { createContentLoader } from 'vitepress'
import * as url from 'url';
import * as fs from "fs";
import * as path from "path";
import sharp from "sharp";

const publicFolder = 'public'
const mediaFolder = "media_files"
const mediaTypes = {
  cover: { size: 1200, height: 1000, fit: "inside" },
}

const root = url.fileURLToPath(new URL('./', import.meta.url))

export default createContentLoader('./**/*/*.md', {
  transform(routes) {
    // map, sort, or filter the raw data as you wish.
    // the final result is what will be shipped to the client.
    return routes.sort((a, b) => {
      return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
    }).map(page => {
      const data = page.frontmatter
      for (let media in mediaTypes) {
        if (data[media]) {
          let file = data[media];
          const filePath = path.join(page.url.replace(/\/[^/]*\.(html)$/, '/'), file);
          const fileName = filePath.split("/").filter(Boolean).join("-");
          const publicPath = path.resolve(root, publicFolder, mediaFolder, media);
          const fullPath = path.join(publicPath, fileName)
          const url = path.join("/", mediaFolder, media, fileName);

          page.frontmatter[media] = url;

          if (fs.existsSync(fullPath)) {
            continue
          }

          if (!fs.existsSync(path.dirname(fullPath))) {
            fs.mkdirSync(
              path.dirname(fullPath),
              { recursive: true }
            );
          }

          if (filePath.endsWith(".svg")) {
            fs.copyFileSync(
              path.resolve(root, filePath.substring(1)),
              fullPath
            );
          } else {
            sharp(path.resolve(root, filePath.substring(1)))
              .resize({
                width: mediaTypes[media].width,
                height: mediaTypes[media].height,
                fit: "inside",
              })
              .toFile(fullPath, (err, info) => {
                if (err) {
                  console.log(err, filePath, info);
                }
              });
          }
        }
      }
      return page
    })

  }
})