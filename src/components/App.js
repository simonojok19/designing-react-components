import React, { useState, createContext } from "react";
import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";

export default function App() {
  return (
    <Layout startingTheme="light">
      <Header />
      <Speakers />
    </Layout>
  );
}
