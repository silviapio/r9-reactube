import { TitleContainer } from "./SectionTitle.styles.js";

function SectionTitle({text, className}) {
    return (
        <TitleContainer className={className}>
            <h5>{text}</h5>
        </TitleContainer>
    );
}

export default SectionTitle;