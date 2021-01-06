import firstLetterToUpperCase from '../../utils/firstLetterUppercase';
import styles from './SectionDivider.module.scss';

interface Props {
  side: 'left' | 'right' | 'center';
}
const SectionDivider: React.FC<Props> = (props) => {
  const { side } = props;
  const choosenSide = firstLetterToUpperCase(side);
  return (
    <div
      className={[
        styles[`sectionDivider${choosenSide}`],
        styles.sectionDivider,
      ].join(' ')}
    >
      <div />
    </div>
  );
};

export default SectionDivider;
