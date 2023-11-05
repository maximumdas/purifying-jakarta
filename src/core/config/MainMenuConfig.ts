const DocMenuConfig = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        svgIcon: "media/icons/duotune/general/gen025.svg",
      },
      {
        sectionTitle: "Analytics",
        route: "/pages",
        svgIcon: "media/icons/duotune/maps/map002.svg",
        sub: [
          {
            heading: "Simulation",
            route: "/pages/simulation",
          },
          {
            heading: "Dataset",
            route: "/pages/invoice",
          },
        ],
      },
      {
        sectionTitle: "pages",
        route: "/pages",
        svgIcon: "media/icons/duotune/ecommerce/ecm007.svg",
        sub: [
          {
            heading: "aboutUs",
            route: "/pages/about-us",
          },
          {
            heading: "invoice",
            route: "/pages/invoice",
          },
          {
            heading: "faq",
            route: "/pages/faq",
          },
        ],
      },
      {
        sectionTitle: "account",
        route: "/account",
        svgIcon: "media/icons/duotune/communication/com006.svg",
        sub: [
          {
            heading: "overview",
            route: "/account/overview",
          },
        ],
      },
    ],
  },
];

export default DocMenuConfig;
