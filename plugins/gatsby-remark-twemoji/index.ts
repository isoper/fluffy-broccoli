import twemoji from "twemoji-parser";

module.exports = {
  mutateSource: ({ markdownNode }) => {
    return new Promise((resolve, reject) => {
      console.log("wesh");
      try {
        console.log(markdownNode);
        //markdownNode.internal.content = twemoji.parse(
        //  markdownNode.internal.content
        //);
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
};
