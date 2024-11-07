import s from './Selector.module.scss';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { UseStateProps } from '../prelude';
import { OrderedSet } from 'immutable';
import { Categories } from '../tags';
import { Bubble } from '../Bubble/Bubble';
import { Consumer } from '../prelude';

interface Props extends UseStateProps<string, 'currCategory'> {
    categories: Categories,
    selected: OrderedSet<string>,
    setSelected: Consumer<OrderedSet<string>>,
    tags: string[]
  }

export const Selector = ({ tags, selected, setSelected, currCategory, setCurrCategory }: Props) => {
  const borderRef = useRef<HTMLDivElement>(null!);
  const [selectedRef, setSelectedRef] = useState<HTMLElement>();

  const [selectedStyle, setSelectedStyle] = useState({ transform: 'scaleX(0)', left: 0 });
  const categoryNames = tags;
  
  const onClick = (tag: string) => (e: { currentTarget: HTMLElement }) => {
    setSelectedRef(e.currentTarget);
    setCurrCategory(tag);
    setSelected((selected) = selected.has(tag) ? selected.delete(tag) : selected.add(tag));
  }
  
  
  useEffect(() => {
    // Temporary, I swear
    const actualSelectedRef = selectedRef ?? document.querySelector<HTMLElement>(`.${s.list} li button`)!;
    console.log(actualSelectedRef)
    console.log(borderRef.current)
    setSelectedStyle(calcUnderline(actualSelectedRef, borderRef.current));
  }, [selected, selectedRef]);

  return <div className={s.wrapper}>
    <header className={s.header}>
      <i className={s.icon}/>
      <ul className={s.list}>{
        categoryNames.map((category) => {
          
          return <li key={category} className={clsx(category === currCategory && s.selected)}>
            <button onClick={onClick(category)}>
              <span>{category}</span>
            </button>
          </li>;
        })
      }</ul>
    </header>
    <div className={s.border} ref={borderRef}>
      <div className={s.borderSelected} style={selectedStyle}/>
    </div>
  </div>;
}

const calcUnderline = (selected: HTMLElement, border: HTMLElement) => ({
  transform: `scaleX(${selected.offsetWidth})`,
  left: selected.offsetLeft - border.offsetLeft,
});
