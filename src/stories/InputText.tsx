import './inputText.css';

interface InputTextProps {
  placeholder?: string;
  onChange?: () => void;
}

export const InputText = ({
  placeholder = '...',
  ...props
}: InputTextProps) => {
  return (
    <input type="text" name="" id="" placeholder={placeholder} {...props} />
  );
};
