import React, { useState } from "react";
import { ExpandedTitle, Container, MinimalMenu, ExpandedMenu, ExpandedTitleContainer, ExpandedOption } from "./styles";
import { IoIosMenu, IoMdArrowDropdown } from "react-icons/io";
export default function Aside(props: any) {
  const [active, setAct] = useState(-1);
  const { nav } = props;

  const handleShowExpanded = (item: any) => {
    setAct(item === active ? -1 : item);
  };
  console.log(nav);
  return (
    <Container>
      <MinimalMenu>
        <IoIosMenu onClick={() => handleShowExpanded(active)} size={30} cursor="pointer" style={{ marginBottom: 30, marginRight: 5, marginLeft: 5 }} />
        {nav.map((item: any, index: number) => (
          <div
            key={index}
            onClick={() => handleShowExpanded(index)}
            style={{ borderLeft: active === index ? "5px solid #0093EE" : "", padding: " 0 5px", cursor: "pointer", marginBottom: 20 }}
          >
            {item.icon()}
          </div>
        ))}
      </MinimalMenu>
      {active >= 0 && (
        <ExpandedMenu>
          <ExpandedTitleContainer>
            <ExpandedTitle>{nav[active].title}</ExpandedTitle>
          </ExpandedTitleContainer>
          {nav[active].expanded.options.map((option: any, index: number) => (
            <ExpandedOption key={index}>
              {option.title} <IoMdArrowDropdown color="#fff" />
            </ExpandedOption>
          ))}
        </ExpandedMenu>
      )}
    </Container>
  );
}
