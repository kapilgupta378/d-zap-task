export interface PromptConformModalProps {
  open: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>> | ((turnTo: boolean) => void)
  className?: string
  label?: string | undefined
  prompt: string
}
