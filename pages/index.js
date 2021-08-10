import "core-js";
import Head from "next/head";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";

const Box = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: spin 2s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`;

function CoolComponent({ className, style, ...rest }) {
  return (
    <div className={className} style={style}>
      Cool
    </div>
  );
}

const StyledCoolComponent = styled(CoolComponent)`
  background-color: tomato;
`;

const anotherClass = css`
  color: blue;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>
      <Box className={anotherClass}>
        <StyledCoolComponent />
      </Box>
    </>
  );
}
