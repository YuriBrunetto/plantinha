import { ChangeEvent, useEffect, useState } from 'react'
import { AddPhotoStyled, AddPhotoWrapper, PreviewStyled } from './styles'

const AddPhoto: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | undefined>()
  const [preview, setPreview] = useState<string | undefined>()

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory whenever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return
    }

    setSelectedFile(e.target.files[0])
  }
  return (
    <AddPhotoWrapper>
      <AddPhotoStyled htmlFor='add-photo'>Adicionar foto</AddPhotoStyled>
      <input
        type='file'
        id='add-photo'
        name='add-photo'
        onChange={onSelectFile}
      />
      {selectedFile && (
        <PreviewStyled>
          <img src={preview} alt='Nova foto' />
        </PreviewStyled>
      )}
    </AddPhotoWrapper>
  )
}

export default AddPhoto
