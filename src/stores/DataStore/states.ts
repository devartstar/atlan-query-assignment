import ordersData from "../../assets/orders_data.jpg";
import productData from "../../assets/productData.webp";
import customerData from "../../assets/customerData.png";

export const states = {
  datatableList: [
    {
      image: ordersData,
      linkto: "/datatable/orderstable",
      title: "Orders Data Table",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
    },
    {
      image: productData,
      linkto: "/datatable/productstable",
      title: "Products Data Table",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
    },
    {
      image: customerData,
      linkto: "/datatable/customerstable",
      title: "Customers Data Table",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. Blandit libero volutpat sed cras ornare. Fermentum dui faucibus in ornare quam. Aenean et tortor at risus viverra.",
    },
  ],
  selectedDatasetIndex: -1,
};
