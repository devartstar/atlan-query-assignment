import ordersData from "../../assets/orders_data.jpg";
import productData from "../../assets/productData.webp";
import customerData from "../../assets/customerData.png";
import uploadedData from "../../assets/uploadedData.png";

export const states = {
  datatableList: [
    {
      image: ordersData,
      title: "Orders Data Table",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. ",
      jsondata: [
        {
          order_id: "1",
          customer_id: "6",
          order_date: "2019-01-30",
          status: "1",
          comments: "NULL",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "2",
          customer_id: "7",
          order_date: "2018-08-02",
          status: "2",
          comments: "NULL",
          shipped_date: "2018-08-03",
          shipper_id: "4",
        },
        {
          order_id: "3",
          customer_id: "8",
          order_date: "2017-12-01",
          status: "1",
          comments: "NULL",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "4",
          customer_id: "2",
          order_date: "2017-01-22",
          status: "1",
          comments: "NULL",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "5",
          customer_id: "5",
          order_date: "2017-08-25",
          status: "2",
          comments: "",
          shipped_date: "2017-08-26",
          shipper_id: "3",
        },
        {
          order_id: "6",
          customer_id: "10",
          order_date: "2018-11-18",
          status: "1",
          comments: "Aliquam erat volutpat. In congue.",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "7",
          customer_id: "2",
          order_date: "2018-09-22",
          status: "2",
          comments: "NULL",
          shipped_date: "2018-09-23",
          shipper_id: "4",
        },
        {
          order_id: "8",
          customer_id: "5",
          order_date: "2018-06-08",
          status: "1",
          comments:
            "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "9",
          customer_id: "10",
          order_date: "2017-07-05",
          status: "2",
          comments: "Nulla mollis molestie lorem. Quisque ut erat.",
          shipped_date: "2017-07-06",
          shipper_id: "1",
        },
        {
          order_id: "10",
          customer_id: "6",
          order_date: "2018-04-22",
          status: "2",
          comments: "NULL",
          shipped_date: "2018-04-23",
          shipper_id: "2",
        },
        {
          order_id: "11",
          customer_id: "6",
          order_date: "2019-01-30",
          status: "1",
          comments: "NULL",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "12",
          customer_id: "7",
          order_date: "2018-08-02",
          status: "2",
          comments: "NULL",
          shipped_date: "2018-08-03",
          shipper_id: "4",
        },
        {
          order_id: "13",
          customer_id: "8",
          order_date: "2017-12-01",
          status: "1",
          comments: "NULL",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "14",
          customer_id: "2",
          order_date: "2017-01-22",
          status: "1",
          comments: "NULL",
          shipped_date: "NULL",
          shipper_id: "NULL",
        },
        {
          order_id: "15",
          customer_id: "5",
          order_date: "2017-08-25",
          status: "2",
          comments: "",
          shipped_date: "2017-08-26",
          shipper_id: "3",
        },
      ],
    },
    {
      image: productData,
      title: "Products Data Table",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. ",
      jsondata: [
        {
          product_id: "1",
          name: "Foam Dinner Plate",
          quantity_in_stock: "70",
          unit_price: "1.21",
        },
        {
          product_id: "2",
          name: "Pork - Bacon,back Peameal",
          quantity_in_stock: "49",
          unit_price: "4.65",
        },
        {
          product_id: "3",
          name: "Lettuce - Romaine, Heart",
          quantity_in_stock: "38",
          unit_price: "3.35",
        },
        {
          product_id: "4",
          name: "Brocolinni - Gaylan, Chinese",
          quantity_in_stock: "90",
          unit_price: "4.53",
        },
        {
          product_id: "5",
          name: "Sauce - Ranch Dressing",
          quantity_in_stock: "94",
          unit_price: "1.63",
        },
        {
          product_id: "6",
          name: "Petit Baguette",
          quantity_in_stock: "14",
          unit_price: "2.39",
        },
        {
          product_id: "7",
          name: "Sweet Pea Sprouts",
          quantity_in_stock: "98",
          unit_price: "3.29",
        },
        {
          product_id: "8",
          name: "Island Oasis - Raspberry",
          quantity_in_stock: "26",
          unit_price: "0.74",
        },
        {
          product_id: "9",
          name: "Longan",
          quantity_in_stock: "67",
          unit_price: "2.26",
        },
        {
          product_id: "10",
          name: "Broom - Push",
          quantity_in_stock: "6",
          unit_price: "1.09",
        },
        {
          product_id: "11",
          name: "Foam Dinner Plate",
          quantity_in_stock: "70",
          unit_price: "1.21",
        },
        {
          product_id: "12",
          name: "Pork - Bacon,back Peameal",
          quantity_in_stock: "49",
          unit_price: "4.65",
        },
        {
          product_id: "13",
          name: "Lettuce - Romaine, Heart",
          quantity_in_stock: "38",
          unit_price: "3.35",
        },
      ],
    },
    {
      image: customerData,
      title: "Customers Data Table",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae nunc sed velit dignissim. ",
      jsondata: [
        {
          customer_id: "1",
          first_name: "Babara",
          last_name: "MacCaffrey",
          birth_date: "1986-03-28",
          phone: "781-932-9754",
          address: "0 Sage Terrace",
          city: "Waltham",
          state: "VA",
          points: "2273",
        },
        {
          customer_id: "2",
          first_name: "Ines",
          last_name: "Brushfield",
          birth_date: "1986-04-13",
          phone: "804-427-9456",
          address: "14187 Commercial Trail",
          city: "Hampton",
          state: "VA",
          points: "947",
        },
        {
          customer_id: "3",
          first_name: "Freddi",
          last_name: "Boagey",
          birth_date: "1985-02-07",
          phone: "719-724-7869",
          address: "251 Springs Junction",
          city: "Colorado Springs",
          state: "CO",
          points: "2967",
        },
        {
          customer_id: "4",
          first_name: "Ambur",
          last_name: "Roseburgh",
          birth_date: "1974-04-14",
          phone: "407-231-8017",
          address: "30 Arapahoe Terrace",
          city: "Orlando",
          state: "FL",
          points: "457",
        },
        {
          customer_id: "5",
          first_name: "Clemmie",
          last_name: "Betchley",
          birth_date: "1973-11-07",
          phone: "NULL",
          address: "5 Spohn Circle",
          city: "Arlington",
          state: "TX",
          points: "3675",
        },
        {
          customer_id: "6",
          first_name: "Elka",
          last_name: "Twiddell",
          birth_date: "1991-09-04",
          phone: "312-480-8498",
          address: "7 Manley Drive",
          city: "Chicago",
          state: "IL",
          points: "3073",
        },
        {
          customer_id: "7",
          first_name: "Ilene",
          last_name: "Dowson",
          birth_date: "1964-08-30",
          phone: "615-641-4759",
          address: "50 Lillian Crossing",
          city: "Nashville",
          state: "TN",
          points: "1672",
        },
        {
          customer_id: "8",
          first_name: "Thacher",
          last_name: "Naseby",
          birth_date: "1993-07-17",
          phone: "941-527-3977",
          address: "538 Mosinee Center",
          city: "Sarasota",
          state: "FL",
          points: "205",
        },
        {
          customer_id: "9",
          first_name: "Romola",
          last_name: "Rumgay",
          birth_date: "1992-05-23",
          phone: "559-181-3744",
          address: "3520 Ohio Trail",
          city: "Visalia",
          state: "CA",
          points: "1486",
        },
        {
          customer_id: "10",
          first_name: "Levy",
          last_name: "Mynett",
          birth_date: "1969-10-13",
          phone: "404-246-3370",
          address: "68 Lawn Avenue",
          city: "Atlanta",
          state: "GA",
          points: "796",
        },
      ],
    },
  ],
  selectedDatasetIndex: -1,
};
