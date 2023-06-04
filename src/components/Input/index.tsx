import { FC, ChangeEvent } from 'react';

interface IProps {
    value: string;
    setValue: (value: string) => void;
}

const Input: FC<IProps> = ({ value, setValue }) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <input
            onChange={handleChange}
            type="text"
            placeholder="Input your name"
            className="text-sm h-10 border border-black/20 w-full rounded-lg px-2 focus:outline-none focus:border-black/100"
        />
    );
};

export default Input;
