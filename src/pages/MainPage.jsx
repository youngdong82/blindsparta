import React from "react";
import Layout from "../components/layout/Layout"
import List from "../components/list/List"
import Card from "../components/card/Card"


const MainPage = () => {

  return(
   <>
   <Layout>
      <List>
        <Card/>
      </List>;
   </Layout>
   </>
  );
};

export default MainPage;