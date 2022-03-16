import React from 'react'
import { useAsyncDebounce } from 'react-table/dist/react-table.development';

export default function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}) {

    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter)
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 300);
  return (
        <SearchContainer>
            <SearchText>Search:</SearchText>
            <Input value={value || ""} onChange={(e) =>{
                setValue(e.target.value);
                onChange(e.target.value);
            }} placeholder={`${count} records...`}/>
        </SearchContainer>
    )
}