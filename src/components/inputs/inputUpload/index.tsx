import React from 'react'
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

import './styles.scss'
import { useAppDispatch, useAppSelector } from '../../../hooks/usePreTypedHooks';
import { setCarImage } from '../../../redux/carSetting/carActionCreators';

export default function InputUpload() {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state)
  const imageName = state.carSetting.image?.originalname

  const handleChange = async ({ file }: any) => {
    const imageBase64 = await getBase64(file.originFileObj)

    dispatch(setCarImage({
      size: file.size,
      originalname: file.name,
      mimetype: file.type,
      path: imageBase64 as string
    }))
  }

  function getBase64(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  return (
    <div className='input-upload'>
      <div className='input-upload__input'>
        <span>
          {imageName ?? 'Выберите файл...'}
        </span>
      </div>

      <ImgCrop rotate aspect={2.1/1}>
        <Upload
          listType="picture"
          onChange={handleChange}
          className='input-upload__button'
        >
          Обзор
        </Upload>
      </ImgCrop>
    </div>
  )
}
