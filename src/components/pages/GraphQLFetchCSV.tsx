import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const GraphQLFetchCSV: FC = memo(() => {
  const navigate = useNavigate();
  const onClickHome = useCallback(() => {
    navigate("/");
  }, [navigate]);
  return (
    <>
      <p>Recoil-Relay FetchCheck</p>
      <button onClick={onClickHome}>Home</button>
    </>
  );
});
