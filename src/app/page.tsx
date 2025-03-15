import Search from "@/src/components/search";
import * as Styled from "./page.styled";

export default function Home() {
  return (
    <Styled.Page>
      <main>
        <h1>Start searching below</h1>
        <Search />
      </main>
    </Styled.Page>
  );
}
