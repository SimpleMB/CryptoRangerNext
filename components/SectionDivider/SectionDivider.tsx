import styles from './SectionDivider.module.scss';

interface SectionDividerProps {
  side: 'left' | 'right' | 'center';
}
const SectionDivider: React.FC<SectionDividerProps> = (props) => {
  const { side } = props;
  const choosenSide = side.charAt(0).toUpperCase() + side.slice(1);
  return (
    <div
      className={[
        styles[`sectionDivider${choosenSide}`],
        styles.sectionDivider,
      ].join(' ')}
    >
      <div></div>
    </div>
  );
};

export default SectionDivider;
