export interface DropDownProps {
  data: { value: string | number; name: string }[];
  defaultValue: { value: string | number; name: string };
  onChange: (value: any) => void;
  className?: string;
}
  