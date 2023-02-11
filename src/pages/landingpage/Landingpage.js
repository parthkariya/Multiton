import React, { useEffect } from "react";
import {
  Clientslider,
  Digitdisplay,
  Industriesserve,
  Ourpopularcategory,
  Pouchwemake,
  Sliderhomecompany,
} from "../../components";
import Hero from "../../components/hero/Hero";
import "./Landingpage.css";
const Landingpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <Pouchwemake />
      <Sliderhomecompany />
      <Clientslider />
      <Ourpopularcategory />
      <Industriesserve />
      <Digitdisplay />
    </>
  );
};

export default Landingpage;
