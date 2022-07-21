import { FC, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Home: FC = memo(() => {
  const navigate = useNavigate();
  const onClickFetchCSVCheck = useCallback(() => {
    navigate("/fetchcsv");
  }, [navigate]);
  return (
    <>
      <p>Recoil-Relay FetchCheck</p>
      <button onClick={onClickFetchCSVCheck}>GraphQL CSV</button>
    </>
  );
});
