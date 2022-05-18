import Styled from '@components/SplitScreen/SplitScreen.style'

interface Props {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
  leftSize?: string;
  rightSize?: string;
  column?: boolean;
  wrap: string;
  noReverse?: boolean;
}

const SplitScreen = ({ leftChild, rightChild, leftSize, rightSize, column = false, wrap, noReverse = false }: Props) => {
  return (
    <Styled.Section column={column} wrap={wrap} noReverse={noReverse}>
      <Styled.Side size={leftSize || '50%'} wrap={wrap}>
        {leftChild}
      </Styled.Side>
      <Styled.Side size={rightSize || '50%'} wrap={wrap}>
        {rightChild}
      </Styled.Side>
    </Styled.Section>
  )
}

export default SplitScreen