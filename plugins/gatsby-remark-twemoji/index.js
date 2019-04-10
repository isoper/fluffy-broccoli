const twemoji = require(`twemoji`);

module.exports = {
  mutateSource: ({ markdownNode }) => {
    return new Promise((resolve, reject) => {
      try {
        markdownNode.internal.content = twemoji.parse(
          markdownNode.internal.content
        );
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
};
