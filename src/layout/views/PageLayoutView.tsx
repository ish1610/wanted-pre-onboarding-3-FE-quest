import styled from "@emotion/styled";

import Header from "../Header";
import Nav from "../Nav";

const PageLayoutContainer = styled.div`
  .page-layout {
    display: flex;
  }
`;

const PageLayoutView = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayoutContainer>
      <Header />
      <div className="page-layout">
        <Nav />
        {children}
      </div>
    </PageLayoutContainer>
  );
};

export default PageLayoutView;
