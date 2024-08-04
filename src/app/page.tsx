"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ExtendedRecordMap } from 'notion-types';
import { NotionPage } from "@/components/notion/renderer";

import styles from "./page.module.css";


const pageIds = ["f80c697eddfb4694a31b9b5f519b39ab"];
export default function Home() {

  const [recordMapData, setRecordMapData] = useState<ExtendedRecordMap | null>(null);


  useEffect(() => {
    console.log("useeffect");
    const fetchData = async () => {

      const response = await fetch(`/api/notion/getNotionBlocks?pageId=${pageIds[0]}`);
      const data = await response.json();
      console.log("data!:", data);
      // setRecordMapData(data);
      setRecordMapData(data);
    }
    fetchData();
  },[]);



  return (
    <div className="page">
      {
        recordMapData &&
        <NotionPage recordMap={recordMapData} rootPageId={pageIds[0]}/>

      }

    </div>

  );
}
