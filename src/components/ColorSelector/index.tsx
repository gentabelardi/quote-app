`use client`
import React, { useState } from "react";

type ColorOption = {
    value: string;
};

const colorOptions: ColorOption[] = [
    { value: "#EAE0E1" },
    { value: "#ffff" },
    { value: "#EDC68A" },
    { value: "#90A592" },
    { value: "#D4CEC2" }
];

const ColorSelector: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState<string>("");

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div className="flex flex-row space-x-2">
            {colorOptions.map((color) => (
                <label
                    key={color.value}
                    style={{ backgroundColor: `${color.value}` }}
                    className={`rounded-full ${selectedColor === color.value ? "border-black" : "border-black/20"} h-[55px] w-[55px] cursor-pointer flex items-center justify-center border `}
                >
                    <input
                        type="radio"
                        value={color.value}
                        checked={selectedColor === color.value}
                        onChange={handleColorChange}
                        className="sr-only"
                    />
                </label>
            ))}
        </div>
    );
};

export default ColorSelector;
