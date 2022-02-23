import SectionTitle from "../units/SectionTitle";
import { NoContentDiv } from "./NoContentFound.styles";

function NoContentFound({ text, titleClassName }) {
  return (
    <NoContentDiv>
      <SectionTitle text={text} className={titleClassName} />
    </NoContentDiv>
  );
}

export default NoContentFound;
