
export type Props = {
    value: string,
    onChange: (value: string) => void
}

export const Input = ({value, onChange}: Props) => {
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value)
    }
    return <input value={value} onChange={handleChange} />
}