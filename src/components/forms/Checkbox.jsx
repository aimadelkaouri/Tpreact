export function Checkbox( {checked, onChange, label, id}){
    return <div className="form-check">
        <input id={id} type="checkbox" name="" className="form-check-input"
        checked= {checked} onChange={(e) =>onChange(e.target.checked)} />
        <label htmlFor={id} className="form-check-label">{label}</label>
    </div>
}