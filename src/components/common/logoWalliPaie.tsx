import { ReactImageProps } from '../../types/react.props.type';
import logoImage from './../../assets/images/walliPaieLogo.jpeg';

export function LogoWalliPaieImage(props: Omit<ReactImageProps, 'src'>) {
  return <img src={logoImage} {...props} />
}
