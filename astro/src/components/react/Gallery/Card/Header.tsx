import s from './Header.module.scss'
import { TagsList } from '../../Tags/TagsList';
import { WithSelected } from '../../QuickstartGallery';

interface Props extends WithSelected {
  title: string,
  tags: string[],
  description: string,
  icon: string,
  codeRoot: string
}

const handleGithubClick = (codeRoot:string) => {
  const rawPrefix = "https://raw.githubusercontent.com/";
  const repoPrefix = "https://github.com/";
  const modifiedUrl:string = codeRoot.replace(rawPrefix, repoPrefix).replace('/main', '');
  window.open(modifiedUrl, '_blank', 'noopener,noreferrer');
};

const width=40

export const Header = ({ title, codeRoot, ...props }: Props) =>
  
  <header className={s.header}>
    <button className={s.tryItNow} onClick={() => handleGithubClick(codeRoot)}><h1 className={s.h3}>{title}</h1></button>
    <TagsList listClass={s.list} {...props} mainColor="white" invertedColor="rgb(32, 41, 58)"/>
    <span className={s.h3}><img width={width} alt={title} src={`https://fusionauth.io${props.icon}`} /> {props.description}</span>
  </header>
