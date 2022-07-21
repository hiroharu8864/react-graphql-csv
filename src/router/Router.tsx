import { FC, memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { GraphQLFetchCSV } from "../components/pages/GraphQLFetchCSV";

export const Router: FC = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetchcsv" element={<GraphQLFetchCSV />} />
      </Routes>
    </BrowserRouter>
  );
});
