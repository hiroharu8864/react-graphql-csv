import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCsv = useCallback(() => {
    navigate("/fetchcsv");
  }, [navigate]);

  return (
    <>
      <FormContainer>
        <h3>GraphQL API</h3>
        <MainButton onClick={onClickFetchCsv}>GraphQL API</MainButton>
      </FormContainer>
    </>
  );
});
