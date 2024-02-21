export interface DropDownProps {
  data: ExploreBlock[]
  defaultValue: ExploreBlock
  onChange: (value: ExploreBlock) => void
  className?: string
}
