import React from "react";
import { Board } from "../../components/Board/Board";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/Heading/Heading";

export const TaskPage = () => {
  return (
    <>
      <Header />
      <section className="content">
        <div className="content-wrapper">
          <Heading />
          <Board /> 
        </div>
      </section>
    </>  
  )
}