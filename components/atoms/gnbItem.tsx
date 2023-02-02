import Link from "next/link";
import styles from "@/styles/layouts/header.module.scss";
import { GnbItemProps } from "@/types/types";

const GnbItem = ({ title }: GnbItemProps) => {
  return (
    <li className={`${styles.gnb_item}`}>
      <Link href={`/${title}`}>{title}</Link>
    </li>
  );
};
export default GnbItem;
