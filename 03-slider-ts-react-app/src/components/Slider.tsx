import React, { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 10px;
  height: 200px;
  background-color: #ccc;
  position: relative;
  cursor: pointer;
`;
const SliderHandle = styled.div<{ position: number }>`
  width: 20px;
  height: 20px;
  background-color: #007bff;
  border-radius: 50%;
  position: absolute;
  bottom: ${(props) => props.position}%; // Виправлено тип
  left: -5px;
`;

const Image = styled.img<{ position: number }>`
  width: 100px;
  height: 100px;
  position: absolute;
  top: ${(props) => props.position}%; // Виправлено тип
  left: 20px;
`;

interface SliderProps {
  min: number; /* Мінімальне значення слайдера */
  max: number; /* Максимальне значення слайдера */
  step?: number; /* Крок для пересування повзунка */
  initialValue?: number; /* Початкове значення слайдера */
  onChange: (value: number) => void; /* Функція зміни значення слайдера */
}

const Slider: React.FC<SliderProps> = ({
  min,
  max,
  step = 1,
  initialValue = min,
  onChange,
}) => {
  
  // Створення стану для збереження поточного значення слайдера
  const [value, setValue] = useState(initialValue);

  // Обробник події зміни значення слайдера
  const handleChange = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const sliderRect = event.currentTarget.getBoundingClientRect();
    const y = event.clientY - sliderRect.top;
    // Обчислення відсоткового значення, де клікнуто на контейнері слайдера
    const percentage = (y / sliderRect.height) * 100;
    // Обчислення значення слайдера за допомогою відсоткового значення
    const calculatedValue = Math.round((percentage / 100) * (max - min) + min);
    // Оновлюємо стан слайдера та передаємо нове значення зовнішньому компоненту через функцію onChange
    setValue(calculatedValue);
    onChange(calculatedValue);
  };




  return (
    <SliderContainer>
      <SliderHandle position={(value - min) / (max - min) * 100} />
      <Image src="your-image-url.png" position={(value - min) / (max - min) * 100} alt="Slider Image" />
    </SliderContainer>
  );
};

export default Slider;
