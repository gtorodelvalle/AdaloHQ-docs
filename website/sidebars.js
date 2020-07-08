module.exports = {
  docs: {
    Marketplace: [
      "marketplace/getting-started",
      "marketplace/library-standards",
      "marketplace/create-new-adalo-library",
      {
        type: "category",
        label: "Testing",
        items: ["marketplace/web-testing", "marketplace/mobile-dev-toolkit"],
      },
      "marketplace/publish-new-adalo-library",
      {
        type: "category",
        label: "Examples",
        items: [
          "marketplace/examples/example-access-child-props",
          "marketplace/examples/example-conditional",
          "marketplace/examples/example-app-branding",
          "marketplace/examples/example-enabled",
          "marketplace/examples/example-adalo-actions",
          "marketplace/examples/example-menu",
          "marketplace/examples/example-slider",
        ],
      },
    ],
    "API Reference": [
      {
        type: "category",
        label: "Marketplace",
        items: [
          "marketplace/adalo-cli",
          "marketplace/package-json",
          "marketplace/manifest-json",
        ],
      },
    ],
  },
};
