import React from "react";
import { Header } from './Gallery/Header';
import {Filter} from './Filters/Filter'
import {Gallery} from './Gallery/Gallery'
import { Card } from './Gallery/Card/Card';
import s from './Gallery/Gallery.module.scss';
import { OrderedSet } from 'immutable';
import { UseStateProps } from './prelude';
import { useState } from 'react';
import { Consumer } from './prelude';
export type WithSelected = UseStateProps<OrderedSet<string>, 'selected'>;


interface Props extends WithSelected {
  selected: OrderedSet<string>,
  setSelected: Consumer<OrderedSet<string>>
}


/*
type CategoriesDTO = {
  _id: string,
  tags: string[]
}[];
*/
//const processCategories = (categories: CategoriesDTO): Categories => 
//  categories.reduce((acc, { _id, tags }) => ({ ...acc, [_id]: OrderedSet(tags) }), {});


export interface Doc {
  _id: string;
  tags: string[];
  title: string;
  language: string;
  description: string;
  codeRoot: string;
  icon: string;
}


export const QuickstartGallery = ({docs}) => {
  let tags = [];
  docs.forEach((app) => {
    app["tags"].forEach((tag) => {
      if (! tags.includes(tag)) {
        tags.push(tag)
    }})
  })

  //const categoryvar = processCategories(docs)
  const [selected, setSelected] = useState(OrderedSet<string>());

  console.log(selected)
return <>
  <main className={s.main}>
    <Filter tags={tags} selected={selected} setSelected={setSelected}/>
    <div className={s.spacer}/>
    <Gallery apps={docs} selected={selected} setSelected={setSelected}/>
  </main>
</>
}