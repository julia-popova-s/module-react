import { BtnOrder } from './BtnOrder.styled';
import { FC } from 'react';

type ButtonProps = {
  name: string;
  view?: string;
  form?: string;
  handleClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  classNames?: string;
};

export const ButtonOrder: FC<ButtonProps> = ({
  view,
  name,
  type,
  classNames,
  handleClick,
  form,
}) => {
  const style = view === 'order' ? 'btn-order' : 'btn-exit';

  return (
    <BtnOrder className={classNames}>
      <button onClick={handleClick} type={type} className={style} form={form}>
        {name}
      </button>
    </BtnOrder>
  );
};
