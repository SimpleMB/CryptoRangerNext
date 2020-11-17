import Image from 'next/image';

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = (props) => {
  const {width, height} = props;
  return (
    <Image src="/images/cryptorangerlogo.svg" alt="Crypto Ranger logo sign" width={width} height={height}/>
  );
}

export default Logo;