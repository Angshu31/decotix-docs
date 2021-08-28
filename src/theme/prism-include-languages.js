/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";
import siteConfig from "@generated/docusaurus.config";

const prismIncludeLanguages = (PrismObject) => {
  if (ExecutionEnvironment.canUseDOM) {
    const {
      themeConfig: { prism: { additionalLanguages = [] } = {} },
    } = siteConfig;
    window.Prism = PrismObject;
    additionalLanguages.forEach((lang) => {
      require(`prismjs/components/prism-${lang}`); // eslint-disable-line
    });

    Prism.languages.prisma = Prism.languages.extend("javascript", {
      comment: Prism.languages.javascript.comment,
      keyword: [
        {
          pattern:
            /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|model|enum|datasource|generator|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: true,
        },
      ],
      function: [/@[a-z]*/, Prism.languages.javascript.function],
      "class-name": [
        {
          pattern: /(\b(?:model|enum)\s+)[\w.\\]+/,
          lookbehind: true,
          inside: { punctuation: /[.\\]/ },
        },
        {
          pattern: /String|Int|Float|Bytes|Json/,
        },
      ],
    });

    delete window.Prism;
  }
};

export default prismIncludeLanguages;
