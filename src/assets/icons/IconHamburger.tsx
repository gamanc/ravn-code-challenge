import { Icon } from "@chakra-ui/react";

const IconHamburger = (props: any) => {
  return (
    <Icon viewBox="0 0 18 16" {...props}>
      <path
        d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default IconHamburger;
