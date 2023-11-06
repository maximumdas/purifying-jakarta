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
          // {
          //   heading: "Dataset",
          //   route: "/pages/invoice",
          // },
        ],
      },
    ],
  },
];

export default DocMenuConfig;
