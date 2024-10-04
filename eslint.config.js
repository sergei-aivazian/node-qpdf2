// @ts-check

import myConfig from "@sparticuz/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist", "coverage"],
  },
  ...myConfig,
  {
    rules: {
      "perfectionist/sort-union-types": [
        "error",
        {
          type: "natural",
        },
      ],
    },
  },
);
