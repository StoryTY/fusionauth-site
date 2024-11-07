import s from './TagsList.module.scss';
import { Tag } from './Tag';
import clsx from 'clsx';
import { WithSelected } from '../QuickstartGallery';

interface Props extends WithSelected {
  tags: string[],
  listClass?: string,
  mainColor?: string,
  invertedColor?: string,
}

export const TagsList = ({ tags, listClass, ...props }: Props) =>{
  console.log(props.selected)
return  <ul className={clsx(s.list, listClass)}>{
    tags.map((tag) =>
      <Tag name={tag} key={tag} {...props}/>)
  }</ul>
}
