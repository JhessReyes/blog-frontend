import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Button from "@/components/atom/Button";
import Home from "./home/home";
const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Button className="btn">Button </Button>
    </>
  );
}
