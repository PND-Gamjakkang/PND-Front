import * as S from './styles/RetroStyle.jsx';
import { useRef, useState } from 'react';

export default function Thumnail() {
    const [imgFile, setImgFile] = useState(null);
    const [imgPath, setImgPath] = useState(""); // 이미지 경로를 문자열로 저장하는 변수
    const imgRef = useRef(null);
    const MAX_IMAGE_SIZE_BYTES = 1024 * 1024 * 2; // db관리를 위해 사진의 크기를 제한한다

    const previewImage = () => {
        if (imgRef.current && imgRef.current.files) {
            const img = imgRef.current.files[0];
            if (img.size > MAX_IMAGE_SIZE_BYTES) {
                alert("최대 2MB까지 업로드 가능합니다.");
            }
            setImgFile(img);

            // 이미지 미리보기 기능
            const reader = new FileReader();
            reader.readAsDataURL(img);
            reader.onload = () => {
                // 이미지 로딩 후 Canvas로 크기 조정
                const imgElement = new Image();
                imgElement.src = reader.result;

                imgElement.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const MAX_WIDTH = 400;
                    const MAX_HEIGHT = 250;
                    let width = imgElement.width;
                    let height = imgElement.height;

                    // 크기 조정 비율 계산
                    if (width > height) {
                        if (width > MAX_WIDTH) {
                            height *= MAX_WIDTH / width;
                            width = MAX_WIDTH;
                        }
                    } else {
                        if (height > MAX_HEIGHT) {
                            width *= MAX_HEIGHT / height;
                            height = MAX_HEIGHT;
                        }
                    }

                    canvas.width = width;
                    canvas.height = height;

                    ctx.drawImage(imgElement, 0, 0, width, height);

                    const resizedImageUrl = canvas.toDataURL('image/png');
                    setImgPath(resizedImageUrl);
                };
            };
        }
    };

    return (
        <S.ThumnailContainer>
            <S.OptionParagraph>썸네일 설정</S.OptionParagraph>
            {/* htmlfor로 input태그와 연결시킨다 */}
            <S.ThumnailBox>
            <label htmlFor='photo'>
                <img
                    src={imgPath ? imgPath : 'images/upload-img-icon.png'}
                    alt='이미지 업로드'
                />
            </label>
            <input
                type='file'
                id='photo'
                name='photo'
                accept='.png, .jpeg, .jpg'
                onChange={previewImage}
                ref={imgRef}
            />
            </S.ThumnailBox>
        </S.ThumnailContainer>
    )
}