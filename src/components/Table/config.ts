import { IProducts } from "../../types/IProducts";

interface HeadCell {
    disablePadding: boolean;
    id: keyof IProducts;
    label: string;
    numeric: boolean;
  }

const tableConfig :readonly HeadCell[] = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID",

  },
  {
    id: "title",
    numeric: true,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "description",
    numeric: true,
    disablePadding: false,
    label: "Description",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "images",
    numeric: false,
    disablePadding: false,
    label: "Img",
  },
  {
    id: "rating",
    numeric: true,
    disablePadding: false,
    label: "Rating",
  },
  {
    id: "stock",
    numeric: true,
    disablePadding: false,
    label: "Stock",
  },
  {
    id: "category",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
];

export default tableConfig;
