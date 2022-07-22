import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../molecules/FormContainer";
import { MainButton } from "../atoms/MainButton";

export const GraphQLFetchCSV: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <FormContainer>
        <h3>Result CSV Files</h3>
        <MainButton onClick={onClickHome}>Go To Home</MainButton>
      </FormContainer>
    </>
  );
});
