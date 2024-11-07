import { Header } from './Header';
import { Card } from './Card/Card';
import s from './Gallery.module.scss';
import { WithSelected } from '../QuickstartGallery';


export const Gallery = ({ ...props }: Props)=> {
  const sorted = props.selected.sort();
  const apps = props.apps
  let tagapps = []

  if (sorted.size !== 0) {
    sorted.forEach((tag) => {
      apps.forEach((app) => {
        if (app.tags.includes(tag)) {
          tagapps.push(app)
       }
      })
    })
  } else {
    tagapps = apps;
  }
  

  return <section>
    <Header numApps={tagapps.length} {...props}/>
    <div className={s.cards}>
      {tagapps.map((card, i) =>
        <Card {...card} key={i} {...props}/>)}
    </div>
  </section>;
}
