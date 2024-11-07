import s from './Card.module.scss';
import { Header } from '../Card/Header';
import { WithSelected } from '../../QuickstartGallery';
import { CardInfo } from '../../apps';

export const Card = ({ title, description, tags, icon, codeRoot, selected, setSelected }: CardInfo & WithSelected) => {
console.log(tags)


for (const value of selected) {
  if (!tags.includes(value)) {
    return
  }
}

return <article className={s.cardImg} >
    <div className={s.overlay}>
      <Header  codeRoot={codeRoot} title={title} icon={icon} tags={tags} description={description} setSelected={setSelected} selected={selected}/>
    </div>
    
    
  </article>
}