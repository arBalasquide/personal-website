import { Link, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { MySkill } from '../types';

const body = ({text, url}) => {
  if(!url){
    return (
      text
    )
  } else if(url !== "undefined"){
    return (
      <Link href={url} flexGrow={1} mr={2}>
        {text}
      </Link>
    )
  }
}

export function MyListItem({ text, icon, url }: MySkill) {
  return (
    <ListItem>
      <ListIcon as={icon} color="green.500"/>
      {body({text, url})}
    </ListItem>
  );
};

export default MyListItem