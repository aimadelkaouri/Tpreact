export function Input ({placeholder, value, onChange}) {
    return <div>
        <input type="text" name="" className="form-control" value={value} 
        placeholder={placeholder} onChange={(e)=> onChange(e.target.value)} />
    </div>
}