
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MyInput
                type="text"
                placeholder="search..."
                onChange={e => setFilter({...filter, query: e.target.value})}
                value={filter.query}
            />
            <MySelect
                value={filter.select} 
                onChange={selectedSort => setFilter({...filter, select: selectedSort})}
                defaultValue="SORT"
                options={[
                    {value: "title", name: "Name"},
                    {value: "body", name: "body"},
                    {value: "", name: "id"},
                ]}
            />
      </div>
    );
}

export default PostFilter;