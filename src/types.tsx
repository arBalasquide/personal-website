import {
  IconProps,
  ComponentWithAs
} from '@chakra-ui/react';

export type MySkill = {
  text: string;
  icon: ComponentWithAs<"svg", IconProps>;
  url?: string;
};
