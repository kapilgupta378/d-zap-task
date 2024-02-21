import React, { useState, useEffect } from 'react'

import { PromptConformModalProps } from './interface'

import Typography from '@/design-systems/Atoms/Typography'
import Input from '@/design-systems/Atoms/Input'
import Button from '@/design-systems/Atoms/Button'
import Modal from '@/design-systems/Atoms/Modal'
import { useRouter } from 'next/navigation'

const PromptConformModal: React.FC<PromptConformModalProps> = ({ open, label, setIsModalOpen, className, prompt }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(open)
  const router = useRouter()

  useEffect(() => {
    setModalOpen(open)

    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleConfirm = () => {
    router.push('/select-nft')
  }
  return (
    <>
      <Modal handleClose={handleClose} label={label} open={isModalOpen}>
        <div className={`${className} w-full p-[24px]`}>
          <Typography className="text-center" size="h4">
            Generate NFT Images
          </Typography>
          <Typography className="mt-3 text-center" size="body">
            Select your favorite wallet to log in.
          </Typography>
          <div className="mt-4">
            <Input variant="secondary" value={prompt} />
            <Button
              onClick={handleConfirm}
              variant="solid"
              color="primary"
              className="mb-[10px] mt-4 bg-black text-white"
              fullWidth={true}
            >
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PromptConformModal
